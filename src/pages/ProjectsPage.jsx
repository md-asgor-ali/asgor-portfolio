
import { projects } from "../data/projects";
import { Link } from "react-router";
import { FaInfoCircle, FaGithub } from "react-icons/fa";

export default function ProjectsPage() {

  return (
    <section className="py-20 container mx-auto px-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-cyan-400">All Projects</h2>
        <div className="w-20 h-1 bg-cyan-400 mx-auto mt-3 rounded-full"></div>
      </div>
      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-gray-800  rounded-xl shadow-lg overflow-hidden hover:shadow-cyan-500/20 transition-shadow duration-300"
          >
            {/* Image */}
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />

            {/* Content */}
            <div className="p-5 flex flex-col h-full">
              <h4 className="font-semibold text-lg text-cyan-300">{p.name}</h4>
              <p className="text-sm mt-2 text-gray-300">{p.brief}</p>

              {/* Buttons */}
              <div className="mt-6 flex gap-3">
                <Link
                  to={`/projects/${p.id}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-medium px-3 py-2 rounded-lg transition-colors duration-300"
                >
                  <FaInfoCircle /> View Details
                </Link>
                <a
                  href={p.repoClient}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-medium px-3 py-2 rounded-lg transition-colors duration-300"
                >
                  <FaGithub /> Client Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
