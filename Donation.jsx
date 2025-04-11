import React from "react";

const donationOrgs = [
    {
      title: "World Wildlife Fund (WWF)",
      img: "/elephant.jpeg",
      desc: "WWF is globally recognized for conserving nature and reducing threats to biodiversity. They focus on protecting endangered species and their habitats.",
    },
    {
      title: "350.org",
      img: "/time.jpeg",
      desc: "A global movement working to end fossil fuels and build a just, sustainable future. Their campaigns encourage youth to take action on climate change.",
    },
    {
      title: "Oceana",
      img: "/cleaning.jpeg",
      desc: "Oceana is dedicated to protecting the world's oceans. They work on policy reform so we can restore ocean abundance and biodiversity.",
    },
    {
      title: "Rainforest Action Network",
      img: "/deforestation.jpeg",
      desc: "This organization focuses on preserving forests, protecting the climate, and upholding human rights by challenging corporate power.",
    },
  ];
  

const Donation = () => {
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


      {/* MAIN CONTENT */}
      <main className="px-6 py-12 text-center flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-10">Donation</h1>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl">
          {donationOrgs.map((org, index) => (
            <div
              key={index}
              className="bg-green-900 text-white rounded-3xl p-4 shadow-lg"
            >
              <img
                src={org.img}
                alt={org.title}
                className="w-full h-72 object-cover rounded-2xl mb-4"
              />
              <div className="bg-white text-black rounded-xl p-3 text-sm">
                <p className="font-semibold">{org.title}</p>
                <p className="text-gray-700 mt-2">{org.desc}</p>
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

export default Donation;
