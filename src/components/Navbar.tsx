// import { RxHamburgerMenu } from "react-icons/rx";
// const Navbar = () => {
//   return (
//     <div className="main-nav">
      
//         <nav className="h-[60px] w-full container mx-auto">
//           <div className="h-full flex items-center justify-between">
//             {/* Logo */}
//             <div className="text-xl font-bold text-blue-600 tracking-tight">
//               Crest-On
//             </div>

//             {/* Navigation Links */}
//             <ul className="hidden md:flex space-x-6 text-gray-700 font-medium text-sm">
//               <li>
//                 <a href="/" className="hover:text-blue-600 transition">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="/listings" className="hover:text-blue-600 transition">
//                   Listings
//                 </a>
//               </li>
//               <li>
//                 <a href="/agents" className="hover:text-blue-600 transition">
//                   Agents
//                 </a>
//               </li>
//               <li>
//                 <a href="/about" className="hover:text-blue-600 transition">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="/contact" className="hover:text-blue-600 transition">
//                   Contact
//                 </a>
//               </li>
//             </ul>

//             {/* Contact / Call to Action */}
//             <div className="flex items-center gap-2">

//             <div className="flex flex-col  text-sm text-gray-600">
//               <span className="whitespace-nowrap">📞 +123 456 7890</span>
//               <a
//                 href="mailto:info@creston.com"
//                 className="hover:text-blue-600 transition"
//               >
//                 ✉️ info@creston.com
//               </a>
//             </div>
//               {/* Mobile Menu Placeholder */}
//               <div className="md:hidden">
//                 {/* Add a hamburger menu here later */}
//                 <button className="text-gray-600 focus:outline-none"><RxHamburgerMenu size={24}/></button>
//               </div>
//               </div>

//           </div>
//         </nav>
//       </div>
//   );
// };

// export default Navbar;


import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="main-nav w-full shadow-sm bg-white relative z-50">
      <nav className="h-[60px] w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="h-full flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600 tracking-tight">
            Crest-On
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium text-sm">
            <li><a href="/" className="hover:text-blue-600 transition">Home</a></li>
            <li><a href="/listings" className="hover:text-blue-600 transition">Listings</a></li>
            <li><a href="/agents" className="hover:text-blue-600 transition">Agents</a></li>
            <li><a href="/about" className="hover:text-blue-600 transition">About</a></li>
            <li><a href="/contact" className="hover:text-blue-600 transition">Contact</a></li>
          </ul>

          {/* Contact info - hidden on small screens */}
          <div className="hidden lg:flex flex-col text-sm text-gray-600 leading-tight">
            <span className="whitespace-nowrap">📞 +123 456 7890</span>
            <a
              href="mailto:info@creston.com"
              className="hover:text-blue-600 transition"
            >
              ✉️ info@creston.com
            </a>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              <RxHamburgerMenu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
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
          <li><a href="/contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
