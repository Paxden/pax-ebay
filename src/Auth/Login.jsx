import React from "react";

import { useNavigate } from "react-router-dom";

// Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Components
import ForgetPasswordModal from "./ForgetPasswordModal";

function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <h3 className="text-center m-0">Welcome Back</h3>
      <p className="text-center text-secondary">Please login to your account</p>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <FontAwesomeIcon icon={faUser} />
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
        <div className="mb-3">
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
        <div className=" mt-2 d-flex gap-5 align-items-center">
          <div className="remember d-flex align-items-center gap-1">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me </label>
          </div>
          <ForgetPasswordModal />
        </div>
        <button
          onClick={() => navigate("/dashboard")}
          type="submit"
          className="btn mt-2 btn-primary w-100"
        >
          Sign in
        </button>

        <p className="text-center mt-3">
          Don't have an account? <a href="/auth/register">Sign up here</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
