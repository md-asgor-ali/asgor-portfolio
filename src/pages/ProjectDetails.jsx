import React from "react";
import { useParams, Link } from "react-router";
import { projects } from "../data/projects";
import { FaCode, FaTools, FaLightbulb, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project)
    return (
      <div className="container mx-auto px-6 py-20">
        <p className="text-center text-lg text-red-400">❌ Project not found</p>
      </div>
    );

  return (
    <section className="py-16 mt-10 container mx-auto px-6">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-lg overflow-hidden border border-cyan-500/20">
        <div className="md:flex gap-6">
          {/* Image */}
          <div className="relative group md:w-1/3">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
            />

          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            <h2 className="text-3xl font-bold text-cyan-400 mb-3">
              {project.name}
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">{project.brief}</p>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="font-semibold text-cyan-300 flex items-center gap-2">
                <FaCode /> Main technology stack
              </h4>
              <ul className="list-disc pl-6 mt-2 text-gray-300 space-y-1">
                {project.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="flex gap-3 mb-6 flex-wrap">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg text-white transition"
              >
                Live Project <FaExternalLinkAlt size={14} />
              </a>
              <a
                href={project.repoClient}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-white transition"
              >
                Client Repo <FaGithub size={14} />
              </a>
            </div>

            {/* Challenges */}
            <div className="mb-6">
              <h4 className="font-semibold text-cyan-300 flex items-center gap-2">
                <FaTools /> Challenges
              </h4>
              <p className="text-gray-300 mt-2">{project.challenges}</p>
            </div>

            {/* Improvements */}
            <div className="mb-6">
              <h4 className="font-semibold text-cyan-300 flex items-center gap-2">
                <FaLightbulb /> Future Plans
              </h4>
              <p className="text-gray-300 mt-2">{project.improvements}</p>
            </div>

            {/* Back Link */}
            <Link
              to="/projects"
              className="inline-block mt-4 text-cyan-400 hover:underline"
            >
              ← Back to projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
