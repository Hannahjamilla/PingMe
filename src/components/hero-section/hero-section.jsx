import React from 'react';
import { motion } from 'framer-motion';
import {
  Code, Layout, Palette, Zap, Trophy, ChevronsRight, Monitor,
  Globe, Star, Clock, Smile, CheckCircle, ArrowRight, Mail, MessageSquare
} from 'lucide-react';
import ButtonPrimary from '../button-primary/button-primary';
import AccordionItem from '../accordion/accordion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const HeroSection = ({ onStart, onViewProjects }) => {
  const skillset = [
    { icon: Code,    title: "Web Development", desc: "Clean, modern websites built from scratch.", bg: "bg-[#ed6a5a]" },
    { icon: Layout,  title: "React & Vite",    desc: "Fast, dynamic UIs using the latest tools.",   bg: "bg-[#9bc1bc]" },
    { icon: Palette, title: "UI/UX Design",    desc: "Simple, beautiful, and easy to navigate.",    bg: "bg-white" },
    { icon: Zap,     title: "Fast Delivery",   desc: "Efficient workflow. No unnecessary delays.",   bg: "bg-[#f4f1bb]" },
  ];

  const services = [
    { icon: Globe,  title: "Business Website",     desc: "A professional online home for your brand, store, or service." },
    { icon: Layout, title: "Portfolio Site",        desc: "Show your work beautifully and get noticed by clients." },
    { icon: Palette,title: "Landing Page",          desc: "One focused page designed to convert visitors into customers." },
    { icon: Monitor,title: "Website Redesign",      desc: "Give your old website a fresh, modern look and feel." },
    { icon: Code,   title: "UI Mockup / Prototype", desc: "See your idea come to life before we start building it." },
    { icon: Zap,    title: "Quick Fixes",           desc: "Bug fixes, content updates, or small improvements. Just ask!" },
  ];

  const stats = [
    { value: "24h",  label: "Average reply time" },
    { value: "100%", label: "Client satisfaction" },
    { value: "2×",   label: "Revision rounds included" },
    { value: "∞",    label: "Ideas we can build" },
  ];

  return (
    <section className="relative overflow-hidden w-full bg-[#f4f1bb]">

      {/* ─── HERO SPLASH ─── */}
      <div className="min-h-screen flex flex-col justify-center pt-14 pb-16 px-6 lg:px-12 relative z-10 border-b-4 border-[#1a1a1a]">
        
        <div className="max-w-[1100px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#ed6a5a] text-white px-3 py-1 border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] font-bold font-mono text-xs uppercase -rotate-1 mb-8">
              <span className="w-2 h-2 bg-white border border-[#1a1a1a] animate-pulse" />
              Open For Projects
            </div>
            
            <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-black uppercase text-[#1a1a1a] leading-none mb-6"
                style={{ textShadow: '2px 2px 0px #ed6a5a, 4px 4px 0px #9bc1bc' }}>
              Hello, Friend.
            </h1>
            
            <p className="font-mono font-bold text-[#1a1a1a] text-sm md:text-base max-w-lg mb-8 bg-white p-4 border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a]">
              Hi! I'm Hannah Jamilla DR. Peralta — a student web developer and designer. I'm here to help you build your digital identity and bring your creative ideas to life on the web, step by step.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonPrimary onClick={onStart}>
                Get Started
              </ButtonPrimary>
              <button 
                onClick={onViewProjects}
                className="group flex justify-center items-center gap-2 bg-white border-2 border-[#1a1a1a] text-[#1a1a1a] font-black uppercase tracking-widest px-6 py-3 shadow-[4px_4px_0px_#1a1a1a] hover:bg-[#9bc1bc] transition-all hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[2px_2px_0px_#1a1a1a] active:shadow-none text-xs"
              >
                See My Work <ChevronsRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Retro game boy card */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="hidden lg:flex justify-center relative">
            <div className="w-[60%] aspect-[5/7] max-h-[500px] bg-[#9bc1bc] border-4 border-[#1a1a1a] rounded-t-2xl rounded-b-lg shadow-[8px_8px_0px_#1a1a1a] p-5 flex flex-col items-center">
              <div className="w-full flex-grow bg-[#f4f1bb] border-2 border-[#1a1a1a] rounded mb-6 shadow-inner overflow-hidden flex flex-col items-center justify-center gap-2">
                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                  <Monitor className="w-12 h-12 text-[#ed6a5a]" />
                </motion.div>
                <p className="font-mono text-[9px] text-[#1a1a1a] font-bold text-center px-4 leading-relaxed">
                  Frontend Developer<br/>Ready to work!
                </p>
                <div className="flex gap-1 mt-2">
                  {[...Array(3)].map((_,i) => (
                    <motion.div key={i} animate={{ opacity: [1,0,1] }} transition={{ repeat:Infinity, duration:1, delay: i*0.3 }}
                      className="w-1.5 h-1.5 bg-[#ed6a5a] border border-[#1a1a1a]" />
                  ))}
                </div>
              </div>
              <div className="w-full flex justify-between px-2 shrink-0 h-20">
                <div className="w-16 h-16 relative mt-1">
                  <div className="absolute top-1/2 left-0 right-0 h-4 bg-[#1a1a1a] -translate-y-1/2 rounded-sm" />
                  <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-[#1a1a1a] -translate-x-1/2 rounded-sm" />
                </div>
                <div className="flex gap-3 items-end pb-2">
                  <div className="w-8 h-8 bg-[#ed6a5a] rounded-full border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]" />
                  <div className="w-8 h-8 bg-[#ed6a5a] rounded-full border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] mb-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scrolling tape */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#1a1a1a] border-t-2 border-white flex items-center overflow-hidden">
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 15, ease: "linear", repeat: Infinity }} className="flex whitespace-nowrap items-center font-mono font-bold text-white uppercase text-xs">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="flex items-center">
                <span className="mx-6">Websites</span>
                <span className="text-[#ed6a5a]">■</span>
                <span className="mx-6">Portfolios</span>
                <span className="text-[#9bc1bc]">■</span>
                <span className="mx-6">UI Design</span>
                <span className="text-[#f4f1bb]">■</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ─── STATS STRIP ─── */}
      <div className="bg-[#1a1a1a] border-b-4 border-[#ed6a5a] py-6 px-6 lg:px-12">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center border-r-2 border-white/10 last:border-r-0">
              <div className="font-display font-black text-3xl md:text-4xl text-[#ed6a5a]">{s.value}</div>
              <div className="font-mono text-[10px] font-bold text-white uppercase opacity-70 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── SKILLS ─── */}
      <div className="px-6 lg:px-12 py-20 bg-[#ed6a5a] border-b-4 border-[#1a1a1a]">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-10">
            <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase tracking-tighter" style={{ textShadow: '2px 2px 0px #1a1a1a' }}>
              What I Know
            </h2>
            <p className="font-mono text-sm font-bold text-white opacity-90 mt-2">Here are the tools and technologies I use every day.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillset.map((skill, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className={`p-6 border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] ${skill.bg} flex flex-col group hover:-translate-y-1 hover:shadow-[6px_6px_0px_#1a1a1a] transition-all`}>
                <div className="w-12 h-12 bg-white border-2 border-[#1a1a1a] rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                  <skill.icon className="w-6 h-6 text-[#1a1a1a]" strokeWidth={2.5} />
                </div>
                <h3 className="font-display font-bold text-base uppercase text-[#1a1a1a] mb-2">{skill.title}</h3>
                <p className="font-mono text-xs font-bold text-[#1a1a1a] opacity-80">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── ABOUT ME ─── */}
      <div className="px-6 lg:px-12 py-20 bg-white border-b-4 border-[#1a1a1a]">
        <div className="max-w-[1100px] mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div variants={fadeUp} className="relative">
              <div className="w-full bg-[#9bc1bc] border-4 border-[#1a1a1a] shadow-[8px_8px_0px_#1a1a1a] p-4">
                <div className="bg-[#1a1a1a] p-6 text-[#f4f1bb] font-mono leading-relaxed border-2 border-white text-xs md:text-sm">
                  <p className="text-[#ed6a5a] mb-3 font-bold">{'>'} Loading profile data...</p>
                  <p className="mb-2 font-bold">{'>'} Name: <span className="text-[#9bc1bc]">Hannah Jamilla DR. Peralta</span></p>
                  <p className="mb-2 font-bold">{'>'} Role: <span className="text-[#9bc1bc]">Frontend Developer & Designer</span></p>
                  <p className="mb-2 font-bold">{'>'} Location: <span className="text-[#9bc1bc]">Philippines 🇵🇭</span></p>
                  <p className="mb-1 font-bold text-[#9bc1bc]">{'>'} BIO:</p>
                  <p className="pl-4 font-bold opacity-90">
                    "I build fun, friendly, and beautiful websites for people who have big ideas but maybe not the technical skills to bring them to life yet. That's what I'm here for!"
                  </p>
                  <span className="inline-block mt-4 w-2 h-4 bg-[#ed6a5a] animate-pulse" />
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="font-display font-black text-3xl md:text-4xl text-[#1a1a1a] uppercase mb-6"
                  style={{ textShadow: '2px 2px 0px #f4f1bb, 4px 4px 0px #9bc1bc' }}>
                About Me
              </h2>
              <div className="space-y-4 text-[#1a1a1a] font-mono font-bold text-sm">
                <p className="bg-[#f4f1bb] p-4 border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]">
                  I'm a student creator with a big passion for building things on the internet. I love turning ideas into real, working websites that people enjoy using.
                </p>
                <p className="bg-[#f4f1bb] p-4 border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]">
                  Whether you need a simple landing page or a full portfolio site, I'm here to help make it happen — clearly, affordably, and without all the confusing tech jargon.
                </p>
                <div className="flex items-center gap-3 bg-[#9bc1bc] p-4 border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]">
                  <Trophy className="w-6 h-6 text-[#1a1a1a] shrink-0" />
                  <p>Thanks for supporting student developers — it means the world!</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* ─── SERVICES ─── */}
      <div className="px-6 lg:px-12 py-20 bg-[#f4f1bb] border-b-4 border-[#1a1a1a]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl md:text-4xl text-[#1a1a1a] uppercase tracking-tighter mb-3">What I Can Build For You</h2>
            <p className="font-mono font-bold text-sm text-[#1a1a1a] opacity-80 max-w-md mx-auto">Choose what you need, or mix and match. I'm flexible!</p>
            <div className="w-16 h-2 bg-[#ed6a5a] border border-[#1a1a1a] mx-auto mt-4" />
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} variants={fadeUp}
                className="bg-white border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] p-6 group hover:-translate-y-1 hover:shadow-[6px_6px_0px_#1a1a1a] transition-all">
                <div className="w-12 h-12 bg-[#f4f1bb] border-2 border-[#1a1a1a] flex items-center justify-center mb-4 group-hover:bg-[#9bc1bc] transition-colors shadow-[2px_2px_0px_#1a1a1a]">
                  <s.icon className="w-6 h-6 text-[#1a1a1a]" strokeWidth={2.5} />
                </div>
                <h3 className="font-display font-black text-lg uppercase text-[#1a1a1a] mb-2">{s.title}</h3>
                <p className="font-mono text-xs font-bold text-[#1a1a1a] opacity-80">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ─── FAQ ─── */}
      <div className="px-6 lg:px-12 py-20 bg-[#9bc1bc] border-b-4 border-[#1a1a1a]">
        <div className="max-w-[800px] mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="inline-block font-display font-black text-2xl md:text-3xl text-white uppercase bg-[#1a1a1a] px-6 py-3 border-2 border-white shadow-[4px_4px_0px_#ed6a5a] -rotate-1">
              Common Questions
            </motion.h2>
          </motion.div>
          <motion.div variants={fadeUp} className="space-y-3">
            {[
              { q: "How fast can we start?",        a: "I usually reply within a day! Feel free to reach out anytime." },
              { q: "Do I need to know tech stuff?", a: "Not at all. I explain everything in plain, simple English." },
              { q: "Can I request changes?",         a: "Yes! Every project includes two rounds of revisions." },
              { q: "What is your pricing like?",     a: "Very student-friendly. Just mention your budget when you message!" },
              { q: "How do we communicate?",         a: "Through email, chat, or whatever works best for you. I'm very easy to reach!" },
            ].map((faq, i) => (
              <AccordionItem key={i} title={faq.q}>
                <span className="font-mono font-bold text-sm">{`> ${faq.a}`}</span>
              </AccordionItem>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ─── CTA BANNER ─── */}
      <div className="px-6 lg:px-12 py-20 bg-[#ed6a5a] border-b-4 border-[#1a1a1a]">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase mb-6 tracking-tighter"
                style={{ textShadow: '3px 3px 0px #1a1a1a' }}>
              Ready to Build Your Website?
            </h2>
            <p className="font-mono font-bold text-white text-sm md:text-base max-w-md mx-auto mb-8 bg-[#1a1a1a] p-4 border-2 border-white shadow-[4px_4px_0px_white]">
              Let's make something great together. Click below to send me a message and we'll get started!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={onStart}
                className="flex items-center justify-center gap-2 bg-white text-[#1a1a1a] border-4 border-[#1a1a1a] font-black uppercase px-8 py-4 text-sm shadow-[6px_6px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#1a1a1a] transition-all">
                <Mail className="w-5 h-5" /> Contact Me Now
              </button>
              <button onClick={onViewProjects}
                className="flex items-center justify-center gap-2 bg-transparent text-white border-4 border-white font-black uppercase px-8 py-4 text-sm hover:bg-white hover:text-[#ed6a5a] transition-all">
                <ArrowRight className="w-5 h-5" /> View My Projects
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── MEET HANNAH / COVER SECTION ─── */}
      <div className="bg-[#f4f1bb] border-t-4 border-b-4 border-[#1a1a1a]">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 py-16">
          
          <div className="text-center mb-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display font-black text-4xl md:text-5xl text-[#1a1a1a] uppercase tracking-tighter" style={{ textShadow: '3px 3px 0px #ed6a5a' }}>
                Meet The Creator
              </h2>
              <p className="font-mono font-bold text-[#1a1a1a] opacity-80 mt-2 max-w-sm mx-auto">
                Behind every pixel is a passion for design.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}
            className="w-full bg-white border-4 border-[#1a1a1a] shadow-[12px_12px_0px_#1a1a1a]">
            
            {/* Uncropped Wide Photo */}
            <div className="w-full border-b-4 border-[#1a1a1a] bg-[#9bc1bc]">
              <img
                src="/images/1-cover photo-Hannah-logo.webp"
                alt="Hannah Jamilla - Frontend Developer"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Info Strip underneath */}
            <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-6">
              
              {/* Logo Box */}
              <div className="w-48 shrink-0 bg-white border-4 border-[#ed6a5a] shadow-[4px_4px_0px_#ed6a5a] p-3">
                <img
                  src="/images/2-cover photo-Hannah-logo.webp"
                  alt="HanMade Logo"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Info & Contact */}
              <div className="flex-grow text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 w-full">
                <div>
                  <h3 className="font-display font-black text-2xl lg:text-3xl text-[#1a1a1a] uppercase leading-none">
                    Hannah Jamilla DR. Peralta
                  </h3>
                  <p className="font-mono font-bold text-[#ed6a5a] text-sm mt-1 uppercase">Frontend Designer</p>
                </div>
                
                <a href="mailto:hannahjamillap@gmail.com" 
                   className="shrink-0 flex items-center gap-2 bg-[#1a1a1a] text-white border-2 border-[#1a1a1a] font-mono font-bold text-xs uppercase px-6 py-3 hover:bg-[#ed6a5a] shadow-[4px_4px_0px_#ed6a5a] transition-colors">
                  <Mail className="w-4 h-4" /> Message Me
                </a>
              </div>

            </div>

          </motion.div>
        
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
