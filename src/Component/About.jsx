import React from 'react';
import '../Style/About.css';
import coverImage from '../assets/Cover.jpg';
 // Import your local image

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
      <img src={coverImage} alt="Portfolio Cover" className="About-image" />
      </div>
    </div>
  );
};

export default About;
