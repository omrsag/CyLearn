import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { courses } from "../data/coursesData";

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  const [selectedLessonId, setSelectedLessonId] = useState(
    course && course.lessons && course.lessons.length > 0
      ? course.lessons[0].id
      : null
  );

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
                    {lesson.title}
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
