import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center"
        >
          <div className="relative overflow-hidden mb-4">
            <motion.h1 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              className="text-4xl md:text-6xl font-bold tracking-tighter text-text"
            >
              Rawan<span className="text-primary">.</span>
            </motion.h1>
          </div>
          
          <div className="w-48 h-1 bg-slate-200 rounded-full overflow-hidden relative">
            <motion.div 
              className="absolute left-0 top-0 h-full bg-primary"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-text-muted"
          >
            {progress}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
