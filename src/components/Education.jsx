import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      period: "August 2023 - Present",
      title: "Bachelor of Technology - B.Tech",
      sub: "Computer Science and Engineering",
      institution: "Lovely Professional University, Phagwara, Punjab",
      score: "7.6 CGPA",
      description: "Focusing on advanced computing concepts, software engineering, and AI integrations. Actively participating in technical workshops and hackathons.",
      icon: <GraduationCap size={24} />,
      color: "blue"
    },
    {
      period: "April 2022 - March 2023",
      title: "Intermediate (XII)",
      sub: "Science Stream",
      institution: "PM SHRI KV No. 1 AFS Tambaram, Chennai",
      score: "64.6%",
      description: "Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics.",
      icon: <School size={24} />,
      color: "purple"
    },
    {
      period: "April 2019 - March 2021",
      title: "Matriculation (X)",
      sub: "General Science",
      institution: "PM SHRI KV No. 1 AFS Tambaram, Chennai",
      score: "92%",
      description: "Foundation year with strong academic performance in science and mathematics.",
      icon: <BookOpen size={24} />,
      color: "cyan"
    }
  ];

  return (
    <section id="education" className="w-full pt-16 pb-24 px-6 relative z-10 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Education</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            My academic journey has shaped my technical foundation and inspired my passion for learning and innovation.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-blue/50 via-neon-purple/50 to-neon-blue/50 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0">
            {education.map((item, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center justify-center relative w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} md:py-8`}>
                
                {/* Timeline Dot/Icon */}
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0f111a] border-2 border-neon-purple/50 flex items-center justify-center text-neon-purple z-20 hidden md:flex shadow-[0_0_15px_rgba(188,19,254,0.3)]">
                  {item.icon}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[48%] ${i % 2 === 0 ? 'md:text-right md:pl-16' : 'md:text-left md:pr-16'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="p-8 md:p-10 rounded-3xl bg-[#0f111a]/80 backdrop-blur-xl border border-white/5 hover:border-white/10 transition-all relative group"
                  >
                    <div className={`absolute -inset-[1px] bg-gradient-to-br from-white/5 to-transparent rounded-3xl -z-10`}></div>
                    
                    <span className="text-xs font-bold text-neon-purple uppercase tracking-widest mb-3 block">
                      {item.period}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-neon-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 font-semibold text-sm mb-4">
                      {item.institution}
                    </p>
                    
                    <div className="inline-block px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-neon-blue font-bold text-sm mb-4">
                      {item.score}
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Vertical spacer for mobile */}
                <div className="md:hidden w-1 h-8 bg-neon-purple/30"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
