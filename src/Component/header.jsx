import React from 'react';
import '../Style/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Binod</div>
        <nav className="nav">
				<a href="#home" className="nav-link">Home</a>
          <a href="#home" className="nav-link">About me</a>
					<a href="#education" className="nav-link">Education</a>
          <a href="#about" className="nav-link">Skill</a>
          <a href="#certificate" className="nav-link">Certificates</a>
					<a href="#Contact Me" className="nav-link">Contact Me</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
