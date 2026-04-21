import React from "react";
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Code, GitBranch, BarChart } from 'lucide-react';
import SectionHeading from "./SectionHeading";

const SkillCard = ({ skill }) => (
  <motion.div
    whileHover={{ 
      y: -10, 
      rotate: [0, -2, 2, 0],
      transition: { duration: 0.3 }
    }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-primary/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative card p-8 rounded-[2.5rem] bg-surface border-2 border-slate-200 flex flex-col items-center justify-center gap-4 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-2xl">
      <motion.div 
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className={`${skill.color} p-4 rounded-2xl bg-slate-50 border border-slate-200 group-hover:bg-primary group-hover:text-white transition-all duration-500`}
      >
        {skill.icon}
      </motion.div>
      <span className="font-black text-xs uppercase tracking-widest text-center group-hover:text-primary transition-colors">{skill.name}</span>
    </div>
  </motion.div>
);

const SkillSection = ({ title, skills, icon: IconComponent }) => (
  <div className="space-y-10">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
        <IconComponent size={24} />
      </div>
      <h3 className="text-3xl font-black tracking-tighter uppercase">{title}</h3>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="section-padding overflow-hidden relative">
      <div className="container-default">
        <div className="mb-24">
          <motion.h2 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="text-7xl md:text-[9rem] font-black tracking-tighter leading-none text-text mb-6"
          >
            TECH <br /> <span className="text-primary">STACK.</span>
          </motion.h2>
          <p className="text-xl text-text-muted font-medium max-w-lg">
            The technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="space-y-32">
          <SkillSection 
            title="Frontend" 
            skills={SKILLS.frontend} 
            icon={Code} 
          />
          <SkillSection 
            title="Data" 
            skills={SKILLS.data} 
            icon={BarChart} 
          />
          <SkillSection 
            title="Tools" 
            skills={SKILLS.tools} 
            icon={GitBranch} 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
