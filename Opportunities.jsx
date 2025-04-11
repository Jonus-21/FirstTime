import React from "react";

const opportunities = [
    {
      title: "Tree Planting Drive 🌱",
      img: "/planting2.jpeg",
      desc: "Get your hands dirty and make a difference! Green Earth Action is looking for volunteers to help plant trees. Learn about local ecology, connect with nature, and contribute to a healthier environment.",
    },
    {
      title: "Beach Cleanup 🏖️",
      img: "/cleaning.jpeg",
      desc: "Let’s keep our beaches beautiful! Join our beach cleanup and help protect our coastlines.",
    },
    {
      title: "Recycling Support ♻️",
      img: "/recycle.jpeg",
      desc: "Be a recycling hero! Volunteer to help sort recyclables and reduce waste in our community.",
    },
    {
      title: "Community Gardening 🌿",
      img: "/planting.jpeg",
      desc: "Grow together! Join our community gardening project. No experience needed — just bring your energy!",
    },
    {
      title: "Environmental Education 📚",
      img: "/tree.jpeg",
      desc: "Inspire the next generation! Help teach eco-education to kids. Share your passion for sustainability.",
    },
    {
      title: "Wildlife Protection 🐢",
      img: "/cleaning2.jpeg",
      desc: "Protect coastal critters! Remove debris from habitats and be a voice for the ocean.",
    },
  ];
  

const Opportunities = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col justify-between font-sans">
      {/* NAVBAR (reuse this from AboutUs later) */}
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


      {/* MAIN CONTENT */}
      <main className="px-6 py-12 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-10">Featured Opportunities</h1>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
          {opportunities.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg border-4 border-green-800 overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-sm">
                <p className="font-semibold mb-2">{item.title}</p>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
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

export default Opportunities;
