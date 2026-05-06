import React from 'react';
import { motion } from 'framer-motion';
import ButtonPrimary from '../button-primary/button-primary';
import AccordionItem from '../accordion/accordion';
import { 
  ArrowDown, Code, Layout, Presentation, Palette, Mail, 
  Smartphone, Heart, Zap, Target, BookOpen, Check, 
  ArrowRight, MoveRight, ShieldCheck
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 }
  }
};

const HeroSection = ({ onStart }) => {
  const services = [
    { 
      icon: Code, title: "Portfolio builds", 
      desc: "A personal site that shows who you are and what you can do. Great for students, job seekers, or anyone starting out.", 
      tag: "Most popular"
    },
    { 
      icon: Layout, title: "Simple websites", 
      desc: "Clean landing pages for your small business or side project. No clutter, just something that works well and looks great." 
    },
    { 
      icon: Presentation, title: "Slide decks", 
      desc: "Turn your raw notes into polished presentations. Custom layouts, clear visuals, consistent style throughout." 
    },
    { 
      icon: Palette, title: "Social graphics", 
      desc: "Posters, carousels, and cover photos for your socials. Made to match your vibe and catch attention." 
    },
    { 
      icon: Mail, title: "Digital invites", 
      desc: "Beautiful online invitations for birthdays, events, or gatherings. Interactive, stylish, and eco-friendly." 
    },
    { 
      icon: Smartphone, title: "Basic UI design", 
      desc: "Simple wireframes and mockups to help you see your app idea before building it. Think of it as a blueprint." 
    }
  ];

  const highlights = [
    { icon: Heart, t: "Beginner friendly", d: "No confusing tech talk. Just clear, honest, and supportive conversations." },
    { icon: Zap, t: "Quick turnaround", d: "Most projects are done within a week. Your time matters to me." },
    { icon: Target, t: "Made just for you", d: "Every project is shaped around your ideas, your goals, your personality." },
    { icon: BookOpen, t: "You'll learn too", d: "I share tips so you can manage your own stuff after we're done." }
  ];

  const processSteps = [
    { n: "01", title: "Chat", desc: "We talk about what you need. No pressure, just a friendly conversation." },
    { n: "02", title: "Plan", desc: "I map things out and show you a rough direction before anything starts." },
    { n: "03", title: "Build", desc: "The actual making part. I'll keep you updated every step of the way." },
    { n: "04", title: "Launch", desc: "We review everything together, polish the details, and go live." }
  ];

  return (
    <section className="relative bg-[#f5f5f5]">

      {/* ─── Hero ─── */}
      <div className="min-h-screen flex flex-col justify-between pt-16 relative overflow-hidden">
        {/* Decorative grid lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-[20%] w-px h-full bg-neutral-200/60" />
          <div className="absolute top-0 left-[40%] w-px h-full bg-neutral-200/40" />
          <div className="absolute top-0 left-[60%] w-px h-full bg-neutral-200/40" />
          <div className="absolute top-0 left-[80%] w-px h-full bg-neutral-200/60" />
        </div>

        {/* Main hero content */}
        <div className="flex-grow flex items-center px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left — copy */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <div className="flex items-center gap-3 mb-10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black" />
                </span>
                <span className="text-[11px] font-semibold text-neutral-400 tracking-widest uppercase">
                  Open for projects
                </span>
              </div>

              <h1 className="font-display text-[clamp(3.5rem,9vw,8rem)] font-bold tracking-[-0.04em] leading-[0.85] text-black mb-10">
                Hello,<br />
                <span className="italic font-normal text-neutral-400">creative</span>.
              </h1>

              <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-md mb-10">
                Hi, New to tech? I&apos;ll help you build your first portfolio, shape your brand, and bring your digital ideas to life — step by step.
              </p>

              <div className="flex items-center gap-6">
                <ButtonPrimary onClick={onStart}>
                  Let&apos;s get started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </ButtonPrimary>
                <motion.button 
                  onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ x: 4 }}
                  className="text-xs font-semibold text-neutral-400 hover:text-black transition-colors hidden sm:flex items-center gap-2"
                >
                  See my work <MoveRight className="w-3 h-3" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right — stacked project cards visual */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex items-center justify-center relative h-[480px]"
            >
              {/* Background large number */}
              <span className="absolute -right-4 top-1/2 -translate-y-1/2 font-display text-[280px] font-bold text-neutral-200/50 leading-none select-none pointer-events-none">6</span>

              {/* Card stack */}
              <div className="relative w-full max-w-[440px] h-full">
                {/* Back card */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-6 right-0 w-[280px] h-[180px] bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center">
                      <Code className="w-4 h-4 text-neutral-400" />
                    </div>
                    <span className="text-[9px] font-semibold text-neutral-300 uppercase tracking-widest">Portfolio</span>
                  </div>
                  <div>
                    <div className="flex gap-1.5 mb-2">
                      <div className="h-1 w-12 bg-neutral-200 rounded-full" />
                      <div className="h-1 w-8 bg-neutral-100 rounded-full" />
                      <div className="h-1 w-16 bg-neutral-200 rounded-full" />
                    </div>
                    <div className="flex gap-1.5">
                      <div className="h-1 w-20 bg-neutral-100 rounded-full" />
                      <div className="h-1 w-6 bg-neutral-200 rounded-full" />
                    </div>
                  </div>
                </motion.div>

                {/* Middle card */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-[120px] left-0 w-[300px] h-[200px] bg-black rounded-2xl p-6 flex flex-col justify-between shadow-2xl z-10"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <Layout className="w-4 h-4 text-neutral-400" />
                    </div>
                    <span className="text-[9px] font-semibold text-neutral-600 uppercase tracking-widest">Website</span>
                  </div>
                  <div>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="h-10 bg-white/5 rounded-lg" />
                      <div className="h-10 bg-white/10 rounded-lg" />
                      <div className="h-10 bg-white/5 rounded-lg" />
                    </div>
                    <div className="flex gap-1.5">
                      <div className="h-1 w-16 bg-white/10 rounded-full" />
                      <div className="h-1 w-10 bg-white/5 rounded-full" />
                      <div className="h-1 w-8 bg-white/10 rounded-full" />
                    </div>
                  </div>
                </motion.div>

                {/* Front card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-0 right-4 w-[260px] h-[170px] bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between shadow-lg z-20"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center">
                      <Palette className="w-4 h-4 text-neutral-400" />
                    </div>
                    <span className="text-[9px] font-semibold text-neutral-300 uppercase tracking-widest">Graphics</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-12 h-12 bg-neutral-100 rounded-xl" />
                    <div className="w-12 h-12 bg-neutral-200 rounded-xl" />
                    <div className="w-12 h-12 bg-neutral-100 rounded-xl" />
                    <div className="w-12 h-12 bg-neutral-50 rounded-xl border border-neutral-200" />
                  </div>
                </motion.div>

                {/* Tiny floating stat */}
                <motion.div
                  animate={{ y: [-4, 4, -4], x: [-2, 2, -2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 left-[120px] bg-white rounded-xl border border-neutral-200 px-4 py-3 shadow-sm z-30"
                >
                  <p className="text-[10px] font-semibold text-neutral-400 mb-0.5">Services</p>
                  <p className="font-display text-2xl font-bold text-black leading-none">6+</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom scrolling marquee */}
        <div className="border-t border-neutral-200 overflow-hidden py-5">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-8 whitespace-nowrap"
          >
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-8">
                {["Portfolios", "Websites", "Slide decks", "Social graphics", "Digital invites", "UI Design", "Brand identity", "Creative direction"].map((item, i) => (
                  <span key={i} className="flex items-center gap-4">
                    <span className="text-sm font-medium text-neutral-400">{item}</span>
                    <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full shrink-0" />
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ─── Why me ─── */}
      <div className="px-6 lg:px-12 py-24 md:py-32 bg-black text-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeUp} className="text-[11px] font-semibold text-neutral-500 tracking-widest uppercase mb-4">
              Why work with me
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-16 md:mb-20 max-w-md">
              Simple process, real results.
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800 rounded-2xl overflow-hidden">
              {highlights.map((h, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeUp}
                  className="bg-neutral-900 p-8 md:p-10 flex flex-col gap-5 group hover:bg-neutral-800 transition-colors duration-500"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <h.icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-2">{h.t}</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors">{h.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── Services ─── */}
      <div id="services-section" className="px-6 lg:px-12 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeUp} className="text-[11px] font-semibold text-neutral-400 tracking-widest uppercase mb-4">
              What I can do for you
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-5xl font-bold tracking-tight text-black mb-16 md:mb-20 max-w-lg">
              Things I love making.
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 rounded-2xl overflow-hidden">
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  onClick={onStart}
                  className="bg-white p-8 md:p-10 flex flex-col justify-between group hover:bg-[#f5f5f5] transition-colors duration-500 relative cursor-pointer"
                >
                  {s.tag && (
                    <span className="absolute top-6 right-6 text-[9px] font-bold uppercase tracking-widest text-neutral-400 border border-neutral-200 rounded-full px-3 py-1">
                      {s.tag}
                    </span>
                  )}
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-all duration-500">
                      <s.icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-black mb-3 tracking-tight">{s.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-neutral-300 group-hover:text-black transition-colors duration-500">
                    <span className="text-[10px] font-semibold uppercase tracking-widest">Get started</span>
                    <MoveRight className="w-3 h-3" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── Owner's Note ─── */}
      <div className="px-6 lg:px-12 py-24 md:py-32 bg-black text-white">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.p variants={fadeUp} className="text-[11px] font-semibold text-neutral-500 tracking-widest uppercase mb-4">
              A note from the maker
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-16 md:mb-20">
              A small project,{' '}
              <span className="text-neutral-500">built with heart.</span>
            </motion.h2>

            <div className="space-y-6 text-left">
              {[
                "Hey there - thanks for stopping by. I'm the person behind PingMe. This is a small startup, still in its early stages, and I'm learning as I go.",
                "I'm currently using free hosting and haven't gotten a custom domain yet. But I'm working toward it, one step at a time."
              ].map((text, i) => (
                <motion.div 
                  key={i}
                  variants={fadeUp}
                  className="p-6 md:p-8 rounded-2xl bg-neutral-900 border border-neutral-800"
                >
                  <p className="text-sm md:text-base text-neutral-400 leading-relaxed">{text}</p>
                </motion.div>
              ))}

              <motion.div 
                variants={fadeUp}
                className="p-8 md:p-10 rounded-2xl bg-white text-black mt-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-4 h-4 text-neutral-400" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Thank you</span>
                </div>
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                  Thank you for your patience and kindness as I build and grow this space. Your support means the world to me — really.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── Process ─── */}
      <div className="px-6 lg:px-12 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeUp} className="text-[11px] font-semibold text-neutral-400 tracking-widest uppercase mb-4">
              How it works
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-5xl font-bold tracking-tight text-black mb-16 md:mb-20 max-w-md">
              From idea to reality.
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative p-8 md:p-10 rounded-2xl bg-white border border-neutral-200 group hover:border-black transition-colors duration-500"
                >
                  <span className="font-display text-6xl md:text-7xl font-bold text-neutral-100 group-hover:text-neutral-200 transition-colors absolute top-4 right-6 leading-none">
                    {step.n}
                  </span>
                  <div className="relative z-10 pt-16">
                    <h4 className="font-display text-xl font-bold text-black mb-3">{step.title}</h4>
                    <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── FAQ + Policy ─── */}
      <div className="px-6 lg:px-12 py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p variants={fadeUp} className="text-[11px] font-semibold text-neutral-400 tracking-widest uppercase mb-4">
                Got questions?
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold tracking-tight text-black mb-10 md:mb-12">
                Glad you asked.
              </motion.h2>
              <motion.div variants={fadeUp}>
                {[
                  { q: "How fast can we start?", a: "I usually reply within a day. Once we've agreed on the details, we can kick things off within 48 hours." },
                  { q: "Do I need to know tech stuff?", a: "Not at all. I explain everything in plain, simple words. You just bring your ideas." },
                  { q: "Can I request changes?", a: "Of course. Every project includes two rounds of revisions so the final result feels exactly right." },
                  { q: "Any student-friendly pricing?", a: "Yes — I love helping students and beginners. Just mention it in your message and I'll work something out." }
                ].map((faq, i) => (
                  <AccordionItem key={i} title={faq.q}>
                    {faq.a}
                  </AccordionItem>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <div className="p-8 md:p-12 rounded-2xl bg-[#f5f5f5] border border-neutral-200">
                <div className="flex items-center gap-2 mb-8">
                  <ShieldCheck className="w-4 h-4 text-neutral-400" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">How I work</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-black mb-8 tracking-tight">
                  Fair and honest, always.
                </h3>
                <ul className="space-y-5">
                  {[
                    "A 50% deposit upfront to get things moving. The rest when you're happy.",
                    "Once the project is done, everything belongs to you — fully yours.",
                    "I'll stick around after launch to help with any questions or small fixes."
                  ].map((rule, i) => (
                    <li key={i} className="flex gap-3 text-sm text-neutral-500 leading-relaxed">
                      <Check className="w-4 h-4 text-neutral-300 shrink-0 mt-0.5" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
