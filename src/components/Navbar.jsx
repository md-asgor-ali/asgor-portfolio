import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router";
import { FaDownload } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "education", label: "Education" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-neutral-900/70 backdrop-blur-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-semibold cursor-pointer">
          <span className="text-cyan-400">&lt;</span>
          <span className="text-white">Asgor</span>
          <span className="text-cyan-400">/</span>
          <span className="text-white">Ali</span>
          <span className="text-cyan-400">&gt;</span>
        </div>

        <nav className="hidden md:flex space-x-6 items-center">
          {links.map((l) => (
            <ScrollLink
              key={l.to}
              to={l.to}
              smooth
              duration={400}
              offset={-80}
              className="cursor-pointer hover:text-cyan-300"
            >
              {l.label}
            </ScrollLink>
          ))}

          <a
            href="https://drive.google.com/file/d/1GmS96f7cDzfju6XLsW_bRO8jj89GRrlo/view?usp=sharing"
            target="_blank"
            download
            className="ml-4 inline-flex items-center gap-2 bg-cyan-500 px-3 py-1 rounded-md shadow-md hover:bg-cyan-400"
          >
            <FaDownload /> Resume
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-gray-800 p-4">
          <div className="flex flex-col items-center text-center space-y-3">
            {links.map((l) => (
              <ScrollLink
                key={l.to}
                to={l.to}
                smooth
                duration={400}
                offset={-80}
                onClick={() => setOpen(false)}
                className="cursor-pointer"
              >
                {l.label}
              </ScrollLink>
            ))}
            <Link to="/projects" onClick={() => setOpen(false)}>
              Projects
            </Link>
            <a
              href="/resume.pdf"
              download
              className="mt-2 inline-flex items-center gap-2 bg-cyan-500 px-3 py-1 rounded-md"
            >
              {" "}
              <FaDownload /> Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

