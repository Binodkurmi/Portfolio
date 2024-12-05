import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact } from 'react-icons/fa';
import { SiNodedotjs, SiMongodb, SiExpress, SiGithub } from 'react-icons/si';
import '../Style/About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <h1>About Me</h1>
        <p>
          I am a passionate front-end developer with an eye for design and a commitment to delivering exceptional user experiences. With expertise in React, CSS, and JavaScript, I enjoy crafting responsive, dynamic web applications that delight users and meet modern standards.
        </p>
        <button className="about-btn">Contact Me</button>
      </div>
      <div className="about-right">
        <img src="/Profile.jpg" alt="Profile" className="About-image" style={{ width: '200px', height: 'auto' }} />
        <div className="home-icons">
          <FaJs className="icon js-icon" title="JavaScript" />
          <FaReact className="icon react-icon" title="React" />
          <SiNodedotjs className="icon nodejs-icon" title="Node.js" />
          <SiMongodb className="icon mongodb-icon" title="MongoDB" />
          <SiExpress className="icon express-icon" title="Express" />
          <SiGithub className="icon github-icon" title="GitHub" />
        </div>
      </div>
    </div>
  );
};

export default About;
