import React, { useState} from "react";
import { Link } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const ManageBookings = () => {
    const [bookings, setBookings] = useState([
        { id: 1, title: "Wedding Reception", date: "2025-03-10", status: "Confirmed" },
        { id: 2, title: "Corporate Event", date: "2025-03-15", status: "Pending" },
        { id: 3, title: "Birthday Party", date: "2025-03-20", status: "Confirmed" },
      ]);

    const confirmedEvents = bookings
    .filter((booking) => booking.status === "Confirmed")
    .map((booking) => ({
      title: booking.title,
      date: booking.date,
    }));

  return (
    <div className="manage-bookings">
      <h1>Manage Your Bookings</h1>

      <div className="booking-stats">
        <div className="stat confirmed">Confirmed: {bookings.filter(b => b.status === "Confirmed").length}</div>
        <div className="stat pending">Pending: {bookings.filter(b => b.status === "Pending").length}</div>
        <div className="stat canceled">Canceled: {bookings.filter(b => b.status === "Canceled").length}</div>
      </div>

      <div className="booking-actions">
        <Link to="/create-booking" className="btn create-btn">Create New Booking</Link>
      </div>

      <table className="booking-table">
        <thead>
          <tr>
            <th>Event</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.title}</td>
              <td>{booking.date}</td>
              <td className={booking.status.toLowerCase()}>{booking.status}</td>
              <td>
                <button className="btn cancel-btn">Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="calendar-container">
        <FullCalendar 
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={confirmedEvents} 
          height="500px"
        />
      </div>
    </div>
  );
};

export default ManageBookings;
