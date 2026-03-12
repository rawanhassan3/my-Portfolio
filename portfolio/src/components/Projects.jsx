import React from "react";
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative glass rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video relative overflow-hidden bg-black/50 group">
        
        {/* Live Interactive Demo (Iframe) */}
        {project.iframeUrl && isHovered ? (
          <iframe 
            src={project.iframeUrl} 
            title={project.title}
            className="absolute inset-0 w-full h-full border-0 pointer-events-auto z-10 opacity-100 animate-in fade-in duration-500"
            sandbox="allow-scripts allow-same-origin"
          />
        ) : null}

        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className={`w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ${isHovered && project.iframeUrl ? 'opacity-0' : ''}`}
          />
        ) : (
          <div className={`${isHovered && project.iframeUrl ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
            <div className="absolute inset-0 flex items-center justify-center p-12">
              {project.icon}
            </div>
          </div>
        )}
        
        {/* Overlay buttons - hidden when iframe is active so user can interact */}
        <div className={`absolute inset-0 bg-background/80 md:bg-background/90 flex items-center justify-center gap-6 opacity-0 ${isHovered && !project.iframeUrl ? 'group-hover:opacity-100' : ''} transition-opacity duration-300 z-20 pointer-events-none`}>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-4 bg-primary text-white rounded-full hover:scale-110 transition-transform pointer-events-auto">
            <ExternalLink size={24} />
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-4 bg-surface text-white rounded-full hover:scale-110 border border-white/10 transition-transform pointer-events-auto">
            <Github size={24} />
          </a>
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded bg-white/5 text-text-muted border border-white/10">
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-text-muted text-sm leading-relaxed mb-6">
          {project.description}
        </p>
        
        <div className="flex gap-4">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center text-sm font-bold py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-all">
            Live Demo
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
            <Github size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-accent">Projects</span></h2>
          <p className="text-text-muted max-w-2xl mx-auto">Hand-picked collection of my latest work where I solve real-world problems with modern frontend solutions.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

