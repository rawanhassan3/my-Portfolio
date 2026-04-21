import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { SOCIAL_LINKS } from "../constants";
import SectionHeading from "./SectionHeading";
import Magnetic from "./Magnetic";
import Tilt from "./Tilt";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitStatus, setSubmitStatus] = React.useState(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    try {
      const { supabase } = await import("../supabase");
      
      const { error } = await supabase
        .from('contacts')
        .insert([
          { 
            FullName: formData.fullName, 
            email: formData.email, 
            subject: formData.subject, 
            message: formData.message 
          }
        ]);

      if (error) throw error;
      
      setSubmitStatus("success");
      setFormData({ fullName: "", email: "", subject: "", message: "" });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (err) {
      console.error("Error saving contact:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding overflow-hidden relative">
      <div className="container-default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-7xl md:text-[8rem] font-black tracking-tighter leading-[0.8] text-text mb-10">
                GET IN <br /> <span className="text-primary">TOUCH.</span>
              </h2>
              <p className="text-xl text-text-muted font-medium max-w-sm mb-12">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>

              <div className="space-y-6">
                {[
                  { link: SOCIAL_LINKS.mail, icon: <Mail />, label: "Email", value: SOCIAL_LINKS.emailAddress, color: "hover:bg-primary" },
                  { link: SOCIAL_LINKS.github, icon: <Github />, label: "GitHub", value: SOCIAL_LINKS.github.replace("https://", ""), color: "hover:bg-secondary" },
                  { link: SOCIAL_LINKS.linkedin, icon: <Linkedin />, label: "LinkedIn", value: SOCIAL_LINKS.linkedin.replace("https://", ""), color: "hover:bg-accent" },
                ].map((item, idx) => (
                  <Magnetic key={idx}>
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`flex items-center gap-6 p-6 rounded-[2rem] dark:text-black border-2 border-slate-200 bg-white transition-all duration-500 group ${item.color}`}
                    >
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:text-black flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                        {item.icon}
                      </div>
                      <div className="group-hover:text-white transition-colors">
                        <p className="text-[10px] uppercase tracking-widest font-black opacity-50 dark:text-black">{item.label}</p>
                        <p className="font-black text-sm md:text-base tracking-tight dark:text-black">{item.value}</p>
                      </div>
                    </a>
                  </Magnetic>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 md:p-14 rounded-[3.5rem] bg-surface border-2 border-slate-200 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              
              <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-text-muted ml-2">Name</label>
                    <input 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      type="text" 
                      placeholder="Your Name"
                      required
                      className="w-full bg-background border-2 border-slate-200 p-5 rounded-2xl font-bold focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-text-muted ml-2">Email</label>
                    <input 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      placeholder="Email Address"
                      required
                      className="w-full bg-background border-2 border-slate-200 p-5 rounded-2xl font-bold focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-text-muted ml-2">Subject</label>
                  <input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Project Inquiry"
                    className="w-full bg-background border-2 border-slate-200 p-5 rounded-2xl font-bold focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-text-muted ml-2">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4" 
                    placeholder="Tell me about your vision..."
                    className="w-full bg-background border-2 border-slate-200 p-5 rounded-2xl font-bold focus:border-primary outline-none transition-all resize-none"
                  ></textarea>
                </div>
                
                <AnimatePresence mode="wait">
                  {submitStatus && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className={`p-5 rounded-2xl text-sm flex items-center gap-3 font-black uppercase tracking-widest ${
                        submitStatus === "success" 
                          ? "bg-emerald-50 text-emerald-700 border-2 border-emerald-200" 
                          : "bg-red-50 text-red-700 border-2 border-red-200"
                      }`}
                    >
                      {submitStatus === "success" ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                      {submitStatus === "success" ? "SENT SUCCESSFULLY!" : "FILL ALL FIELDS!"}
                    </motion.div>
                  )}
                </AnimatePresence>

                <Magnetic>
                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="w-full py-6 bg-primary text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl shadow-[0_20px_40px_rgba(255,0,110,0.2)] hover:shadow-[0_20px_60px_rgba(255,0,110,0.4)] hover:-translate-y-1 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                  </button>
                </Magnetic>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
