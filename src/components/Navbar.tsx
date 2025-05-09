import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="main-nav  text-white w-ful relative z-50">
      <nav className="h-[60px] container mx-auto">
        <div className="h-full flex items-center justify-between">
          {/* Logo */}
          <Link to='/' className="text-xl font-bold flex gap-1 tracking-tight">
            <h3>Crest-Homes</h3>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 font-medium text-sm">
            <li><a href="/" className=" transition">Home</a></li>
            <li><a href="/about" className=" transition">About</a></li>
            <li><a href="/listings" className=" transition">Services</a></li>
            <li><a href="/agents" className=" transition">Agents</a></li>
            <li><a href="/" className=" transition">Contact</a></li>
          </ul>

          {/* Contact info - hidden on small screens */}
          <div className="hidden lg:flex flex-col text-sm  leading-tight">
            <span className="whitespace-nowrap">📞 +850-123-5021</span>
            <a
              href="mailto:info@creston.com"
              className="hover:text-blue-600 sf transition"
            >
              ✉️ info@cresthomes.com
            </a>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className=" focus:outline-none">
              <RxHamburgerMenu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-opacity-30 z-40"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 h-[60px] border-b">
          <div className="text-lg font-bold text-blue-600">Menu</div>
          <button onClick={toggleMenu} className="text-gray-600">
            <IoClose size={26} />
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-4 text-gray-700 font-medium text-base">
          <li><a href="/" onClick={toggleMenu}>Home</a></li>
          <li><a href="/listings" onClick={toggleMenu}>Listings</a></li>
          <li><a href="/agents" onClick={toggleMenu}>Agents</a></li>
          <li><a href="/about" onClick={toggleMenu}>About</a></li>
          <li><a href="/" onClick={toggleMenu}>Contact</a></li>
          <div className="flex flex-col text-sm text-gray-600 leading-tight">
            <span className="whitespace-nowrap">📞 +850-123-5021</span>
            <a
              href="mailto:info@cresthomes.com"
              className="hover:text-blue-600 transition"
            >
              ✉️ info@cresthomes.com
            </a>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
