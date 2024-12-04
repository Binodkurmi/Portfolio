import React from "react";
import "../Style/Skills.css";
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaNodeJs, FaGitAlt, FaDatabase } from "react-icons/fa";

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
          <FaHtml5 className="icon html-icon" />
          <h3>HTML5</h3>
          <p>The standard markup language for creating web pages. Mastery in creating semantic, accessible, and SEO-friendly HTML structures.</p>
        </div>

        <div className="skill">
          <FaCss3Alt className="icon css-icon" />
          <h3>CSS3</h3>
          <p>Powerful styling language used to create visually appealing and responsive layouts for websites.</p>
        </div>

        <div className="skill">
          <FaBootstrap className="icon bootstrap-icon" />
          <h3>Bootstrap</h3>
          <p>Popular framework for building responsive, mobile-first websites with pre-defined components and utility classes.</p>
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
          <FaDatabase className="icon database-icon" />
          <h3>Databases</h3>
          <p>Proficient in working with both SQL and NoSQL databases, including MongoDB and MySQL.</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
