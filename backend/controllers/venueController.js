const pool = require("../config/db");

exports.getAvailableVenues = async (req, res) => {
  const { eventDate } = req.query;

  if (!eventDate) {
    return res.status(400).json({ message: "Event date is required" });
  }

  try {
    const query = `
      SELECT venue_id AS id, name, location, capacity, price, image_url, description 
      FROM venues 
      WHERE EXISTS (
        SELECT 1 FROM jsonb_array_elements_text(availability::jsonb) AS date 
        WHERE date::DATE = $1::DATE
      )
    `;

    const { rows } = await pool.query(query, [eventDate]);

    res.json(rows);
  } catch (error) {
    console.error("Error fetching venues:", error);
    res.status(500).json({ message: "Server error fetching venues" });
  }
};
