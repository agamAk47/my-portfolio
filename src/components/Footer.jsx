import React from 'react';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-dark-surface py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-black tracking-tighter">
          <span className="text-white">PORT</span>
          <span className="text-gradient">FOLIO</span>
        </div>
        
        <p className="text-slate-500 text-sm flex items-center gap-2">
          Made with <Heart size={16} className="text-rose-500 fill-rose-500" /> by Agam
        </p>
        
        <div className="flex items-center gap-4">
          {[Github, Linkedin, Instagram].map((Icon, index) => (
            <a 
              key={index} 
              href="#" 
              className="text-slate-500 hover:text-neon-blue transition-colors duration-300"
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
