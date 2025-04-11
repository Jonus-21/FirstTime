const Feedback = require("../models/feedback");

exports.submitFeedback = async (req, res) => {
  try {
    const { name, email, message, rating } = req.body;

    const newFeedback = new Feedback({ name, email, message, rating });
    await newFeedback.save();

    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
