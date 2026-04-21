import React from "react";
import { motion } from "framer-motion";
import { Terminal, GraduationCap, Sparkles, Cpu, Code2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-surface/50">
      <div className="container-default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h2 className="text-8xl md:text-[10rem] font-black tracking-tighter leading-none text-primary/10 absolute -top-20 -left-10 select-none -z-10">
                INFO
              </h2>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-8">
                ABOUT <span className="text-primary">ME.</span>
              </h2>
              <div className="w-20 h-2 bg-primary rounded-full mb-10" />
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-text-muted">
                I'm a <span className="text-text">Software Engineering student</span> and <span className="text-text">Frontend Developer</span> dedicated Computer Science student with a deep passion for frontend development. My journey in tech is driven by the desire to merge functionality with elegant design.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7 grid gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[3rem] bg-white border-2 border-slate-200 shadow-xl"
            >
              <h3 className="text-3xl font-black dark:text-black tracking-tighter mb-6">THE MISSION</h3>
              <p className="text-lg text-text-muted leading-relaxed mb-8">
                Third-year Software Engineering student and Frontend Developer skilled in building responsive and user-friendly web applications using React, JavaScript, HTML, and CSS.
                Experienced in working with REST APIs and testing them using Postman.
                Completed real-world projects, including data analysis dashboards during an internship.
                Currently expanding skills toward Full-Stack Development.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Computer Science Student", icon: <Cpu />, desc: "Focusing on modern software engineering concepts and and web architecture " },
                  { label: "Frontend Developer", icon: <Code2 />, desc: "Passionate about creating visually stunning,semantic components and intuitive user interfaces." },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-black text-sm uppercase tracking-wider dark:text-black">{item.label}</p>
                      <p className="text-xs text-text-muted mt-1 dark:text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

