import React from "react";
import { useLocation } from "react-router-dom";

const Register = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userType = params.get("type") || "client"; // Default to client

  return (
    <div className="register-page">
      <div className="register-container">
        <h1>{userType === "vendor" ? "Vendor Registration" : "Client Registration"}</h1>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Create Password" required />
          <input type="password" placeholder="Confirm Password" required />
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
