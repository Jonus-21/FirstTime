import React from "react";

const Profile = () => {
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


      {/* PROFILE SECTION */}
      <main className="px-6 py-10 text-center">
        <h1 className="text-2xl font-semibold mb-8">Profile</h1>

        <div className="bg-green-900 rounded-3xl shadow-lg p-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 text-left text-white">
          {/* LEFT - Avatar and Info */}
          <div className="bg-white text-black rounded-2xl p-6 w-full lg:w-1/3">
            <div className="flex flex-col items-center mb-6">
              <div className="w-20 h-20 rounded-full bg-green-200 flex items-center justify-center text-4xl mb-3">
                👤
              </div>
              <span className="text-sm text-gray-500">Edit Info</span>
            </div>
            <div className="space-y-3 text-sm">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 rounded bg-gray-200"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 rounded bg-gray-200"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-2 rounded bg-gray-200"
              />
              <input
                type="text"
                placeholder="Sex"
                className="w-full p-2 rounded bg-gray-200"
              />
              <input
                type="number"
                placeholder="Age"
                className="w-full p-2 rounded bg-gray-200"
              />
            </div>
          </div>

          {/* RIGHT - Profile Sections */}
          <div className="w-full lg:w-2/3 flex flex-col gap-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex gap-4 text-sm font-semibold">
                <span className="bg-white text-green-900 py-1 px-3 rounded-full cursor-pointer">
                  Create Profile
                </span>
                <span className="cursor-pointer">Saved</span>
                <span className="cursor-pointer">Updates</span>
              </div>
              <div className="bg-white rounded-full p-1">
                <svg
                  className="w-5 h-5 text-green-800"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.9 14.32a8 8 0 111.41-1.41l4.3 4.3-1.42 1.42-4.29-4.3zM8 14a6 6 0 100-12 6 6 0 000 12z" />
                </svg>
              </div>
            </div>

            <textarea
              placeholder="Skills"
              rows={2}
              className="w-full rounded-xl p-3 text-black bg-white"
            />
            <textarea
              placeholder="Interests"
              rows={2}
              className="w-full rounded-xl p-3 text-black bg-white"
            />
            <textarea
              placeholder="Experience"
              rows={2}
              className="w-full rounded-xl p-3 text-black bg-white"
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

export default Profile;