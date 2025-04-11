import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col justify-between font-sans">
      {/* NAVBAR */}
      <nav className="bg-green-900 text-white px-8 py-4 flex justify-between items-center">
  <div className="flex items-center gap-2">
    <img src="/logo.png" alt="Green Wave Logo" className="w-8 h-8" />
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


      {/* CONTACT FORM SECTION */}
      <main className="px-6 py-12 text-center flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-10">Contact Us</h1>

        <div className="bg-green-900 text-white p-8 rounded-3xl shadow-lg max-w-6xl w-full flex flex-col md:flex-row gap-8 justify-between">
          {/* Feedback Form */}
          <div className="bg-white text-black rounded-xl p-6 w-full md:w-1/2">
            <h2 className="text-lg font-semibold mb-4 text-center">Feedback</h2>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 mb-3 rounded bg-gray-200"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-3 rounded bg-gray-200"
            />
            <textarea
              placeholder="Comment box"
              rows={4}
              className="w-full p-2 mb-4 rounded bg-gray-200"
            />
            <div className="flex justify-center mb-4 text-green-600 text-xl">
              {["★", "★", "★", "★", "★"].map((star, i) => (
                <span key={i} className="px-1 hover:scale-125 transition">{star}</span>
              ))}
            </div>
            <button className="bg-green-400 hover:bg-green-500 px-6 py-2 rounded text-black font-semibold mx-auto block">
              Submit
            </button>
          </div>

          {/* Contact Info */}
          <div className="bg-white text-black rounded-xl p-6 w-full md:w-1/2">
            <h2 className="text-lg font-semibold mb-4 text-center">Contact</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-3 rounded bg-gray-200"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full p-2 mb-3 rounded bg-gray-200"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-2 mb-3 rounded bg-gray-200"
            />
          </div>
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

export default Contact;
