import React from "react";

const About = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-4">About CyLearn</h1>

      <div className="mb-4">
        <p className="text-muted">
          CyLearn is an online learning platform developed to help learners
          build practical cybersecurity skills. The platform covers both
          offensive security (Red Team) and defensive security (Blue Team),
          offering a simple and clear structure for exploring different areas of
          the field. The goal is to make learning easier by providing organized
          topics, course pages, and an accessible interface.
        </p>

        <p className="text-muted">
          The platform focuses on essential cybersecurity concepts such as
          penetration testing, Linux fundamentals, SIEM operations, and web
          application vulnerabilities. Each course includes a set of lessons
          with video explanations to help students gain a better understanding
          of the material.
        </p>
      </div>

      <h3 className="mt-5 mb-3">The Team</h3>

      <div className="cy-card p-4">
        <p className="text-muted mb-2">
          This project was created by a team:
        </p>

        <ul className="text-muted">
          <li>
            <strong>Omar Saghir</strong>
          </li>
          <li>
            <strong>Abed Al Kader Manaa</strong>
          </li>
        </ul>

        <p className="text-muted mt-3 mb-0">
          The team works together to plan features, refine the layout, and make
          sure the platform stays simple, clear, and easy to use.
        </p>
      </div>
    </div>
  );
};

export default About;
