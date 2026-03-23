import React from 'react';
import { motion } from 'framer-motion';
import { Code2, MonitorPlay } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="w-full py-16 px-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left Column - 2 Stacked Cards */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-[#0f111a]/80 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 relative overflow-hidden group hover:border-neon-blue/40 transition-all duration-300 shadow-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 blur-[40px] rounded-full group-hover:bg-neon-blue/20 transition-all"></div>
              <div className="w-14 h-14 rounded-2xl bg-[#161a2b] border border-white/5 flex items-center justify-center text-neon-blue mb-6 shadow-inner relative z-10">
                <Code2 size={28} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2 relative z-10">5+ Years</h3>
              <p className="text-slate-400 text-sm leading-relaxed relative z-10">Of professional experience in modern software development.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#0f111a]/80 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 relative overflow-hidden group hover:border-neon-purple/40 transition-all duration-300 shadow-xl flex-1"
            >
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-purple/10 blur-[40px] rounded-full group-hover:bg-neon-purple/20 transition-all"></div>
              <div className="w-14 h-14 rounded-2xl bg-[#161a2b] border border-white/5 flex items-center justify-center text-neon-purple mb-6 shadow-inner relative z-10">
                <MonitorPlay size={28} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2 relative z-10">20+ Projects</h3>
              <p className="text-slate-400 text-sm leading-relaxed relative z-10">Successfully delivered robust and scalable production web applications.</p>
            </motion.div>
          </div>

          {/* Right Column - 1 Large Code Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-8 bg-[#0f111a]/80 backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-3 relative overflow-hidden group hover:border-white/20 transition-all duration-300 shadow-2xl"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-blue/5 blur-[80px] rounded-full pointer-events-none"></div>
            
            <div className="bg-[#07090e] rounded-[2rem] h-full w-full p-8 font-mono text-sm md:text-base leading-relaxed overflow-hidden flex flex-col shadow-inner relative z-10">
              <div className="flex items-center gap-2 mb-8 border-b border-white/5 pb-5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
                <span className="ml-4 text-slate-500 text-xs tracking-wider">developer.js</span>
              </div>
              
              <div className="text-slate-300 flex-1 flex flex-col justify-center">
                <p><span className="text-[#c678dd]">const</span> <span className="text-[#61afef]">developer</span> <span className="text-[#56b6c2]">=</span> {'{'}</p>
                <div className="pl-6 border-l-2 border-white/5 ml-2 my-3 flex flex-col gap-3">
                  <p>name: <span className="text-[#98c379]">'Agam Kumar'</span>,</p>
                  <p>role: <span className="text-[#98c379]">'Full Stack Architect'</span>,</p>
                  <p>passion: <span className="text-[#98c379]">'Building immersive digital experiences'</span>,</p>
                  <p className="flex flex-wrap gap-2">
                    skills: [
                    <span className="text-[#e5c07b]">'React'</span>, 
                    <span className="text-[#e5c07b]">'Node.js'</span>, 
                    <span className="text-[#e5c07b]">'Tailwind'</span>,
                    <span className="text-[#e5c07b]">'TypeScript'</span>
                    ],
                  </p>
                  <p>availableForHire: <span className="text-[#d19a66]">true</span>,</p>
                  <div className="mt-2">
                    <span className="text-[#61afef]">writeCode</span>() {'{'}
                    <p className="pl-6 text-[#7f848e] italic mt-1 mb-1">// Transforming logic into pristine user experiences</p>
                    <p className="pl-6"><span className="text-[#c678dd]">return</span> <span className="text-[#98c379]">'Success'</span>;</p>
                    <p>{'}'}</p>
                  </div>
                </div>
                <p>{'}'};</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;
