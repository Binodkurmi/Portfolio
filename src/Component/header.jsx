import React from 'react';
import '../Style/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Binod</div>
        <nav className="nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About Me</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact Me</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
