import React from "react";

const Registration = () => {
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


      {/* FORM SECTION */}
      <main className="py-12 px-6 flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-8">Registration</h1>

        <form className="bg-green-900 text-white rounded-3xl shadow-lg p-8 max-w-4xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="First Name"
              className="p-3 rounded bg-white text-black"
            />
            <input
              type="text"
              placeholder="Age"
              className="p-3 rounded bg-white text-black"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 rounded bg-white text-black"
            />
            <input
              type="text"
              placeholder="Skills"
              className="p-3 rounded bg-white text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded bg-white text-black"
            />
            <input
              type="text"
              placeholder="Why are you interested?"
              className="p-3 rounded bg-white text-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded bg-white text-black"
            />
            <input
              type="text"
              placeholder="Experience"
              className="p-3 rounded bg-white text-black"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="p-3 rounded bg-white text-black"
            />
            <input
              type="text"
              placeholder="Additional info"
              className="p-3 rounded bg-white text-black"
            />
          </div>

          {/* OPTIONS */}
          <div className="mb-6 text-sm">
            <label className="block mb-2 font-semibold">Sex</label>
            <div className="flex gap-6 mb-4">
              <label>
                <input type="radio" name="sex" className="mr-2" /> Male
              </label>
              <label>
                <input type="radio" name="sex" className="mr-2" /> Female
              </label>
              <label>
                <input type="radio" name="sex" className="mr-2" /> Others
              </label>
            </div>

            <div className="flex gap-6 flex-wrap">
              <label>
                <input type="checkbox" className="mr-2" /> 18 or Over
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Yes
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> No
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Organization
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Volunteer
              </label>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-green-400 hover:bg-green-500 text-black font-semibold px-6 py-2 rounded mt-4">
              Create Profile
            </button>
          </div>
        </form>
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

export default Registration;
