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
import { motion, useMotionValue, useTransform } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1],
        delay: 0.2
      } 
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.4,
      },
    },
  };

  // 3D Tech Constellation
  const techConstellation = [
    // Core Technologies (closest to center)
    { 
      icon: <FaReact className="text-6xl text-cyan-400" />, 
      name: "React", 
      size: 1.2,
      glow: "shadow-[0_0_20px_rgba(34,211,238,0.5)]",
      orbit: { radius: 80, speed: 0.02, axis: "y" }
    },
    { 
      icon: <SiTypescript className="text-6xl text-blue-500" />, 
      name: "TypeScript", 
      size: 1.1,
      glow: "shadow-[0_0_20px_rgba(49,120,198,0.5)]",
      orbit: { radius: 80, speed: -0.015, axis: "x" }
    },
    
    // Middle Orbit
    { 
      icon: <FaJava className="text-5xl text-red-500" />, 
      name: "Java", 
      size: 1,
      glow: "shadow-[0_0_15px_rgba(239,68,68,0.4)]",
      orbit: { radius: 140, speed: 0.012, axis: "z" }
    },
    { 
      icon: <SiSpring className="text-5xl text-green-500" />, 
      name: "Spring", 
      size: 0.9,
      glow: "shadow-[0_0_15px_rgba(74,222,128,0.4)]",
      orbit: { radius: 140, speed: -0.018, axis: "y" }
    },
    { 
      icon: <FaNodeJs className="text-5xl text-green-600" />, 
      name: "Node.js", 
      size: 0.95,
      glow: "shadow-[0_0_15px_rgba(22,163,74,0.4)]",
      orbit: { radius: 140, speed: 0.025, axis: "x" }
    },
    
    // Outer Orbit
    { 
      icon: <SiMongodb className="text-5xl text-green-400" />, 
      name: "MongoDB", 
      size: 0.85,
      glow: "shadow-[0_0_12px_rgba(52,211,153,0.3)]",
      orbit: { radius: 200, speed: -0.01, axis: "y" }
    },
    { 
      icon: <SiPostgresql className="text-5xl text-blue-400" />, 
      name: "PostgreSQL", 
      size: 0.85,
      glow: "shadow-[0_0_12px_rgba(96,165,250,0.3)]",
      orbit: { radius: 200, speed: 0.015, axis: "z" }
    },
    { 
      icon: <SiDocker className="text-5xl text-blue-300" />, 
      name: "Docker", 
      size: 0.8,
      glow: "shadow-[0_0_12px_rgba(147,197,253,0.3)]",
      orbit: { radius: 200, speed: -0.022, axis: "x" }
    },
    { 
      icon: <SiKubernetes className="text-5xl text-blue-400" />, 
      name: "Kubernetes", 
      size: 0.8,
      glow: "shadow-[0_0_12px_rgba(59,130,246,0.3)]",
      orbit: { radius: 200, speed: 0.018, axis: "y" }
    },
    
    // Floating Decoratives
    { 
      icon: <FaJs className="text-4xl text-yellow-400" />, 
      name: "JavaScript", 
      size: 0.7,
      glow: "shadow-[0_0_10px_rgba(234,179,8,0.3)]",
      orbit: { radius: 260, speed: 0.03, axis: "z" }
    },
    { 
      icon: <SiTailwindcss className="text-4xl text-cyan-300" />, 
      name: "Tailwind", 
      size: 0.7,
      glow: "shadow-[0_0_10px_rgba(103,232,249,0.3)]",
      orbit: { radius: 260, speed: -0.025, axis: "x" }
    },
    { 
      icon: <SiExpress className="text-4xl text-gray-300" />, 
      name: "Express", 
      size: 0.7,
      glow: "shadow-[0_0_10px_rgba(209,213,219,0.3)]",
      orbit: { radius: 260, speed: 0.02, axis: "y" }
    }
  ];

  // Interactive mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Particles configuration
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <section
      id="about"
      className="w-full bg-gradient-to-b from-[#0a0a0a] to-[#111111] px-6 sm:px-10 md:px-20 py-28 relative overflow-hidden"
    >
      {/* Animated Particle Background */}
      <div className="absolute inset-0 opacity-40">
        <Particles
          init={particlesInit}
          options={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: ["#FD6F00", "#E60026", "#FA6E00"]
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000"
                }
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: true,
                  speed: 2,
                  size_min: 0.3,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#333",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: true,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "grab"
                },
                onclick: {
                  enable: true,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 140,
                  line_linked: {
                    opacity: 1
                  }
                },
                push: {
                  particles_nb: 4
                }
              }
            },
            retina_detect: true
          }}
        />
      </div>

      {/* Floating Gradient Spheres */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-gradient-to-br from-[#E60026] to-[#FD6F00] opacity-10 blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#FD6F00] to-[#FA6E00] opacity-10 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1]
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

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.span
            variants={textVariants}
            className="text-xs uppercase tracking-[0.3em] text-[#FD6F00] font-mono block mb-3"
          >
            Who Am I?
          </motion.span>
          <motion.h2
            variants={textVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FA6E00] via-[#FD6F00] to-[#E60026]"
          >
            <span className="text-gray-100">About</span> Me
          </motion.h2>
          <motion.div 
            variants={textVariants}
            className="w-24 h-1 bg-gradient-to-r from-[#FD6F00] to-[#E60026] mt-4"
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
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
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FD6F00]/40 -z-1 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
              </span>{" "}
              with expertise in both{" "}
              <span className="text-gray-200 font-medium relative group">
                <span className="relative z-10">JavaScript</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400/40 -z-1 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 delay-100" />
              </span>{" "}
              and{" "}
              <span className="text-gray-200 font-medium relative group">
                <span className="relative z-10">Java</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500/40 -z-1 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 delay-150" />
              </span>{" "}
              ecosystems, crafting immersive digital experiences with cutting-edge technologies.
            </motion.p>

            <motion.p
              variants={textVariants}
              className="text-gray-300/90 text-lg sm:text-xl leading-relaxed"
            >
              My passion lies in architecting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FA6E00] via-[#FD6F00] to-[#E60026] font-medium">
                scalable solutions
              </span>{" "}
              that bridge elegant interfaces with robust backend systems, optimized for performance and maintainability.
            </motion.p>

            <motion.div 
              variants={textVariants}
              className="flex flex-wrap gap-3 mt-8"
            >
              {[
                "System Architecture",
                "Microservices",
                "GraphQL/REST",
                "Database Optimization",
                "Cloud Infrastructure",
                "CI/CD Pipelines",
                "Container Orchestration",
                "State Management",
                "Web Performance",
                "Type Safety",
                "DevOps Automation",
                "API Design"
              ].map((skill, i) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-[#1a1a1a] text-gray-300 text-sm rounded-full border border-[#2a2a2a] hover:bg-[#2a2a2a] hover:border-[#FD6F00]/50 hover:text-white transition-all duration-300 cursor-default"
                  whileHover={{
                    y: -3,
                    scale: 1.05,
                    boxShadow: "0 5px 15px -5px rgba(253, 111, 0, 0.3)"
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Tech Constellation */}
          <div 
            className="relative w-full h-[500px] flex items-center justify-center perspective-1000 mx-auto"
            onMouseMove={handleMouseMove}
          >
            {/* Interactive Center Profile */}
            <motion.div 
              className="relative z-30 rounded-full group"
              style={{
                x: useTransform(mouseX, [-10, 10], [5, -5]),
                y: useTransform(mouseY, [-10, 10], [5, -5]),
                rotateX: useTransform(mouseY, [-100, 100], [5, -5]),
                rotateY: useTransform(mouseX, [-100, 100], [-5, 5])
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ 
                scale: 1,
                opacity: 1,
                rotate: 5
              }}
              transition={{
                scale: {
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                },
                rotate: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 8,
                  ease: "easeInOut"
                }
              }}
              whileHover={{
                scale: 1.05,
                transition: { 
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1]
                }
              }}
            >
              <div className="relative p-1.5 rounded-full bg-gradient-to-br from-[#FD6F00] to-[#E60026] shadow-lg shadow-[#FD6F00]/30">
                <div className="relative overflow-hidden rounded-full border-4 border-[#0a0a0a]">
                  <motion.img
                    src="/Profile.png"
                    alt="Profile"
                    className="w-48 h-48 object-cover"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.5 }
                    }}
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#FD6F00] to-[#E60026] opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500 -z-10" />
              </div>
              
              {/* Pulsing Rings */}
              {[1, 1.5, 2].map((scale, i) => (
                <motion.div 
                  key={i}
                  className="absolute inset-0 rounded-full border-2 border-[#FD6F00]/20 -z-20"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{
                    scale: scale,
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    scale: {
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "easeOut"
                    },
                    opacity: {
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "easeOut"
                    },
                    delay: i * 0.5
                  }}
                />
              ))}
            </motion.div>

            {/* 3D Tech Constellation */}
            {techConstellation.map((tech, i) => {
              const angle = (i * 360) / techConstellation.length;
              const radians = (angle * Math.PI) / 180;
              const radius = tech.orbit.radius;
              const x = Math.cos(radians) * radius;
              const y = Math.sin(radians) * radius;
              
              return (
                <motion.div
                  key={i}
                  className={`absolute ${tech.glow} transition-all duration-300`}
                  style={{
                    left: '50%',
                    top: '50%',
                    x: useTransform(mouseX, [-100, 100], [x, x + 10]),
                    y: useTransform(mouseY, [-100, 100], [y, y + 10]),
                    z: 0,
                    scale: tech.size
                  }}
                  animate={{
                    [tech.orbit.axis]: 360,
                    y: [y, y + (Math.random() * 30 - 15), y],
                    opacity: [0.7, 1, 0.7],
                    scale: [tech.size * 0.9, tech.size * 1.1, tech.size * 0.9]
                  }}
                  transition={{
                    [tech.orbit.axis]: {
                      repeat: Infinity,
                      duration: 30 / Math.abs(tech.orbit.speed),
                      ease: "linear"
                    },
                    y: {
                      repeat: Infinity,
                      duration: 4 + Math.random() * 3,
                      ease: "easeInOut"
                    },
                    opacity: {
                      repeat: Infinity,
                      duration: 3 + Math.random() * 2,
                      ease: "easeInOut"
                    },
                    scale: {
                      repeat: Infinity,
                      duration: 2 + Math.random() * 2,
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{
                    scale: tech.size * 1.4,
                    z: 50,
                    transition: { 
                      type: "spring",
                      stiffness: 300,
                      damping: 10
                    }
                  }}
                >
                  <motion.div 
                    className="relative flex flex-col items-center"
                    whileHover={{
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="p-2 rounded-full bg-black/50 backdrop-blur-sm border border-[#2a2a2a]/50 hover:bg-[#1a1a1a] hover:border-[#FD6F00]/30 transition-all duration-300">
                      {tech.icon}
                    </div>
                    <motion.span 
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap bg-black/90 px-3 py-1 rounded-full shadow-lg border border-[#2a2a2a]"
                      initial={{ opacity: 0 }}
                      whileHover={{
                        opacity: 1,
                        y: -5,
                        transition: { delay: 0.1 }
                      }}
                    >
                      {tech.name}
                    </motion.span>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {techConstellation.slice(0, 4).map((_, i) => {
                const nextIndex = (i + 1) % techConstellation.length;
                const angle = (i * 360 / 4) * (Math.PI / 180);
                const x = Math.cos(angle) * 80;
                const y = Math.sin(angle) * 80;
                
                return (
                  <motion.line
                    key={i}
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${x}px)`}
                    y2={`calc(50% + ${y}px)`}
                    stroke="rgba(253, 111, 0, 0.1)"
                    strokeWidth="1"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{
                      opacity: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.3
                      }
                    }}
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;