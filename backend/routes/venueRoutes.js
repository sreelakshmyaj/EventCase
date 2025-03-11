const express = require("express");
const { getAvailableVenues } = require("../controllers/venueController");
const router = express.Router();

router.get("/available", getAvailableVenues);

module.exports = router;
