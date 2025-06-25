import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setErrors({});

    try {
      const res = await axios.post(
        "https://autosync.site/api/auth/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setMessage(
        res.data.message || "Registration successful. Check your email."
      );
      setTimeout(() => navigate("/onboarding"), 2000);
    } catch (err) {
      if (err.response?.status === 422) {
        setErrors(err.response.data.errors || {});
        setMessage(err.response.data.message || "Validation failed.");
      } else {
        setMessage("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3 className="text-center m-0">Create an Account</h3>
      <p className="text-center text-secondary">
        Please fill in the details to register
      </p>

      {message && (
        <p className="alert alert-info text-center p-1 mt-2 w-50 mx-auto">
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="mx-5">
        <div className="row justify-content-between">
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="fullname" className="form-label">
              Full Name
            </label>
            <div className="input-group mb-1">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your fullname"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            {errors.name && (
              <small className="text-danger">{errors.name[0]}</small>
            )}
          </div>

          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <div className="input-group mb-1">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            {errors.email && (
              <small className="text-danger">{errors.email[0]}</small>
            )}
          </div>

          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-group mb-1">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            {errors.password && (
              <small className="text-danger">{errors.password[0]}</small>
            )}
          </div>

          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <div className="input-group mb-1">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type="password"
                name="password_confirmation"
                className="form-control"
                placeholder="Confirm your password"
                value={formData.password_confirmation}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="w-100 d-flex justify-content-center">
          <button
            type="submit"
            disabled={loading}
            className="btn mt-1 btn-primary w-50 mx-auto"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </div>

        <p className="text-center mt-3">
          Already have an account? <a href="/auth/login">Sign in here</a>
        </p>
      </form>
    </div>
  );
}

export default Register;
