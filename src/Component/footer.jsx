import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../Style/footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Half: Contact Form */}
        <div className="footer-form">
          <h3>Send a Message</h3>
          <form>
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>

        {/* Right Half: Contact Information */}
        <div className="footer-contact">
          <h3>Contact Me</h3>
          <p>I am a Front-End Developer</p>
          <p>Email: binodchaudhary3850@gmail.com</p>
					<p>23800, Taulihawa-3 Kaplivastu, Nepal</p>
          <p>Phone: +997-9821451060</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={25} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={25} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={25} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={25} />
            </a>
          </div>
        </div>
      </div>

      <p className="footer-text">© 2024 Portfolio. All rights reserved. Designed by Binod Kurmi.</p>
    </footer>
  );
};

export default Footer;
