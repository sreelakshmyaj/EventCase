import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaStar, FaComments, FaClipboardList, FaHeart, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
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
        <li className="logout">
          <Link to="/logout">
            <FaSignOutAlt /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
