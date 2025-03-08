import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaStar, FaComments, FaClipboardList, FaHeart, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div className="sidebar">
      <h3>EventCase</h3>
      <ul>
        <li>
          <Link to="/dashboard/manage-bookings">
            <FaCalendarAlt /> Manage Bookings
          </Link>
        </li>
        <li>
          <Link to="/dashboard/browse">
            <FaClipboardList /> Browse Venues & Vendors
          </Link>
        </li>
        <li>
          <Link to="/dashboard/messages">
            <FaComments /> Chat with Vendors
          </Link>
        </li>
        <li>
          <Link to="/dashboard/wishlist">
            <FaHeart /> Wishlist
          </Link>
        </li>
        <li>
          <Link to="/dashboard/profile">
            <FaUser /> Profile & Settings
          </Link>
        </li>
          <button onClick={handleLogout} className="logout">
            <FaSignOutAlt /> Logout
          </button>
      </ul>
    </div>
  );
};

export default Sidebar;
