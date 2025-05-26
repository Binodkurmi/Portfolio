import { FaJs, FaReact } from "react-icons/fa";
import { SiNodedotjs, SiMongodb, SiExpress, SiGithub } from "react-icons/si";
import "../Style/About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <h1>About Me</h1>
        <p>
          I am a full-stack developer skilled in both front-end and back-end
          technologies. I specialize in using React, CSS, Tailwind CSS, and JavaScript for
          building responsive user interfaces, while also working with Node.js,
          Express, and MongoDB to develop robust back-end solutions. My goal is
          to create seamless and dynamic web applications that provide an
          excellent user experience and performance.
        </p>
      </div>

      <div className="about-right">
        <img
          src="/Profile.jpg"
          alt="Profile"
          className="About-image"
        />

        <div className="icon-carousel">
          <div className="icon-track">
            <div className="icon-wrapper"><FaJs className="icon js-icon" title="JavaScript" /></div>
            <div className="icon-wrapper"><FaReact className="icon react-icon" title="React" /></div>
            <div className="icon-wrapper"><SiNodedotjs className="icon nodejs-icon" title="Node.js" /></div>
            <div className="icon-wrapper"><SiMongodb className="icon mongodb-icon" title="MongoDB" /></div>
            <div className="icon-wrapper"><SiExpress className="icon express-icon" title="Express" /></div>
            <div className="icon-wrapper"><SiGithub className="icon github-icon" title="GitHub" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
