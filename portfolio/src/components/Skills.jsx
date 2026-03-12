import React from "react";
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Code, GitBranch, BarChart } from 'lucide-react';

const SkillCard = ({ skill }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    whileHover={{ y: -5, scale: 1.05 }}
    className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group cursor-default"
  >
    <div className={`${skill.color} p-4 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors`}>
      {skill.icon}
    </div>
    <span className="font-bold text-white text-sm">{skill.name}</span>
  </motion.div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const SkillSection = ({ title, skills, icon: IconComponent }) => (
  <div>
    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
      <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all">
        <IconComponent size={20} />
      </span>
      {title}
    </h3>
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
    >
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </motion.div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-secondary">Stack</span></h2>
          <p className="text-text-muted">The technologies and tools I use to bring ideas to life.</p>
        </motion.div>

        <div className="space-y-16">
          <SkillSection 
            title="Frontend Development" 
            skills={SKILLS.frontend} 
            icon={Code} 
          />
          <SkillSection 
            title="Data & Analytics" 
            skills={SKILLS.data} 
            icon={BarChart} 
          />
          <SkillSection 
            title="Tools & Environment" 
            skills={SKILLS.tools} 
            icon={GitBranch} 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
