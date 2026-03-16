import React, { useState } from "react";
import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Achievements from "./pages/Achievements/Achievements";
import Certificates from "./pages/Certificates/Certificates";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
import StarParticles from "./components/ui/StarParticles";

import { Route, Routes } from "react-router-dom";

export default function App() {
  const [isOnePage, setIsOnePage] = useState(false); // Toggle state

  return (
    <div className="relative min-h-screen bg-[#020617] text-white">
      {/* Global Star Particle Background */}
      <StarParticles />
      
      {/* Ensure header and content stay above the global background */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        {/* Conditional Rendering */}
        {isOnePage ? (
          // One-Page Mode: Render all components together
          <main className="flex-grow">
            <Hero />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Certificates />
            <Achievements />
            <Contact />
          </main>
        ) : (
          // Router Mode: Use routes for navigation
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/training" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        )}
      </div>
    </div>
  );
}
