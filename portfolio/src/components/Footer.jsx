import React from "react";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { Link } from "react-scroll";
import { SOCIAL_LINKS } from "../constants";
import Magnetic from "./Magnetic";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t-4 border-text bg-surface relative overflow-hidden">
      <div className="container-default">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-6">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">
              RAWAN <br /> <span className="text-primary">HASSAN.</span>
            </h2>
            <p className="text-xl text-text-muted font-medium max-w-sm">
              © {currentYear} Rawan Hassan. Built with passion and a lot of caffeine.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col md:items-end gap-10">
            <div className="flex gap-4">
              {[
                { href: SOCIAL_LINKS.github, icon: <Github size={24} />, color: "hover:bg-primary" },
                { href: SOCIAL_LINKS.linkedin, icon: <Linkedin size={24} />, color: "hover:bg-secondary" },
                { href: SOCIAL_LINKS.mail, icon: <Mail size={24} />, color: "hover:bg-accent" },
              ].map((item, i) => (
                <Magnetic key={i}>
                  <a 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`w-16 h-16 rounded-2xl bg-background border-2 border-slate-200 flex items-center justify-center transition-all duration-300 group ${item.color} hover:text-white hover:border-transparent hover:-translate-y-2`}
                  >
                    {item.icon}
                  </a>
                </Magnetic>
              ))}
            </div>
            
            <div className="flex gap-8">
              <Link to="about" smooth className="font-black text-xs uppercase tracking-widest hover:text-primary cursor-pointer transition-colors">About</Link>
              <Link to="projects" smooth className="font-black text-xs uppercase tracking-widest hover:text-primary cursor-pointer transition-colors">Projects</Link>
              <Link to="contact" smooth className="font-black text-xs uppercase tracking-widest hover:text-primary cursor-pointer transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
