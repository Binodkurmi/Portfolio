import React from 'react';
import { FaFacebook, FaGoogle, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../Style/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contact-info">
          <h4>Contact me</h4>
          <p>So we can create creative projects together</p>
          <p>binodchaudhary3850@gmail.com | +997-9821451060</p>
        </div>

        <div className="footer-content">
          <div className="footer-links">
            <a href="#home" className="footer-link">Home</a>
            <a href="#about" className="footer-link">About</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#certificates" className="footer-link">Certificates</a>
          </div>
        </div>
      </div>

      <div className="social-icons">
        <a href="https://google.com" className="icon google" target="_blank" rel="noopener noreferrer">
          <FaGoogle size={20} />
        </a>
        <a href="https://facebook.com" className="icon facebook" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={20} />
        </a>
        <a href="https://linkedin.com" className="icon linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com" className="icon github" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} />
        </a>
      </div>

      <p className="footer-text">
        © 2024 PortFolio. All rights reserved. Designed by Binod Kurmi.
      </p>
    </footer>
  );
};

export default Footer;
