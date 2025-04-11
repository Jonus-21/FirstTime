const express = require("express");
const router = express.Router();
const { submitFeedback } = require("../controllers/feedbackcontroller");

router.post("/", submitFeedback);

module.exports = router;
