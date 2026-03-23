import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Certificates from './components/Certificates.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`relative min-h-screen transition-colors duration-500 selection:bg-neon-blue/30 selection:text-white font-sans overflow-x-hidden ${theme === 'dark' ? 'bg-[#050a14] text-slate-300' : 'bg-[#f0f6ff] text-slate-800'}`}>
      
      {/* Dynamic Cursor Spotlight */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 transition-opacity duration-300"
        style={{
          background: `radial-gradient(150px circle at ${mousePos.x}px ${mousePos.y}px, ${theme === 'dark' ? 'rgba(0, 243, 255, 0.15)' : 'rgba(0, 243, 255, 0.08)'}, transparent 80%)`,
        }}
      />
      
      {/* Background Layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Subtle grid pattern */}
        <div className={`absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] ${theme === 'light' ? 'opacity-20 invert' : ''}`}></div>
        
        {/* Vertical glowing lines */}
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-neon-blue/10 to-transparent"></div>
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent"></div>
        <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-neon-cyan/10 to-transparent"></div>

        {/* Central soft glow overlay */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] rounded-full blur-[150px] mix-blend-screen opacity-50 pointer-events-none ${theme === 'dark' ? 'bg-neon-blue/10' : 'bg-neon-blue/5'}`}></div>
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-1 w-full flex flex-col items-center">
          <Hero />
          <Education />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
