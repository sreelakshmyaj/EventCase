const express = require("express");
const { createNewBooking, getUserEvents } = require("../controllers/bookingController");
const authenticateUser = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", authenticateUser, createNewBooking);
router.get("/my-events", authenticateUser, getUserEvents);

module.exports = router;
