import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen } from 'lucide-react';

const Education = ({ theme }) => {
  const isDark = theme === 'dark';
  const education = [
    {
      period: "August 2023 • June 2027",
      title: "Bachelor of Technology - B.Tech",
      institution: "Lovely Professional University",
      score: "CGPA: 7.6",
      description: "Pursuing B.Tech in Computer Science and Engineering. Maintaining strong academic performance with a focus on advanced algorithms, specialized data structures, and comprehensive full-stack architecture.",
      icon: <GraduationCap size={22} />,
      color: "purple",
      border: "border-purple-500/30",
      text: "text-purple-500"
    },
    {
      period: "April 2022 • May 2023",
      title: "Intermediate (Class XII)",
      institution: "PM SHRI KV No. 1 AFS Tambaram",
      score: "Percentage: 76%",
      description: "Completed Higher Secondary Education with a focus on Physics, Chemistry, and Mathematics (PCM). Developed a strong foundation in core sciences and analytical thinking.",
      icon: <School size={22} />,
      color: "green",
      border: "border-green-500/30",
      text: "text-green-500"
    },
    {
      period: "April 2019 • May 2021",
      title: "Matriculation (Class X)",
      institution: "PM SHRI KV No. 1 AFS Tambaram",
      score: "Percentage: 92%",
      description: "Completed Secondary Education with high distinction. Recognized for academic excellence and a consistent pursuit of knowledge across all fundamental subjects.",
      icon: <BookOpen size={22} />,
      color: "red",
      border: "border-red-500/30",
      text: "text-red-500"
    }
  ];

  return (
    <section id="education" className={`w-full pt-20 pb-24 px-6 relative z-10 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#050a14]' : 'bg-transparent'}`}>
      {/* Background Radial Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] pointer-events-none ${isDark ? 'bg-neon-purple/5' : 'bg-neon-purple/10 opacity-30'}`}></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className={`px-4 py-1 rounded-full border ${isDark ? 'border-neon-purple/30 bg-neon-purple/10' : 'border-neon-purple/20 bg-neon-purple/5'} text-neon-purple text-[10px] font-bold tracking-[0.2em] uppercase mb-4`}>
            My Journey
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 tracking-tight transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Education
          </h2>
          <div className="w-12 h-1 bg-neon-purple mb-6 rounded-full" />
          <p className={`max-w-[500px] text-sm leading-relaxed transition-colors ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            My academic journey has shaped my technical foundation and inspired my passion for learning and innovation.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Centered Axis Line */}
          <div className={`absolute left-[50%] md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1.5px] transition-colors ${isDark ? 'bg-neon-purple/20' : 'bg-neon-purple/10'}`}></div>
          
          <div className="space-y-12 md:space-y-16 relative">
            {education.map((item, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center justify-center relative w-full ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Node - Centered on Axis */}
                <div className="absolute left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className={`relative w-10 h-10 rounded-full ${isDark ? 'bg-[#0d0f1e]' : 'bg-white'} border-2 ${item.border} flex items-center justify-center ${isDark ? 'text-white' : 'text-slate-800'} shadow-[0_0_15px_rgba(188,19,254,0.3)]`}
                  >
                    {item.icon}
                    {/* Pulse Ring */}
                    <motion.div 
                      className={`absolute inset-0 rounded-full border-2 ${item.border}`}
                      animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                    />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[48%] ${i % 2 === 0 ? 'md:mr-auto pr-0 md:pr-10' : 'md:ml-auto pl-0 md:pl-10'} text-left`}>
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`p-8 md:p-10 rounded-3xl backdrop-blur-xl border ${item.border} relative overflow-hidden group transition-all ${isDark ? 'bg-[#0d0f1e]/60 hover:bg-[#0d0f1e]/80' : 'bg-white/70 hover:bg-white/90 shadow-lg shadow-slate-200/50'}`}
                  >
                    {/* Side edge accent */}
                    <div className={`absolute ${i % 2 === 0 ? 'left-0' : 'right-0'} top-0 bottom-0 w-[2px] ${item.color === 'purple' ? 'bg-purple-500' : item.color === 'green' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    
                    <span className={`text-[12px] font-semibold ${item.text} mb-2 block tracking-wider uppercase`}>
                      {item.period}
                    </span>
                    <h3 className={`text-2xl font-bold mb-1 transition-colors ${isDark ? 'text-white' : 'text-slate-900 hover:text-neon-purple'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-base mb-4 transition-colors ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.institution}
                    </p>
                    
                    <div className={`inline-block px-4 py-1.5 rounded-lg ${isDark ? `bg-${item.color}-500/10` : `bg-${item.color}-500/5`} ${item.text} text-[12px] font-bold mb-6 border ${item.border} shadow-[0_0_15px_rgba(0,0,0,0.05)]`}>
                      {item.score}
                    </div>

                    <p className={`text-[14px] leading-relaxed transition-colors ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Connector Line (Horizontal) - Desktop only (expanded range for wider boxes) */}
                <div className={`hidden md:block absolute ${i % 2 === 0 ? 'left-1/2 right-[48%]' : 'right-1/2 left-[48%]'} h-[1px] bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent top-1/2 -translate-y-1/2 -z-10`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
