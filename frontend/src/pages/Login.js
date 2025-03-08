import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userType = params.get("type") || "client"; 
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("authToken", "mockToken"); 
      navigate(`/dashboard?type=${userType}`);
    } else {
      alert("Enter valid credentials");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>{userType === "vendor" ? "Vendor Login" : "Client Login"}</h1>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
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
          New user? <a href={`/register?type=${userType}`}>Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
