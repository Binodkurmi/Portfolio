import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const skillsData = [
  {
    icon: <FaReact className="text-blue-500 text-5xl mb-4" />,
    title: "React",
    description:
      "A JavaScript library for building user interfaces. Highly skilled in building dynamic and interactive web applications.",
  },
  {
    icon: <SiTailwindcss className="text-cyan-500 text-5xl mb-4" />,
    title: "Tailwind CSS",
    description:
      "Tailwind CSS is a utility-first framework that enables fast, custom UI building using pre-defined classes directly in HTML.",
  },
  {
    icon: <FaJs className="text-yellow-400 text-5xl mb-4" />,
    title: "JavaScript",
    description:
      "The core language of web development, used for creating interactive and dynamic elements on websites.",
  },
  {
    icon: <FaNodeJs className="text-green-600 text-5xl mb-4" />,
    title: "Node.js",
    description:
      "JavaScript runtime built on Chrome's V8 engine, enabling server-side programming and backend development.",
  },
  {
    icon: <FaGitAlt className="text-orange-600 text-5xl mb-4" />,
    title: "Git",
    description:
      "A version control system that helps track changes, collaborate on code, and manage repositories efficiently.",
  },
  {
    icon: <SiMongodb className="text-green-500 text-5xl mb-4" />,
    title: "MongoDB",
    description:
      "MongoDB is a NoSQL database designed to store, query, and manage unstructured data.",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-6 bg-gray-50 text-center scroll-mt-16"
    >
      <h1 className="text-4xl font-bold text-indigo-700 mb-4">My Skills</h1>
      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        Technologies I work with and enjoy developing in.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow"
          >
            {skill.icon}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {skill.title}
            </h3>
            <p className="text-gray-600 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
