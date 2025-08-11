import React from "react";
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiUdemy, SiCoursera } from "react-icons/si";

const Education = () => {
  const educationData = [
    {
      id: 1,
      title: "Secondary Education",
      icon: <FaSchool className="text-2xl" />,
      period: "2004–2017",
      degree: "SEE Board",
      institution: "Buddha Jyoti Higher Secondary",
      location: "Taulihawa-3 Kapilvastu, Nepal",
      color: "from-[#FD6F00] to-[#FF9E5E]",
      border: "border-[#FD6F00]"
    },
    {
      id: 2,
      title: "Diploma",
      icon: <FaGraduationCap className="text-2xl" />,
      period: "2017–2020",
      degree: "Computer Science & Engineering",
      institution: "East West Polytechnic",
      location: "Bangalore-560091, India",
      color: "from-[#E60026] to-[#FF4D4D]",
      border: "border-[#E60026]"
    },
    {
      id: 3,
      title: "Bachelor's Degree",
      icon: <FaUniversity className="text-2xl" />,
      period: "2021–2025",
      degree: "Computer Engineering",
      institution: "RK University",
      location: "Rajkot-360020, Gujarat, India",
      color: "from-[#FD6F00] to-[#FF9E5E]",
      border: "border-[#FD6F00]"
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Full Stack Development",
      platform: "Udemy",
      icon: <SiUdemy className="text-xl" />
    },
    {
      id: 2,
      name: "Advanced JavaScript",
      platform: "Coursera",
      icon: <SiCoursera className="text-xl" />
    }
  ];

  const cardVariants = {
    offscreen: {
      y: 30,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.6
      }
    }
  };

  return (
    <section id="education" className="w-full bg-gradient-to-b from-[#0a0a0a] to-[#111] py-12 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-20 relative overflow-hidden">
      {/* Background elements - adjusted for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-[#E60026]/5 blur-xl sm:blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-[#FD6F00]/5 blur-xl sm:blur-3xl animate-float-delay"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - adjusted for mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FA6E00] via-[#FD6F00] to-[#E60026]">
            Education Journey
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            My academic path and continuous learning experiences that shaped my technical expertise
          </p>
        </motion.div>

        {/* Education Timeline - adjusted for mobile */}
        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: "-30px" }}
              variants={cardVariants}
              className={`relative group overflow-hidden bg-[#1E1E1E]/80 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border-l-4 ${edu.border} hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 backdrop-blur-sm`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-b ${edu.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className={`bg-gradient-to-br ${edu.color} p-2 sm:p-3 rounded-full shadow-sm sm:shadow-md`}>
                    {edu.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{edu.title}</h3>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${edu.color} font-medium text-sm sm:text-base`}>
                    {edu.period}
                  </span>
                  <p className="text-gray-300 mt-1 sm:mt-2 font-medium text-sm sm:text-base">{edu.degree}</p>
                </div>
                
                <hr className="border-[#2A2A2A] my-3 sm:my-4 md:my-6" />
                
                <div>
                  <p className="text-gray-400 font-medium mb-1 text-sm sm:text-base">Institution:</p>
                  <p className="text-gray-200 text-sm sm:text-base">{edu.institution}</p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">{edu.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section - adjusted for mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-20 bg-[#1E1E1E]/50 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border border-[#2a2a2a] backdrop-blur-sm"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FA6E00] to-[#E60026]">
              Complementary Certifications
            </span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-[#2A2A2A]/50 rounded-md sm:rounded-lg hover:bg-[#3a3a3a]/50 transition-all duration-300">
                <div className="bg-[#1a1a1a] p-2 sm:p-3 rounded-md sm:rounded-lg">
                  {cert.icon}
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm sm:text-base">{cert.name}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">{cert.platform}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Inspirational Quote - adjusted for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-gray-400 italic text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            "Education is not preparation for life; education is life itself." — John Dewey
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;