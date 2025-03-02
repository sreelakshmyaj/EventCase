import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaStar, FaComments, FaClipboardList, FaHeart, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>EventCase</h3>
      <ul>
        <li>
          <Link to="/invite-vendors">
            <FaUser /> Invite Vendors
          </Link>
        </li>
        <li>
          <Link to="/manage-bookings">
            <FaCalendarAlt /> Manage Bookings
          </Link>
        </li>
        <li>
          <Link to="/browse-vendors">
            <FaClipboardList /> Browse Vendors
          </Link>
        </li>
        <li>
          <Link to="/reviews">
            <FaStar /> Rate & Review Vendors
          </Link>
        </li>
        <li>
          <Link to="/messages">
            <FaComments /> Chat with Vendors
          </Link>
        </li>
        <li>
          <Link to="/wishlist">
            <FaHeart /> Wishlist
          </Link>
        </li>
        <li>
          <Link to="/profile">
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
