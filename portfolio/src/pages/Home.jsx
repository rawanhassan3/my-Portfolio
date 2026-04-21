import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Marquee from '../components/Marquee';
import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';

function Home() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 22,
    mass: 0.2
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <motion.div
        style={{ scaleX: smoothProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent origin-left z-[60]"
      />
      <Navbar />
      <main>
        <Hero />
        <Marquee text="Software Engineer • Frontend Developer • Data Analyst" speed={30} />
        <About />
        <Skills />
        <Marquee text="React • Tailwind • Next.js • TypeScript" speed={25} direction="right" />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      
      {/* Back to Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-7 right-6 btn btn-primary btn-icon rounded-full cursor-pointer z-50"
            aria-label="Back to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default Home;
