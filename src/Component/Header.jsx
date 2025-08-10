import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Optimized menu items in order of importance
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#121212]/95 backdrop-blur-sm shadow-lg" : "bg-[#121212]"}`}>
      <div className="container mx-auto flex justify-between items-center p-4 h-20 max-w-7xl">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent font-bold"
        >
          BINOD
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              spy={true}
              className="relative px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300 group"
              activeClass="text-white font-medium"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FA6E00] to-[#E60026] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 bg-gradient-to-r from-[#FA6E00] to-[#E60026] text-white px-5 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
          >
            Hire Me
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-6 flex flex-col items-end space-y-1.5">
            <motion.span
              animate={menuOpen ? 
                { rotate: 45, y: 6, width: "100%" } : 
                { rotate: 0, y: 0, width: "100%" }
              }
              className="block h-0.5 bg-white transition-all duration-300"
            ></motion.span>
            <motion.span
              animate={menuOpen ? 
                { opacity: 0, width: "0%" } : 
                { opacity: 1, width: "80%" }
              }
              className="block h-0.5 bg-white transition-all duration-300"
            ></motion.span>
            <motion.span
              animate={menuOpen ? 
                { rotate: -45, y: -6, width: "100%" } : 
                { rotate: 0, y: 0, width: "60%" }
              }
              className="block h-0.5 bg-white transition-all duration-300"
            ></motion.span>
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-[#121212] shadow-xl"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={500}
                    className="block text-white hover:text-[#FD6F00] transition-colors duration-300 px-4 py-3 text-lg"
                    activeClass="text-[#FD6F00] font-semibold"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="pt-2"
              >
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block w-full bg-gradient-to-r from-[#FA6E00] to-[#E60026] text-white px-5 py-3 rounded-lg text-center font-medium"
                >
                  Hire Me
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;