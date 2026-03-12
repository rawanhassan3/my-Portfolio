import React from "react";
import { motion } from 'framer-motion';
import { User, Terminal, GraduationCap, Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">Full-stack passionate, Frontend specialized.</h3>
            <p className="text-text-muted leading-relaxed text-lg">
              I am a dedicated Computer Science student with a deep passion for frontend development. My journey in tech is driven by the desire to merge functionality with elegant design.
            </p>
            
            <div className="grid grid-cols-1 gap-4 pt-4">
              <div className="flex items-start gap-4 p-4 glass rounded-2xl">
                <div className="bg-primary/20 p-3 rounded-xl text-primary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Computer Science Student</h4>
                  <p className="text-text-muted text-sm">Focusing on modern software engineering principles and web architecture.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 glass rounded-2xl">
                <div className="bg-accent/20 p-3 rounded-xl text-accent">
                  <Terminal size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">UI/UX Enthusiast</h4>
                  <p className="text-text-muted text-sm">Passionate about creating visually stunning and intuitive user interfaces.</p>
                </div>
              </div>
            </div>

            {/* Social Links in About Body */}
            <div className="flex gap-4 pt-4">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl text-text-muted hover:text-primary transition-all">
                <Github size={20} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl text-text-muted hover:text-primary transition-all">
                <Linkedin size={20} />
              </a>
              <a href={SOCIAL_LINKS.mail} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl text-text-muted hover:text-primary transition-all">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block relative h-100 glass rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-accent/20 opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-6 border border-primary/30 group-hover:scale-110 transition-transform">
                  <User size={48} className="text-primary" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Rawan</h4>
                <p className="text-text-muted max-w-xs mb-6">
                  Designing the future of the web, one click at a time.
                </p>
                <span className="text-xs font-bold tracking-widest uppercase text-primary border border-primary/30 px-4 py-2 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                  View Full Profile
                </span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

