import React from "react";
import { Fade } from "react-awesome-reveal";
import {
  FaLaptopCode,
  FaQuoteLeft,
  FaFootballBall,
  FaUsers,
  FaFlagCheckered,
  FaUser
} from "react-icons/fa";

const aboutCards = [
  {
    icon: <FaUser />,
    text: `Hi! I'm Md Asgor Ali, a passionate Frontend Developer from Bangladesh 🇧🇩. I specialize in building modern, clean, and responsive full-stack applications using MongoDB, Express.js, React, and Node.js. I enjoy working with clean code and modern tools.`
  },
  {
    icon: <FaLaptopCode />,
    text: `I’m currently learning Next.js and enjoy applying each new concept directly into my projects. This hands-on approach allows me to grasp ideas faster, retain them better, and apply them efficiently in real-world development situations.`
  },
  {
    icon: <FaQuoteLeft />,
    text: `I'm hardworking, consistent, and deeply passionate about problem-solving through code. I love taking on technical challenges, writing maintainable code, and continuously improving my development skills.`
  },
  {
    icon: <FaFootballBall />,
    text: `Outside of coding, I enjoy playing football ⚽ which helps me stay active and mentally refreshed. Balancing technology with real-world activities boosts creativity and prevents burnout.`
  },
  {
    icon: <FaUsers />,
    text: `I’m friendly and collaborative. I work well in teams, communicate clearly, and value others’ opinions. I adapt quickly and contribute to group success.`
  },
  {
    icon: <FaFlagCheckered />,
    text: `My goal is to become a skilled full-stack developer. Through consistent learning and hard work, I aim to master multiple technologies and contribute to impactful projects.`
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-neutral-80 text-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cyan-400">About Me</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Cards */}
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
  {aboutCards.map((card, index) => (
    <Fade key={index} direction="up" triggerOnce cascade damping={0.2}>
      <div className="flex flex-col p-6 border border-cyan-500 rounded-xl bg-gray-900 shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 h-full">
        <div className="text-cyan-400 text-3xl mb-4">{card.icon}</div>
        <p className="text-gray-300 flex-grow">{card.text}</p>
      </div>
    </Fade>
  ))}
</div>
      </div>
    </section>
  );
}
