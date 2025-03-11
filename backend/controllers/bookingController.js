const pool = require("../config/db");

exports.createNewBooking = async (req, res) => {
  const { eventName, eventType, eventDate, guestCount, budget, venueId } = req.body;
  const createdBy = req.user.user_id;

  if (!eventName || !eventType || !eventDate || !guestCount || !budget || !venueId) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const status = "pending"; // Default status for new bookings
    const query = `
      INSERT INTO events (created_by, event_name, event_type, event_date, guest_count, budget, venue_id, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
      RETURNING *`;

    const values = [createdBy, eventName, eventType, eventDate, guestCount, budget, venueId, status];
    const result = await pool.query(query, values);

    res.status(201).json({ message: "Booking created successfully", booking: result.rows[0] });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Failed to create booking" });
  }
};
