import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  {
    title: "Buy",
    links: [
      { label: "Houses for Sale", path: "/buy/houses" },
      { label: "Apartments", path: "/buy/apartments" },
      { label: "Luxury Homes", path: "/buy/luxury" },
      { label: "Mortgage Advice", path: "/buy/mortgage" },
    ],
  },
  {
    title: "Sell",
    links: [
      { label: "Request a Valuation", path: "/sell/valuation" },
      { label: "Marketing Services", path: "/sell/marketing" },
      { label: "Sell with an Agent", path: "/sell/agent" },
      { label: "Home Prep Tips", path: "/sell/tips" },
    ],
  },
  {
    title: "Rent",
    links: [
      { label: "Available Rentals", path: "/rent/listings" },
      { label: "Rental Management", path: "/rent/management" },
      { label: "Tenant Guide", path: "/rent/tenant-guide" },
      { label: "Landlord Services", path: "/rent/landlord" },
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

  // Prevent body scroll when mobile menu is open
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
        <div className="container mx-auto  h-[80px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold tracking-tight">
            Crest-Homes
          </Link>

          {/* Desktop Nav */}
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

                {/* Desktop Dropdown */}
                {hoveredMenu === item.title && (
                  <div
                    className="absolute top-12 left-0 w-full bg-white shadow z-40"
                    onMouseEnter={() => setHoveredMenu(item.title)}
                    onMouseLeave={() => setHoveredMenu(null)}
                  >
                    <div className="container max-w-7xl mx-auto grid grid-cols-2 gap-8 py-10 px-6">
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

          {/* Contact Info */}
          <div className="hidden lg:flex flex-col text-sm">
            <span>📞 +850-123-5021</span>
            <a href="mailto:info@cresthomes.com">✉️ info@cresthomes.com</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              <RxHamburgerMenu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay + Slide-in */}
        <div
          className={`fixed top-0 left-0 h-screen w-screen bg-black/60 bg-opacity-40 z-50 transition-opacity duration-300 ${
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        <div
          className={`fixed top-0 left-0 h-screen w-full max-w-xs bg-white text-black z-50 shadow-lg transform transition-transform duration-300 ease-in-out
            ${menuOpen ? "translate-x-0" : "-translate-x-full"}
          `}
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

            {navItems.map((item) => (
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
