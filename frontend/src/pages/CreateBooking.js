import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBooking = () => {
  const navigate = useNavigate();
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [budget, setBudget] = useState(5000);
  const [venue, setVenue] = useState("");
  const [vendor, setVendor] = useState("");
  const [venueSuggestions, setVenueSuggestions] = useState([]);
  const [vendorSuggestions, setVendorSuggestions] = useState([]);

  // Mock API response (Replace with actual API call)
  const fetchVenueRecommendations = () => {
    const venues = [
      { name: "Grand Palace", img: "/images/venue1.jpg" },
      { name: "Sunset Hall", img: "/images/venue2.jpg" },
      { name: "Ocean View Resort", img: "/images/venue3.jpg" },
    ];
    setVenueSuggestions(venues);
  };

  const fetchVendorRecommendations = () => {
    const vendors = [
      { name: "Elite Caterers", img: "/images/vendor1.jpg" },
      { name: "Royal Decor", img: "/images/vendor2.jpg" },
      { name: "DJ Beats", img: "/images/vendor3.jpg" },
    ];
    setVendorSuggestions(vendors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ eventName, eventDate, budget, venue, vendor });
    alert("Booking Created Successfully!");
    navigate("/manage-bookings");
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

        {/* Venue Selection */}
        <label>Venue:</label>
        <button type="button" onClick={fetchVenueRecommendations}>
          Get Venue Recommendations
        </button>
        <select value={venue} onChange={(e) => setVenue(e.target.value)} required>
          <option value="">Select a venue</option>
          {venueSuggestions.map((v, index) => (
            <option key={index} value={v.name}>
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

        {/* Vendor Selection */}
        <label>Vendor:</label>
        <button type="button" onClick={fetchVendorRecommendations}>
          Get Vendor Recommendations
        </button>
        <select value={vendor} onChange={(e) => setVendor(e.target.value)} required>
          <option value="">Select a vendor</option>
          {vendorSuggestions.map((v, index) => (
            <option key={index} value={v.name}>
              {v.name}
            </option>
          ))}
        </select>

        <div className="recommendation-list">
          {vendorSuggestions.map((v, index) => (
            <div key={index} className="recommendation-item" onClick={() => setVendor(v.name)}>
              <img src={v.img} alt={v.name} />
              <p>{v.name}</p>
            </div>
          ))}
        </div>

        <button type="submit">Create Booking</button>
      </form>
    </div>
  );
};

export default CreateBooking;
