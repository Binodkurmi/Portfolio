import React, { useState, useRef } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSend } from 'react-icons/fi';

const Footer = () => {
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult('Sending...');
    const formData = new FormData(event.target);

    formData.append('access_key', 'a7dfd100-2d0e-4ded-a60c-51f44779714c');

    try {
      await controls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 0.6 }
      });

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Message sent successfully!');
        await controls.start({
          backgroundColor: ['#FD6F00', '#4ade80'],
          transition: { duration: 0.4 }
        });
        formRef.current.reset();
      } else {
        setResult('Error: ' + data.message);
        await controls.start({
          backgroundColor: ['#FD6F00', '#f87171'],
          transition: { duration: 0.4 }
        });
      }
    } catch (error) {
      setResult('An unexpected error occurred. Please try again later.');
      await controls.start({
        backgroundColor: ['#FD6F00', '#f87171'],
        transition: { duration: 0.4 }
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setResult('');
        controls.start({
          backgroundColor: '#FD6F00',
          transition: { duration: 0.4 }
        });
      }, 3000);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#0a0a0a] text-white px-6 py-20 border-t border-[#222] overflow-hidden"
      ref={ref}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#FD6F00]/10 to-[#E60026]/10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-[#E60026]/10 to-[#FD6F00]/10 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>

      {/* Glowing border effect */}
      <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FD6F00] to-transparent opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form Section with animations */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <motion.h3
              className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#FD6F00] to-[#ff9a3c]"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              Let's Collaborate
            </motion.h3>

            <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.01 }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  required
                  className="w-full px-5 py-4 bg-[#111] text-white border border-[#333] rounded-xl focus:outline-none focus:border-[#FD6F00] peer transition-all duration-300 shadow-lg"
                />
                <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-translate-y-10 peer-focus:text-sm peer-focus:text-[#FD6F00] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base">
                  Your Name
                </label>
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FD6F00] to-[#ff9a3c] w-0 peer-focus:w-full transition-all duration-500"></div>
              </motion.div>

              <motion.div
                className="relative group"
                whileHover={{ scale: 1.01 }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  required
                  className="w-full px-5 py-4 bg-[#111] text-white border border-[#333] rounded-xl focus:outline-none focus:border-[#FD6F00] peer transition-all duration-300 shadow-lg"
                />
                <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-translate-y-10 peer-focus:text-sm peer-focus:text-[#FD6F00] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base">
                  Your Email
                </label>
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FD6F00] to-[#ff9a3c] w-0 peer-focus:w-full transition-all duration-500"></div>
              </motion.div>

              <motion.div
                className="relative group"
                whileHover={{ scale: 1.01 }}
              >
                <textarea
                  name="message"
                  placeholder=" "
                  required
                  className="w-full px-5 py-4 h-40 bg-[#111] text-white border border-[#333] rounded-xl focus:outline-none focus:border-[#FD6F00] peer transition-all duration-300 resize-none shadow-lg"
                ></textarea>
                <label className="absolute left-4 top-5 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-translate-y-8 peer-focus:text-sm peer-focus:text-[#FD6F00] peer-placeholder-shown:top-5 peer-placeholder-shown:text-base">
                  Your Message
                </label>
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FD6F00] to-[#ff9a3c] w-0 peer-focus:w-full transition-all duration-500"></div>
              </motion.div>
              <div className="relative">
                <motion.button
                  type="submit"
                  animate={controls}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 5px 15px rgba(253, 111, 0, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="relative overflow-hidden bg-gradient-to-r from-[#FD6F00] to-[#ff9a3c] text-white px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-3 group w-full shadow-lg"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <motion.span
                      animate={isSubmitting ? { opacity: 0 } : { opacity: 1 }}
                    >
                      Send Message
                    </motion.span>
                    <motion.div
                      animate={
                        isSubmitting
                          ? {
                            opacity: 1,
                            rotate: 360,
                            transition: {
                              rotate: {
                                repeat: Infinity,
                                duration: 1,
                                ease: "linear",
                              },
                            },
                          }
                          : { opacity: 0 }
                      }
                      className="absolute"
                    >
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                    </motion.div>
                  </span>
                  <FiSend className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute inset-0 bg-gradient-to-r from-[#ff9a3c] to-[#FD6F00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.button>
              </div>


              {result && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`text-sm mt-3 text-center ${result.includes('Error') ? 'text-red-400' : 'text-green-400'}`}
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
            <motion.h3
              className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#FD6F00] to-[#ff9a3c]"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              Get In Touch
            </motion.h3>

            <motion.div
              className="bg-gradient-to-br from-[#111] to-[#1a1a1a] p-8 rounded-2xl border border-[#222] shadow-xl shadow-[#FD6F00]/10 relative overflow-hidden"
              whileHover={{
                boxShadow: "0 10px 30px rgba(253, 111, 0, 0.1)"
              }}
            >
              {/* Floating elements */}
              <motion.div
                className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-[#FD6F00]/10 blur-xl"
                variants={floatingVariants}
                animate="float"
              />
              <motion.div
                className="absolute -bottom-5 -left-5 w-16 h-16 rounded-full bg-[#E60026]/10 blur-xl"
                variants={floatingVariants}
                animate="float"
                transition={{ delay: 1 }}
              />

              <p className="text-gray-300 mb-8 text-lg leading-relaxed relative z-10">
                I'm passionate about crafting digital experiences that matter. Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>

              <div className="space-y-3 relative z-10">
                <motion.div
                  className="flex items-start gap-4 p-2 bg-[#1a1a1a] rounded-xl hover:bg-[#222] transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-[#FD6F00]/10 rounded-lg text-[#FD6F00] group-hover:bg-[#FD6F00]/20 group-hover:scale-110 transition-all">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a href="mailto:binodchaudhary3850@gmail.com" className="text-gray-200 text-sm hover:text-[#FD6F00] transition-colors">
                      binodchaudhary3850@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 p-4 bg-[#1a1a1a] rounded-xl hover:bg-[#222] transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-[#FD6F00]/10 rounded-lg text-[#FD6F00] group-hover:bg-[#FD6F00]/20 group-hover:scale-110 transition-all">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <p className="text-gray-400 ">Location</p>
                    <p className="text-gray-200 text-sm">Kapilvastu, Taulihawa</p>
                    <p className='text-gray-200 text-sm'>Word No.: 3, Laxminagar</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 p-4 bg-[#1a1a1a] rounded-xl hover:bg-[#222] transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-[#FD6F00]/10 rounded-lg text-[#FD6F00] group-hover:bg-[#FD6F00]/20 group-hover:scale-110 transition-all">
                    <FaPhone size={18} />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <a href="tel:+9779821451060" className="text-sm text-gray-200 hover:text-[#FD6F00] transition-colors">
                      +977-9821451060
                    </a>
                  </div>
                </motion.div>
              </div>


            </motion.div>
          </motion.div>
        </div>
        <div className="mt-12 relative text-center justify-center z-10">
          <h4 className="text-xl font-semibold text-gray-300 mb-6">Connect with me</h4>
          <div className="flex gap-4 flex-wrap text-center justify-center">
            {[
              { icon: <FaFacebook size={20} />, url: "https://www.facebook.com/binod.chaudhary.102739", color: "#1877F2" },
              { icon: <FaInstagram size={20} />, url: "https://www.instagram.com/chaudhary_binod05", color: "#E4405F" },
              { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/binod-kurmi-98a255176", color: "#0A66C2" },
              { icon: <FaTwitter size={20} />, url: "https://x.com/kurmi_bino95734?s=21", color: "#1DA1F2" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -5,
                  scale: 1.1,
                  backgroundColor: social.color,
                  color: '#fff'
                }}
                className="p-3 bg-[#222]  text-gray-300 rounded-xl transition-all duration-300 flex items-center justify-center"
                style={{ width: 44, height: 44 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 pt-8 border-t border-[#222] relative"
        >
          <div className="absolute left-1/2 top-0 w-32 h-1 bg-gradient-to-r from-transparent via-[#FD6F00] to-transparent transform -translate-x-1/2 -translate-y-1/2"></div>
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} <span className="text-[#FD6F00] font-medium">Portfolio</span>. All rights reserved. Crafted with <span className="text-[#E60026]">❤️</span> and passion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;