import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaReact, 
  FaJs, 
  FaJava, 
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaDatabase
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiOracle
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const mainSkills = [
    {
      icon: <FaReact className="text-4xl" />,
      title: "React",
      description: "Building dynamic and interactive web applications with modern React features like hooks and component-based architecture.",
      color: "#61DAFB",
      tools: ["Components", "Hooks", "JSX", "State Management"]
    },
    {
      icon: <FaJs className="text-4xl" />,
      title: "JavaScript",
      description: "Implementing ES6+ features, DOM manipulation, and asynchronous programming for dynamic web experiences.",
      color: "#F7DF1E",
      tools: ["ES6+", "DOM Manipulation", "Async/Await", "Event Handling"]
    },
    {
      icon: <FaJava className="text-4xl" />,
      title: "Core Java",
      description: "Strong foundation in Java programming with OOP concepts, data structures, and backend logic implementation.",
      color: "#E34F26",
      tools: ["OOP", "Collections", "Exception Handling", "Multithreading"]
    },
    {
      icon: <SiTailwindcss className="text-4xl" />,
      title: "Tailwind CSS",
      description: "Rapidly building responsive and modern user interfaces with utility-first CSS framework.",
      color: "#06B6D4",
      tools: ["Responsive Design", "Custom Utilities", "Dark Mode", "Animations"]
    },
    {
      icon: <FaBootstrap className="text-4xl" />,
      title: "Bootstrap",
      description: "Creating responsive, mobile-first websites with the world's most popular CSS framework.",
      color: "#7952B3",
      tools: ["Grid System", "Components", "Utilities", "Custom Themes"]
    },
    {
      icon: <SiMongodb className="text-4xl" />,
      title: "MongoDB",
      description: "Working with NoSQL databases for flexible data storage and retrieval in modern applications.",
      color: "#47A248",
      tools: ["CRUD Operations", "Aggregation", "Indexing", "Data Modeling"]
    }
  ];

  const otherSkills = [
    { name: "HTML5", icon: <FaHtml5 className="text-2xl" />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt className="text-2xl" />, color: "#1572B6" },
    { name: "MySQL", icon: <SiMysql className="text-2xl" />, color: "#4479A1" },
    { name: "Oracle", icon: <SiOracle className="text-2xl" />, color: "#F80000" },
    { name: "Git", icon: <FaGitAlt className="text-2xl" />, color: "#F05032" },
    { name: "GitHub", icon: <FaGithub className="text-2xl" />, color: "#FFFFFF" },
    { name: "Figma", icon: <FaFigma className="text-2xl" />, color: "#F24E1E" },
    { name: "REST APIs", icon: <TbApi className="text-2xl" />, color: "#00A98F" }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const chipVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6 + (i * 0.05),
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="skills" className="relative w-full bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] py-12 sm:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-60 sm:h-60 rounded-full bg-[#61DAFB] blur-[60px] sm:blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 sm:w-80 sm:h-80 rounded-full bg-[#E34F26] blur-[60px] sm:blur-[120px]"></div>
        <div className="absolute top-3/4 left-1/2 w-40 h-40 sm:w-60 sm:h-60 rounded-full bg-[#47A248] blur-[60px] sm:blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FD6F00] via-[#ff9a3c] to-[#FD6F00] animate-gradient">
              My Tech Stack
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-2 sm:px-0">
            Frontend developer with strong Core Java knowledge - building complete web solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {mainSkills.map((skill, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="relative group overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#111] to-[#1a1a1a] border border-[#222] p-4 sm:p-6"
              style={{ boxShadow: `0 4px 20px ${skill.color}20` }}
            >
              {/* Glow effect */}
              <div 
                className="absolute -inset-0.5 sm:-inset-1 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ 
                  background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)`,
                  filter: 'blur(12px)'
                }}
              ></div>

              <div className="relative z-10">
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6"
                  style={{ 
                    backgroundColor: `${skill.color}10`,
                    border: `1px solid ${skill.color}30`
                  }}
                >
                  <span style={{ color: skill.color }}>{skill.icon}</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{skill.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-5">{skill.description}</p>
                
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {skill.tools.map((tool, i) => (
                    <span 
                      key={i}
                      className="text-[10px] xs:text-xs px-2 py-0.5 sm:px-3 sm:py-1 rounded-full backdrop-blur-sm"
                      style={{ 
                        backgroundColor: `${skill.color}15`,
                        border: `1px solid ${skill.color}30`,
                        color: skill.color
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skill level indicator */}
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent to-current"
                style={{ color: skill.color }}
                initial={{ width: "0%" }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 sm:mt-20 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">Additional Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={chipVariants}
                whileHover={{ 
                  y: -2,
                  boxShadow: `0 0 15px ${skill.color}40`
                }}
                className="flex items-center gap-1 sm:gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm cursor-default"
                style={{ 
                  backgroundColor: `${skill.color}10`,
                  border: `1px solid ${skill.color}30`
                }}
              >
                <span style={{ color: skill.color }}>{skill.icon}</span>
                <span className="text-xs sm:text-sm text-gray-300 font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Java Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30">
            <FaJava className="text-2xl text-red-500" />
            <span className="text-gray-300">
              <span className="text-white font-semibold">Core Java</span> - OOP, Collections, Exception Handling, Multithreading
            </span>
          </div>
        </motion.div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [null, -30, null],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;