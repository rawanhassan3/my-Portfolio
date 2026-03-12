import React from "react";
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants';

const NavItem = ({ link, scrolled, mobile, onClick }) => (
  <motion.div
    initial={mobile ? {} : { opacity: 0, y: -10 }}
    animate={mobile ? {} : { opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <Link
      to={link.to}
      smooth={true}
      duration={500}
      offset={-70}
      spy={true}
      activeClass="active-section"
      className={`${mobile ? 'text-2xl' : 'text-sm'} relative py-2 font-medium transition-colors cursor-pointer group flex flex-col items-center flex-nowrap`}
      onClick={onClick}
    >
      <span className={`transition-colors duration-300 ${scrolled || mobile ? 'text-text-muted [.active-section_&]:text-primary' : 'text-white/80 [.active-section_&]:text-white'}`}>
        {link.name}
      </span>
      
      {/* Active Indicator Line */}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 [.active-section_&]:w-full" />
    </Link>
  </motion.div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="bg-primary p-2 rounded-lg">
            <Code2 size={24} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">RAWAN<span className="text-primary">.</span></span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.to} link={link} scrolled={scrolled} />
          ))}
          <motion.a
            href="https://drive.google.com/file/d/18Fot-u65FPf4G_Wm9dXbOrD2Kd3DL5Gz/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-primary hover:bg-primary/80 text-white px-5 py-2 rounded-full font-medium transition-all text-sm inline-block text-center"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass overflow-hidden border-b border-white/5"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <NavItem key={link.to} link={link} mobile onClick={() => setIsOpen(false)} />
              ))}
              <a 
                href="https://drive.google.com/file/d/18Fot-u65FPf4G_Wm9dXbOrD2Kd3DL5Gz/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white py-3 rounded-xl font-medium text-center block w-full"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

