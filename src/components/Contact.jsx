import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';
import { socialLinks } from '../data/portfolioData';

const Contact = ({ theme }) => {
  const isDark = theme === 'dark';
  const contactInfo = [
    {
      icon: <Mail size={22} />,
      label: "Email",
      value: "agamkr.rakesh@gmail.com",
      color: "text-neon-purple",
      bgColor: "bg-neon-purple/10"
    },
    {
      icon: <Phone size={22} />,
      label: "Phone",
      value: "+91 8329980621",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: <Github size={22} />,
      label: "GitHub",
      value: "Github Profile",
      link: socialLinks.github,
      color: "text-white",
      bgColor: "bg-white/10"
    },
    {
      icon: <Linkedin size={22} />,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      link: socialLinks.linkedin,
      color: "text-neon-blue",
      bgColor: "bg-neon-blue/10"
    }
  ];

  return (
    <section id="contact" className={`w-full py-24 px-6 relative z-20 overflow-hidden transition-colors duration-500 ${isDark ? '' : 'bg-transparent'}`}>
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none ${isDark ? 'bg-neon-purple/5' : 'bg-neon-purple/10 opacity-30'}`}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 tracking-tight transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Get in <span className={isDark ? 'text-white' : 'text-neon-purple'}>Touch</span>
          </h2>
          <div className="w-16 h-1.5 bg-neon-purple/80 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            <div>
              <h3 className={`text-3xl font-bold mb-6 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>Let's work together</h3>
              <p className={`text-lg leading-relaxed max-w-md transition-colors ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                I'm currently available for freelance projects and open to full-time opportunities. 
                If you have a project that needs some creative touch, let's chat.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center gap-5 group">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isDark ? item.bgColor : 'bg-slate-100'} ${item.color} group-hover:scale-110 shadow-sm`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className={`text-sm font-semibold uppercase tracking-widest leading-none mb-1 transition-colors ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{item.label}</p>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className={`text-lg font-bold hover:text-neon-purple transition-colors ${isDark ? 'text-white' : 'text-slate-800'}`}>
                        {item.value}
                      </a>
                    ) : (
                      <p className={`text-lg font-bold transition-colors ${isDark ? 'text-white' : 'text-slate-800'}`}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`p-8 md:p-10 rounded-3xl border relative group transition-all duration-500 ${isDark ? 'bg-[#0f111a] border-white/5' : 'bg-white border-slate-200 shadow-2xl shadow-slate-200/50'}`}
          >
            <div className={`absolute inset-0 border rounded-3xl group-hover:border-neon-purple/30 transition-colors pointer-events-none ${isDark ? 'border-neon-purple/10' : 'border-transparent'}`}></div>
            
            <h4 className={`text-xl font-bold mb-8 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>Send a Message</h4>
            
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Your Name" 
                className={`w-full border rounded-xl px-5 py-4 transition-all focus:outline-none focus:border-neon-purple/50 ${isDark ? 'bg-[#161a2b]/50 border-white/10 text-white placeholder:text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400'}`}
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className={`w-full border rounded-xl px-5 py-4 transition-all focus:outline-none focus:border-neon-purple/50 ${isDark ? 'bg-[#161a2b]/50 border-white/10 text-white placeholder:text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400'}`}
              />
              <input 
                type="text" 
                placeholder="Subject" 
                className={`w-full border rounded-xl px-5 py-4 transition-all focus:outline-none focus:border-neon-purple/50 ${isDark ? 'bg-[#161a2b]/50 border-white/10 text-white placeholder:text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400'}`}
              />
              <textarea 
                rows="4"
                placeholder="Type your message here..." 
                className={`w-full border rounded-xl px-5 py-4 transition-all focus:outline-none focus:border-neon-purple/50 resize-none ${isDark ? 'bg-[#161a2b]/50 border-white/10 text-white placeholder:text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400'}`}
              ></textarea>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl text-white font-bold text-lg flex justify-center items-center gap-3 mt-4 hover:shadow-[0_0_20px_rgba(188,19,254,0.4)] transition-all ${isDark ? 'bg-neon-purple' : 'bg-slate-900 shadow-lg'}`}
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
