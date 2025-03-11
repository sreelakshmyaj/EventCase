const express = require("express");
const { createNewBooking } = require("../controllers/bookingController");
const authenticateUser = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", authenticateUser, createNewBooking);

module.exports = router;
