import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ text, speed = 20, direction = "left" }) => {
  const marqueeVariants = {
    animate: {
      x: direction === "left" ? [0, -1000] : [-1000, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative flex overflow-x-hidden border-y border-slate-200/50 py-4 bg-white/30 backdrop-blur-sm select-none">
      <motion.div
        className="flex whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mx-4 text-slate-900/5 hover:text-primary/10 transition-colors duration-500">
            {text} •
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
