const Navbar = () => {
  return (
    <div className="main-nav">
      
        <nav className="h-[60px] w-full container mx-auto">
          <div className="h-full flex items-center justify-between">
            {/* Logo */}
            <div className="text-xl font-bold text-blue-600 tracking-tight">
              Crest-On
            </div>

            {/* Navigation Links */}
            <ul className="hidden md:flex space-x-6 text-gray-700 font-medium text-sm">
              <li>
                <a href="/" className="hover:text-blue-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/listings" className="hover:text-blue-600 transition">
                  Listings
                </a>
              </li>
              <li>
                <a href="/agents" className="hover:text-blue-600 transition">
                  Agents
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-600 transition">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-600 transition">
                  Contact
                </a>
              </li>
            </ul>

            {/* Contact / Call to Action */}
            <div className="flex flex-col  text-sm text-gray-600">
              <span className="whitespace-nowrap">📞 +123 456 7890</span>
              <a
                href="mailto:info@creston.com"
                className="hover:text-blue-600 transition"
              >
                ✉️ info@creston.com
              </a>
            </div>

            {/* Mobile Menu Placeholder */}
            <div className="md:hidden">
              {/* Add a hamburger menu here later */}
              <button className="text-gray-600 focus:outline-none">☰</button>
            </div>
          </div>
        </nav>
      </div>
  );
};

export default Navbar;
