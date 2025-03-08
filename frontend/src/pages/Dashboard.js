import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaUserTie, FaClipboardList, FaCommentsDollar } from "react-icons/fa";
import Chart from "../components/Chart";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div className="dashboard-content">
      <div className="stats-container">
        <div className="stat-card">
          <FaCalendarAlt className="icon" />
          <h2>10</h2>
          <p>Total Events Created</p>
        </div>

        <div className="stat-card">
          <FaUserTie className="icon" />
          <h2>5</h2>
          <p>Vendors Hired</p>
        </div>

        <div className="stat-card">
          <FaClipboardList className="icon" />
          <h2>3</h2>
          <p>Pending Requests</p>
        </div>

        <div className="stat-card">
          <FaCommentsDollar className="icon" />
          <h2>$5,000</h2>
          <p>Budget Utilization</p>
        </div>
      </div>

      <Chart />

      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <ul>
          <li>-&gt; You booked a decorator for Wedding Event.</li>
          <li>-&gt;Upcoming event: Birthday Party on March 10.</li>
          <li>-&gt;New message from Catering Vendor.</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
