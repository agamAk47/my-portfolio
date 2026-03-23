import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certificates } from '../data/portfolioData';

const Certificates = ({ theme }) => {
  const isDark = theme === 'dark';
  return (
    <section id="certificates" className={`py-24 px-6 relative overflow-hidden transition-colors duration-500 ${isDark ? '' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Professional <span className="text-neon-blue">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`backdrop-blur-xl p-8 rounded-[2rem] border transition-all group shadow-2xl relative overflow-hidden ${isDark ? 'bg-[#0f111a]/80 border-white/10 hover:border-neon-blue/40' : 'bg-white border-slate-200 hover:border-neon-blue/20 shadow-slate-200/50'}`}
            >
              <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl transition-colors ${isDark ? 'bg-neon-blue/5 group-hover:bg-neon-blue/10' : 'bg-neon-blue/10 opacity-30 group-hover:bg-neon-blue/20'}`}></div>
              
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 ${isDark ? 'bg-neon-blue/10 border border-neon-blue/20 text-neon-blue' : 'bg-neon-blue/5 border border-neon-blue/10 text-neon-blue'}`}>
                <Award size={24} />
              </div>

              <h3 className={`text-xl font-bold mb-2 leading-tight transition-colors ${isDark ? 'text-white group-hover:text-neon-blue' : 'text-slate-900 hover:text-neon-purple'}`}>
                {cert.title}
              </h3>
              
              <div className="flex flex-col gap-1 mb-6">
                <span className={`font-medium transition-colors ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{cert.issuer}</span>
                <span className={`text-sm transition-colors ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{cert.date}</span>
              </div>

              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ gap: '12px' }}
                className="inline-flex items-center gap-2 text-neon-blue font-bold text-sm hover:underline"
              >
                View Certificate <ExternalLink size={14} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
