import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact } from 'react-icons/fa';
import { SiNodedotjs, SiMongodb, SiExpress, SiGithub, SiNpm, SiPostman } from 'react-icons/si';

import '../Style/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>HI, I AM BINOD KURMI.</h1>
        <p><b>Full Stack Developer</b></p>
        <div className="home-icons">
          <FaHtml5 className="icon html-icon" title="HTML5" />
          <FaCss3Alt className="icon css-icon" title="CSS3" />
          <FaJs className="icon js-icon" title="JavaScript" />
          <FaBootstrap className="icon bootstrap-icon" title="Bootstrap" />
          <FaReact className="icon react-icon" title="React" />
          <SiNodedotjs className="icon nodejs-icon" title="Node.js" />
					<SiMongodb className="icon mongodb-icon" title="MongoDB" />
					<SiExpress className="icon express-icon" title="Express" />
					<SiGithub className="icon github-icon" title="GitHub" />

          {/* <SiNpm className="icon npm-icon" title="NPM" /> */}
          {/* <SiPostman className="icon postman-icon" title="Postman" /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
