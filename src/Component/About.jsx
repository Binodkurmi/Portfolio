import React from "react";
import { FaJs, FaReact } from "react-icons/fa";
import { SiNodedotjs, SiMongodb, SiExpress, SiGithub } from "react-icons/si";

const About = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Left Section */}
      <div className="lg:w-1/2">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">About Me</h1>
        <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
          I am a full-stack developer skilled in both front-end and back-end technologies. 
          I specialize in using React, CSS, Tailwind CSS, and JavaScript for building responsive user interfaces, 
          while also working with Node.js, Express, and MongoDB to develop robust back-end solutions. 
          My goal is to create seamless and dynamic web applications that provide an excellent user experience and performance.
        </p>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 flex flex-col items-center">
        <img
          src="/Profile.jpg"
          alt="Profile"
          className="w-64 h-64 object-cover rounded-full shadow-lg mb-6"
        />

        <div className="overflow-hidden w-full">
          <div className="flex gap-10 animate-marquee whitespace-nowrap">
            <FaJs className="text-yellow-400 text-4xl sm:text-5xl" title="JavaScript" />
            <FaReact className="text-blue-500 text-4xl sm:text-5xl" title="React" />
            <SiNodedotjs className="text-green-600 text-4xl sm:text-5xl" title="Node.js" />
            <SiMongodb className="text-green-500 text-4xl sm:text-5xl" title="MongoDB" />
            <SiExpress className="text-gray-700 text-4xl sm:text-5xl" title="Express" />
            <SiGithub className="text-black text-4xl sm:text-5xl" title="GitHub" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
