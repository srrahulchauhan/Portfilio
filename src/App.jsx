import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import About from './components/About';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollButtons from './components/ScrollButtons';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <About />
        <Contact />
      </main>
      <WhatsAppButton />
      <ScrollButtons />
    </>
  );
}

export default App;
