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
      image: "/ecommerce.jpg",
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
      image: "/weather.jpg",
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
    hidden: { opacity: 0, y: 50 },
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

  return (
    <section id="projects" className="relative bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] py-20 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-60 h-60 rounded-full bg-[#FD6F00] blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-20 w-80 h-80 rounded-full bg-[#3B82F6] blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FD6F00] via-[#ff9a3c] to-[#FD6F00] animate-gradient">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            A curated selection of my best work. Each project represents unique challenges and creative solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-black/50 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              
              {/* Project Image */}
              <div className="h-60 overflow-hidden rounded-xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Project Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <h3 
                    className="text-2xl font-bold mb-2 text-white"
                    style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                  >
                    {project.title}
                  </h3>
                  <p 
                    className="text-gray-200 mb-4"
                    style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
                  >
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-black/70 text-white px-3 py-1 rounded-full backdrop-blur-sm"
                        style={{ border: `1px solid ${project.accentColor}` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between border-t border-white/10 pt-4">
                    <motion.a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="text-white hover:text-gray-300 transition-colors flex items-center text-sm font-medium"
                    >
                      <FiCode className="mr-2" /> View Code
                    </motion.a>
                    <motion.a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="text-white hover:text-gray-300 transition-colors flex items-center text-sm font-medium"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Visible title on non-hover */}
              <div className="absolute bottom-6 left-6 z-20 group-hover:opacity-0 transition-opacity">
                <h3 
                  className="text-xl font-bold text-white"
                  style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                >
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden bg-gradient-to-r from-[#FD6F00] to-[#ff9a3c] text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 mx-auto"
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