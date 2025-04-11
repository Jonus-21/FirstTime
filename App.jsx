import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Opportunities from "./pages/Opportunities";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Donation from "./pages/Donation";
import Home from "./pages/Home";
import Profile from "./pages/profile.jsx";
import Registration from "./pages/Registration";
import Terms from "./pages/Terms";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/Terms" element={<Terms />} />
      </Routes>
    </Router>
  );
}

export default App;
