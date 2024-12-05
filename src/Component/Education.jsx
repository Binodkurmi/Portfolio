import React from "react";
import "../Style/Education.css";

const Education = () => {
  return (
    <div className="education-page">
      <h1 className="education-heading">My Education</h1>
      <div className="education-columns">
        {/* SEE Board */}
        <div className="education-column">
          <h2>2017</h2>
					<p>Secondary Education Examination</p>
					<hr className="divider" />
          <p><b>School:</b></p>
          <p>Buddha Jyoti Higher Secondary English Boarding School</p>
          <p>Taulihawa-3 Kapilvastu,Nepal</p>
        </div>

        {/* Diploma */}
        <div className="education-column">
          <h2>2017-2020</h2>
					<p>Diploma in  computer Science and Engineering</p>
					<hr className="divider" /> 
          <p><b>College:</b></p>
          <p>East West Polytechnic</p>
          <p>Bangalore-560091, India</p>
        </div>

        {/* B.Tech */}
        <div className="education-column">
          <h2>2021</h2>
					<p>Bachelor in computer Engineering</p>
					<hr className="divider" /> 
          <p><b>Institution:</b></p>
          <p>RK University</p>
          <p>Rajkot -360020, Gujarat, India</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
