import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/Man_in_suit_202603290048.jpeg';
import resumePdf from '../assets/Agam_General_cv.pdf';
import { socialLinks } from '../data/portfolioData';

const OrbitingIcon = ({ icon, radius, duration, delay, theme }) => {
  const isDark = theme === 'dark';
  return (
    <motion.div
      className={`absolute top-1/2 left-1/2 w-[52px] h-[52px] -mt-[26px] -ml-[26px] z-20 flex items-center justify-center rounded-xl border transition-all duration-300 pointer-events-auto ${isDark ? 'bg-[#0d0f16] border-white/10 shadow-2xl shadow-cyan-500/20' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50'}`}
      animate={{ 
        transform: [
          `rotate(0deg) translateX(${radius}px) rotate(0deg)`,
          `rotate(360deg) translateX(${radius}px) rotate(-360deg)`
        ]
      }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        ease: "linear", 
        delay 
      }}
    >
      <img src={icon} alt="tech icon" className="w-8 h-8 object-contain" />
    </motion.div>
  );
};


const Hero = ({ theme }) => {
  const isDark = theme === 'dark';
  const [isMobile, setIsMobile] = useState(false);
  const [roleText, setRoleText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "Full Stack Developer",
    "UI/UX Designer",
    "MERN Stack Dev",
    "AI/ML Enthusiast"
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentFullText = roles[roleIndex % roles.length];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && roleText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && roleText === '') {
        setIsDeleting(false);
        setRoleIndex(prev => prev + 1);
      } else {
        setRoleText(currentFullText.substring(0, isDeleting ? roleText.length - 1 : roleText.length + 1));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [roleText, isDeleting, roleIndex]);

  const innerIcons = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
  ];

  const outerIcons = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
  ];

  return (
    <section id="home" className={`relative w-full min-h-[100vh] flex items-center pt-32 pb-10 px-6 overflow-hidden transition-colors duration-500 ${isDark ? '' : 'bg-transparent'}`}>
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 text-center lg:text-left"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border w-fit backdrop-blur-sm self-center lg:self-start transition-colors ${isDark ? 'border-neon-blue/30 bg-neon-blue/10' : 'border-neon-blue/20 bg-neon-blue/5'}`}>
            <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse"></span>
            <span className="text-sm font-bold text-neon-blue">Available for Work</span>
          </div>

          <h1 className={`text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Hey! I'm <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue animate-gradient-text">
              Agam Kumar
            </span>
          </h1>
          
          <div className="h-[40px] flex items-center justify-center lg:justify-start">
            <h2 className="text-2xl md:text-3xl font-semibold text-neon-blue font-poppins">
              <span className={`mr-2 opacity-50 font-normal transition-colors ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{"{"}</span>
              {roleText}
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-[3px] h-[24px] bg-neon-blue ml-1 align-middle"
              />
              <span className={`ml-2 opacity-50 font-normal transition-colors ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{"}"}</span>
            </h2>
          </div>
          
          <p className={`text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mt-2 transition-colors ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            B.Tech CSE student at Lovely Professional University. I specialize in building scalable MERN stack 
            applications and AI-driven tools, always pushing the boundaries of modern web development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <motion.a 
              href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`btn-shine px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] ${isDark ? 'bg-gradient-to-r from-neon-blue to-neon-cyan text-[#050a14]' : 'bg-slate-900 text-white'}`}
            >
              Contact Me <ArrowRight size={20} />
            </motion.a>
            
            <motion.a 
              href={resumePdf} download="Agam_Kumar_Resume.pdf"
              whileHover={{ scale: 1.05, backgroundColor: isDark ? "rgba(0, 243, 255, 0.1)" : "rgba(0, 243, 255, 0.05)" }}
              whileTap={{ scale: 0.95 }}
              className={`btn-shine px-8 py-4 rounded-full border-2 font-bold flex items-center justify-center gap-2 backdrop-blur-sm transition-all shadow-[0_0_15px_rgba(0,243,255,0.1)] hover:shadow-[0_0_25px_rgba(0,243,255,0.3)] ${isDark ? 'border-neon-blue text-neon-blue' : 'border-slate-200 text-slate-700'}`}
            >
              Download Resume <Download size={20} />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content - Profile visual */}
        <div className="relative flex justify-center items-center h-[500px] md:h-[650px] mt-12 lg:mt-0">
          
          {/* Main Visual Container - Static Center */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative flex justify-center items-center"
          >
            {/* Inner Dashed Orbit Ring (320px diameter) */}
            <div 
              className={`absolute w-[320px] h-[320px] rounded-full border-[1px] border-dashed transition-colors ${isDark ? 'border-neon-blue/40 shadow-[0_0_15px_rgba(0,200,255,0.1)]' : 'border-neon-blue/20 shadow-[0_0_15px_rgba(0,200,255,0.05)]'}`}
            />
            {/* Outer Dashed Orbit Ring (440px diameter) */}
            <div 
              className={`absolute w-[440px] h-[440px] rounded-full border-[1.5px] border-dashed transition-colors ${isDark ? 'border-neon-blue/30 shadow-[0_0_25px_rgba(0,200,255,0.1)]' : 'border-neon-blue/15 shadow-[0_0_25px_rgba(0,200,255,0.05)]'}`}
            />
            
            <div className={`absolute w-[400px] h-[400px] rounded-full blur-[70px] mix-blend-screen transition-opacity ${isDark ? 'bg-gradient-to-tr from-neon-blue/10 to-neon-purple/10 opacity-60' : 'bg-gradient-to-tr from-neon-blue/5 to-neon-purple/5 opacity-40'}`} />

            {/* Circular Profile Image Container (260px diameter) - STATIC */}
            <div className={`relative z-10 w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full border-[4px] transition-all shadow-[0_0_50px_rgba(0,243,255,0.3)] overflow-hidden flex items-center justify-center ${isDark ? 'border-[#07090e] bg-[#161a2b]' : 'border-white bg-slate-50'}`}>
              <img 
                src={profileImg} 
                alt="Agam Kumar" 
                className="w-full h-full object-cover" 
              />
              <div className="hidden absolute inset-0 text-neon-blue flex-col items-center justify-center text-4xl font-mono font-black tracking-tighter shadow-inner">
                AK
              </div>
            </div>

            {/* Orbiting Icons */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Inner Orbit (Radius 160px) */}
              {innerIcons.map((icon, i) => (
                <OrbitingIcon 
                  key={`inner-${i}`} 
                  icon={icon} 
                  radius={160} 
                  duration={15} 
                  delay={i * -3} 
                  theme={theme}
                />
              ))}
              {/* Outer Orbit (Radius 220px) */}
              {outerIcons.map((icon, i) => (
                <OrbitingIcon 
                  key={`outer-${i}`} 
                  icon={icon} 
                  radius={220} 
                  duration={25} 
                  delay={i * -5} 
                  theme={theme}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
