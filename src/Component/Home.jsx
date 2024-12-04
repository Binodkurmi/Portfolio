import React from "react";
import "../Style/Home.css";
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaJs } from "react-icons/fa"; // Import icons


const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I’m a passionate front-end developer skilled in React, JavaScript, and CSS. 
          Explore my projects, skills, and achievements. Let’s create something amazing together!
        </p>
        <div className="home-icons">
          <FaHtml5 className="icon html-icon" title="HTML5" />
          <FaCss3Alt className="icon css-icon" title="CSS3" />
					<FaJs className="icon js-icon" title="JavaScript" />
          <FaBootstrap className="icon bootstrap-icon" title="Bootstrap" />
					<FaReact className="icon react-icon" title="React" />
        </div>
      </div>
    </div>
  );
};

export default Home;
