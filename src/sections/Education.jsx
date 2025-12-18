import React from "react";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      title: "BSS (Hons) in Sociology",
      institution: "Varendra University, Rajshahi",
      year: "Fourth Year (Expected graduation: 2025)",
      details:
        "Relevant coursework: Research Methods, Sociology of Technology, Data Analysis.",
      icon: <FaGraduationCap size={24} />,
    },
    {
      title: "Web Development Course",
      institution: "Programming Hero",
      year: "6-month intensive program",
      details:
        "Covered HTML, CSS, Tailwind CSS, JavaScript, React Js, Node Js, Express Js, MongoDB and so many things.",
      icon: <FaLaptopCode size={24} />,
    },
  ];

  return (
    <section id="education" className="py-16  text-white">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-cyan-400">Education</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="relative">
          {/* Middle Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-cyan-500 transform -translate-x-1/2 rounded"></div>

          {/* Education Items */}
          {education.map((item, index) => (
            <div
              key={index}
              className="relative mb-12 flex flex-col md:flex-row items-center w-full"
            >
              {/* Timeline Icon */}
              <div className="absolute md:left-1/2 transform md:-translate-x-1/2 bg-cyan-500 p-3 rounded-full z-10">
                {item.icon}
              </div>

              {/* Content Card */}
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0
                    ? "md:pr-8 md:text-left mt-8 md:mt-0"
                    : "md:pl-8 md:ml-auto mt-8 md:mt-0"
                }`}
              >
                <div className="bg-gray-900  p-6 rounded-lg shadow-lg border border-cyan-500 hover:shadow-cyan-500/40 transition">
                  <h4 className="text-xl text-gray-300 font-semibold">{item.title}</h4>
                  <p className="text-cyan-300 text-sm">{item.institution}</p>
                  <p className="text-sm italic mt-1">{item.year}</p>
                  <p className="mt-2 text-gray-300">{item.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
