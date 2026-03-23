import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "10+", label: "Projects Done" },
    { number: "2+", label: "Years Experience" },
    { number: "5+", label: "Certifications" }
  ];

  const info = [
    { icon: <Mail size={18} />, label: "Email", value: "agamkr.ak12@gmail.com" },
    { icon: <MapPin size={18} />, label: "Location", value: "Phagwara, Punjab" },
    { icon: <Calendar size={18} />, label: "Availability", value: "Open to Work", status: true },
    { icon: <CheckCircle size={18} />, label: "Freelance", value: "Available" }
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto w-full relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-col items-center">
            <h2 className={`text-4xl font-bold mb-4 flex flex-col items-center group dark:text-white text-slate-900`}>
              About Me
              <span className="w-20 h-1.5 bg-neon-blue rounded-full mt-2 group-hover:w-32 transition-all duration-300"></span>
            </h2>
            <p className={`text-lg leading-relaxed dark:text-slate-400 text-slate-600`}>
              I am a passionate Software Developer specializing in the MERN stack and AI integrations. 
              Currently a B.Tech CSE student at Lovely Professional University, I focus on building 
              user-centric applications that solve real-world problems with elegant code and modern design.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
