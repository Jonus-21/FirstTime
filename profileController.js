const Profile = require("../models/profile");

exports.createProfile = async (req, res) => {
  const { skills, interests, experience } = req.body;

  try {
    const profile = new Profile({
      userId: req.user.id,
      skills,
      interests,
      experience,
    });

    await profile.save();
    res.status(201).json({ message: "Profile created", profile });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get profile controller
exports.getProfile = async (req, res) => {
    try {
      const userId = req.user.id; // Comes from the auth middleware
      const profile = await Profile.findOne({ userId });
  
      if (!profile) {
        return res.status(404).json({ message: "Profile not found" });
      }
  
      res.status(200).json(profile);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  