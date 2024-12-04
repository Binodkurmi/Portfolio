import React from "react";
import "../Style/Certificates.css";
import certificateImage from "../assets/certificate.jpg"; // Replace with your certificate image

const Certificates = () => {
  const handleDownload = () => {
    // Triggering the resume download
    const link = document.createElement("a");
    link.href = "/assets/Resume.pdf"; // Path to your resume file
    link.download = "Resume.pdf";
    link.click();
  };

  return (
    <div className="certificates">
      <div className="certificates-header">
        <h1>My Certifications</h1>
        <p>These are some of the certifications that I've earned throughout my learning journey.</p>
      </div>

      <div className="certificates-content">
        {/* Certificate Section */}
        <div className="certificate">
          <img src={certificateImage} alt="Certificate" className="certificate-image" />
          <h3>Certified Front-End Developer</h3>
          <p>Completed a comprehensive course on front-end development, covering HTML, CSS, JavaScript, and React.</p>
        </div>

        {/* Add more certificates here */}
        <div className="certificate">
          <img src={certificateImage} alt="Certificate" className="certificate-image" />
          <h3>React Developer Certificate</h3>
          <p>Acquired an in-depth understanding of ReactJS and built multiple interactive web applications.</p>
        </div>

        {/* Resume Download Section */}
        <div className="resume-download">
          <h2>Download My Resume</h2>
          <button className="resume-btn" onClick={handleDownload}>Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
