import React from "react";
import { motion } from "framer-motion";

const SectionHeading = ({ eyebrow, title, subtitle, accent }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-2xl mx-auto mb-12"
    >
      {eyebrow ? (
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-primary bg-primary/10 px-3 py-1 rounded-full mb-4"
        >
          {eyebrow}
        </motion.span>
      ) : null}
      <div className="overflow-hidden">
        <motion.h2 
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "circOut" }}
          className="text-3xl md:text-5xl font-semibold tracking-tight text-text pb-1"
        >
          {title} {accent ? <span className="text-primary">{accent}</span> : null}
        </motion.h2>
      </div>
      {subtitle ? (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4 text-text-muted leading-relaxed"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </motion.div>
  );
};

export default SectionHeading;
