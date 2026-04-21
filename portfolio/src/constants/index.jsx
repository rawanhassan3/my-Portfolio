import React from "react";
import shopmartHome from '../assets/shopmart-home.png';
import amwalLogo from '../assets/amwal_tech_logo.jfif';
import { 
  Monitor, 
  Layout, 
  BarChart3, 
  Code, 
  Cpu, 
  Layers, 
  Palette, 
  GitBranch, 
  Github, 
  Figma, 
  Send,
  Database,
  BarChart,
  PieChart,
  Smartphone,
  Terminal,
  BookOpen,
  Box,
  Binary,
  Bot,
  Rocket,
  MousePointer2
} from 'lucide-react';


export const NAV_LINKS = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

export const EXPERIENCES = [
  {
    role: "Data Engineering Analyst Intern",
    company: "Amwal Company (Saudi Arabia)",
    duration: "3-Month Internship",
    logo: amwalLogo,
    points: [
      "Analyzed real company datasets to identify trends and support decision-making.",
      "Built interactive monthly dashboards in Looker and Redash, enabling teams to monitor key metrics.",
      "Wrote SQL queries to extract, clean, and transform data efficiently.",
      "Delivered actionable insights that informed business strategies and improved reporting processes."
    ]
  }
];

export const PROJECTS = [
  {
    title: 'Social Hub',
    description: 'A modern social media web application built with React that allows users to create posts, like posts, and interact with content in real-time.',
    tech: ['React', 'ProtectedRoutes', 'Tailwind', 'Framer Motion'],
    gradient: 'from-blue-600 to-indigo-600',
    liveUrl: 'https://social-hub-theta.vercel.app/',
    githubUrl: 'https://github.com/rawanhassan3/SocialHub'
  },
  {
    title: 'Shopmart',
    description: 'A modern e-commerce web app built with Next.js + TypeScript, featuring a clean storefront experience and a scalable structure ready for growth.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    gradient: 'from-emerald-500 to-teal-500',
    liveUrl: 'https://shomart-ecommerce.vercel.app/',
    githubUrl: 'https://github.com/rawanhassan3/E_COMMERCE.git'
  },
];

export const SKILLS = {
  frontend: [
    { name: 'HTML5', icon: <Layers />, color: 'text-orange-500' },
    { name: 'CSS3', icon: <Palette />, color: 'text-blue-500' },
    { name: 'JavaScript (ES6+)', icon: <Cpu />, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: <Binary />, color: 'text-blue-500' },
    { name: 'React.js', icon: <Code />, color: 'text-blue-400' },
    { name: 'Next.js', icon: <Monitor />, color: 'text-zinc-200' },
    { name: 'React Router', icon: <Layout />, color: 'text-red-400' },
    { name: 'Bootstrap', icon: <Box />, color: 'text-purple-500' },
    { name: 'Tailwind CSS', icon: <Palette />, color: 'text-cyan-400' },
    { name: 'Responsive Design', icon: <Smartphone />, color: 'text-emerald-400' },
  ],
  data: [
    { name: 'Python (Pandas)', icon: <Binary />, color: 'text-yellow-500' },
    { name: 'SQL', icon: <Database />, color: 'text-blue-600' },
    { name: 'Data Cleaning', icon: <BarChart3 />, color: 'text-emerald-500' },
    { name: 'Dashboards', icon: <BarChart />, color: 'text-purple-400' },
    { name: 'Statistics', icon: <PieChart />, color: 'text-pink-400' },
  ],
  tools: [
    { name: 'Git & GitHub', icon: <Github />, color: 'text-white' },
    { name: 'Postman', icon: <Send />, color: 'text-orange-400' },
    { name: 'DevTools', icon: <Terminal />, color: 'text-blue-400' },
    { name: 'VS Code', icon: <Code />, color: 'text-blue-500' },
    { name: 'Cursor', icon: <MousePointer2 />, color: 'text-cyan-300' },
    { name: 'Claude', icon: <Bot />, color: 'text-amber-300' },
    { name: 'AntiGravity', icon: <Rocket />, color: 'text-fuchsia-300' },
    { name: 'Figma', icon: <Figma />, color: 'text-pink-400' },
    { name: 'MySQL', icon: <Database />, color: 'text-blue-400' },
    { name: 'Jupyter', icon: <BookOpen />, color: 'text-orange-500' },
    { name: 'Draw.io/UML', icon: <Layout />, color: 'text-emerald-400' },
  ]
};

export const SOCIAL_LINKS = {
  github: "https://github.com/rawanhassan3",
  linkedin: "https://linkedin.com/in/rawan-diab-8b3b3a327",
  mail: "https://mail.google.com/mail/?view=cm&fs=1&to=rawaaanhassan120@gmail.com",
  emailAddress: "rawaaanhassan120@gmail.com"
};
