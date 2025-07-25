import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#121212] text-white"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start justify-between">
        {/* Left Side Content */}
        <div className="text-start w-full md:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-lato font-bold mb-4">
            <span className="text-[#707070]">HI, I AM </span><br />
            <span className="text-[#959595]">BINOD KURMI</span>
          </h1>

          <h3 className="text-3xl sm:text-4xl font-lato font-black mb-4 bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] bg-clip-text text-transparent">
            Full Stack Developer
          </h3>

          <p className="text-base sm:text-lg text-gray-400 max-w-lg mb-6">
            Web development is always evolving with new technologies.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4 mb-10">
            <a
              href="#contact"
              className="bg-[#FD6F00] text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition font-semibold"
            >
              Hire Me
            </a>
            <a
              href="/BinodKurmi.pdf"
              download
              className="border border-[#FD6F00] text-[#FD6F00] px-6 py-2 rounded-lg hover:bg-[#FD6F00] hover:text-white transition font-semibold"
            >
              Download CV
            </a>
          </div>

          {/* Stats Section - Half Width */}
          <div className="w-full max-w-[400px] bg-gradient-to-b from-[#464141] via-[#BABABA] to-[#464141] px-6 py-6 rounded-lg">
            <div className="flex justify-between items-center text-center">
              <div>
                <p className="text-3xl font-bold text-[#FD6F00]">3+</p>
                <p className="text-gray-700 font-semibold mt-2 text-sm">Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#FD6F00]">10+</p>
                <p className="text-gray-700 font-semibold mt-2 text-sm">Projects done</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#FD6F00]">5+</p>
                <p className="text-gray-700 font-semibold mt-2 text-sm">Clients happy</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
