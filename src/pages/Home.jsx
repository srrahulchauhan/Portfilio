import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import About from '../components/About';
import Contact from '../components/Contact';
import useScrollTracking from '../hooks/useScrollTracking';

const Home = ({ setActiveSection }) => {
    useScrollTracking(setActiveSection);

    return (
        <main>
            <Hero />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <About />
            <Contact />
        </main>
    );
};

export default Home;
