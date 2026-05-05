import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FloatingContact from './components/FloatingContact';
import ScrollButtons from './components/ScrollButtons';
import AnimatedBackground from './components/AnimatedBackground';
import Home from './pages/Home';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <Router>
      <AnimatedBackground activeSection={activeSection} />
      <Navbar activeSection={activeSection} />
      
      <Routes>
        <Route path="/" element={<Home setActiveSection={setActiveSection} />} />
        {/* Add more routes here as needed, e.g. <Route path="/project/:id" element={<ProjectDetails />} /> */}
      </Routes>

      <FloatingContact />
      <ScrollButtons />
    </Router>
  );
}

export default App;
