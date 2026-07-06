import React from 'react';
import InquiryForm from '../../components/inquiry-form/inquiry-form';
import { motion } from 'framer-motion';
import { MonitorSmartphone, Rocket, Heart, Coffee, Smile, ChevronDown, CheckCircle } from 'lucide-react';
import AccordionItem from '../../components/accordion/accordion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const HomePage = ({ onShowToast }) => {
  return (
    <main className="min-h-screen bg-[#f4f1bb] flex flex-col relative w-full">
      
      {/* ─── HERO SECTION ─── */}
      <section className="relative w-full pt-28 pb-20 lg:pt-32 lg:pb-24 px-6 lg:px-12 flex items-center justify-center border-b-4 border-[#1a1a1a]"
               style={{ backgroundImage: 'linear-gradient(45deg, #1a1a1a 12.5%, transparent 12.5%, transparent 50%, #1a1a1a 50%, #1a1a1a 62.5%, transparent 62.5%, transparent 100%)', backgroundSize: '8px 8px', opacity: 0.95 }}>
        
        <div className="absolute inset-0 bg-[#f4f1bb] opacity-90" />

        <div className="max-w-[800px] mx-auto relative z-10 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-block bg-[#ed6a5a] text-white px-4 py-2 border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] font-bold font-mono text-sm uppercase -rotate-1 mb-8">
              Hi there!
            </div>
            <h1 className="font-display text-[clamp(2.5rem,8vw,5.5rem)] font-black text-[#1a1a1a] uppercase leading-none tracking-tighter mb-6"
                style={{ textShadow: '2px 2px 0px #ed6a5a, 4px 4px 0px #9bc1bc' }}>
              Let's work together.
            </h1>
            <p className="font-mono text-base md:text-lg max-w-xl mx-auto font-bold text-[#1a1a1a] bg-white p-4 border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a]">
              I build fun, friendly, and easy-to-use websites for businesses and creators. Need a website? You're in the right place!
            </p>
          </motion.div>

          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="flex justify-center mt-12 hidden md:flex">
            <a href="#inquiry" className="w-12 h-12 bg-white border-2 border-[#1a1a1a] flex items-center justify-center hover:bg-[#9bc1bc] transition-colors cursor-pointer shadow-[4px_4px_0px_#1a1a1a] rounded-full">
              <ChevronDown className="w-6 h-6 text-[#1a1a1a]" strokeWidth={3} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── WHY CHOOSE ME ─── */}
      <section className="bg-white border-b-4 border-[#1a1a1a] py-20 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase mb-4 tracking-tighter">Why choose me?</h2>
            <div className="w-24 h-2 bg-[#9bc1bc] border border-[#1a1a1a] mx-auto" />
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {[
              { icon: Smile, title: "Friendly Design", desc: "Your website will look amazing and uniquely yours.", color: "bg-[#ed6a5a]" },
              { icon: CheckCircle, title: "Easy to Use", desc: "No confusing menus. Your visitors will love browsing your site.", color: "bg-[#9bc1bc]" },
              { icon: MonitorSmartphone, title: "Works on Phones", desc: "It will look perfect whether on a big computer or a small phone.", color: "bg-[#f4f1bb]" },
            ].map((service, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white border-4 border-[#1a1a1a] shadow-[6px_6px_0px_#1a1a1a] p-6 lg:p-8 flex flex-col items-center text-center">
                <div className={`w-16 h-16 ${service.color} border-2 border-[#1a1a1a] rounded-full flex items-center justify-center mb-6 shadow-[2px_2px_0px_#1a1a1a]`}>
                  <service.icon className="w-8 h-8 text-[#1a1a1a]" strokeWidth={2.5} />
                </div>
                <h3 className="font-display font-black text-xl text-[#1a1a1a] uppercase mb-3">{service.title}</h3>
                <p className="font-mono text-sm font-bold opacity-80 text-[#1a1a1a]">{service.desc}</p>
              </motion.div>
            ))}

          </motion.div>
        
        </div>
      </section>

      {/* ─── HOW IT WORKS (SIMPLE) ─── */}
      <section className="bg-[#9bc1bc] py-20 px-6 lg:px-12 border-b-4 border-[#1a1a1a]">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} transition={{ duration: 0.5 }}>
            <h2 className="font-display text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase mb-6 tracking-tighter" style={{ textShadow: '2px 2px 0px white' }}>
              How it works
            </h2>
            <p className="font-mono text-sm md:text-base font-bold bg-white p-4 border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] mb-8">
              Getting a website is easy. Here are the 4 simple steps we take together.
            </p>
            
            <div className="space-y-4">
              {[
                { step: "1", title: "We Talk & Plan", desc: "You tell me what you need." },
                { step: "2", title: "I Design", desc: "I create a look you'll love." },
                { step: "3", title: "I Build", desc: "I turn the design into a real website." },
                { step: "4", title: "We Launch", desc: "Your website goes live to the world!" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-4 border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]">
                  <div className="w-10 h-10 bg-[#ed6a5a] border-2 border-[#1a1a1a] rounded-full flex items-center justify-center shrink-0">
                    <span className="font-display font-black text-white">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold uppercase text-[#1a1a1a]">{item.title}</h4>
                    <span className="font-mono text-[10px] sm:text-xs font-bold text-[#1a1a1a] opacity-70">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-[#f4f1bb] p-6 lg:p-8 border-4 border-[#1a1a1a] shadow-[8px_8px_0px_#ed6a5a]">
            <h3 className="font-display font-black text-[#1a1a1a] text-2xl uppercase mb-6 border-b-2 border-[#1a1a1a] pb-4">
              Questions you might have
            </h3>
            <div className="space-y-4">
              <AccordionItem title="How long does it take?">
                Usually around 2 to 4 weeks depending on the size of the project.
              </AccordionItem>
              <AccordionItem title="What do I need to prepare?">
                Just your ideas! Any text, pictures, or examples you like are very helpful.
              </AccordionItem>
              <AccordionItem title="Can I ask for changes?">
                Yes absolutely! I always make sure you are 100% happy with the design before we start building.
              </AccordionItem>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ─── INQUIRY FORM ─── */}
      <section id="inquiry" className="py-20 lg:py-24 px-6 lg:px-12 bg-[#ed6a5a]">
        <div className="max-w-[700px] mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ duration: 0.4 }}>
            <h2 className="font-display text-4xl lg:text-5xl font-black text-white uppercase mb-4 tracking-tighter"
                style={{ textShadow: '2px 2px 0px #1a1a1a' }}>
              Send me a message
            </h2>
            <p className="font-mono text-xs md:text-sm font-bold bg-[#1a1a1a] text-[#f4f1bb] p-4 border-2 border-white mb-10 w-fit mx-auto shadow-[4px_4px_0px_#1a1a1a]">
              Please fill out this form and I will get back to you soon!
            </p>
          </motion.div>

          <InquiryForm onShowToast={onShowToast} />
        </div>
      </section>

    </main>
  );
};

export default HomePage;
