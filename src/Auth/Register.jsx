import React from "react";

// Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faMobile, faUser } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Register() {
  return (
    <div>
      <h3 className="text-center m-0">Create an Account</h3>
      <p className="text-center text-secondary">Please fill in the details to register</p>
      <form className="mx-5">
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
                className="form-control"
                placeholder="Enter your fullname"
                id="fullname"
                aria-label="Fullname"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                id="username"
                aria-label="Username"
                aria-describedby="basic-addon1"
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
              />
            </div>
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <FontAwesomeIcon icon={faMobile} />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Phone Number"
                id="phoneNumber"
                aria-label="Phone Number"
                aria-describedby="basic-addon1"
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
              />
            </div>
          </div>
        </div>
        <div className="w-100 d-flex justify-content-center">
          <button type="submit" className="btn mt-1 btn-primary w-50 mx-auto">
            Sign up
          </button>
        </div>
        <div className="social mt-3">
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-sm btn-outline-primary">
              <i className="fab fa-google me-3"></i> Sign up with Google
            </button>
          </div>
        </div>
        <p className="text-center mt-3">
          Already have an account? <a href="/auth/login">Sign in here</a>
        </p>
      </form>
    </div>
  );
}

export default Register;
