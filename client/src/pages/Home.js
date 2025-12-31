import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [featuredCourses, setFeaturedCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/courses")
      .then((res) => {
        setFeaturedCourses(res.data.slice(0, 3));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span className="badge bg-dark hero-badge mb-3">
                CYBERSECURITY • RED TEAM • BLUE TEAM
              </span>

              <h1 className="hero-title mb-3">
                Secure Your Knowledge with{" "}
                <span style={{ color: "#8B0000" }}>Cy</span>
                <span>Learn</span>
              </h1>

              <p className="hero-subtitle mb-4">
                Learn offensive (Red Team) and defensive (Blue Team)
                cybersecurity skills through structured, hands-on learning paths.
              </p>

              <div className="d-flex flex-wrap gap-2 mb-4">
                <span className="badge tag-red">Red Team</span>
                <span className="badge tag-blue">Blue Team</span>
                <span className="badge bg-secondary">Beginner Friendly</span>
              </div>

              <div className="d-flex flex-wrap gap-3">
                <Link to="/courses" className="btn btn-info">
                  Explore Courses
                </Link>
                <Link to="/about" className="btn btn-outline-light">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="cy-card p-4">
                <h5 className="mb-3">Why CyLearn?</h5>
                <ul className="mb-0 small">
                  <li>Focus on real cyber skills, not just theory.</li>
                  <li>Red Team vs Blue Team mindset.</li>
                  <li>Clear learning paths for beginners and advanced learners.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="h4 mb-0">Featured Courses</h2>
            <Link to="/courses" className="btn btn-sm btn-outline-info">
              View All
            </Link>
          </div>

          <div className="row g-4">
            {featuredCourses.map((course) => (
              <div key={course.id} className="col-md-4">
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

                  <p className="text-muted small flex-grow-1">
                    {course.description}
                  </p>

                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <span className="badge bg-dark">{course.level}</span>
                    <Link
                      to={`/course/${course.id}`}
                      className="btn btn-sm btn-outline-info"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
