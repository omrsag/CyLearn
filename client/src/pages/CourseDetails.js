import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CourseDetails = () => {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [selectedLessonId, setSelectedLessonId] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/courses/" + id)
      .then((res) => {
        setCourse(res.data);

        if (res.data.lessons && res.data.lessons.length > 0) {
          setSelectedLessonId(res.data.lessons[0].id);
        }

        const userId = localStorage.getItem("userId");
        if (userId) {
          axios
            .get("http://localhost:8080/progress/" + userId)
            .then((r) => setCompletedLessons(r.data.map((x) => x.lesson_id)))
            .catch((err) => console.log(err));
        }
      })
      .catch(() => setCourse(null));
  }, [id]);

  if (!course) {
    return (
      <div className="container py-5">
        <h1 className="mb-3">Course Not Found</h1>
        <Link to="/courses" className="btn btn-outline-info">
          Back to Courses
        </Link>
      </div>
    );
  }

  const selectedLesson =
    course.lessons && course.lessons.find((l) => l.id === selectedLessonId);

  return (
    <div className="container py-5">
      <Link to="/courses" className="btn btn-sm btn-outline-secondary mb-3">
        ← Back to Courses
      </Link>

      <div className="cy-card p-4 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 className="h3 mb-0">{course.title}</h1>

          <div className="d-flex gap-2">
            {course.team === "Red" && (
              <span className="badge tag-red">Red Team</span>
            )}

            {course.team === "Blue" && (
              <span className="badge tag-blue">Blue Team</span>
            )}

            {course.team === "Both" && (
              <>
                <span className="badge tag-red">Red Team</span>
                <span className="badge tag-blue">Blue Team</span>
              </>
            )}
          </div>
        </div>

        <p className="text-muted mb-2">{course.description}</p>

        <p className="mb-0">
          <strong>Level:</strong> {course.level}
        </p>
      </div>

      <div className="row g-4">
        <div className="col-lg-4">
          <div className="cy-card p-3 h-100">
            <h5 className="mb-3">Course Content</h5>

            {course.lessons && course.lessons.length > 0 ? (
              <ul className="list-group list-group-flush lesson-list">
                {course.lessons.map((lesson) => (
                  <li
                    key={lesson.id}
                    className={
                      "list-group-item lesson-item" +
                      (lesson.id === selectedLessonId ? " active" : "")
                    }
                    onClick={() => setSelectedLessonId(lesson.id)}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <span>{lesson.title}</span>
                      {completedLessons.includes(lesson.id) && (
                        <span className="badge bg-success">Done</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted small mb-0">
                Lessons for this course will be added later.
              </p>
            )}
          </div>
        </div>

        <div className="col-lg-8">
          <div className="cy-card p-3 h-100 d-flex flex-column">
            <h5 className="mb-3">
              {selectedLesson ? selectedLesson.title : "Lesson Preview"}
            </h5>

            {selectedLesson && (
              <button
                className="btn btn-sm btn-outline-info mb-3"
                onClick={async () => {
                  const userId = localStorage.getItem("userId");
                  if (!userId) {
                    alert("Please login first.");
                    return;
                  }

                  try {
                    await axios.post("http://localhost:8080/progress", {
                      userId,
                      lessonId: selectedLesson.id,
                      courseId: course.id,
                    });

                    setCompletedLessons((prev) =>
                      prev.includes(selectedLesson.id)
                        ? prev
                        : [...prev, selectedLesson.id]
                    );
                  } catch (err) {
                    console.log(err);
                  }
                }}
              >
                {completedLessons.includes(selectedLesson.id)
                  ? "Completed ✅"
                  : "Mark as Completed"}
              </button>
            )}

            {selectedLesson ? (
              <div className="ratio ratio-16x9 flex-grow-1">
                <iframe
                  src={selectedLesson.videoUrl}
                  title={selectedLesson.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: "12px", border: "0" }}
                />
              </div>
            ) : (
              <div className="flex-grow-1 d-flex align-items-center justify-content-center text-muted">
                No lesson selected.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
