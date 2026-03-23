import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Education', 'Skills', 'Projects', 'Certificates', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed w-full z-[100] transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className={`mx-auto max-w-7xl px-6 md:px-12 transition-all duration-300`}>
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? (theme === 'dark' ? 'bg-[#0f111a]/80 backdrop-blur-xl border border-white/10' : 'bg-white/40 backdrop-blur-xl border border-slate-200') + ' rounded-full px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.1)]' : 'px-2'}`}>
          
          {/* Logo Branding */}
          <a href="#home" className="flex items-center gap-2 md:gap-3 group relative cursor-pointer py-1">
            {/* Animated Icon */}
            <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10">
              {/* Spinning dashed border */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-xl border border-dashed border-neon-purple/80 transition-colors"
              />
              {/* Inner glowing block - always glowing */}
              <div className="absolute inset-1.5 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple opacity-100 blur-[6px] transition-all duration-300"></div>
              {/* Monogram */}
              <div className={`absolute inset-1.5 rounded-lg flex items-center justify-center font-black text-[10px] md:text-sm z-10 transition-colors ${theme === 'dark' ? 'bg-[#0f111a] text-white' : 'bg-white text-slate-900'}`}>
                <span className="text-neon-blue mr-[1px]">A</span>
                <span className="text-neon-purple">K</span>
              </div>
            </div>

            {/* Typography - Hover state made default */}
            <div className="flex items-baseline overflow-hidden font-poppins relative">
              <span className="text-neon-blue font-mono font-bold text-[15px] md:text-lg mr-1 opacity-100 translate-x-0 transition-all duration-300">
                &lt;
              </span>
              <span className={`text-[17px] md:text-xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple flex items-center`}>
                Agam
              </span>
              <span className={`text-[17px] md:text-xl font-medium tracking-tight ml-1.5 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-slate-900'} flex items-center`}>
                Kumar
              </span>
              <span className="text-neon-purple font-mono font-bold text-[15px] md:text-lg ml-1 opacity-100 translate-x-0 transition-all duration-300">
                /&gt;
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center gap-1 ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-100 border-slate-200'} border rounded-full px-2 py-1 backdrop-blur-md`}>
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className={`text-sm font-medium px-5 py-2 rounded-full transition-all ${theme === 'dark' ? 'text-slate-300 hover:text-white hover:bg-white/10' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'}`}
              >
                {link}
              </a>
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${theme === 'dark' ? 'bg-white/10 text-yellow-400 border-white/10' : 'bg-slate-200 text-slate-700 border-slate-300'} border`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-4">
            <button onClick={toggleTheme} className={`text-sm font-medium p-2 rounded-full transition-all ${theme === 'dark' ? 'text-yellow-400' : 'text-slate-600'}`}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className={`${theme === 'dark' ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full left-6 right-6 mt-4 ${theme === 'dark' ? 'bg-[#0f111a]/95 border-white/10' : 'bg-white/95 border-slate-200'} border rounded-2xl p-6 shadow-2xl flex flex-col gap-4 md:hidden backdrop-blur-xl origin-top`}
          >
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium transition-colors px-4 py-2 rounded-lg ${theme === 'dark' ? 'text-slate-300 hover:text-neon-blue hover:bg-white/5' : 'text-slate-600 hover:text-neon-blue hover:bg-slate-50'}`}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
