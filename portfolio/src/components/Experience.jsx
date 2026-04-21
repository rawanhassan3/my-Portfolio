import React from "react";
import { motion, useScroll, useSpring } from 'framer-motion';
import { ChevronRight, Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCES } from '../constants';

const Experience = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="section-padding bg-background relative overflow-hidden">
      <div className="container-default">
        <div className="mb-24">
          <motion.h2 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="text-7xl md:text-[8rem] font-black tracking-tighter leading-none text-text mb-6"
          >
            THE <br /> <span className="text-secondary">JOURNEY.</span>
          </motion.h2>
          <p className="text-xl text-text-muted font-medium max-w-lg">
            A timeline of my professional growth and the funky experiences along the way.
          </p>
        </div>

        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto pl-12 md:pl-20">
          {/* Timeline Line on the Left */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-slate-200 rounded-full overflow-hidden">
             <motion.div 
               style={{ scaleY: pathLength, originY: 0 }}
               className="w-full h-full bg-gradient-to-b from-primary via-secondary to-accent"
             />
          </div>

          <div className="space-y-20">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Dot */}
                <div className="absolute left-[-56px] md:left-[-64px] top-10 w-10 h-10 rounded-full bg-background border-4 border-primary z-10 shadow-xl shadow-primary/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>

                {/* Full Width Card */}
                <div className="w-full">
                   <div className="p-8 md:p-12 rounded-[2.5rem] bg-surface border-2 border-slate-200 shadow-xl relative group hover:border-primary transition-all duration-500">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                        <div className="flex items-center gap-6">
                          <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                             <Briefcase size={32} />
                          </div>
                          <div>
                            <h3 className="text-3xl md:text-4xl font-black tracking-tighter group-hover:text-primary transition-colors">
                              {exp.role}
                            </h3>
                            <p className="text-lg font-bold text-secondary">{exp.company}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 px-5 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs font-black uppercase tracking-widest text-text-muted">
                          <Calendar size={14} className="text-primary" />
                          {exp.duration}
                        </div>
                      </div>
                      
                      <ul className="space-y-5 border-t-2 border-slate-50 pt-10">
                        {exp.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-4 text-text-muted text-base md:text-lg font-medium leading-relaxed group-hover:text-text transition-colors">
                            <ChevronRight size={22} className="text-primary mt-1 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
