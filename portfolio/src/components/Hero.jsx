import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, Github, Linkedin, Mail, Cpu as CpuIcon, Layers } from "lucide-react";
import heroGraphic from "../assets/ChatGPT Image Mar 12, 2026, 01_58_50 AM.png";
import { SOCIAL_LINKS } from "../constants";
import Magnetic from "./Magnetic";

const Hero = () => {
  return (
    <section id="home" className="section-padding pt-32 md:pt-48 overflow-hidden relative">
      {/* Funky Background Shapes */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10"
      />
      <motion.div 
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -left-24 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -z-10"
      />

      <div className="container-default grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[2px] w-12 bg-primary"></span>
              <span className="text-primary font-black uppercase tracking-[0.5em] text-xs">
                Creative Software Developer
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-[7rem] font-black leading-[0.75] tracking-tighter mb-10">
              <span className="block">I'm</span>
              <span className="text-transparent border-text" style={{ WebkitTextStroke: '2px var(--color-text)' }}>RAWAN</span>
              <span className="block text-primary">SOFTWARE ENGINEER</span>
            </h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl"
            >
              <p className="text-xl md:text-2xl text-text-muted font-medium leading-tight mb-10">
                Hi, I'm <span className="text-text font-black">Rawan Hassan</span>. I build web applications that don't just work—they <span className="italic text-secondary">vibe</span>.
              </p>

              <div className="flex flex-wrap gap-6">
                <Link to="projects" smooth duration={450} offset={-76}>
                  <Magnetic>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-5 bg-primary text-white font-black uppercase tracking-widest text-sm rounded-full shadow-[0_0_40px_rgba(255,0,110,0.3)] hover:shadow-[0_0_60px_rgba(255,0,110,0.5)] transition-all"
                    >
                      View My Work
                    </motion.button>
                  </Magnetic>
                </Link>
                <Link to="contact" smooth duration={450} offset={-76}>
                  <Magnetic>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-5 border-2 border-text text-text font-black uppercase tracking-widest text-sm rounded-full hover:bg-text hover:text-background transition-all"
                    >
                      Let's Talk
                    </motion.button>
                  </Magnetic>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="lg:col-span-4 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="relative"
          >
            <div className="w-full aspect-square bg-accent rounded-[3rem] rotate-6 absolute inset-0 -z-10" />
            <div className="w-full aspect-square bg-secondary rounded-[3rem] -rotate-3 absolute inset-0 -z-10" />
            <div className="w-full aspect-square bg-surface border-4 border-text rounded-[3rem] overflow-hidden p-4">
              <div className="w-full h-full bg-slate-100 rounded-[2rem] overflow-hidden relative">
                <img 
                  src={heroGraphic} 
                  alt="Rawan Hassan" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
              </div>
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 bg-white border-2 border-text p-4 rounded-2xl shadow-xl rotate-12"
            >
              <CpuIcon size={32} className="text-primary" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-10 -left-10 bg-white border-2 border-text p-4 rounded-2xl shadow-xl -rotate-12"
            >
              <Layers size={32} className="text-secondary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
