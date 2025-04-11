const express = require("express");
const router = express.Router();
const { createOpportunity, getAllOpportunities } = require("../controllers/opportunitycontroller");

router.post("/", createOpportunity);
router.get("/", getAllOpportunities);

module.exports = router;
