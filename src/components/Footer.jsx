import React from 'react';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer = ({ theme }) => {
  const isDark = theme === 'dark';
  return (
    <footer className={`border-t transition-colors duration-500 py-12 px-6 ${isDark ? 'border-white/10 bg-[#07090e]' : 'border-slate-200 bg-white'}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-black tracking-tighter">
          <span className={`transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>PORT</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">FOLIO</span>
        </div>
        
        <p className={`text-sm flex items-center gap-2 transition-colors ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
          Made with <Heart size={16} className="text-rose-500 fill-rose-500" /> by Agam
        </p>
        
        <div className="flex items-center gap-4">
          {[Github, Linkedin, Instagram].map((Icon, index) => (
            <a 
              key={index} 
              href="#" 
              className={`transition-colors duration-300 ${isDark ? 'text-slate-500 hover:text-neon-blue' : 'text-slate-400 hover:text-neon-purple'}`}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
