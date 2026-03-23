import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Certificates from './components/Certificates.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const GlobalBubbles = ({ theme }) => {
  const isDark = theme === 'dark';
  const [bubbles, setBubbles] = useState([]);
  
  useEffect(() => {
    // Generate random bubbles ONLY once on mount
    const newBubbles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.random() * 60 + 10,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: Math.random() * 20 + 20,
      startX: (Math.random() - 0.5) * 150
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {bubbles.map(b => (
        <motion.div
          key={b.id}
          className={`absolute rounded-full blur-[2px] border transition-colors shadow-lg ${isDark ? 'bg-neon-blue/10 border-neon-blue/20 shadow-neon-blue/20' : 'bg-neon-purple/10 border-neon-purple/20 shadow-neon-purple/10'}`}
          style={{ width: b.size, height: b.size, left: `${b.left}%`, bottom: "-100px" }}
          animate={{
            y: [0, -1500],
            x: [0, b.startX, 0],
            opacity: isDark ? [0, 0.4, 0] : [0, 0.5, 0]
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            ease: "linear",
            delay: b.delay
          }}
        />
      ))}
    </div>
  );
};

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
    <div className={`relative min-h-screen transition-colors duration-500 font-sans overflow-x-hidden ${theme === 'dark' ? 'bg-[#050a14] text-slate-300 selection:bg-neon-blue/30 selection:text-white' : 'bg-gradient-to-br from-[#dbeafe] via-[#ffe4e6] to-[#dcfce7] animate-mesh text-slate-800 selection:bg-neon-blue/20 selection:text-slate-900'}`}>
      
      {/* Global Particles */}
      <GlobalBubbles theme={theme} />

      {/* Dynamic Cursor Spotlight */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 transition-opacity duration-300"
        style={{
          background: `radial-gradient(150px circle at ${mousePos.x}px ${mousePos.y}px, ${theme === 'dark' ? 'rgba(0, 243, 255, 0.15)' : 'rgba(0, 243, 255, 0.08)'}, transparent 80%)`,
        }}
      />
      
      {/* Background Layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated Background Blobs (Light Mode Only) */}
        {theme === 'light' && (
          <>
            <motion.div 
              animate={{ 
                x: [0, 100, 0], 
                y: [0, 50, 0],
                scale: [1, 1.2, 1] 
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-neon-blue/15 rounded-full blur-[100px]"
            />
            <motion.div 
              animate={{ 
                x: [0, -80, 0], 
                y: [0, 100, 0],
                scale: [1, 1.1, 1] 
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute top-[20%] -right-[5%] w-[600px] h-[600px] bg-neon-purple/15 rounded-full blur-[120px]"
            />
            <motion.div 
              animate={{ 
                x: [0, 50, 0], 
                y: [0, -100, 0],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-[-10%] left-[20%] w-[550px] h-[550px] bg-neon-cyan/15 rounded-full blur-[110px]"
            />
          </>
        )}

        {/* Subtle grid pattern */}
        <div className={`absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] transition-opacity duration-500 ${theme === 'light' ? 'opacity-[0.05] invert' : 'opacity-100'}`}></div>
        
        {/* Vertical glowing lines */}
        <div className={`absolute left-1/4 top-0 bottom-0 w-[1px] transition-colors ${theme === 'dark' ? 'bg-gradient-to-b from-transparent via-neon-blue/10 to-transparent' : 'bg-gradient-to-b from-transparent via-slate-200 to-transparent'}`}></div>
        <div className={`absolute left-1/2 top-0 bottom-0 w-[1px] transition-colors ${theme === 'dark' ? 'bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent' : 'bg-gradient-to-b from-transparent via-slate-100 to-transparent'}`}></div>
        <div className={`absolute left-3/4 top-0 bottom-0 w-[1px] transition-colors ${theme === 'dark' ? 'bg-gradient-to-b from-transparent via-neon-cyan/10 to-transparent' : 'bg-gradient-to-b from-transparent via-slate-200 to-transparent'}`}></div>

        {/* Central soft glow overlay */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] rounded-full blur-[150px] pointer-events-none transition-all duration-500 ${theme === 'dark' ? 'bg-neon-blue/10 mix-blend-screen opacity-50' : 'bg-neon-blue/10 mix-blend-multiply opacity-30'}`}></div>
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-1 w-full flex flex-col items-center">
          <Hero theme={theme} />
          <About theme={theme} />
          <Education theme={theme} />
          <Skills theme={theme} />
          <Projects theme={theme} />
          <Certificates theme={theme} />
          <Contact theme={theme} />
        </main>
        <Footer theme={theme} />
      </div>
    </div>
  );
}

export default App;
