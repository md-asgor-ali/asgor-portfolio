import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" border-t border-neutral-800 py-6 mt-10 text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Name */}
        <h2 className="text-cyan-400 font-semibold text-lg mb-3">
          Md Asgor Ali
        </h2>

        {/* Navigation */}
        <nav className="flex justify-center space-x-6 mb-3 text-sm font-medium">
          {["About", "Skills", "Education", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-cyan-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center space-x-5 mb-4 text-xl text-white">
          <a href="https://web.facebook.com/md.asgor.ali.416176" target="_blank" aria-label="Facebook" className="hover:text-cyan-400 transition-colors">
            <FaFacebookF />
          </a>
          <a href="https://x.com/ASGOR_542" target="_blank" aria-label="Twitter" className="hover:text-cyan-400 transition-colors">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/asgor542" target="_blank" aria-label="LinkedIn" className="hover:text-cyan-400 transition-colors">
            <FaLinkedinIn />
          </a>
          <a href="#" target="_blank" aria-label="Instagram" className="hover:text-cyan-400 transition-colors">
            <FaInstagram />
          </a>
          <a href="https://github.com/md-asgor-ali" target="_blank" aria-label="YouTube" className="hover:text-cyan-400 transition-colors">
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-neutral-400">
          © 2025 Md Asgor Ali. All rights reserved.
        </p>
      </div>
    </footer>
  );
}