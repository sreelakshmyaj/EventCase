import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"

const CreateBooking = () => {
  const navigate = useNavigate();
  const [eventName, setEventName] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [budget, setBudget] = useState(5000);
  const [guestCnt, setGuestCnt] = useState(0);
  const [venue, setVenue] = useState("");
  const [venueSuggestions, setVenueSuggestions] = useState([]);

  useEffect(() => {
    if (eventDate) {
      fetchVenueRecommendations();
    }
  }, [eventDate]);

  const fetchVenueRecommendations = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/venues/available?eventDate=${eventDate}`);
      setVenueSuggestions(response.data);
    } catch (error) {
      toast.error("Failed to fetch venue recommendations");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ eventName, eventDate, budget, venue });

    const token = localStorage.getItem("authToken");
    if (!token) {
      toast.error("Please login first");
      return;
    }

    const bookingData = {
      eventName,
      eventType,
      eventDate,
      guestCount: guestCnt,
      budget,
      venueId: parseInt(venue, 10),
    };

    try {
      await axios.post("http://localhost:5000/api/bookings/create", bookingData, {
        headers: {Authorization: `Bearer ${token}`},
      });
      toast.success("Event created successfully");
      navigate("/dashboard/manage-bookings");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create event");
    }
  };

  return (
    <div className="booking-form-container">
      <h2>Create New Booking</h2>
      <form onSubmit={handleSubmit}>
        <label>Event Name:</label>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        />

        <label>Event Type:</label>
        <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
          <option value="">Select Type</option>
          <option value="Weddings">Weddings</option>
          <option value="Conferences">Conferences</option>
          <option value="Parties">Parties</option>
          <option value="Coroporate">Corporate Events</option>
          <option value="Festivals">Festivals</option>
        </select>

        <label>Event Date:</label>
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          required
        />

        <label>Budget: ₹{budget}</label>
        <input
          type="range"
          min="1000"
          max="100000"
          step="500"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />

        <label>Expected Guest Count:</label>
        <input 
          type="number"
          min="0"
          value={guestCnt}
          onChange={(e) => setGuestCnt(e.target.value)}
        />

        <label>Venue:</label>
        <button type="button" onClick={fetchVenueRecommendations}>
          Get Venue Recommendations
        </button>
        <select value={venue} onChange={(e) => setVenue(e.target.value)} required>
          <option value="">Select a venue</option>
          {venueSuggestions.map((v) => (
            <option key={v.id} value={v.id}>
              {v.name}
            </option>
          ))}
        </select>

        <div className="recommendation-list">
          {venueSuggestions.map((v, index) => (
            <div key={index} className="recommendation-item" onClick={() => setVenue(v.name)}>
              <img src={v.img} alt={v.name} />
              <p>{v.name}</p>
            </div>
          ))}
        </div>

        <button type="submit">Create Booking</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateBooking;
