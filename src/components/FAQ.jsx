import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What technologies do you specialize in?", answer: "I specialize in modern JavaScript/TypeScript ecosystems including React, Next.js, Node.js, and Express. I also have deep experience with Tailwind CSS for styling and Framer Motion for complex animations." },
    { question: "Can you handle end-to-end full stack development?", answer: "Absolutely. I architect both the frontend UX/UI and the scalable backend infrastructure, handling everything from database design to API deployment." },
    { question: "How do you ensure code quality and performance?", answer: "I strongly enforce ESLint, CI/CD pipelines, and comprehensive unit testing. I optimize React applications using strict memoization, lazy loading, and Lighthouse audits." },
    { question: "Are you available for freelance projects?", answer: "Yes, I am actively taking on select freelance projects. Please reach out via the contact form below with your project details." }
  ];

  return (
    <section id="faq" className="w-full py-24 px-6 relative z-20">
      <div className="max-w-3xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center tracking-tight">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple animate-gradient-text">Insights</span>
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">Common questions about my tech stack, workflow, and professional capabilities.</p>
        
        <div className="flex flex-col gap-5 relative z-10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-[#0f111a]/90 backdrop-blur-xl rounded-[1.5rem] border ${isOpen ? 'border-neon-blue/50 shadow-[0_0_20px_rgba(0,243,255,0.15)]' : 'border-white/10'} overflow-hidden transition-all duration-300`}
              >
                <div 
                  className="flex justify-between items-center px-8 py-7 cursor-pointer group"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`font-bold text-lg md:text-xl transition-colors duration-300 ${isOpen ? 'text-neon-cyan' : 'text-white group-hover:text-neon-blue/80'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-colors duration-300 shadow-inner ${isOpen ? 'bg-neon-blue/20 text-neon-cyan border border-neon-cyan/30' : 'bg-[#161a2b] text-slate-400 border border-white/5 group-hover:bg-white/10 group-hover:text-white'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </div>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 text-slate-300 text-base leading-relaxed border-t border-white/5 pt-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
