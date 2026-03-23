import React from 'react';
import { motion } from 'framer-motion';

const AboutJourney = () => {
  const education = [
    { year: 'Since Aug 2023', title: 'B.Tech CSE - Lovely Professional University', desc: 'Pursuing Bachelor of Technology in Computer Science and Engineering. Maintaining a CGPA of 7.6. Focus on advanced algorithms and full-stack architecture.', highlight: true },
    { year: '2022 - 2023', title: 'Intermediate - PM SHRI KV No. 1 AFS Tambaram', desc: 'Completed Higher Secondary Education with a focus on PCM. Percentage: 76%' },
    { year: '2019 - 2021', title: 'Matriculation - PM SHRI KV No. 1 AFS Tambaram', desc: 'Completed Secondary Education with high distinction. Percentage: 92%' }
  ];

  const experience = [
    { year: 'Jul 2025', title: 'Java with OOPs - Cipher Schools', desc: 'Completed intensive 6-week training covering Core Java and OOP concepts. Built a hands-on Hangman Game using class-based logic and state management.', highlight: true },
    { year: 'Jan 2026', title: "Achievements - 'O' Grade", desc: "Achieved an 'O' Grade (90%+) in Advanced Web Development coursework, demonstrating mastery in modern web standards." },
    { year: 'May 2024', title: 'Social Impact - NGO Volunteering', desc: 'Volunteered with Ek Pahel NGO, contributing to pollution management drives and social awareness campaigns for community welfare.' },
    { year: 'Jan 2024', title: 'Cybersecurity Hackathon - Top 7%', desc: 'Placed in the top 7% (Top 15 out of 200+ teams) in a university-level cybersecurity hackathon, solving complex security challenges.' }
  ];

  return (
    <section id="journey" className="w-full py-24 px-6 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 text-center tracking-tight">
          About My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple animate-gradient-text">Journey</span>
        </h2>

        <div className="relative">
          {/* Central Glowing Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon-blue to-transparent md:-translate-x-1/2"></div>
          
          <div className="flex flex-col md:flex-row gap-12 md:gap-0 mt-8">
            
            {/* Left Column: Education */}
            <div className="flex-1 md:pr-16 relative">
              <h3 className="text-2xl font-bold text-white mb-8 pl-12 md:pl-0 md:text-right flex items-center md:justify-end gap-3 text-neon-purple">
                <span className="md:hidden w-3 h-3 rounded-full bg-neon-purple glow-purple"></span> Education
              </h3>
              
              <div className="flex flex-col gap-10">
                {education.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    className="relative pl-12 md:pl-0 md:text-right group"
                  >
                    {/* Node on central line */}
                    <div className="absolute left-[7px] md:left-auto md:right-[-68px] top-1 w-4 h-4 rounded-full bg-[#161a2b] border-[3px] border-neon-blue flex items-center justify-center group-hover:bg-neon-blue transition-colors shadow-[0_0_15px_rgba(0,243,255,0.5)] z-10 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-blue group-hover:bg-white transition-colors"></div>
                    </div>
                    {/* Connecting line */}
                    <div className="hidden md:block absolute right-[-60px] top-[14px] w-16 h-px bg-gradient-to-l from-neon-blue/80 to-transparent"></div>

                    <div className={`bg-[#0f111a]/95 backdrop-blur-xl p-8 rounded-3xl border ${item.highlight ? 'border-neon-purple/60 shadow-[0_0_30px_rgba(188,19,254,0.15)]' : 'border-white/5'} hover:border-neon-purple/80 transition-all duration-300 relative overflow-hidden group-hover:scale-[1.02]`}>
                      <span className="text-neon-cyan font-mono text-sm tracking-widest block mb-2">{item.year}</span>
                      <h4 className="text-2xl font-bold text-white mb-3">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Experience */}
            <div className="flex-1 md:pl-16 relative mt-16 md:mt-[120px]">
              <h3 className="text-2xl font-bold text-white mb-8 pl-12 md:pl-0 flex items-center gap-3 text-neon-blue">
                <span className="md:hidden w-3 h-3 rounded-full bg-neon-blue glow-blue"></span> Experience
              </h3>
              
              <div className="flex flex-col gap-10">
                {experience.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    className="relative pl-12 md:pl-0 group"
                  >
                    {/* Node on central line */}
                    <div className="absolute left-[7px] md:left-[-68px] top-1 w-4 h-4 rounded-full bg-[#161a2b] border-[3px] border-neon-purple flex items-center justify-center group-hover:bg-neon-purple transition-colors shadow-[0_0_15px_rgba(188,19,254,0.5)] z-10 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-purple group-hover:bg-white transition-colors"></div>
                    </div>
                    {/* Connecting line */}
                    <div className="hidden md:block absolute left-[-60px] top-[14px] w-16 h-px bg-gradient-to-r from-neon-purple/80 to-transparent"></div>

                    <div className={`bg-[#0f111a]/95 backdrop-blur-xl p-8 rounded-3xl border ${item.highlight ? 'border-neon-blue/60 shadow-[0_0_30px_rgba(0,243,255,0.15)]' : 'border-white/5'} hover:border-neon-blue/80 transition-all duration-300 relative overflow-hidden group-hover:scale-[1.02]`}>
                      <span className="text-neon-cyan font-mono text-sm tracking-widest block mb-2">{item.year}</span>
                      <h4 className="text-2xl font-bold text-white mb-3">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJourney;
