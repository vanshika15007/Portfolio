import React, { useEffect } from "react";
import Navbar from './components/Navbar';
import AnimatedSection from './components/AnimatedSection';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    const glow = document.querySelector(".bg-radial-mask");
    const handleMove = (e) => {
      if (glow) {
        const x = e.clientX + "px";
        const y = e.clientY + "px";
        glow.style.setProperty("--x", x);
        glow.style.setProperty("--y", y);
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="font-sans min-h-screen bg-slate-900 flex flex-col">
      <Navbar />
      <AnimatedSection id="home"><Home /></AnimatedSection>
      <AnimatedSection id="about"><About /></AnimatedSection>
      <AnimatedSection id="projects"><Projects /></AnimatedSection>
      <AnimatedSection id="skills"><Skills /></AnimatedSection>
      <AnimatedSection id="resume"><Resume /></AnimatedSection>
      <AnimatedSection id="contact"><Contact /></AnimatedSection>
      <footer className="w-full text-center py-6 mt-10 text-gray-400 bg-transparent text-sm">
        &copy; {new Date().getFullYear()} Vanshika Sharma. All rights reserved.
      </footer>
    </div>
  );
}

export default App;