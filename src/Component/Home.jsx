import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#121212] text-white pt-28 md:pt-32 lg:pt-40"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left Side - Content */}
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="text-[#707070] block">HI, I AM </span>
            <span className="text-[#959595]">BINOD KURMI</span>
          </h1>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] bg-clip-text text-transparent">
            Full Stack Developer
          </h3>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-6 md:mb-8">
            Web development is always evolving with new technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mb-8 md:mb-12">
            <a
              href="#contact"
              className="bg-[#FD6F00] hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold w-full sm:w-auto min-w-[200px] text-center"
            >
              Hire Me
            </a>
            <a
              href="/BinodKurmi.pdf"
              download
              className="border-2 border-[#FD6F00] hover:bg-[#FD6F00] text-[#FD6F00] hover:text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold w-full sm:w-auto min-w-[200px] text-center"
            >
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="w-full max-w-md bg-gradient-to-b from-[#464141] via-[#BABABA] to-[#464141] px-6 py-6 rounded-lg mx-auto lg:mx-0">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-[#FD6F00]">3+</p>
                <p className="text-gray-300 font-medium mt-2 text-sm md:text-base">
                  Experience
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#FD6F00]">10+</p>
                <p className="text-gray-300 font-medium mt-2 text-sm md:text-base">
                  Projects done
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#FD6F00]">5+</p>
                <p className="text-gray-300 font-medium mt-2 text-sm md:text-base">
                  Happy clients
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Circular Image */}
        <div className="relative w-full flex justify-center items-center mb-8 lg:mb-0">
          <div className="w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px] rounded-full bg-[#474440] flex justify-center items-center relative overflow-hidden">
            <img
              src="/Profile.png"
              alt="Binod Kurmi"
              className="absolute w-[80%] h-auto object-cover"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                maxWidth: "none"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;