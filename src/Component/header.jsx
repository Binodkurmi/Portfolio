import React, { useState } from 'react';
import '../Style/Header.css';

const header = () => {
	const [menuOpen, setMenuOpen] = useState(false); // This manages the menu state (open or closed)

	// Function to toggle the menu
	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<header className="header">
			<div className="container">
				<div className="logo">Binod</div>
				<nav className={`nav ${menuOpen ? 'open' : ''}`}> {/* The 'open' class is added when the menu is open */}
					<a href="#home" className="nav-link">Home</a>
					<a href="#about" className="nav-link">About Me</a>
					<a href="#education" className="nav-link">Education</a>
					<a href="#skills" className="nav-link">Skills</a>
					<a href="#contact" className="nav-link">Contact Me</a>
				</nav>
				<div className="hamburger" onClick={toggleMenu}> {/* When clicked, it calls toggleMenu to open/close the menu */}
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</div>
			</div>
		</header>
	);
};

export default header;
