import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  {
    title: "Buy",
    links: [
      { label: "Houses for Sale", path: "/houses" },
      { label: "Book Viewing Instantly", path: "/view" },
      { label: "Luxury Homes", path: "/luxury" },
      { label: "Read Our Customers Review", path: "/review" },
    ],
  },
  {
    title: "Sell",
    links: [
      { label: "How does Crest-Home works", path: "/how-it-works" },
      { label: "Your Local Estate Agents", path: "/agents" },
      { label: "Sell with an Agent", path: "/agent" },
      { label: "Read Our Customers Review", path: "/review" },
    ],
  },
  {
    title: "Rent",
    links: [
      { label: "Available Rentals", path: "/listings" },
      { label: "Book Viewing Instantly", path: "/view" },
      { label: "Tenant Guide", path: "/tenant-guide" },
      { label: "Read Our Customers Review", path: "/review" },
    ],
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const shouldBeTransparent = isHomePage && !scrolled && !hoveredMenu;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleMobileDropdown = (title: string) => {
    setMobileDropdownOpen((prev) => (prev === title ? null : title));
  };

  return (
    <header className="w-full relative z-50">
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
          shouldBeTransparent
            ? "bg-transparent text-white"
            : "bg-white text-black shadow"
        }`}
      >
        <div className="container mx-auto h-[80px] flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight">
            Crest-Homes
          </Link>

          <ul className="hidden md:flex space-x-6 font-medium text-sm relative">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {navItems.map((item) => (
              <li
                key={item.title}
                className="group relative"
                onMouseEnter={() => setHoveredMenu(item.title)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <div className="flex items-center gap-1 cursor-pointer transition select-none">
                  {item.title}
                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      hoveredMenu === item.title ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Desktop Dropdown Full Width */}
                {hoveredMenu === item.title && (
                  <div className="fixed top-12 border-b border-gray-200 w-full  left-0   bg-white  z-40">
                    <div className="container mx-auto grid grid-cols-2 gap-8 py-10 px-6">
                      {item.links.map((link) => (
                        <Link
                          key={link.label}
                          to={link.path}
                          className="hover:text-blue-600 transition text-sm font-medium"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex flex-col z-50 text-sm">
            <span>📞 +850-123-5021</span>
            <a href="mailto:info@cresthomes.com">✉️ info@cresthomes.com</a>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              <RxHamburgerMenu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed top-0 left-0 h-screen w-screen bg-black/60 bg-opacity-40 z-40 transition-opacity duration-300 ${
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide-in Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-screen w-full max-w-xs bg-white text-black z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-4 h-[80px] border-gray-200 border-b">
            <Link
              to="/"
              className="text-xl font-bold tracking-tight"
              onClick={() => setMenuOpen(false)}
            >
              Crest-Homes
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-4xl"
            >
              ×
            </button>
          </div>

          <ul className="flex flex-col p-4 space-y-4">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 hover:bg-gray-100 rounded"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 hover:bg-gray-100 rounded"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>

            {/* {navItems.map((item) => (
              <li key={item.title}>
                <button
                  type="button"
                  className="w-full flex justify-between items-center py-2 px-3 hover:bg-gray-100 rounded font-medium"
                  onClick={() => toggleMobileDropdown(item.title)}
                >
                  {item.title}
                  {mobileDropdownOpen === item.title ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>

                {mobileDropdownOpen === item.title && (
                  <ul className="pl-6 mt-2 flex flex-col space-y-1">
                    {item.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.path}
                          className="block py-1 px-2 hover:text-blue-600"
                          onClick={() => setMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))} */}

            {navItems.map((item) => (
  <li key={item.title}>
    <button
      type="button"
      className="w-full flex justify-between items-center py-2 px-3 hover:bg-gray-100 rounded font-medium"
      onClick={() => toggleMobileDropdown(item.title)}
    >
      {item.title}
      {mobileDropdownOpen === item.title ? <FaChevronUp /> : <FaChevronDown />}
    </button>

    <div
      className={`pl-6 transition-all duration-300 ease-in-out overflow-hidden ${
        mobileDropdownOpen === item.title ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
      }`}
    >
      <ul className="flex flex-col space-y-1">
        {item.links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.path}
              className="block py-1 px-2 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </li>
))}


            <li className="pt-4 border-t border-gray-200 text-sm space-y-1">
              <div>📞 +850-123-5021</div>
              <a href="mailto:info@cresthomes.com" className="block">
                ✉️ info@cresthomes.com
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
