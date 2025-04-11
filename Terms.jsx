import React from "react";

const Terms = () => {
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

      {/* TERMS CONTENT */}
      <main className="px-6 py-12 flex justify-center">
        <div className="bg-green-900 text-white p-8 rounded-3xl max-w-4xl w-full shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6">Terms and Conditions</h1>

          <div className="bg-white text-black rounded-xl p-6 text-sm leading-relaxed space-y-6">
            <section>
              <h2 className="text-lg font-semibold mb-2">1. Legal Compliance</h2>
              <p>
                All users of the platform must comply with relevant legal frameworks, including the UK GDPR and Data Protection Act 2018. Personal data will be collected, processed, and stored responsibly.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">2. Ethical Use</h2>
              <p>
                Users must act ethically and respectfully at all times. Discrimination, harassment, and exploitation of any kind are not tolerated. The platform encourages fair, inclusive, and equitable treatment for all.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">3. Social Responsibility</h2>
              <p>
                Green Wave is committed to fostering community engagement and inclusive access to volunteering. Users should strive to positively contribute to their communities through the opportunities available.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">4. Professional Conduct</h2>
              <p>
                All development and use of the platform must align with professional standards, such as the ACM and BCS codes of ethics. Secure, maintainable coding practices and honest user behavior are expected.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">5. Economic Considerations</h2>
              <p>
                The platform is designed to provide economic value by helping volunteers gain skills and enhancing the operational efficiency of non-profit organizations. Any monetization will be transparent and ethical.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">6. Commercial Considerations</h2>
              <p>
                Green Wave may adopt a freemium model in the future, offering premium features or services. Strategic partnerships with NGOs, sponsors, or educational institutions may be pursued to ensure sustainability and scalability.
              </p>
            </section>
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

export default Terms;
