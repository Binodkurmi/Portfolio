import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);

    formData.append('access_key', 'a7dfd100-2d0e-4ded-a60c-51f44779714c');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Message sent successfully!');
        event.target.reset();
      } else {
        setResult('Error: ' + data.message);
      }
    } catch (error) {
      setResult('An unexpected error occurred. Please try again later.');
    }

    setTimeout(() => setResult(''), 3000);
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Form Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
          <form onSubmit={onSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 h-32 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition duration-300"
            >
              Send
            </button>
            {result && (
              <p className="text-sm text-green-400 mt-2">{result}</p>
            )}
          </form>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Me</h3>
          <p className="mb-2">I am a FullStack Developer</p>
          <p className="mb-2">Email: binodchaudhary3850@gmail.com</p>
          <p className="mb-2">23800, Kaplivastu-3 Taulihawa</p>
          <p className="mb-4">Phone: +997-9821451060</p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebook size={25} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <FaInstagram size={25} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <FaLinkedin size={25} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
              <FaTwitter size={25} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <p className="mt-10 text-center text-sm text-gray-400">
        © 2024 Portfolio. All rights reserved. Designed by Binod Kurmi.
      </p>
    </footer>
  );
};

export default Footer;
