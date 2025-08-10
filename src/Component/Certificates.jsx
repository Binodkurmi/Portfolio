import React, { useEffect, useRef } from "react";
import { FaCertificate, FaAward, FaLaptopCode } from "react-icons/fa";

const certificates = [
  {
    id: 1,
    title: "Full Stack Development",
    issuer: "Udemy",
    date: "June 2023",
    skills: ["React", "Node.js", "MongoDB"],
    icon: <FaLaptopCode className="text-5xl text-[#FD6F00] animate-pulse" />
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    issuer: "Coursera",
    date: "March 2023",
    skills: ["ES6+", "Async/Await", "Design Patterns"],
    icon: <FaCertificate className="text-5xl text-[#E60026] animate-pulse" />
  },
  {
    id: 3,
    title: "Cloud Practitioner",
    issuer: "AWS",
    date: "January 2023",
    skills: ["AWS Fundamentals", "Serverless", "CI/CD"],
    icon: <FaAward className="text-5xl text-[#FD6F00] animate-pulse" />
  },
  {
    id: 4,
    title: "React Specialist",
    issuer: "Scrimba",
    date: "November 2022",
    skills: ["Hooks", "Context API", "Performance"],
    icon: <FaLaptopCode className="text-5xl text-[#E60026] animate-pulse" />
  }
];

const Certificates = () => {
  const sectionRef = useRef(null);

  // Floating particles background
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.classList.add("absolute", "top-0", "left-0", "w-full", "h-full");
    sectionRef.current.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    let particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 3 + 1,
      dx: Math.random() - 0.5,
      dy: Math.random() - 0.5
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(253,111,0,0.6)";
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > window.innerWidth) p.dx *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.dy *= -1;
      });
      requestAnimationFrame(draw);
    };
    draw();
    return () => canvas.remove();
  }, []);

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="relative w-full bg-[#121212] overflow-hidden py-20 px-6 sm:px-10 md:px-20"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent animate-gradient">
            My Certifications
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Continuous learning and validation of my technical skills through
            industry-recognized certifications.
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {certificates.map((cert, i) => (
            <div
              key={cert.id}
              className="relative group p-[2px] rounded-2xl bg-gradient-to-r from-[#FD6F00] via-[#E60026] to-[#FD6F00] animate-border"
              style={{
                animationDelay: `${i * 0.2}s`
              }}
            >
              <div className="bg-[#1E1E1E]/80 backdrop-blur-lg rounded-2xl p-6 transition-transform duration-500 group-hover:rotate-1 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(253,111,0,0.5)]">
                <div className="flex items-start gap-6">
                  <div className="bg-[#2A2A2A] p-5 rounded-full shadow-lg transform group-hover:rotate-[10deg] transition-transform duration-500">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-4 mb-3 text-gray-400">
                      <span>{cert.issuer}</span>
                      <span className="text-[#FD6F00]">•</span>
                      <span>{cert.date}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {cert.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#2A2A2A] text-gray-300 rounded-full text-sm hover:bg-[#FD6F00] hover:text-black transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#FD6F00] to-[#E60026] rounded-2xl p-8 text-center shadow-[0_0_40px_rgba(253,111,0,0.6)]">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 animate-pulse">
            More Certifications in Progress
          </h3>
          <p className="text-gray-100 max-w-2xl mx-auto">
            Currently expanding my expertise with certifications in Docker,
            Kubernetes, and Advanced React Patterns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
