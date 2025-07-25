import React from "react";
import { FaReact, FaJs, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const skillsData = [
  {
    icon: <FaReact className="text-4xl" />,
    title: "React",
    description: "Building dynamic and interactive web applications with modern React features like hooks and context API.",
    color: "text-[#61DAFB]",
    bgColor: "bg-[#61DAFB]/10"
  },
  {
    icon: <SiTailwindcss className="text-4xl" />,
    title: "Tailwind CSS",
    description: "Rapidly building custom designs with utility-first CSS framework for responsive interfaces.",
    color: "text-[#06B6D4]",
    bgColor: "bg-[#06B6D4]/10"
  },
  {
    icon: <FaJs className="text-4xl" />,
    title: "JavaScript",
    description: "Implementing ES6+ features, async/await, and design patterns for robust web applications.",
    color: "text-[#F7DF1E]",
    bgColor: "bg-[#F7DF1E]/10"
  },
  {
    icon: <FaNodeJs className="text-4xl" />,
    title: "Node.js",
    description: "Developing scalable server-side applications and RESTful APIs with Express middleware.",
    color: "text-[#68A063]",
    bgColor: "bg-[#68A063]/10"
  },
  {
    icon: <FaGitAlt className="text-4xl" />,
    title: "Git",
    description: "Version control and collaborative workflows using GitHub, GitLab, and CI/CD pipelines.",
    color: "text-[#F05032]",
    bgColor: "bg-[#F05032]/10"
  },
  {
    icon: <SiMongodb className="text-4xl" />,
    title: "MongoDB",
    description: "Designing NoSQL database schemas and performing CRUD operations with Mongoose ODM.",
    color: "text-[#47A248]",
    bgColor: "bg-[#47A248]/10"
  },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-[#121212] py-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I specialize in and love working with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 hover:scale-[1.03] ${skill.bgColor}`}
            >
              <div className={`w-16 h-16 ${skill.bgColor} rounded-lg flex items-center justify-center mb-4 ${skill.color}`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-6">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            {['HTML5', 'CSS3', 'Express.js', 'Redux', 'TypeScript', 'REST APIs', 'Jest', 'Docker'].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-[#1E1E1E] text-gray-300 rounded-full hover:bg-[#2A2A2A] transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;