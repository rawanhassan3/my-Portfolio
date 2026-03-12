import React from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import heroGraphic from '../assets/ChatGPT Image Mar 12, 2026, 01_58_50 AM.png';
import { SOCIAL_LINKS } from '../constants';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-10 lg:pt-0">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left mt-2 lg:mt-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm mb-6"
          >
            Available for new opportunities
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm <span className="text-gradient">Rawan</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-text-muted font-medium mb-8">
            Frontend Developer building modern web applications with React
          </h2>

          <p className="text-lg text-text-muted/80 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
            Third-year Software Engineering student and Frontend Developer specializing in building responsive and user-friendly web applications using React, JavaScript, HTML, CSS, Bootstrap, and Tailwind CSS. Experienced in integrating REST APIs into frontend applications and testing endpoints using Postman. Worked on real-world projects and live datasets during a Data Analysis internship, including building interactive dashboards and extracting business insights. Passionate about creating scalable, highquality applications and currently expanding skills toward Full-Stack Development.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12 w-full">
            <Link to="projects" smooth={true} duration={500} offset={-70}>
              <button className="bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all cursor-pointer group">
                View Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-70}>
              <button className="bg-surface hover:bg-surface/80 border border-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all cursor-pointer">
                Contact Me
              </button>
            </Link>
          </div>

          <div className="flex gap-6 justify-center lg:justify-start w-full">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={SOCIAL_LINKS.mail} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.4 }}
          className="relative flex justify-center items-center order-1 lg:order-2 w-full max-w-[280px] sm:max-w-md lg:max-w-full mx-auto"
        >
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial from-primary/20 via-transparent to-transparent opacity-50 blur-3xl rounded-full"></div>
          
          <motion.img
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            src={heroGraphic}
            alt="Hero Graphic"
            className="relative w-full max-w-lg object-contain z-10 mix-blend-multiply opacity-90 contrast-125 hover:mix-blend-normal transition-all duration-500"
            style={{ 
              WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
              maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
            }}
          />
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
