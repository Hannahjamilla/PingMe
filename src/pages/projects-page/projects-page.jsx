import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink, Code, Layout, Palette, Presentation,
  Mail, Smartphone, Tag, ArrowRight
} from 'lucide-react';

const CATEGORIES = ['All', 'Portfolio', 'Website', 'Slide Deck', 'Graphic', 'UI Design'];

const PROJECTS = [
  {
    id: 1,
    category: 'Portfolio',
    title: 'Modern Scholar',
    subtitle: 'Personal Portfolio',
    description: 'A high-end, editorial newspaper-style portfolio designed for professionals. Features a clean magazine layout, custom color palettes, dark/light mode, and full mobile responsiveness.',
    tags: ['React', 'CSS', 'Framer Motion'],
    icon: Code,
    link: null,
    image: null,
    accent: '#ed6a5a',
  },
  {
    id: 2,
    category: 'Website',
    title: 'PingMe',
    subtitle: 'Inquiry Platform',
    description: 'What you are looking at right now! A retro-themed, full-featured freelance inquiry site with project showcase, services breakdown, FAQ section, and a working contact form.',
    tags: ['React', 'Vite', 'Tailwind', 'Framer'],
    icon: Layout,
    link: null,
    image: null,
    accent: '#9bc1bc',
  },
  {
    id: 3,
    category: 'Slide Deck',
    title: 'Startup Pitch',
    subtitle: 'Presentation Design',
    description: 'A clean and modern slide deck for a startup pitch. Bold typography, strategic layout, and a consistent visual identity throughout every slide.',
    tags: ['Canva', 'Graphic Design'],
    icon: Presentation,
    link: null,
    image: null,
    accent: '#ed6a5a',
  },
  {
    id: 4,
    category: 'Graphic',
    title: 'Brand Pack',
    subtitle: 'Social Media Graphics',
    description: 'A complete visual identity package including social post templates, story formats, and branded banners for an online business.',
    tags: ['Figma', 'Canva'],
    icon: Palette,
    link: null,
    image: null,
    accent: '#9bc1bc',
  },
  {
    id: 5,
    category: 'Graphic',
    title: 'Event Invite',
    subtitle: 'Digital Invitation',
    description: 'An animated digital event invitation built with HTML and CSS. Shareable via link, mobile-optimized, and beautiful to look at.',
    tags: ['HTML', 'CSS'],
    icon: Mail,
    link: null,
    image: null,
    accent: '#ed6a5a',
  },
  {
    id: 6,
    category: 'UI Design',
    title: 'Wireframe Kit',
    subtitle: 'Mobile App Mockups',
    description: "High-fidelity wireframes and interactive prototypes for a startup's mobile app. Covers onboarding, dashboard, and settings flows.",
    tags: ['Figma', 'UI/UX'],
    icon: Smartphone,
    link: null,
    image: null,
    accent: '#9bc1bc',
  },
];

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-white border-4 border-[#1a1a1a] shadow-[6px_6px_0px_#1a1a1a] overflow-hidden"
    >
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

        {/* Image / Placeholder */}
        <div className="w-full lg:w-2/5 shrink-0 aspect-video lg:aspect-auto relative border-b-4 lg:border-b-0 border-[#1a1a1a]"
             style={{
               backgroundImage: 'linear-gradient(45deg, #1a1a1a 12.5%, transparent 12.5%, transparent 50%, #1a1a1a 50%, #1a1a1a 62.5%, transparent 62.5%, transparent 100%)',
               backgroundSize: '5px 5px',
             }}>
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover absolute inset-0" />
          ) : (
            <>
              <div className="absolute inset-0 bg-[#f4f1bb] opacity-85" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-20 h-20 border-4 border-[#1a1a1a] flex items-center justify-center shadow-[4px_4px_0px_#1a1a1a]"
                     style={{ backgroundColor: project.accent }}>
                  <project.icon className="w-9 h-9 text-white" strokeWidth={2.5} />
                </div>
                <span className="font-mono text-[9px] font-bold text-[#1a1a1a] opacity-50 uppercase tracking-widest bg-white px-2 py-0.5 border border-[#1a1a1a]">
                  Image coming soon
                </span>
              </div>
            </>
          )}
          {/* Number badge */}
          <div className="absolute top-4 left-4 w-10 h-10 bg-[#1a1a1a] border-2 border-white flex items-center justify-center z-10">
            <span className="font-display font-black text-white text-sm">{String(index + 1).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Details */}
        <div className={`flex-grow p-7 lg:p-10 flex flex-col justify-center ${isEven ? 'lg:border-l-4' : 'lg:border-r-4'} border-[#1a1a1a]`}>
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-[9px] font-bold uppercase bg-[#1a1a1a] text-white px-2 py-1">
              {project.category}
            </span>
            <span className="font-mono text-[9px] font-bold text-[#ed6a5a]">
              {project.subtitle}
            </span>
          </div>

          <h2 className="font-display text-3xl lg:text-4xl font-black uppercase text-[#1a1a1a] leading-none mb-4"
              style={{ textShadow: `2px 2px 0px ${project.accent}` }}>
            {project.title}
          </h2>

          <p className="font-mono text-sm font-bold text-[#1a1a1a] opacity-80 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="flex items-center gap-1 text-[9px] font-bold font-mono bg-[#f4f1bb] border-2 border-[#1a1a1a] px-2 py-1 shadow-[2px_2px_0px_#1a1a1a]">
                <Tag className="w-2.5 h-2.5" /> {tag}
              </span>
            ))}
          </div>

          {project.link ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              className="self-start flex items-center gap-2 bg-[#ed6a5a] text-white border-2 border-[#1a1a1a] px-5 py-2.5 font-black uppercase font-mono shadow-[3px_3px_0px_#1a1a1a] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[1px_1px_0px_#1a1a1a] transition-all text-xs">
              View Site <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="self-start font-mono text-[10px] font-bold border-2 border-[#1a1a1a] px-4 py-2 bg-[#f4f1bb] text-[#1a1a1a] opacity-60">
              🔒 Link coming soon
            </span>
          )}
        </div>

      </div>
    </motion.div>
  );
};

const ProjectsPage = ({ onContact }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f4f1bb] pt-14">

      {/* ─── HEADER ─── */}
      <div className="bg-[#1a1a1a] border-b-4 border-[#ed6a5a] py-14 px-6 lg:px-12">
        <div className="max-w-[900px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[#ed6a5a] text-xs font-bold uppercase tracking-widest">— My Work</span>
            <h1 className="font-display text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mt-1"
                style={{ textShadow: '4px 4px 0px #ed6a5a' }}>
              Projects
            </h1>
          </div>
          <p className="font-mono text-sm font-bold text-white/60 max-w-xs border-l-4 border-[#ed6a5a] pl-4">
            A collection of websites, designs, and digital work I've built.
          </p>
        </div>
      </div>

      {/* ─── FILTER STRIP ─── */}
      <div className="sticky top-14 z-30 bg-white border-b-2 border-[#1a1a1a]">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 flex items-center gap-2 overflow-x-auto py-3">
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`shrink-0 font-mono font-bold uppercase text-[10px] border-2 border-[#1a1a1a] px-3 py-1.5 transition-all ${
                activeCategory === cat
                  ? 'bg-[#1a1a1a] text-white shadow-[2px_2px_0px_#ed6a5a]'
                  : 'bg-white text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:bg-[#f4f1bb]'
              }`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ─── PROJECT LIST ─── */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-12 py-12 flex flex-col gap-8">
        {filtered.length === 0 ? (
          <div className="text-center py-24 font-mono font-bold text-[#1a1a1a] opacity-40">
            No projects found in this category yet.
          </div>
        ) : (
          filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))
        )}
      </div>

      {/* ─── CTA ─── */}
      <div className="border-t-4 border-[#1a1a1a] bg-[#9bc1bc] py-12 px-6 lg:px-12">
        <div className="max-w-[900px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-black text-2xl md:text-3xl uppercase text-[#1a1a1a]">Like what you see?</h3>
            <p className="font-mono font-bold text-sm text-[#1a1a1a]/70 mt-1">Let's build something great together.</p>
          </div>
          <button onClick={onContact} className="shrink-0 flex items-center gap-3 bg-[#ed6a5a] text-white border-4 border-[#1a1a1a] font-black uppercase px-8 py-4 text-sm shadow-[6px_6px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#1a1a1a] transition-all">
            <Mail className="w-5 h-5" /> Hire Me <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProjectsPage;
