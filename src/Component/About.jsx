import React from "react";
import { FaJs, FaReact, FaJava, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiSpring,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import { motion } from "framer-motion";

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  // Grouped techs by category for multi-layer orbit
  const orbitTechs = {
    frontend: [
      { icon: <FaReact className="text-5xl text-cyan-400" />, name: "React", spinSpeed: 8 },
      { icon: <SiTypescript className="text-5xl text-blue-500" />, name: "TypeScript", spinSpeed: -10 },
      { icon: <FaJs className="text-5xl text-yellow-400" />, name: "JavaScript", spinSpeed: 13 },
      { icon: <SiTailwindcss className="text-5xl text-cyan-300" />, name: "Tailwind", spinSpeed: -8 },
    ],
    backend: [
      { icon: <FaJava className="text-5xl text-red-500" />, name: "Java", spinSpeed: 12 },
      { icon: <SiSpring className="text-5xl text-green-500" />, name: "Spring", spinSpeed: -7 },
      { icon: <FaNodeJs className="text-5xl text-green-600" />, name: "Node.js", spinSpeed: 15 },
      { icon: <SiExpress className="text-5xl text-gray-300" />, name: "Express", spinSpeed: -9 },
    ],
    database: [
      { icon: <SiMongodb className="text-5xl text-green-400" />, name: "MongoDB", spinSpeed: 11 },
      { icon: <SiPostgresql className="text-5xl text-blue-400" />, name: "PostgreSQL", spinSpeed: -14 },
    ],
    devops: [
      { icon: <SiDocker className="text-5xl text-blue-300" />, name: "Docker", spinSpeed: 10 },
      { icon: <SiKubernetes className="text-5xl text-blue-400" />, name: "Kubernetes", spinSpeed: -12 },
    ]
  };

  // 3D orbit positions
  const getOrbitPosition = (orbitIndex, itemIndex, totalItems) => {
    const orbitRadius = [180, 220, 260, 300]; // Different radii for each orbit
    const angle = (itemIndex * 360) / totalItems;
    const radians = (angle * Math.PI) / 180;
    
    return {
      x: Math.cos(radians) * orbitRadius[orbitIndex],
      y: Math.sin(radians) * orbitRadius[orbitIndex],
      z: orbitIndex * 20 // Simulate depth for 3D effect
    };
  };

  return (
    <section
      id="about"
      className="w-full bg-gradient-to-b from-[#0a0a0a] to-[#111111] px-6 sm:px-10 md:px-20 py-28 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#E60026]/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-[#FD6F00]/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <motion.span
            variants={textVariants}
            className="text-xs uppercase tracking-[0.3em] text-[#FD6F00] font-mono block mb-4"
          >
            Who Am I?
          </motion.span>
          <motion.h2
            variants={textVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FA6E00] via-[#FD6F00] to-[#E60026]"
          >
            <span className="text-gray-100">About</span> Me
          </motion.h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content - Your original text stays here exactly as you had it */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 relative z-10"
          >
            <motion.p
              variants={textVariants}
              className="text-gray-300/90 text-lg sm:text-xl leading-relaxed"
            >
              I'm a{" "}
              <span className="text-[#FD6F00] font-medium relative inline-block">
                <span className="relative z-10">Full Stack Developer</span>
              </span>{" "}
              with expertise in both{" "}
              <span className="text-gray-200 font-medium">JavaScript</span> and{" "}
              <span className="text-gray-200 font-medium">Java</span>{" "}
              ecosystems, building modern web applications with cutting-edge technologies.
            </motion.p>

            <motion.p
              variants={textVariants}
              className="text-gray-300/90 text-lg sm:text-xl leading-relaxed"
            >
              My tech stack enables me to create{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FA6E00] via-[#FD6F00] to-[#E60026] font-medium">
                high-performance applications
              </span>{" "}
              from interactive UIs to scalable backend services and cloud infrastructure.
            </motion.p>

            <motion.div variants={textVariants} className="flex flex-wrap gap-3 mt-8">
              {[
                "Web Architecture",
                "Microservices",
                "REST APIs",
                "Database Design",
                "Cloud Deployment",
                "CI/CD",
                "Containerization",
                "State Management",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[#1a1a1a] text-gray-300 text-sm rounded-full border border-[#2a2a2a] hover:bg-[#2a2a2a] hover:border-[#FD6F00]/50 hover:text-white transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Orbital Animation - New enhanced version */}
          <div className="flex flex-col items-center relative z-10">
            <div className="relative w-[700px] h-[700px] flex items-center justify-center perspective-1000">
              {/* Glowing Center Profile */}
              <motion.div 
                className="relative z-20 rounded-full"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 3,
                  ease: "easeInOut"
                }}
              >
                <div className="p-1 rounded-full bg-gradient-to-br from-[#FD6F00] to-[#E60026] relative">
                  <motion.img
                    src="/Profile.png"
                    alt="Profile"
                    className="w-64 h-64 object-cover rounded-full border-4 border-[#0a0a0a]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 rounded-full bg-[#FD6F00] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
                </div>
              </motion.div>

              {/* Multiple Orbiting Layers */}
              {Object.entries(orbitTechs).map(([category, techs], orbitIndex) => (
                <motion.div
                  key={category}
                  className="absolute inset-0"
                  animate={{ 
                    rotateY: orbitIndex % 2 === 0 ? 360 : -360,
                    rotateX: orbitIndex % 3 === 0 ? 15 : -15 
                  }}
                  transition={{
                    rotateY: {
                      repeat: Infinity,
                      duration: 40 + orbitIndex * 10,
                      ease: "linear"
                    },
                    rotateX: {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 15 + orbitIndex * 5,
                      ease: "easeInOut"
                    }
                  }}
                >
                  {/* Orbit Path Visualization (optional) */}
                  <div className={`absolute inset-0 rounded-full border ${
                    orbitIndex === 0 ? "border-cyan-400/20" : 
                    orbitIndex === 1 ? "border-green-500/20" : 
                    orbitIndex === 2 ? "border-blue-400/20" : "border-purple-500/20"
                  }`} style={{
                    top: `${50 - (180 + orbitIndex * 40)}px`,
                    left: `${50 - (180 + orbitIndex * 40)}px`,
                    width: `${360 + orbitIndex * 80}px`,
                    height: `${360 + orbitIndex * 80}px`
                  }} />
                  
                  {/* Tech Icons */}
                  {techs.map((tech, techIndex) => {
                    const pos = getOrbitPosition(orbitIndex, techIndex, techs.length);
                    return (
                      <motion.div
                        key={`${category}-${techIndex}`}
                        className="absolute"
                        style={{
                          left: '50%',
                          top: '50%',
                          x: pos.x,
                          y: pos.y,
                          z: pos.z,
                          transform: 'translate(-50%, -50%)'
                        }}
                        animate={{
                          y: [0, -20 * (orbitIndex + 1), 0],
                          opacity: [0.8, 1, 0.8],
                          scale: [0.9, 1.1, 0.9]
                        }}
                        transition={{
                          y: {
                            repeat: Infinity,
                            duration: 4 + Math.random() * 3 + orbitIndex,
                            ease: "easeInOut"
                          },
                          opacity: {
                            repeat: Infinity,
                            duration: 5 + Math.random() * 2,
                            ease: "easeInOut"
                          },
                          scale: {
                            repeat: Infinity,
                            duration: 3 + Math.random() * 2 + orbitIndex,
                            ease: "easeInOut"
                          }
                        }}
                      >
                        <motion.div
                          className="relative group"
                          whileHover={{ 
                            scale: 1.3,
                            z: 50,
                            transition: { duration: 0.3 }
                          }}
                          animate={{
                            rotateY: 360,
                            rotateZ: orbitIndex % 2 === 0 ? 10 : -10
                          }}
                          transition={{
                            rotateY: {
                              repeat: Infinity,
                              duration: tech.spinSpeed * (orbitIndex + 1),
                              ease: "linear"
                            },
                            rotateZ: {
                              repeat: Infinity,
                              repeatType: "reverse",
                              duration: 8 + orbitIndex * 2,
                              ease: "easeInOut"
                            }
                          }}
                        >
                          {tech.icon}
                          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap bg-black/90 px-3 py-1 rounded-full shadow-lg">
                            {tech.name}
                          </span>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;