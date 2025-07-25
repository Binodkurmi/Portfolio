import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#121212] text-white shadow-md">
      <div className="container mx-auto flex justify-between p-4 h-20">
        {/* Logo */}
        <div className="text-2xl bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent font-bold font-lato">
          BINOD
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-lato font-medium">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#FD6F00] transition-colors duration-300"
            activeClass="text-[#FD6F00] font-semibold"
          >
            Home
          </Link>
          <Link
            to="certificates"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#FD6F00] transition-colors duration-300"
            activeClass="text-[#FD6F00] font-semibold"
          >
            Certificates
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#FD6F00] transition-colors duration-300"
            activeClass="text-[#FD6F00] font-semibold"
          >
            About Me
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#FD6F00] transition-colors duration-300"
            activeClass="text-[#FD6F00] font-semibold"
          >
            Education
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#FD6F00] transition-colors duration-300"
            activeClass="text-[#FD6F00] font-semibold"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#FD6F00] transition-colors duration-300"
            activeClass="text-[#FD6F00] font-semibold"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#FD6F00] transition-colors duration-300"
            activeClass="text-[#FD6F00] font-semibold"
          >
            Contact
          </Link>
          <button className="ml-4 bg-[#FD6F00] text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition-all duration-300 font-semibold">
            Hire Me
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col items-end space-y-1.5">
            <span 
              className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}
            ></span>
            <span 
              className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : 'w-5'}`}
            ></span>
            <span 
              className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-4'}`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden bg-[#121212] transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'}`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-white hover:text-[#FD6F00] transition-colors duration-300 px-4 py-2"
            activeClass="text-[#FD6F00] font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="certificates"
            smooth={true}
            duration={500}
            className="text-white hover:text-[#FD6F00] transition-colors duration-300 px-4 py-2"
            activeClass="text-[#FD6F00] font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Certificates
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-white hover:text-[#FD6F00] transition-colors duration-300 px-4 py-2"
            activeClass="text-[#FD6F00] font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            About Me
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="text-white hover:text-[#FD6F00] transition-colors duration-300 px-4 py-2"
            activeClass="text-[#FD6F00] font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Education
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="text-white hover:text-[#FD6F00] transition-colors duration-300 px-4 py-2"
            activeClass="text-[#FD6F00] font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </Link>
					<Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-white hover:text-[#FD6F00] transition-colors duration-300 px-4 py-2"
            activeClass="text-[#FD6F00] font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-white hover:text-[#FD6F00] transition-colors duration-300 px-4 py-2"
            activeClass="text-[#FD6F00] font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="flex justify-center sm:justify-start">
            <button className="mt-2 w-32 bg-[#FD6F00] text-white px-3 py-2 sm:px-5 sm:py-2 rounded-lg hover:bg-orange-700 transition-all duration-300 font-semibold text-sm sm:text-base">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;