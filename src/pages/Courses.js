import React from "react";
import { courses } from "../data/coursesData";
import CourseCard from "../components/CourseCard";

const Courses = () => {
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
