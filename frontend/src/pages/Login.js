import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"

const Login = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userType = params.get("type") || "client"; 
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password
      });

      const { token, role } = response.data;

      if (token) {
        localStorage.setItem("authToken", token);
        localStorage.setItem("userRole", role);
        toast.success("Login successful");
        navigate(`/dashboard?type=${userType}`);
      } else {
        toast.error("Login failed. Please try again");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid credentials");
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
      <ToastContainer />
    </div>
  );
};

export default Login;
