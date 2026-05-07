import React from 'react';
import Header from './pages/Header';
import Hero from './pages/Hero';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Contact from './pages/Contact';
import bgImage from './assets/White-Background-Best-Wallpaper-16568.jpg';
import mobileBg from './assets/mobile.jpg';

function App() {
  return (
    <div className="min-h-screen relative">
      
      {/* MOBILE BACKGROUND - Only shows on screens smaller than 768px */}
      <img
        src={mobileBg}
        alt=""
        aria-hidden="true"
        className="fixed inset-0 w-full h-full object-cover object-top md:hidden -z-10"
        loading="eager"
        decoding="sync"
      />

      {/* DESKTOP BACKGROUND - Only shows on screens 768px and larger */}
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        className="hidden md:block fixed inset-0 w-full h-full object-cover object-center -z-10"
        loading="eager"
        decoding="sync"
      />

      {/* Page Content - z-10 ensures text stays above the background */}
      <Header />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;