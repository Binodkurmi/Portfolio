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
    <footer id="contact" className="bg-[#121212] text-white px-6 py-12 border-t border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Form Section */}
        <div>
          <h3 className="text-3xl font-bold mb-6">
            <span className="text-[#707070]">SEND </span>
            <span className="text-[#959595]">A MESSAGE</span>
          </h3>
          <form onSubmit={onSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-[#1e1e1e] text-white border border-[#3a3a3a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD6F00]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-[#1e1e1e] text-white border border-[#3a3a3a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD6F00]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 h-32 bg-[#1e1e1e] text-white border border-[#3a3a3a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD6F00]"
            ></textarea>
        <button
  type="submit"
  className="bg-[#FD6F00] hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold block mx-auto md:mx-0"
>
  Send Message
</button>
            {result && (
              <p className={`text-sm mt-2 ${result.includes('Error') ? 'text-red-400' : 'text-green-400'}`}>
                {result}
              </p>
            )}
          </form>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-3xl font-bold mb-6">
            <span className="text-[#707070]">CONTACT </span>
            <span className="text-[#959595]">ME</span>
          </h3>
          <div className="bg-gradient-to-b from-[#464141] via-[#BABABA] to-[#464141] p-6 rounded-lg">
            <p className="text-gray-300 mb-4 text-lg">
              I am a FullStack Developer passionate about creating web applications.
            </p>
            <div className="space-y-3">
              <p className="flex items-center text-gray-300">
                <span className="text-[#FD6F00] font-semibold mr-2">Email:</span> 
                binodchaudhary3850@gmail.com
              </p>
              <p className="flex items-center text-gray-300">
                <span className="text-[#FD6F00] font-semibold mr-2">Address:</span> 
                23800, Kaplivastu-3 Taulihawa
              </p>
              <p className="flex items-center text-gray-300">
                <span className="text-[#FD6F00] font-semibold mr-2">Phone:</span> 
                +977-9821451060
              </p>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-300 mb-4">Connect with me:</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FD6F00] transition-colors duration-300">
                  <FaFacebook size={25} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FD6F00] transition-colors duration-300">
                  <FaInstagram size={25} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FD6F00] transition-colors duration-300">
                  <FaLinkedin size={25} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FD6F00] transition-colors duration-300">
                  <FaTwitter size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="mt-12 pt-6 border-t border-[#2a2a2a]">
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Portfolio. All rights reserved. Designed by Binod Kurmi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;