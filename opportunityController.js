const Opportunity = require("../models/opportunity");

exports.createOpportunity = async (req, res) => {
  try {
    const opportunity = new Opportunity(req.body);
    await opportunity.save();
    res.status(201).json({ message: "Opportunity created", opportunity });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllOpportunities = async (req, res) => {
    try {
      const opportunities = await Opportunity.find();
      res.status(200).json(opportunities);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
