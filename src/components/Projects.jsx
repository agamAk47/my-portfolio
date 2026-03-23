import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects = ({ theme }) => {
  const isDark = theme === 'dark';
  return (
    <section id="projects" className={`w-full py-32 px-6 relative z-20 overflow-hidden transition-colors duration-500 ${isDark ? '' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto relative">
        <h2 className={`text-4xl md:text-5xl font-bold mb-28 text-center tracking-tight transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple animate-gradient-text">Works</span>
        </h2>

        {/* Central Connecting Line */}
        <div className={`hidden lg:block absolute left-1/2 top-[180px] bottom-0 w-[2px] transition-all duration-500 ${isDark ? 'bg-gradient-to-b from-neon-blue via-neon-purple to-transparent shadow-[0_0_15px_rgba(0,243,255,0.5)]' : 'bg-gradient-to-b from-slate-200 via-slate-300 to-transparent' } -translate-x-1/2`}></div>

        <div className="flex flex-col gap-32 relative">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 relative w-full ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                
                {/* Connection Node */}
                <div className={`hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-[4px] z-20 transition-all ${isDark ? 'border-[#07090e] bg-neon-blue shadow-[0_0_20px_rgba(0,243,255,1)]' : 'border-white bg-slate-900 shadow-lg shadow-slate-200'} items-center justify-center`}></div>

                {/* Connection Branch */}
                <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 h-[2px] z-10 transition-colors ${isDark ? 'bg-gradient-to-r ' + (isEven ? 'from-transparent to-neon-blue' : 'from-neon-blue to-transparent') : 'bg-slate-200'} w-[10%] ${isEven ? 'left-[40%]' : 'right-[40%]'}`}></div>

                {/* Left side (Image) */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2 relative z-30"
                >
                  <div className={`relative group rounded-[2rem] overflow-hidden border transition-all duration-500 shadow-2xl ${isDark ? 'border-white/10' : 'border-white shadow-slate-200/50'}`}>
                    <div className="absolute inset-0 bg-neon-blue/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-auto aspect-[4/3] object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                  </div>
                </motion.div>

                {/* Right side (Content) */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-1/2 flex flex-col justify-center relative z-30"
                >
                  <div className={`backdrop-blur-xl p-10 rounded-[2.5rem] border transition-all duration-500 group ${isDark ? 'bg-[#0f111a]/95 border-white/10 shadow-2xl hover:border-neon-blue/40' : 'bg-white/95 border-slate-100 shadow-xl shadow-slate-200/50 hover:border-neon-blue/20'}`}>
                    <h3 className={`text-3xl md:text-4xl font-bold mb-6 transition-colors ${isDark ? 'text-white group-hover:text-neon-blue' : 'text-slate-900 group-hover:text-neon-purple'}`}>
                      {project.title}
                    </h3>
                    
                    <p className={`text-base leading-relaxed mb-8 transition-colors ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {project.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mb-10">
                      {project.tags.map((tag, i) => (
                        <span key={i} className={`text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full border shadow-inner transition-colors ${isDark ? 'bg-[#161a2b] text-neon-cyan border-white/5' : 'bg-slate-50 text-slate-700 border-slate-200/60'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className={`flex items-center gap-6 pt-8 border-t transition-colors ${isDark ? 'border-white/10' : 'border-slate-100'}`}>
                      <a href={project.github} className={`flex items-center gap-2 text-sm font-bold transition-all px-4 py-2 rounded-full border ${isDark ? 'text-slate-300 hover:text-white border-transparent hover:border-white/20' : 'text-slate-600 hover:text-slate-900 border-slate-100 hover:border-slate-300'}`}>
                        <Github size={20} /> Code
                      </a>
                      <a href={project.demo} className={`flex items-center gap-2 text-sm font-bold transition-all duration-300 px-6 py-2.5 rounded-full border relative overflow-hidden ${isDark ? 'text-neon-blue bg-neon-blue/10 border-neon-blue/30 shadow-[0_0_15px_rgba(0,243,255,0.2)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] hover:bg-neon-blue hover:text-[#0b0e14]' : 'text-white bg-slate-900 border-slate-900 shadow-lg shadow-slate-200 hover:bg-slate-800'}`}>
                        <span className="relative z-10 flex items-center gap-2">Live Demo <ExternalLink size={18} /></span>
                      </a>
                    </div>
                  </div>
                </motion.div>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
