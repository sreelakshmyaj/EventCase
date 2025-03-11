import React, { useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"

const ManageBookings = () => {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchEvents = async () => {
        try {
          const token = localStorage.getItem("authToken");
          if (!token) {
            toast.error("Please log in to view your events");
            return;
          }

          const response = await axios.get("http://localhost:5000/api/bookings/my-events", {
            headers: {Authorization: `Bearer ${token}`},
          });

          setEvents(response.data);
        } catch (error) {
          toast.error("Failed to fetch events");
        }
      };

      fetchEvents();
    }, []);

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      });
    };

    const confirmedEvents = events
    .filter((event) => event.status === "confirmed")
    .map((event) => ({
      title: event.event_name,
      date: event.event_date,
      color: "green",
      allDay: true,
    }));

  const pendingEvents = events
    .filter((event) => event.status === "pending")
    .map((event) => ({
      title: event.event_name,
      date: event.event_date,
      color: "orange",
      allDay: true,
    }));

    console.log(pendingEvents);

  return (
    <div className="manage-bookings">
      <h1>Manage Your Events</h1>

      <div className="booking-stats">
        <div className="stat confirmed">
          Confirmed: {confirmedEvents.length}
        </div>
        <div className="stat pending">
          Pending: {pendingEvents.length}
        </div>
      </div>

      <div className="booking-actions">
        <Link to="/dashboard/create-booking" className="btn create-btn">Create New Booking</Link>
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
          {events.map((event) => (
            <tr key={event.event_id}>
              <td>{event.event_name}</td>
              <td>{formatDate(event.event_date)}</td>
              <td className={event.status}>{event.status}</td>
              <td>
                <button
                    className="btn view-btn"
                    onClick={() => navigate(`/event-details/${event.event_id}`)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="calendar-container">
        <FullCalendar 
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={[...confirmedEvents, ...pendingEvents]} 
          height="500px"
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default ManageBookings;
