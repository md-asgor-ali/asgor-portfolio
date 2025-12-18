import React from "react";
import Marquee from "react-fast-marquee";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/javascript.png";
import tailwindIcon from "../assets/tailwindcss.png";
import reactIcon from "../assets/reactjs.png";
import expressIcon from "../assets/express.png";
import mongoIcon from "../assets/mongodb.png";
import firebaseIcon from "../assets/firebase.png";
import tanstackIcon from "../assets/tanstack.png";
import stripeIcon from "../assets/stripe.png";
import vscodeIcon from "../assets/vscode.png";
import gitIcon from "../assets/git.png";
import githubIcon from "../assets/github.png";
import netlifyIcon from "../assets/netlify.png";

const skills = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "ReactJS", icon: reactIcon },
  { name: "ExpressJS", icon: expressIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "Firebase", icon: firebaseIcon },
  { name: "Tanstack Query", icon: tanstackIcon },
  { name: "Strip", icon: stripeIcon },
  { name: "vsCode", icon: vscodeIcon },
  { name: "git", icon: gitIcon },
  { name: "github", icon: githubIcon },
  { name: "Netlify", icon: netlifyIcon },
];

export default function SkillsMarquee() {
  return (
    <section id="skills" className="py-16  text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-cyan-400">My Skills</h2>
        <div className="w-20 h-1 bg-cyan-400 mx-auto mt-3 rounded-full"></div>
      </div>

      <Marquee
        gradient={false}
        speed={100}
        pauseOnHover={true}
        className="flex gap-8"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-900 border border-cyan-500 rounded-xl px-6 py-4 shadow-lg hover:scale-105 transition-transform mx-4" // Added mx-4 for spacing
          >
            <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
            <p className="mt-2 font-semibold">{skill.name}</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
}