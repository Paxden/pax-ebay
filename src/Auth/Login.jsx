import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Components
import ForgetPasswordModal from "./ForgetPasswordModal";

function Login() {
  const navigate = useNavigate();

  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "https://api.ebaydropshipping.com/v1/auth/login",
        {
          email,
          password,
          remember_me: rememberMe,
        }
      );

      const { token, user } = res.data.data;
      localStorage.setItem("token", token); // Store token
      alert(`Welcome back, ${user.name}!`);
      navigate("/dashboard"); // Redirect to dashboard
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3 className="text-center m-0">Welcome Back</h3>
      <p className="text-center text-secondary">Please login to your account</p>

      {error && <div className="alert text-center p-1 mt-2 alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mt-2 d-flex gap-5 align-items-center">
          <div className="remember d-flex align-items-center gap-1">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <ForgetPasswordModal />
        </div>

        <button
          type="submit"
          className="btn mt-3 btn-primary w-100"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>

        <p className="text-center mt-3">
          Don't have an account? <a href="/auth/register">Sign up here</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
