import React from "react";
import { useState } from "react";
import axios from "axios";


// Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Register() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        "https://api.ebaydropshipping.com/v1/auth/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setMessage(res.data.message || "Registration successful");
    } catch (err) {
      const msg = err.response?.data?.message || "Registration failed";
      setMessage(msg);
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
      {message && <p className="alert alert-info">{message}</p>}
      <form onSubmit={handleSubmit} className="mx-5">
        <div className="row justify-content-between">
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="fullname" className="form-label">
              Full Name
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your fullname"
                id="fullname"
                aria-label="Fullname"
                aria-describedby="basic-addon1"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                id="email"
                aria-label="Email"
                aria-describedby="basic-addon1"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                id="password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm your password"
                id="confirmPassword"
                aria-label="Confirm Password"
                aria-describedby="basic-addon1"
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="w-100 d-flex justify-content-center">
          <button
            // onClick={() => navigate("/dashboard")}
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
