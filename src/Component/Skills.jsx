import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaReact, FaJs, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiTypescript, SiRedux, SiDocker, SiJest } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { RiHtml5Fill, RiCss3Fill } from "react-icons/ri";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const mainSkills = [
    {
      icon: <FaReact className="text-4xl" />,
      title: "React",
      description: "Building dynamic and interactive web applications with modern React features like hooks and context API.",
      color: "#61DAFB",
      tools: ["Hooks", "Context API", "React Router", "Suspense"]
    },
    {
      icon: <SiTailwindcss className="text-4xl" />,
      title: "Tailwind CSS",
      description: "Rapidly building custom designs with utility-first CSS framework for responsive interfaces.",
      color: "#06B6D4",
      tools: ["JIT Mode", "Dark Mode", "Custom Themes", "Animations"]
    },
    {
      icon: <FaJs className="text-4xl" />,
      title: "JavaScript",
      description: "Implementing ES6+ features, async/await, and design patterns for robust web applications.",
      color: "#F7DF1E",
      tools: ["ES6+", "Async/Await", "Promises", "Design Patterns"]
    },
    {
      icon: <FaNodeJs className="text-4xl" />,
      title: "Node.js",
      description: "Developing scalable server-side applications and RESTful APIs with Express middleware.",
      color: "#68A063",
      tools: ["Express", "Middleware", "File System", "Streams"]
    },
    {
      icon: <FaGitAlt className="text-4xl" />,
      title: "Git",
      description: "Version control and collaborative workflows using GitHub, GitLab, and CI/CD pipelines.",
      color: "#F05032",
      tools: ["GitHub", "GitLab", "CI/CD", "Rebasing"]
    },
    {
      icon: <SiMongodb className="text-4xl" />,
      title: "MongoDB",
      description: "Designing NoSQL database schemas and performing CRUD operations with Mongoose ODM.",
      color: "#47A248",
      tools: ["Mongoose", "Aggregation", "Indexing", "Transactions"]
    }
  ];

  const otherSkills = [
    { name: "HTML5", icon: <RiHtml5Fill className="text-2xl" />, color: "#E34F26" },
    { name: "CSS3", icon: <RiCss3Fill className="text-2xl" />, color: "#1572B6" },
    { name: "TypeScript", icon: <SiTypescript className="text-2xl" />, color: "#3178C6" },
    { name: "Redux", icon: <SiRedux className="text-2xl" />, color: "#764ABC" },
    { name: "REST APIs", icon: <TbApi className="text-2xl" />, color: "#00A98F" },
    { name: "Jest", icon: <SiJest className="text-2xl" />, color: "#C21325" },
    { name: "Docker", icon: <SiDocker className="text-2xl" />, color: "#2496ED" },
    { name: "Express.js", icon: <FaNodeJs className="text-2xl" />, color: "#68A063" }
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
      {/* Background elements - reduced size for mobile */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-60 sm:h-60 rounded-full bg-[#61DAFB] blur-[60px] sm:blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 sm:w-80 sm:h-80 rounded-full bg-[#F05032] blur-[60px] sm:blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - adjusted for mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FD6F00] via-[#ff9a3c] to-[#FD6F00] animate-gradient">
              Technical Expertise
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-2 sm:px-0">
            Technologies I've mastered and the tools I use to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Grid - adjusted gap and padding for mobile */}
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
              {/* Glow effect - reduced for mobile */}
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
            </motion.div>
          ))}
        </div>

        {/* Additional Skills - adjusted for mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 sm:mt-20 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">Other Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={chipVariants}
                whileHover={{ y: -2 }}
                className="flex items-center gap-1 sm:gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm"
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
      </div>
    </section>
  );
};

export default Skills;