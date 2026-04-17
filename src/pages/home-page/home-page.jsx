import React from 'react';
import InquiryForm from '../../components/inquiry-form/inquiry-form';
import { motion } from 'framer-motion';
import { MoveRight, Eye, ArrowLeft } from 'lucide-react';

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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const HomePage = ({ onShowToast }) => {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">

      {/* ─── Header ─── */}
      <div className="pt-28 pb-16 px-6 lg:px-12 bg-black text-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={fadeUp} className="text-[11px] font-semibold text-neutral-500 tracking-widest uppercase mb-6">
              Start your project
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-6xl font-bold tracking-tighter leading-[0.95] mb-6">
              Let's work<br />together.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-neutral-400 text-base md:text-lg max-w-md leading-relaxed">
              Got an idea? A question? Or just want to say hi? Fill in the form below and I'll get back to you soon.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* ─── Main Content ─── */}
      <div className="px-6 lg:px-12 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          
          {/* Left - Context */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start"
          >
            <motion.div variants={fadeUp} className="p-8 md:p-10 rounded-2xl bg-white border border-neutral-200 mb-6">
              <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest block mb-6">How it works</span>
              <div className="space-y-0">
                {[
                  { n: "01", t: "Share your idea", d: "Tell me what you need" },
                  { n: "02", t: "We figure it out", d: "Together, no pressure" },
                  { n: "03", t: "I get to work", d: "You stay in the loop" }
                ].map((step, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 8 }}
                    className="flex items-center justify-between py-4 border-b border-neutral-100 last:border-0 group cursor-default"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-bold text-neutral-300 tabular-nums">{step.n}</span>
                      <span className="text-sm font-semibold text-black">{step.t}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-300 group-hover:text-black transition-colors">
                      <span className="text-[10px] font-medium hidden sm:block">{step.d}</span>
                      <MoveRight className="w-3 h-3" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-start gap-4 p-6 md:p-8 rounded-2xl bg-white border border-neutral-200">
              <div className="shrink-0 w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center">
                <Eye className="w-4 h-4 text-neutral-400" />
              </div>
              <div>
                <h5 className="font-semibold text-black text-xs mb-1.5">Your privacy is safe</h5>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  Messages go straight to my inbox. No third parties, no data selling — just you and me.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <InquiryForm onShowToast={onShowToast} />
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
