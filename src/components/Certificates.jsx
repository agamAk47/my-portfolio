import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certificates } from '../data/portfolioData';

const Certificates = () => {

  return (
    <section id="certificates" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Professional <span className="text-neon-blue">Certifications</span></h2>
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
              className="bg-[#0f111a]/80 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 hover:border-neon-blue/40 transition-all group shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-neon-blue/5 blur-3xl group-hover:bg-neon-blue/10 transition-all"></div>
              
              <div className="w-12 h-12 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center text-neon-blue mb-6 group-hover:scale-110 transition-transform">
                <Award size={24} />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-neon-blue transition-colors">
                {cert.title}
              </h3>
              
              <div className="flex flex-col gap-1 mb-6">
                <span className="text-slate-400 font-medium">{cert.issuer}</span>
                <span className="text-sm text-slate-500">{cert.date}</span>
              </div>

              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ gap: '12px' }}
                className="inline-flex items-center gap-2 text-neon-blue font-semibold text-sm hover:underline"
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
