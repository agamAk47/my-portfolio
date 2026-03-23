import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects = () => {

  return (
    <section id="projects" className="w-full py-32 px-6 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-28 text-center tracking-tight">
          Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple animate-gradient-text">Works</span>
        </h2>

        {/* Central Connecting Line */}
        <div className="hidden lg:block absolute left-1/2 top-[180px] bottom-0 w-[2px] bg-gradient-to-b from-neon-blue via-neon-purple to-transparent -translate-x-1/2 shadow-[0_0_15px_rgba(0,243,255,0.5)]"></div>

        <div className="flex flex-col gap-32 relative">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 relative w-full ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                
                {/* Connection Node */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-[4px] border-[#07090e] bg-neon-blue z-20 shadow-[0_0_20px_rgba(0,243,255,1)] items-center justify-center"></div>

                {/* Connection Branch */}
                <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r ${isEven ? 'from-transparent to-neon-blue' : 'from-neon-blue to-transparent'} w-[10%] ${isEven ? 'left-[40%]' : 'right-[40%]'} z-10`}></div>

                {/* Left side (Image) */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2 relative z-30"
                >
                  <div className="relative group rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
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
                  <div className="bg-[#0f111a]/95 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 shadow-2xl hover:border-neon-blue/40 transition-colors group">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-neon-blue transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-400 text-base leading-relaxed mb-8">
                      {project.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mb-10">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full bg-[#161a2b] text-neon-cyan border border-white/5 shadow-inner">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-6 pt-8 border-t border-white/10">
                      <a href={project.github} className="flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white transition-colors border border-transparent hover:border-white/20 px-4 py-2 rounded-full">
                        <Github size={20} /> Code
                      </a>
                      <a href={project.demo} className="flex items-center gap-2 text-sm font-bold text-neon-blue hover:text-dark transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.2)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] px-6 py-2.5 rounded-full bg-neon-blue/10 hover:bg-neon-blue border border-neon-blue/30 relative overflow-hidden">
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
