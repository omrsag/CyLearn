import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="cy-card p-3 h-100 d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="mb-0">{course.title}</h5>

        <div className="d-flex gap-1">
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

      <p className="text-muted small flex-grow-1">{course.description}</p>

      <div className="d-flex justify-content-end mt-2">
        <Link
          to={`/course/${course.id}`}
          className="btn btn-sm btn-outline-info"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
