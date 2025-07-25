import React from "react";
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="w-full bg-[#121212] py-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent">
            My Education
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic journey through formal education and continuous learning
          </p>
        </div>

        {/* Education Timeline */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {/* Secondary Education */}
          <div className="bg-[#1E1E1E] p-8 rounded-xl border-l-4 border-[#FD6F00] hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#2A2A2A] p-3 rounded-full">
                <FaSchool className="text-2xl text-[#FD6F00]" />
              </div>
              <h3 className="text-xl font-bold text-white">Secondary Education</h3>
            </div>
            <div className="mb-4">
              <span className="text-[#FD6F00] font-medium">2004–2017</span>
              <p className="text-gray-300 mt-1">SEE Board</p>
            </div>
            <hr className="border-[#2A2A2A] my-4" />
            <div>
              <p className="text-gray-400 font-medium">School:</p>
              <p className="text-gray-300">Buddha Jyoti Higher Secondary</p>
              <p className="text-gray-500 text-sm mt-1">Taulihawa-3 Kapilvastu, Nepal</p>
            </div>
          </div>

          {/* Diploma */}
          <div className="bg-[#1E1E1E] p-8 rounded-xl border-l-4 border-[#E60026] hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#2A2A2A] p-3 rounded-full">
                <FaGraduationCap className="text-2xl text-[#E60026]" />
              </div>
              <h3 className="text-xl font-bold text-white">Diploma</h3>
            </div>
            <div className="mb-4">
              <span className="text-[#E60026] font-medium">2017–2020</span>
              <p className="text-gray-300 mt-1">Computer Science & Engineering</p>
            </div>
            <hr className="border-[#2A2A2A] my-4" />
            <div>
              <p className="text-gray-400 font-medium">College:</p>
              <p className="text-gray-300">East West Polytechnic</p>
              <p className="text-gray-500 text-sm mt-1">Bangalore-560091, India</p>
            </div>
          </div>

          {/* Bachelor's Degree */}
          <div className="bg-[#1E1E1E] p-8 rounded-xl border-l-4 border-[#FD6F00] hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#2A2A2A] p-3 rounded-full">
                <FaUniversity className="text-2xl text-[#FD6F00]" />
              </div>
              <h3 className="text-xl font-bold text-white">Bachelor's Degree</h3>
            </div>
            <div className="mb-4">
              <span className="text-[#FD6F00] font-medium">2021–2025</span>
              <p className="text-gray-300 mt-1">Computer Engineering</p>
            </div>
            <hr className="border-[#2A2A2A] my-4" />
            <div>
              <p className="text-gray-400 font-medium">University:</p>
              <p className="text-gray-300">RK University</p>
              <p className="text-gray-500 text-sm mt-1">Rajkot-360020, Gujarat, India</p>
            </div>
          </div>
        </div>

        {/* Additional Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 italic">
            "Education is not the learning of facts, but the training of the mind to think." — Albert Einstein
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;