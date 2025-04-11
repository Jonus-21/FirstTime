import React from "react";

const homeSections = [
    {
      title: "Discover Your Perfect Volunteer Opportunity",
      images: [
        "/tree.jpeg",
        "/planting.jpeg",
        "/cleaning2.jpeg",
      ],
      desc: "Volunteer to make a real difference. Support causes, non-profits, and create positive change for people and the environment with your time and skills.",
    },
    {
      title: "Double Your Impact: Donate Now!",
      images: [
        "/elephant.jpeg",
        "/time.jpeg",
        "/deforestation.jpeg",
      ],
      desc: "Donate to a charity to support causes you care about and make a real difference. Your contribution provides resources and creates positive change for individuals, communities, and the environment.",
    },
    {
      title: "Contribute your feedback",
      images: [
        "/feedback.jpeg",
        "/feedback 2.jpeg",
        "/feedback3.jpeg",
      ],
      desc: "Our platform includes a feedback system where volunteers and organizations can rate and review their experiences. This builds trust and ensures accountability within the community.",
    },
  ];
  

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-gray-800 flex flex-col justify-between font-sans"
      style={{
        backgroundImage: "url('/bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      
    >
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


      {/* HOME CARDS SECTION */}
      <main className="flex flex-col items-center px-4 py-16 gap-12">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-3 max-w-7xl w-full">
          {homeSections.map((section, index) => (
            <div
              key={index}
              className="bg-green-900 text-white rounded-3xl shadow-xl p-5"
            >
              <div className="flex justify-center gap-4 mb-4">
                {section.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="preview"
                    className="w-24 h-24 rounded-xl object-cover shadow-lg"
                  />
                ))}
              </div>
              <div className="bg-white text-black rounded-xl p-4 text-sm">
                <p className="font-semibold text-center">{section.title}</p>
                <p className="mt-2">{section.desc}</p>
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

export default Home;
