import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      style={{ backgroundColor: '#121212' }} // dark background
      className="text-white fixed w-full shadow-md"
    >
      <div className="container mx-auto flex items-center justify-between p-5">
        {/* Left: Logo */}
        <div className="text-2xl bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent font-bold font-lato">
          Binod
        </div>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-lato font-medium">
          <a href="#home" className="hover:text-[#FD6F00] transition">Home</a>
          <a href="#about" className="hover:text-[#FD6F00] transition">About Me</a>
          <a href="#education" className="hover:text-[#FD6F00] transition">Education</a>
          <a href="#skills" className="hover:text-[#FD6F00] transition">Skills</a>
          <a href="#contact" className="hover:text-[#FD6F00] transition">Contact Me</a>
        </nav>

        {/* Right: Hire Me Button */}
        <div className="hidden md:block">
          <button className="bg-[#FD6F00] text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition font-lato">
            Hire Me
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div
          className="md:hidden cursor-pointer space-y-1"
          onClick={toggleMenu}
        >
          <div className="w-6 h-0.5 bg-white" />
          <div className="w-6 h-0.5 bg-white" />
          <div className="w-6 h-0.5 bg-white" />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#2a9d8f] px-4 pb-4 space-y-2">
          <a href="#home" className="block text-white hover:text-[#FD6F00]">Home</a>
          <a href="#about" className="block text-white hover:text-[#FD6F00]">About Me</a>
          <a href="#education" className="block text-white hover:text-[#FD6F00]">Education</a>
          <a href="#skills" className="block text-white hover:text-[#FD6F00]">Skills</a>
          <a href="#contact" className="block text-white hover:text-[#FD6F00]">Contact Me</a>
          <button className="mt-2 w-full bg-[#FD6F00] text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition font-semibold">
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
