import React from 'react';
import Header from './pages/Header';
import Hero from './pages/Hero';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Contact from './pages/Contact';
import bgImage from './assets/White-Background-Best-Wallpaper-16568.jpg';

function App() {
  return (
    <div
      className="min-h-screen bg-fixed-responsive"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Header />
      <main>
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
