import React, { useEffect, useRef } from "react";
import { 
  FaCertificate, 
  FaAward, 
  FaLaptopCode,
  FaJava,
  FaReact,
  FaDatabase,
  FaCode,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaQrcode
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiMongodb, 
  SiMysql, 
  SiOracle,
  SiBootstrap,
  SiJavascript 
} from "react-icons/si";
import { motion } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "JavaScript",
    issuer: "onWingspan",
    date: "January 13th, 2023",
    issuedDate: "Friday, January 13th 2023",
    description: "Successfully completed the JavaScript course",
    recipient: "Binod Kurmi",
    verifyUrl: "https://verify.onwingspan.com",
    skills: ["JavaScript", "ES6+", "DOM Manipulation", "Functions", "Arrays"],
    icon: <SiJavascript className="text-5xl text-yellow-400 animate-pulse" />,
    color: "#F7DF1E"
  },
  {
    id: 2,
    title: "Core Java Features",
    issuer: "onWingspan",
    date: "February 5th, 2023",
    issuedDate: "Sunday, February 5th 2023",
    description: "Successfully completed the Core Java Features course",
    recipient: "Binod Kurmi",
    verifyUrl: "https://verify.onwingspan.com",
    skills: ["Core Java", "OOP Concepts", "Collections", "Multithreading", "Exception Handling"],
    icon: <FaJava className="text-5xl text-red-500 animate-pulse" />,
    color: "#E34F26"
  },
  {
    id: 3,
    title: "HTML",
    issuer: "onWingspan",
    date: "February 2023",
    issuedDate: "February 2023",
    description: "Successfully completed the HTML course",
    recipient: "Binod Kurmi",
    verifyUrl: "https://verify.onwingspan.com",
    skills: ["HTML5", "Semantic HTML", "Forms", "Accessibility", "SEO Basics"],
    icon: <FaHtml5 className="text-5xl text-orange-500 animate-pulse" />,
    color: "#E34F26"
  }
];

const Certificates = () => {
  const sectionRef = useRef(null);

  // Improved floating particles background
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.classList.add("absolute", "top-0", "left-0", "w-full", "h-full", "pointer-events-none");
    sectionRef.current.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 4 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      color: `rgba(253,111,0,${Math.random() * 0.3 + 0.2})`
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(230, 0, 38, ${0.1 * (1 - distance/100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Update position
        p.x += p.dx;
        p.y += p.dy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      requestAnimationFrame(draw);
    };
    draw();

    return () => {
      canvas.remove();
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-[#0a0a0a] to-[#121212] overflow-hidden py-20 px-6 sm:px-10 md:px-20"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(253,111,0,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(230,0,38,0.1),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent">
              My Certifications
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Verified credentials from onWingspan - Frontend Developer with Core Java expertise
          </p>
        </motion.div>

        {/* Stats Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 mb-16 max-w-3xl mx-auto"
        >
          {[
            { label: "JavaScript", value: "Jan 2023", icon: <SiJavascript />, color: "#F7DF1E" },
            { label: "Core Java", value: "Feb 2023", icon: <FaJava />, color: "#E34F26" },
            { label: "HTML", value: "Feb 2023", icon: <FaHtml5 />, color: "#E34F26" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-[#1a1a1a] p-4 rounded-xl border border-[#2a2a2a] text-center"
              style={{ borderColor: `${stat.color}40` }}
            >
              <div className="flex justify-center mb-2 text-3xl" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div className="text-lg font-bold text-white">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              {/* Animated border gradient */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FD6F00] to-[#E60026] rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
              
              {/* Certificate card */}
              <div className="relative bg-[#1E1E1E] rounded-2xl p-6 border border-[#2a2a2a] hover:border-transparent transition-all duration-500">
                
                {/* Certificate header with icon */}
                <div className="flex items-start justify-between mb-4">
                  <div 
                    className="p-4 rounded-xl"
                    style={{ 
                      backgroundColor: `${cert.color}15`,
                      border: `1px solid ${cert.color}30`
                    }}
                  >
                    {cert.icon}
                  </div>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-1 h-1 rounded-full bg-[#FD6F00] opacity-60"></div>
                    ))}
                  </div>
                </div>

                {/* Recipient name */}
                <div className="mb-3">
                  <span className="text-xs uppercase tracking-wider text-gray-500">Awarded to</span>
                  <h3 className="text-xl font-bold text-white">{cert.recipient}</h3>
                </div>

                {/* Course title */}
                <div className="mb-3">
                  <span className="text-xs uppercase tracking-wider text-gray-500">Course</span>
                  <h4 className="text-2xl font-bold bg-gradient-to-r from-[#FD6F00] to-[#E60026] bg-clip-text text-transparent">
                    {cert.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4">
                  for successfully completing the course
                </p>

                {/* Date issued */}
                <div className="mb-4 p-3 bg-[#2A2A2A] rounded-xl">
                  <div className="text-xs text-gray-400">Issued on:</div>
                  <div className="text-white font-medium">{cert.issuedDate}</div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <span className="text-xs uppercase tracking-wider text-gray-500 mb-2 block">Skills acquired</span>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-[#2A2A2A] text-gray-300 rounded-md text-xs"
                        style={{ borderLeft: `2px solid ${cert.color}` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verification section */}
                <div className="flex items-center justify-between pt-4 border-t border-[#2a2a2a]">
                  <div className="flex items-center gap-2">
                    <FaQrcode className="text-[#FD6F00] text-xl" />
                    <span className="text-xs text-gray-400">Scan to verify</span>
                  </div>
                  <a 
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#FD6F00] hover:text-[#E60026] transition-colors"
                  >
                    verify.onwingspan.com
                  </a>
                </div>

                {/* Certificate badge */}
                <div className="absolute top-4 right-4 opacity-10">
                  <FaCertificate className="text-6xl text-[#FD6F00]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verification Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#FD6F00]/20 to-[#E60026]/20 rounded-2xl p-8 text-center border border-[#FD6F00]/30"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <FaQrcode className="text-4xl text-[#FD6F00]" />
            <h3 className="text-2xl font-bold text-white">Verified Credentials</h3>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            All certificates can be verified by scanning the QR code or visiting{' '}
            <a 
              href="https://verify.onwingspan.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FD6F00] hover:underline"
            >
              verify.onwingspan.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;