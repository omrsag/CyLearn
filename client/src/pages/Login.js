import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (mode === "login") {
      try {
        const res = await axios.post("http://localhost:8080/login", {
          email,
          password,
        });

        if (res.data.success && res.data.user) {
          localStorage.setItem("userId", res.data.user.id);
        }

        setMessage(res.data.message);
      } catch (e) {
        setMessage("Server error.");
      }
    }

    if (mode === "signup") {
      try {
        const res = await axios.post("http://localhost:8080/signup", {
          name,
          email,
          password,
        });

        setMessage(res.data.message);
      } catch (e) {
        setMessage("Server error.");
      }
    }
  };

  return (
    <div className="container py-5">
      <h1 className="mb-3">{mode === "login" ? "Login" : "Sign Up"}</h1>
      <p className="text-muted mb-4">
        {mode === "login"
          ? "Enter your email and password to access your account."
          : "Create a new account by filling the form below."}
      </p>

      <div className="row">
        <div className="col-lg-5">
          <form className="cy-card p-4" onSubmit={handleSubmit}>
            {mode === "signup" && (
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  className="form-control"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                />
              </div>
            )}

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                className="form-control"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
              />
            </div>

            <button type="submit" className="btn btn-info w-100 mb-2">
              {mode === "login" ? "Login" : "Sign Up"}
            </button>

            {message && <p className="text-muted small mt-2 mb-0">{message}</p>}

            <div className="text-center mt-3">
              {mode === "login" ? (
                <p className="text-muted small">
                  Don't have an account?{" "}
                  <span
                    className="text-info"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setMode("signup");
                      setMessage("");
                    }}
                  >
                    Sign Up
                  </span>
                </p>
              ) : (
                <p className="text-muted small">
                  Already have an account?{" "}
                  <span
                    className="text-info"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setMode("login");
                      setMessage("");
                    }}
                  >
                    Login
                  </span>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
