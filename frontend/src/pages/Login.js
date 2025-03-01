import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userType = params.get("type") || "client"; // Default to client
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>{userType === "vendor" ? "Vendor Login" : "Client Login"}</h1>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter your password" required />
          <button type="submit">Login</button>
        </form>
        <p className="switch-text">
          {userType === "client" ? (
            <a href="/login?type=vendor">Login as Vendor</a>
          ) : (
            <a href="/login?type=client">Login as Client</a>
          )}
        </p>
        <p className="register-text">
          New user?{" "}
          <span onClick={() => navigate(`/register?type=${userType}`)}>
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
