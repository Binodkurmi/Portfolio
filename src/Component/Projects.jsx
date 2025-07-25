import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration, product management, and user authentication.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      image: "/ecommerce.jpg"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Kanban-style productivity application with drag-and-drop functionality and team collaboration.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "#",
      live: "#",
      image: "/taskapp.jpg"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern responsive portfolio showcasing skills and projects with smooth animations.",
      tags: ["React", "Framer Motion", "CSS3"],
      github: "#",
      live: "#",
      image: "/portfolio.jpg"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather forecasting application with location detection and 5-day outlook.",
      tags: ["JavaScript", "API Integration", "Chart.js"],
      github: "#",
      live: "#",
      image: "/weather.jpg"
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for tracking social media metrics and engagement statistics.",
      tags: ["React", "D3.js", "Express"],
      github: "#",
      live: "#",
      image: "/social.jpg"
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "Search thousands of recipes with filtering by dietary restrictions and ingredients.",
      tags: ["Vue.js", "Spoonacular API", "Vuetify"],
      github: "#",
      live: "#",
      image: "/recipe.jpg"
    }
  ];

  return (
    <section id="projects" className="bg-[#121212] text-white py-15 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent">MY PROJECTS</span>
          </h2>
          <div className="w-20 h-1 bg-[#FD6F00] mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-[#1e1e1e] rounded-lg overflow-hidden border border-[#3a3a3a] hover:border-[#FD6F00] transition-all duration-300 hover:shadow-lg hover:shadow-[#FD6F00]/20 group"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#FD6F00]">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-[#2a2a2a] text-gray-300 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between border-t border-[#3a3a3a] pt-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#FD6F00] transition-colors flex items-center"
                  >
                    <FaGithub className="mr-2" /> Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#FD6F00] transition-colors flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-[#FD6F00] hover:bg-orange-700 text-white px-8 py-3 rounded-lg transition-all duration-300 font-semibold">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;