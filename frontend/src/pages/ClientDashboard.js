import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from '../components/Sidebar'
import Dashboard from "./Dashboard";
// import InviteVendors from "./pages/InviteVendors";
import ManageBookings from "./ManageBookings";
import CreateBooking from './CreateBooking';

const ClientDashboard = () => {
  return (
      <div className="dashboard">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/invite-vendors" element={<InviteVendors />} /> */}
            <Route path="/manage-bookings" element={<ManageBookings />} />
            <Route path="/create-booking" element={<CreateBooking />} />
          </Routes>
        </div>
      </div>
  );
};

export default ClientDashboard;
