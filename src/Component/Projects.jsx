import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { FiCode } from 'react-icons/fi';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration, product management, and user authentication.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      image: "/Profile3.PNG",
      accentColor: "#FD6F00"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Kanban-style productivity application with drag-and-drop functionality and team collaboration.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "#",
      live: "#",
      image: "/taskapp.jpg",
      accentColor: "#6366F1"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern responsive portfolio showcasing skills and projects with smooth animations.",
      tags: ["React", "Framer Motion", "Tailwind"],
      github: "https://github.com/Binodkurmi/Portfolio",
      live: "https://binodkurmi.netlify.app",
      image: "/Profiles1.PNG",
      accentColor: "#10B981"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather forecasting application with location detection and 5-day outlook.",
      tags: ["JavaScript", "API Integration", "Chart.js"],
      github: "#",
      live: "#",
      image: "/Profile2.PNG",
      accentColor: "#3B82F6"
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for tracking social media metrics and engagement statistics.",
      tags: ["React", "D3.js", "Express"],
      github: "#",
      live: "#",
      image: "/social.jpg",
      accentColor: "#8B5CF6"
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "Search thousands of recipes with filtering by dietary restrictions and ingredients.",
      tags: ["Vue.js", "Spoonacular API", "Vuetify"],
      github: "#",
      live: "#",
      image: "/recipe.jpg",
      accentColor: "#EC4899"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="projects" className="relative bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] py-12 sm:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background elements - adjusted for mobile */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-4 sm:left-10 w-40 h-40 sm:w-60 sm:h-60 rounded-full bg-[#FD6F00] blur-[60px] sm:blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-4 sm:right-20 w-48 h-48 sm:w-80 sm:h-80 rounded-full bg-[#3B82F6] blur-[80px] sm:blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - adjusted for mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FD6F00] via-[#ff9a3c] to-[#FD6F00] animate-gradient">
              Featured Projects
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            A curated selection of my best work. Each project represents unique challenges and creative solutions.
          </p>
        </motion.div>

        {/* Projects Grid - adjusted for mobile */}
        <div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-br from-transparent via-black/50 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              
              {/* Project Image */}
              <div className="h-48 sm:h-60 overflow-hidden rounded-lg sm:rounded-xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Content - adjusted for mobile */}
              <div className="absolute inset-0 p-3 sm:p-4 md:p-6 flex flex-col justify-between z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <h3 
                    className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 text-white"
                    style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                  >
                    {project.title}
                  </h3>
                  <p 
                    className="text-xs sm:text-sm text-gray-200 mb-2 sm:mb-4"
                    style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
                  >
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-5">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-[10px] xs:text-xs bg-black/70 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full backdrop-blur-sm"
                        style={{ border: `1px solid ${project.accentColor}` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between border-t border-white/10 pt-2 sm:pt-3 md:pt-4">
                    <motion.a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ x: 3 }}
                      className="text-white hover:text-gray-300 transition-colors flex items-center text-xs sm:text-sm font-medium"
                    >
                      <FiCode className="mr-1 sm:mr-2" /> View Code
                    </motion.a>
                    <motion.a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ x: 3 }}
                      className="text-white hover:text-gray-300 transition-colors flex items-center text-xs sm:text-sm font-medium"
                    >
                      <FaExternalLinkAlt className="mr-1 sm:mr-2" /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Visible title on non-hover */}
              <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 z-20 group-hover:opacity-0 transition-opacity">
                <h3 
                  className="text-sm sm:text-base md:text-xl font-bold text-white"
                  style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                >
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button - adjusted for mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center mt-10 sm:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative overflow-hidden bg-gradient-to-r from-[#FD6F00] to-[#ff9a3c] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold flex items-center gap-2 sm:gap-3 mx-auto text-sm sm:text-base"
          >
            View All Projects
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-gradient-to-r from-[#ff9a3c] to-[#FD6F00] opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;