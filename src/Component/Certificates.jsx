import React from "react";
import { FaCertificate, FaAward, FaLaptopCode } from "react-icons/fa";

const certificates = [
  {
    id: 1,
    title: "Full Stack Development",
    issuer: "Udemy",
    date: "June 2023",
    skills: ["React", "Node.js", "MongoDB"],
    icon: <FaLaptopCode className="text-4xl text-[#FD6F00]" />
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    issuer: "Coursera",
    date: "March 2023",
    skills: ["ES6+", "Async/Await", "Design Patterns"],
    icon: <FaCertificate className="text-4xl text-[#E60026]" />
  },
  {
    id: 3,
    title: "Cloud Practitioner",
    issuer: "AWS",
    date: "January 2023",
    skills: ["AWS Fundamentals", "Serverless", "CI/CD"],
    icon: <FaAward className="text-4xl text-[#FD6F00]" />
  },
  {
    id: 4,
    title: "React Specialist",
    issuer: "Scrimba",
    date: "November 2022",
    skills: ["Hooks", "Context API", "Performance"],
    icon: <FaLaptopCode className="text-4xl text-[#E60026]" />
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="w-full bg-[#121212] py-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent">
            My Certifications
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Continuous learning and validation of my technical skills through industry-recognized certifications.
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              className="bg-[#1E1E1E] rounded-xl p-6 border-l-4 border-[#FD6F00] hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className="flex items-start gap-6">
                <div className="bg-[#2A2A2A] p-4 rounded-lg">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-gray-400">{cert.issuer}</span>
                    <span className="text-[#FD6F00]">•</span>
                    <span className="text-gray-400">{cert.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {cert.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-[#2A2A2A] text-gray-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#FD6F00] to-[#E60026] rounded-xl p-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            More Certifications in Progress
          </h3>
          <p className="text-gray-100 max-w-2xl mx-auto">
            Currently expanding my expertise with certifications in Docker, Kubernetes, and Advanced React Patterns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;