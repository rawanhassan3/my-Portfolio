import React from "react";
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { EXPERIENCES } from '../constants';
import amwalLogo from '../assets/amwal_tech_logo.jfif'; // Assumes the image exists here

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-primary">Experience</span></h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-text-muted">A timeline of my professional journey and internships.</p>
        </motion.div>

        <div className="relative border-l-2 border-primary/30 pl-8 ml-4 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-6 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
              
              <div className="glass p-8 rounded-3xl border border-white/5 shadow-xl hover:-translate-y-1 transition-transform group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <img 
                      src={amwalLogo} 
                      alt={exp.company} 
                      className="w-16 h-16 rounded-xl object-contain bg-white/5 p-1 border border-white/10"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-primary mt-1 font-semibold">
                        <Briefcase size={16} />
                        {exp.company}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-text-muted bg-white/5 px-4 py-2 rounded-full w-fit">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{exp.duration}</span>
                  </div>
                </div>

                <ul className="space-y-3 mt-6 border-t border-white/10 pt-6">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-muted group-hover:text-white/90 transition-colors">
                      <ChevronRight size={18} className="text-primary mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
