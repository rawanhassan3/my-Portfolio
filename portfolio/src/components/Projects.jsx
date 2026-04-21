import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Globe, Code2, Loader2 } from "lucide-react";
import { PROJECTS } from "../constants";
import Magnetic from "./Magnetic";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsLoading(true);
      }}
      className="group relative flex flex-col bg-surface border-2 border-slate-200/60 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5"
    >
      {/* Project Visual Area */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Placeholder / Default State */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 text-center p-8">
            <div className="w-20 h-20 rounded-3xl bg-white border-2 border-slate-200 flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform duration-500">
              <Globe size={40} />
            </div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-text-muted">Live Preview Available</p>
          </div>
        </div>

        {/* Iframe Preview Reveal */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-10 bg-white"
            >
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-20">
                  <div className="flex flex-col items-center gap-3">
                    <Loader2 className="w-8 h-8 text-primary animate-spin" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">Loading Live Site...</span>
                  </div>
                </div>
              )}
              <iframe 
                src={project.liveUrl} 
                className="w-full h-full border-none pointer-events-none scale-[1.01]" 
                onLoad={() => setIsLoading(false)}
                title={project.title}
              />
              <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="absolute top-6 right-6 z-20 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
           <Magnetic>
             <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-xl">
               <Github size={20} />
             </a>
           </Magnetic>
           <Magnetic>
             <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-center hover:bg-secondary hover:text-white transition-all shadow-xl">
               <ExternalLink size={20} />
             </a>
           </Magnetic>
        </div>
      </div>

      {/* Project Info Area */}
      <div className="p-8 md:p-10 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span key={i} className="px-4 py-1.5 bg-slate-50 border border-slate-200 text-[9px] font-black uppercase tracking-widest rounded-full text-text-muted">
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-text-muted leading-relaxed font-medium text-sm md:text-base line-clamp-2">
          {project.description}
        </p>

        <div className="mt-auto pt-8">
           <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-[10px]">
              <span className="w-10 h-[2px] bg-primary/30 group-hover:w-16 group-hover:bg-primary transition-all duration-500" />
              View Case Study
           </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden">
      <div className="container-default">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="text-primary font-black uppercase tracking-[0.5em] text-xs mb-6 block"
            >
              Recent Projects
            </motion.span>
            <h2 className="text-7xl md:text-[8rem] font-black tracking-tighter leading-[0.8] text-text">
              FEATURED <br /> <span className="text-primary">WORKS.</span>
            </h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl text-text-muted max-w-sm font-medium leading-tight"
          >
            A curated selection of high-performance web applications built with modern frontend architecture.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

