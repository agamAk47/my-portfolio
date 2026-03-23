import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Wrench } from 'lucide-react';

const accents = [
  { gradient: 'from-cyan-400 to-blue-500', glow: 'rgba(0,200,255,0.3)', border: 'hover:border-cyan-400/50', bg: 'bg-cyan-500', icon: <Code2 size={20} /> },
  { gradient: 'from-purple-400 to-pink-500', glow: 'rgba(168,85,247,0.3)', border: 'hover:border-purple-400/50', bg: 'bg-purple-500', icon: <Layers size={20} /> },
  { gradient: 'from-emerald-400 to-teal-500', glow: 'rgba(52,211,153,0.3)', border: 'hover:border-emerald-400/50', bg: 'bg-emerald-500', icon: <Wrench size={20} /> },
];

const SkillCard = ({ title, skills, index, theme }) => {
  const isDark = theme === 'dark';
  const accent = accents[index % accents.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative p-8 md:p-10 rounded-3xl border transition-all duration-500 shadow-xl group overflow-hidden h-full ${accent.border} ${
        isDark 
          ? 'bg-[#0c0e18]/90 border-white/5 backdrop-blur-xl' 
          : 'bg-white/50 border-slate-200/60 backdrop-blur-xl'
      }`}
      style={{ boxShadow: isDark ? `0 0 0px ${accent.glow}` : 'none' }}
      onMouseEnter={(e) => { if (isDark) e.currentTarget.style.boxShadow = `0 8px 40px ${accent.glow}`; }}
      onMouseLeave={(e) => { if (isDark) e.currentTarget.style.boxShadow = `0 0 0px ${accent.glow}`; }}
    >
      {/* Top Gradient Bar */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${accent.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}></div>

      {/* Background Glow */}
      <div className={`absolute -top-20 -right-20 w-56 h-56 rounded-full blur-[80px] transition-all duration-700 pointer-events-none ${
        isDark ? 'opacity-0 group-hover:opacity-20' : 'opacity-0 group-hover:opacity-10'
      } ${accent.bg}`}></div>

      {/* Header */}
      <div className="flex items-center gap-4 mb-8 relative z-10">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${accent.gradient} text-white shadow-lg`}>
          {accent.icon}
        </div>
        <h3 className={`text-2xl font-bold tracking-tight transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {title}
        </h3>
        <div className={`h-px flex-1 bg-gradient-to-r ${isDark ? 'from-white/10' : 'from-slate-200'} to-transparent`}></div>
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap gap-3 relative z-10">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.04 }}
            whileHover={{ scale: 1.08, y: -2 }}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border transition-all duration-300 cursor-default group/skill ${
              isDark
                ? 'bg-white/[0.03] border-white/5 hover:bg-white/[0.08] hover:border-white/15'
                : 'bg-slate-50/80 border-slate-200/50 hover:bg-white hover:border-slate-300 hover:shadow-md'
            }`}
          >
            <div className="relative">
              <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain group-hover/skill:scale-110 transition-transform duration-300" />
              <div className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover/skill:opacity-40 transition-opacity duration-300 bg-gradient-to-r ${accent.gradient}`}></div>
            </div>
            <span className={`font-semibold text-xs transition-colors ${isDark ? 'text-slate-400 group-hover/skill:text-white' : 'text-slate-600 group-hover/skill:text-slate-900'}`}>
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = ({ theme }) => {
  const isDark = theme === 'dark';
  const skillData = [
    {
      title: "Languages",
      skills: [
        { name: "C++ (Major)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "MERN Stack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
        { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
        { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
      ]
    }
  ];

  return (
    <section id="skills" className={`w-full py-28 px-6 relative z-20 overflow-hidden transition-colors duration-500 ${isDark ? '' : 'bg-transparent'}`}>
      {/* Section Background Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[200px] pointer-events-none ${isDark ? 'bg-neon-blue/5' : 'bg-neon-blue/10 opacity-20'}`}></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 ${isDark ? 'border-neon-blue/20 bg-neon-blue/5' : 'border-neon-blue/15 bg-neon-blue/5'}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse"></span>
            <span className="text-neon-blue text-[10px] font-bold tracking-[0.2em] uppercase">Tech Stack</span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-black tracking-tighter transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Explore My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple animate-gradient-text">Skills</span>
          </h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {skillData.map((category, index) => (
             <SkillCard key={index} title={category.title} skills={category.skills} index={index} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
