const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ===== MySQL Connection =====
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // ضع باسورد MySQL إن وجد
  database: "cylearn_db",
});

db.connect((err) => {
  if (err) {
    console.log("MySQL connection failed:", err);
  } else {
    console.log("MySQL connected successfully");
  }
});

// ===== Login (يرجع userId) =====
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT id, name, email FROM users WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, result) => {
    if (err) return res.json({ success: false, message: "DB error", error: err });

    if (result.length > 0) {
      return res.json({
        success: true,
        message: "Login successful",
        user: result[0],
      });
    } else {
      return res.json({ success: false, message: "Invalid credentials" });
    }
  });
});

// ===== Signup (ينشئ مستخدم في DB) =====
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.json({ success: false, message: "Please fill all fields." });
  }

  const checkSql = "SELECT * FROM users WHERE email = ?";
  db.query(checkSql, [email], (err, result) => {
    if (err) return res.json({ success: false, message: "DB error", error: err });

    if (result.length > 0) {
      return res.json({ success: false, message: "Email already exists." });
    }

    const insertSql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(insertSql, [name, email, password], (err2) => {
      if (err2) return res.json({ success: false, message: "Signup failed", error: err2 });

      return res.json({ success: true, message: "Account created successfully." });
    });
  });
});

// ===== Courses =====

// GET all courses
app.get("/courses", (req, res) => {
  const sql = "SELECT * FROM courses";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// GET one course + lessons
app.get("/courses/:id", (req, res) => {
  const courseId = req.params.id;

  const qCourse = "SELECT * FROM courses WHERE id = ?";
  db.query(qCourse, [courseId], (err, courseRows) => {
    if (err) return res.json(err);
    if (courseRows.length === 0) return res.status(404).json({ message: "Course not found" });

    const course = courseRows[0];

    const qLessons = "SELECT * FROM lessons WHERE course_id = ?";
    db.query(qLessons, [courseId], (err2, lessonRows) => {
      if (err2) return res.json(err2);

      course.lessons = lessonRows.map((l) => ({
        id: l.id,
        title: l.title,
        videoUrl: l.videoUrl,
      }));

      return res.json(course);
    });
  });
});

// ===== Progress =====

// GET all completed lesson ids for user
app.get("/progress/:userId", (req, res) => {
  const userId = req.params.userId;

  const q = "SELECT lesson_id FROM progress WHERE user_id = ?";
  db.query(q, [userId], (err, rows) => {
    if (err) return res.json(err);
    return res.json(rows); // [{lesson_id:'wa-1'}, ...]
  });
});

// POST mark lesson as completed
app.post("/progress", (req, res) => {
  const { userId, lessonId, courseId } = req.body;

  if (!userId || !lessonId || !courseId) {
    return res.json({ success: false, message: "Missing data" });
  }

  const q = "INSERT INTO progress (user_id, lesson_id, course_id) VALUES (?, ?, ?)";
  db.query(q, [userId, lessonId, courseId], (err) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.json({ success: true, message: "Already completed" });
      }
      return res.json({ success: false, message: "DB error", error: err });
    }

    return res.json({ success: true, message: "Marked as completed" });
  });
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server running on port " + PORT));
