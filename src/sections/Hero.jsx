import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-24  text-white"
    >
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
        <Fade cascade>
          {/* Text Section */}
          <div className="flex-1 ">
            {/* Gradient Name */}
            <h2 className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent text-3xl md:text-5xl font-extrabold">
              Hi, I’m Asgor Ali
            </h2>

            {/* Typewriter effect with gradient */}
            <h3 className="mt-2 text-xl md:text-2xl font-semibold">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                <Typewriter
                  words={[
                    "Frontend Developer",
                    "MERN Stack Developer",
                    "React.js Developer",
                    "JavaScript Developer",
                    "Coder",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
              </span>
            </h3>

            <p className="mt-4 text-lg max-w-xl text-gray-300 leading-relaxed">
              I craft modern, responsive web applications with a focus on performance and user experience — specializing in the MERN stack. I’m passionate about transforming ideas into intuitive, high-quality digital solutions.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4 text-2xl">
              {[
                { href: "https://github.com/md-asgor-ali", icon: <FaGithub /> },
                { href: "https://www.linkedin.com/in/asgor542", icon: <FaLinkedin /> },
                { href: "https://web.facebook.com/md.asgor.ali.416176", icon: <FaFacebook /> },
                { href: "https://x.com/ASGOR_542", icon: <FaTwitter /> },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition transform hover:scale-125 hover:text-cyan-400"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-4 items-center">
              <a
                href="https://drive.google.com/file/d/1GmS96f7cDzfju6XLsW_bRO8jj89GRrlo/view?usp=sharing"
                target="_blank"
                download
                className="flex items-center gap-2 bg-cyan-500 px-5 py-2 rounded-md shadow-lg hover:shadow-cyan-500/50 hover:bg-cyan-400 transition"
              >
                <FaDownload /> Download Resume
              </a>
            </div>
          </div>

          {/* Profile Image with Glow */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-58 h-58 md:w-90 md:h-90 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.5)] animate-pulse">
              <img
                src={profile}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
