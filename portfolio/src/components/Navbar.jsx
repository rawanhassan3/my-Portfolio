import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu, X, Code2, Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "../constants";
import Magnetic from "./Magnetic";

const NavLink = ({ item, mobile, onClick }) => (
  <Link
    to={item.to}
    smooth
    duration={450}
    offset={-76}
    spy
    activeClass="active-section"
    onClick={onClick}
    className={[
      "cursor-pointer font-medium transition-colors relative",
      mobile ? "text-base text-text py-2" : "text-sm text-text-muted hover:text-text py-1",
      "[.active-section_&]:text-primary",
    ].join(" ")}
  >
    {item.name}
    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 [.active-section_&]:w-full" />
  </Link>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("portfolio-theme", next);
      document.documentElement.setAttribute("data-theme", next);
      return next;
    });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 py-6">
      <nav
        className={[
          "container-default rounded-[2rem] border-2 transition-all duration-500",
          scrolled
            ? "bg-[color:var(--color-surface)]/90 backdrop-blur-xl border-primary/20 shadow-[0_10px_40px_rgba(0,0,0,0.1)] py-2"
            : "bg-[color:var(--color-surface)]/70 backdrop-blur-md border-slate-200/50 py-3",
        ].join(" ")}
      >
        <div className="flex items-center justify-between px-6 md:px-8">
          <Link to="home" smooth duration={450} className="flex items-center gap-2 cursor-pointer group">
            <Magnetic>
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-2xl bg-primary text-white grid place-items-center shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform duration-300">
                  <Code2 size={24} />
                </span>
                <span className="font-black tracking-tighter text-2xl uppercase">Rawan.</span>
              </div>
            </Magnetic>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                duration={450}
                offset={-76}
                spy
                activeClass="active-nav"
                className="cursor-pointer font-black text-xs uppercase tracking-[0.2em] transition-all relative group"
              >
                <span className="relative z-10 text-text-muted group-hover:text-primary [.active-nav_&]:text-primary transition-colors">
                  {item.name}
                </span>
                <span className="absolute -bottom-1 left-0 h-1 w-0 bg-primary rounded-full transition-all duration-300 [.active-nav_&]:w-full" />
              </Link>
            ))}
            
            <div className="flex items-center gap-4 border-l-2 border-slate-200/50 pl-10">
              <Magnetic>
                <button
                  onClick={toggleTheme}
                  className="w-11 h-11 rounded-2xl bg-surface border-2 border-slate-200 flex items-center justify-center text-text hover:border-primary transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </Magnetic>
              
              <Magnetic>
                <a
                  href="https://drive.google.com/file/d/1ZFpiX_MS5UImHsd9na1GFFtCWJ4lTpRv/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-text text-background font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-primary transition-colors"
                >
                  Resume
                </a>
              </Magnetic>
            </div>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg text-text"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-slate-200/70"
            >
              <div className="px-4 py-4 flex flex-col gap-2">
                {NAV_LINKS.map((item) => (
                  <NavLink key={item.to} item={item} mobile onClick={() => setOpen(false)} />
                ))}
                <button onClick={toggleTheme} className="btn btn-secondary mt-2 w-fit">
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;

