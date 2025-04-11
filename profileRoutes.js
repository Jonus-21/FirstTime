const express = require("express");
const router = express.Router();
const { getProfile, createProfile } = require("../controllers/profilecontroller");
const verifyToken = require("../middleware/verifyToken"); // Ensure this exists

router.post("/", verifyToken, createProfile);
router.get("/", verifyToken, getProfile); // New GET route


module.exports = router;
