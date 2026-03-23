import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';
import { socialLinks } from '../data/portfolioData';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={22} />,
      label: "Email",
      value: "agamkr.ak12@gmail.com",
      color: "text-neon-purple",
      bgColor: "bg-neon-purple/10"
    },
    {
      icon: <Phone size={22} />,
      label: "Phone",
      value: "+91 88876 25187",
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
    <section id="contact" className="w-full py-24 px-6 relative z-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Get in <span className="text-white">Touch</span>
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
              <h3 className="text-3xl font-bold text-white mb-6">Let's work together</h3>
              <p className="text-lg text-slate-400 leading-relaxed max-w-md">
                I'm currently available for freelance projects and open to full-time opportunities. 
                If you have a project that needs some creative touch, let's chat.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center gap-5 group">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${item.bgColor} ${item.color} group-hover:scale-110`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest leading-none mb-1">{item.label}</p>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-lg text-white font-bold hover:text-neon-purple transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg text-white font-bold">{item.value}</p>
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
            className="p-8 md:p-10 rounded-3xl bg-[#0f111a] border border-white/5 relative group"
          >
            <div className="absolute inset-0 border border-neon-purple/10 rounded-3xl group-hover:border-neon-purple/30 transition-colors pointer-events-none"></div>
            
            <h4 className="text-xl font-bold text-white mb-8">Send a Message</h4>
            
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-[#161a2b]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-neon-purple/50 transition-all"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-[#161a2b]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-neon-purple/50 transition-all"
              />
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full bg-[#161a2b]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-neon-purple/50 transition-all"
              />
              <textarea 
                rows="4"
                placeholder="Type your message here..." 
                className="w-full bg-[#161a2b]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-neon-purple/50 transition-all resize-none"
              ></textarea>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-neon-purple text-white font-bold text-lg flex justify-center items-center gap-3 mt-4 hover:shadow-[0_0_20px_rgba(188,19,254,0.4)] transition-all"
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
