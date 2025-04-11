const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  skills: String,
  interests: String,
  experience: String,
});

module.exports = mongoose.model("Profile", profileSchema);
