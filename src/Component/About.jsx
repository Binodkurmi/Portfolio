import React from "react";
import { FaJs, FaReact } from "react-icons/fa";
import { SiNodedotjs, SiMongodb, SiExpress, SiGithub } from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="w-full bg-[#121212] py-20 px-6 sm:px-10 md:px-20">
      {/* Centered Heading */}
      <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent">
        About Me
      </h2>

      {/* Two Column Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Section - Text Content */}
        <div className="space-y-8">
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            I'm a <span className="text-[#FD6F00] font-semibold">Full Stack Developer</span> skilled in both front-end and back-end technologies.
            I specialize in building responsive, high-performance applications using <span className="text-[#BABABA] font-medium">React, Tailwind CSS, and JavaScript</span> for the front-end, and
            <span className="text-[#BABABA] font-medium"> Node.js, Express, MongoDB</span> for the backend.
          </p>
          
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            My passion lies in creating <span className="text-[#FD6F00]">seamless digital experiences</span> that combine beautiful design with robust functionality.
          </p>
        </div>

        {/* Right Section - Image and Skills */}
        <div className="flex flex-col items-center">
          <div className="relative p-1 rounded-full bg-gradient-to-br from-[#FD6F00] to-[#E60026] mb-12">
            <img
              src="/Profile.png"
              alt="Binod Kurmi"
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-[#121212]"
            />
          </div>

          {/* Scrolling Tech Icons */}
          <div className="w-full overflow-hidden">
            <div className="flex gap-10 animate-marquee whitespace-nowrap">
              <FaJs className="text-4xl sm:text-5xl text-[#E60026]" title="JavaScript" />
              <FaReact className="text-4xl sm:text-5xl text-[#FD6F00]" title="React" />
              <SiNodedotjs className="text-4xl sm:text-5xl text-[#E60026]" title="Node.js" />
              <SiMongodb className="text-4xl sm:text-5xl text-[#FD6F00]" title="MongoDB" />
              <SiExpress className="text-4xl sm:text-5xl text-[#E60026]" title="Express" />
              <SiGithub className="text-4xl sm:text-5xl text-[#FD6F00]" title="GitHub" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;