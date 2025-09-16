import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { RiSendPlaneFill } from 'react-icons/ri';

const Home = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-white pt-20 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#FD6F00] blur-[80px]"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-[#984300] blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left Side - Content */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center lg:text-left w-full lg:w-1/2 relative z-10"
        >
          <motion.div variants={itemVariants} className="mb-2">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#FD6F00]/10 text-[#FD6F00] rounded-full">
              FULLSTACK DEVELOPER
            </span>
          </motion.div>
<motion.h1 
  variants={itemVariants} 
  className="text-3xl xs:text-2xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-5 leading-snug"
>
  <span className="block text-gray-400">Hi, I'm</span>
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FD6F00] via-[#ff9a3c] to-[#FD6F00] animate-gradient">
    Binod Kurmi
  </span>
</motion.h1>


          <motion.p variants={itemVariants} className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed">
            Crafting <span className="text-[#FD6F00] font-medium">digital experiences</span> that blend innovation with intuitive design. Let's build something extraordinary.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mb-10 md:mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="relative overflow-hidden bg-gradient-to-r from-[#FD6F00] to-[#ff9a3c] text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 group min-w-[200px] justify-center"
            >
              <span>Hire Me</span>
              <RiSendPlaneFill className="transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 bg-gradient-to-r from-[#ff9a3c] to-[#FD6F00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Binod_kurmi_Resume.pdf"download
              className="relative overflow-hidden border-2 border-[#FD6F00] text-[#FD6F00] hover:text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 group min-w-[200px] justify-center"
            >
              <span>Download CV</span>
              <FaFileDownload />
              <span className="absolute inset-0 bg-[#FD6F00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
            </motion.a>
          </motion.div>

          

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="w-full max-w-md bg-[#111] border border-[#222] px-6 py-6 rounded-xl mx-auto lg:mx-0 backdrop-blur-sm"
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "10+", label: "Projects Done" },
                { value: "5+", label: "Happy Clients" }
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold text-[#FD6F00]">{stat.value}</p>
                  <p className="text-gray-400 font-medium mt-2 text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Image with floating animation */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="relative w-full flex justify-center items-center mb-12 lg:mb-0"
        >
          <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px]">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-[#FD6F00] opacity-10 blur-xl animate-pulse"></div>
            
            {/* Circular border with animation */}
            <motion.div
              animate={{
                rotate: 360,
                transition: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-[#FD6F00]/30"
            ></motion.div>
            
            {/* Main image container */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#222] to-[#111] overflow-hidden flex justify-center items-center shadow-2xl">
              <img
                src="/profile_ppsize.jpeg"
                alt="Binod Kurmi"
                className="w-full h-full object-cover scale-110"
              />
            </div>
            
            {/* Floating tech badges */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#111] border border-[#222] rounded-full shadow-lg"
            >
              <span className="text-sm text-center font-medium text-[#FD6F00]">Available for work</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;