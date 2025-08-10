import React, { useState, useRef } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const [result, setResult] = useState('');
  const formRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
        formRef.current.reset();
      } else {
        setResult('Error: ' + data.message);
      }
    } catch (error) {
      setResult('An unexpected error occurred. Please try again later.');
    }

    setTimeout(() => setResult(''), 3000);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer 
      id="contact" 
      className="bg-[#0a0a0a] text-white px-6 py-16 border-t border-[#222]"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Glowing accent elements */}
        <div className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FD6F00] to-transparent opacity-20"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section with animations */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#FD6F00] to-[#ff9a3c]">
              Let's Collaborate
            </h3>
            <form ref={formRef} onSubmit={onSubmit} className="space-y-5">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  required
                  className="w-full px-5 py-4 bg-[#111] text-white border border-[#333] rounded-xl focus:outline-none focus:border-[#FD6F00] peer transition-all duration-300"
                />
                <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-translate-y-10 peer-focus:text-sm peer-focus:text-[#FD6F00] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base">
                  Your Name
                </label>
              </div>
              
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  required
                  className="w-full px-5 py-4 bg-[#111] text-white border border-[#333] rounded-xl focus:outline-none focus:border-[#FD6F00] peer transition-all duration-300"
                />
                <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-translate-y-10 peer-focus:text-sm peer-focus:text-[#FD6F00] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base">
                  Your Email
                </label>
              </div>
              
              <div className="relative group">
                <textarea
                  name="message"
                  placeholder=" "
                  required
                  className="w-full px-5 py-4 h-40 bg-[#111] text-white border border-[#333] rounded-xl focus:outline-none focus:border-[#FD6F00] peer transition-all duration-300 resize-none"
                ></textarea>
                <label className="absolute left-4 top-5 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-translate-y-8 peer-focus:text-sm peer-focus:text-[#FD6F00] peer-placeholder-shown:top-5 peer-placeholder-shown:text-base">
                  Your Message
                </label>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden bg-gradient-to-r from-[#FD6F00] to-[#ff9a3c] text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 group"
              >
                <span className="relative z-10">Send Message</span>
                <FaPaperPlane className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-0 bg-gradient-to-r from-[#ff9a3c] to-[#FD6F00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.button>
              
              {result && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`text-sm mt-3 ${result.includes('Error') ? 'text-red-400' : 'text-green-400'}`}
                >
                  {result}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <h3 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#FD6F00] to-[#ff9a3c]">
              Get In Touch
            </h3>
            
            <div className="bg-gradient-to-br from-[#111] to-[#1a1a1a] p-8 rounded-2xl border border-[#222] shadow-lg shadow-[#FD6F00]/10">
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                I'm passionate about crafting digital experiences that matter. Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FD6F00]/10 rounded-lg text-[#FD6F00]">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:binodchaudhary3850@gmail.com" className="text-gray-200 hover:text-[#FD6F00] transition-colors">
                      binodchaudhary3850@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FD6F00]/10 rounded-lg text-[#FD6F00]">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-gray-200">23800, Kapilvastu-3 Taulihawa</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FD6F00]/10 rounded-lg text-[#FD6F00]">
                    <FaPhone size={18} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+9779821451060" className="text-gray-200 hover:text-[#FD6F00] transition-colors">
                      +977-9821451060
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-xl font-semibold text-gray-300 mb-5">Connect with me</h4>
                <div className="flex gap-5">
                  {[
                    { icon: <FaFacebook size={22} />, url: "https://facebook.com" },
                    { icon: <FaInstagram size={22} />, url: "https://instagram.com" },
                    { icon: <FaLinkedin size={22} />, url: "https://linkedin.com" },
                    { icon: <FaTwitter size={22} />, url: "https://twitter.com" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className="p-3 bg-[#222] text-gray-300 hover:text-[#FD6F00] rounded-lg transition-all duration-300 hover:bg-[#2a2a2a]"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-[#222]"
        >
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} <span className="text-[#FD6F00]">Binod Kurmi</span>. All rights reserved. Crafted with passion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;