import React from "react";
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitStatus, setSubmitStatus] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      setSubmitStatus("error");
      return;
    }

    try {
      const { db } = await import("../firebase");
      const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");
      
      await addDoc(collection(db, "contacts"), {
        ...formData,
        date: serverTimestamp()
      });
      
      setSubmitStatus("success");
      setFormData({ fullName: "", email: "", subject: "", message: "" });
      
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (err) {
      console.error("Error saving contact:", err);
      setSubmitStatus("error");
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="text-primary">Touch</span></h2>
          <p className="text-text-muted">Feel free to reach out for collaborations or just a friendly hello!</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold">Connect with me</h3>
            <p className="text-text-muted max-w-md">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <a href={SOCIAL_LINKS.mail} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail />
                </div>
                <div>
                  <p className="text-sm text-text-muted">Email</p>
                  <p className="font-bold">{SOCIAL_LINKS.emailAddress}</p>
                </div>
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Github />
                </div>
                <div>
                  <p className="text-sm text-text-muted">GitHub</p>
                  <p className="font-bold">{SOCIAL_LINKS.github.replace('https://', '')}</p>
                </div>
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Linkedin />
                </div>
                <div>
                  <p className="text-sm text-text-muted">LinkedIn</p>
                  <p className="font-bold">{SOCIAL_LINKS.linkedin.replace('https://', '')}</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-muted">Full Name</label>
                  <input 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Enter Your Full Name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-muted">Email Address</label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder="name@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-muted">Subject</label>
                <input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  type="text" 
                  placeholder="Inquiry about Project X"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-muted">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4" 
                  placeholder="Hey, I'd like to work with you on..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white resize-none"
                ></textarea>
              </div>
              
              {submitStatus === "success" && (
                <div className="p-3 bg-green-500/20 text-green-400 border border-green-500/30 rounded-xl text-sm text-center">
                  Message sent successfully!
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-3 bg-red-500/20 text-red-400 border border-red-500/30 rounded-xl text-sm text-center">
                  Please fill all required fields.
                </div>
              )}

              <button type="submit" className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all group">
                Send Message
                <Send size={18} className="translate-y-0.5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
