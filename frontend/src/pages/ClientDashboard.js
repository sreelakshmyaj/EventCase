import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from '../components/Sidebar'
import Dashboard from "./Dashboard";
import ManageBookings from "./ManageBookings";
import CreateBooking from './CreateBooking';
import Browse from "./Browse";
import BroswseDetails from "./BrowseDetails";

const ClientDashboard = () => {
  return (
      <div className="dashboard">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/manage-bookings" element={<ManageBookings />} />
            <Route path="/create-booking" element={<CreateBooking />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/details/:id" element={<BroswseDetails />} />
          </Routes>
        </div>
      </div>
  );
};

export default ClientDashboard;
