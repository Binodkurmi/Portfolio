import React from "react";

const Education = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
        My Education
      </h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        {/* SEE Board */}
        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-indigo-600">2004–2017</h2>
          <p className="text-gray-700 mb-2">Secondary Education Examination</p>
          <hr className="border-t border-gray-300 my-3" />
          <p className="font-medium text-gray-800">School:</p>
          <p className="text-gray-600">
            Buddha Jyoti Higher Secondary English Boarding School
          </p>
          <p className="text-gray-500">Taulihawa-3 Kapilvastu, Nepal</p>
        </div>

        {/* Diploma */}
        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-indigo-600">2017–2020</h2>
          <p className="text-gray-700 mb-2">
            Diploma in Computer Science and Engineering
          </p>
          <hr className="border-t border-gray-300 my-3" />
          <p className="font-medium text-gray-800">College:</p>
          <p className="text-gray-600">East West Polytechnic</p>
          <p className="text-gray-500">Bangalore-560091, India</p>
        </div>

        {/* B.Tech */}
        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-indigo-600">2021–2025</h2>
          <p className="text-gray-700 mb-2">
            Bachelor in Computer Engineering
          </p>
          <hr className="border-t border-gray-300 my-3" />
          <p className="font-medium text-gray-800">Institution:</p>
          <p className="text-gray-600">RK University</p>
          <p className="text-gray-500">Rajkot-360020, Gujarat, India</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
