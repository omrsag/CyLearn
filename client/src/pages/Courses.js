import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/courses")
      .then((res) => setCourses(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container py-5">
      <h1 className="mb-4">Courses</h1>

      <div className="row g-4">
        {courses.map((course) => (
          <div key={course.id} className="col-md-6 col-lg-4">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
