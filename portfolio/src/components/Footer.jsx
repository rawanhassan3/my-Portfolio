import React from "react";
import { Github, Linkedin, Mail, Twitter, Code2 } from 'lucide-react';
import { Link } from 'react-scroll';
import { SOCIAL_LINKS } from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-primary/20 p-2 rounded-lg text-primary">
              <Code2 size={24} />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">RAWAN<span className="text-primary">.</span></span>
          </div>
          <p className="text-text-muted text-sm max-w-xs text-center md:text-left">
            Built with React, Tailwind CSS, and Framer Motion. Focused on creating premium digital experiences.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-8">
            <Link to="about" smooth={true} className="text-sm text-text-muted hover:text-primary transition-colors cursor-pointer">About</Link>
            <Link to="projects" smooth={true} className="text-sm text-text-muted hover:text-primary transition-colors cursor-pointer">Projects</Link>
            <Link to="skills" smooth={true} className="text-sm text-text-muted hover:text-primary transition-colors cursor-pointer">Skills</Link>
          </div>
          <p className="text-text-muted text-xs">
            © {currentYear} Rawan. All rights reserved.
          </p>
        </div>

        <div className="flex gap-4">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-text-muted hover:text-primary hover:bg-primary/10 transition-all border border-white/5">
            <Github size={20} />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-text-muted hover:text-primary hover:bg-primary/10 transition-all border border-white/5">
            <Linkedin size={20} />
          </a>
          <a href={SOCIAL_LINKS.mail} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-text-muted hover:text-primary hover:bg-primary/10 transition-all border border-white/5">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
