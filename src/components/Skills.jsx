import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ title, skills, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    whileHover={{ y: -10 }}
    className="bg-[#0f111a]/90 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 hover:border-neon-blue/50 transition-all duration-300 shadow-xl group relative overflow-hidden"
  >
    <div className="absolute top-0 right-[-20%] w-48 h-48 bg-neon-blue/5 rounded-full blur-[50px] group-hover:bg-neon-blue/10 transition-colors pointer-events-none"></div>
    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
      {title}
      <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
    </h3>
    <div className="flex flex-wrap gap-4 relative z-10">
      {skills.map((skill, i) => (
        <div key={i} className="flex items-center gap-3 bg-[#161a2b] px-5 py-3 rounded-full border border-white/5 hover:border-neon-blue/40 shadow-inner group/skill hover:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all cursor-default">
          <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain group-hover/skill:scale-125 transition-transform duration-300" />
          <span className="text-slate-300 font-semibold text-sm group-hover/skill:text-white transition-colors">{skill.name}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
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
    <section id="skills" className="w-full py-24 px-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 text-center tracking-tight">
          Explore My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple animate-gradient-text">Skills</span>
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {skillData.map((category, index) => (
             <SkillCard key={index} title={category.title} skills={category.skills} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
