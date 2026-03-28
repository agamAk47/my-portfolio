import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/Man_in_suit_202603290048.jpeg';

const About = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section id="about" className={`w-full py-20 px-6 relative z-20 overflow-hidden transition-colors duration-500 ${isDark ? '' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 items-stretch">
        
        {/* Card 1: Expertise Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`flex-1 p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500 overflow-hidden relative group ${
            isDark 
              ? 'bg-[#0d111a]/80 border-white/5 hover:border-neon-blue/20 shadow-xl' 
              : 'bg-white/40 border-slate-200 hover:border-neon-blue/30 shadow-lg shadow-slate-200/40'
          }`}
        >
          {/* Profile Badge - More compact */}
          <div className={`inline-flex items-center gap-3 p-1.5 pr-5 rounded-full mb-8 transition-colors ${
            isDark ? 'bg-[#050a14]/60 border border-white/5' : 'bg-slate-100/60 border border-slate-200'
          }`}>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-neon-blue/20">
              <img src={profileImg} alt="Agam Kumar" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xs font-bold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>Agam Kumar</span>
              <span className={`text-[9px] font-medium uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Full Stack Developer</span>
            </div>
          </div>

          <h2 className={`text-3xl md:text-4xl font-bold mb-6 leading-tight tracking-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
            Full Stack <br/>
            <span className="text-neon-blue">Developer & AI/ML</span> <br/>
            Enthusiast
          </h2>

          <p className={`text-sm leading-relaxed max-w-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            B.Tech CSE student specializing in high-performance web applications and AI-driven speech analysis. I focus on building tools that solve real-world problems with precision.
          </p>

          <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-[60px] opacity-40 transition-colors ${isDark ? 'bg-neon-blue' : 'bg-neon-blue'}`}></div>
        </motion.div>

        {/* Card 2: What Drives Me - More landscape */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`flex-[1.8] p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500 overflow-hidden relative group ${
            isDark 
              ? 'bg-[#0d111a]/80 border-white/5 hover:border-neon-purple/20 shadow-xl' 
              : 'bg-white/40 border-slate-200 hover:border-neon-purple/30 shadow-lg shadow-slate-200/40'
          }`}
        >
          <div className="flex flex-col md:flex-row gap-10 items-center h-full">
            {/* Code Block Visual - More professional size */}
            <div className={`w-full md:w-[40%] rounded-xl p-5 font-mono text-[11px] relative overflow-hidden transition-colors ${
              isDark ? 'bg-[#050a14] border border-white/5' : 'bg-slate-900 border border-slate-800'
            }`}>
              <div className="flex gap-1 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
              </div>

              <div className="space-y-0.5">
                <p className="text-blue-400">const <span className="text-purple-400">developer</span> = {"{"}</p>
                <div className="pl-4 space-y-0.5">
                  <p className="text-slate-300">firstName: <span className="text-green-400">"Agam"</span>,</p>
                  <p className="text-slate-300">lastName: <span className="text-green-400">"Kumar"</span>,</p>
                  <p className="text-slate-300">hobby: {"{"}</p>
                  <div className="pl-4 space-y-0.5">
                    <p className="text-purple-400">repeat: <span className="text-blue-400">()</span> {"=>"} {"{"}</p>
                    <div className="pl-4 text-slate-500 italic text-[10px]">
                      <p>eat();</p>
                      <p>sleep();</p>
                      <p>code();</p>
                      <p>repeat();</p>
                    </div>
                    <p className="text-purple-400">{"}"}</p>
                  </div>
                  <p className="text-slate-300">{"}"}</p>
                </div>
                <p className="text-blue-400">{"}"}</p>
              </div>
            </div >

            {/* Content - Static professional colors */}
            <div className="flex-1 flex flex-col justify-center">
              <h3 className={`text-3xl md:text-4xl font-bold mb-4 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                What <span className="text-neon-purple">Drives Me</span>
              </h3>
              <p className={`text-[15px] leading-relaxed transition-colors ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                I'm driven by the challenge of bridging the gap between raw data and impactful user experiences. My work with Parkinson's speech parameter analysis using Gemini AI and building complex MERN stack marketplaces is a testament to my commitment to using technology for meaningful change. I prioritize clean code, scalable architecture, and a user-first philosophy in everything I build.
              </p>
            </div>
          </div>

          <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full blur-[60px] opacity-40 transition-colors ${isDark ? 'bg-neon-purple' : 'bg-neon-purple'}`}></div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
