import React from "react";
import "../Style/Skills.css";
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaNodeJs, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";  // Add additional icons for Tailwind and MongoDB

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-header">
        <h1>My Skills</h1>
        <p>Technologies I work with and enjoy developing in.</p>
      </div>

      <div className="skills-content">
        <div className="skill">
          <FaReact className="icon react-icon" />
          <h3>React</h3>
          <p>A JavaScript library for building user interfaces. Highly skilled in building dynamic and interactive web applications.</p>
        </div>

        <div className="skill">
          <SiTailwindcss className="icon tailwindcss-icon" />
          <h3>Tailwind CSS</h3>
          <p>Tailwind CSS is a utility-first framework that enables fast, custom UI building using pre-defined classes directly in HTML.</p>
        </div>

        <div className="skill">
          <FaJs className="icon js-icon" />
          <h3>JavaScript</h3>
          <p>The core language of web development, used for creating interactive and dynamic elements on websites.</p>
        </div>

        <div className="skill">
          <FaNodeJs className="icon nodejs-icon" />
          <h3>Node.js</h3>
          <p>JavaScript runtime built on Chrome's V8 engine, enabling server-side programming and backend development.</p>
        </div>

        <div className="skill">
          <FaGitAlt className="icon git-icon" />
          <h3>Git</h3>
          <p>A version control system that helps track changes, collaborate on code, and manage repositories efficiently.</p>
        </div>

        <div className="skill">
          <SiMongodb className="icon mongodb-icon" />
          <h3>MongoDB</h3>
          <p>MongoDB is a NoSQL database designed to store, query, and manage unstructured data.</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
