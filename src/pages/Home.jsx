import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Education from '../sections/Education';
import ProjectsPreview from '../sections/ProjectsPreview';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Education />
      <ProjectsPreview />
      <Contact />
    </div>
  );
}