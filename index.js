const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authroutes");
const profileRoutes = require("./routes/profileRoutes");
const opportunityRoutes = require("./routes/opportunityRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");


const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/opportunities", opportunityRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes); // Add this line
app.use("/api/feedback", feedbackRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5050, () => console.log("✅ MongoDB connected\n🚀 Server running on http://localhost:5050"));
  })
  .catch((err) => console.error("❌ MongoDB error:", err));
