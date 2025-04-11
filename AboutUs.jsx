import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#f4f4f4] text-gray-800 flex flex-col justify-between font-sans">
      {/* NAVBAR */}
      <nav className="bg-green-900 text-white px-8 py-4 flex justify-between items-center">
  <div className="flex items-center gap-2">
    <img src="/logo.png" alt="Green Wave Logo" className="w-12 h-12" />
    <span className="text-xl font-semibold">Green Wave</span>
  </div>
  <ul className="hidden md:flex gap-6 text-sm font-medium">
    <li>Home</li>
    <li>Opportunities</li>
    <li>Donation</li>
    <li>Contact</li>
    <li>Profile</li>
    <li>Login</li>
  </ul>
  <div className="bg-white rounded-full px-3 py-1 flex items-center">
    <input
      type="text"
      placeholder="Search"
      className="bg-transparent text-sm text-black focus:outline-none w-32"
    />
    <svg
      className="w-4 h-4 text-green-800 ml-1"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M12.9 14.32a8 8 0 111.41-1.41l4.3 4.3-1.42 1.42-4.29-4.3zM8 14a6 6 0 100-12 6 6 0 000 12z" />
    </svg>
  </div>
</nav>


      {/* MAIN CONTENT */}
      <main className="flex flex-col items-center text-center px-4 py-16 gap-10">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>

        <div className="bg-[#d9d9d9] text-sm text-gray-800 shadow-lg rounded-3xl max-w-3xl p-6 leading-relaxed font-medium">
          Our Community Volunteering Platform was created to address the challenges faced by both
          volunteers and non-profit organizations in finding effective matches. We strive to provide an
          intuitive and accessible platform that allows volunteers to easily discover opportunities
          aligned with their skills and interests, while enabling non-profits to efficiently manage their
          volunteer programs.
          <br />
          <br />
          Our goal is to increase community engagement and create a positive impact.
        </div>

        <div className="bg-[#c9ccc7] text-sm text-gray-800 shadow-lg rounded-3xl max-w-3xl p-6 leading-relaxed font-medium">
          This platform provides significant benefits for both volunteers and non-profit organizations.
          Volunteers gain access to a centralized hub where they can easily discover diverse
          opportunities, connect with organizations aligned with their passions, and manage their
          volunteering activities.
          <br />
          <br />
          Non-profits benefit from efficient tools to recruit, manage, and communicate with volunteers,
          reducing administrative burden and increasing the effectiveness of their volunteer programs.
          <br />
          <br />
          Ultimately, by simplifying the matching process and fostering stronger connections, our platform
          empowers individuals to make a greater impact in their communities, while enabling non-profits
          to achieve their missions more effectively.
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-green-900 text-white py-5 text-sm">
  <div className="flex justify-center gap-8 flex-wrap font-medium">
    <span className="hover:underline cursor-pointer">About Us</span>
    <span className="hover:underline cursor-pointer">Contact Us</span>
    <span className="hover:underline cursor-pointer">Terms of service</span>
    <span className="hover:underline cursor-pointer">Copyright</span>
  </div>
</footer>

    </div>
  );
};

export default AboutUs;
