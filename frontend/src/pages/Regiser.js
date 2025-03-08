import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userType = params.get("type") || "client";
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async(e) => {
    e.preventDefault();

    if(password != confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
        phone,
        userType 
      });

      localStorage.setItem("authToken", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
    }
  }

  return (
    <div className="register-page">
      <div className="register-container">
        <h1>{userType === "vendor" ? "Vendor Registration" : "Client Registration"}</h1>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleRegister}>
          <input 
            type="text" 
            placeholder="Full Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <input 
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Create Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <input 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required 
          />
          <button type="submit">Register</button>
        </form>
        <p className="switch-text">
          Already have an account? <a href={`/login?type=${userType}`}>Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
