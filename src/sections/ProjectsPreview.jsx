import React from "react";
import { projects } from "../data/projects";
import { Link } from "react-router";
import { FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";

export default function ProjectsPreview() {
  
  return (
    <section id="projects" className="py-16 ">
      <div className="container mx-auto px-6">
                <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-cyan-400">My Projects</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-3 rounded-full"></div>
        </div>
        <p className="text-gray-400 text-center mt-2 max-w-2xl mx-auto">
          A selection of my favorite projects showcasing my skills in MERN
          Stack, Tailwind, and modern web technologies.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {projects.slice(0,3).map((p) => (
            <div
              key={p.id}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-cyan-500/30"
            >
              <div className="relative group">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-cyan-500 px-4 py-2 rounded-lg text-white font-medium flex items-center gap-2 hover:bg-cyan-400"
                  >
                    Live Demo <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-semibold text-lg text-cyan-300">
                  {p.name}
                </h4>
                <p className="text-sm text-gray-400 mt-2 mb-4">{p.brief}</p>
                <div className="flex justify-between items-center">
                  <Link
                    to={`/projects/${p.id}`}
                    className="bg-slate-700 px-4 py-2 rounded-lg text-white flex items-center gap-2 hover:bg-slate-600 transition"
                  >
                    <FaInfoCircle /> View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-block bg-cyan-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-cyan-400 transition"
          >
            See All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
