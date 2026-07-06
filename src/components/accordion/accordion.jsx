import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-3 md:p-4 bg-white border-2 border-[#1a1a1a] font-display font-black text-sm md:text-base uppercase transition-all
          ${isOpen ? 'bg-[#9bc1bc] shadow-none translate-y-[2px] translate-x-[2px]' : 'shadow-[2px_2px_0px_#1a1a1a] hover:bg-[#f4f1bb]'}`}
      >
        <span className="text-left select-none text-[#1a1a1a] leading-tight">{title}</span>
        <div className={`shrink-0 w-6 h-6 flex items-center justify-center border-2 border-[#1a1a1a] bg-white transition-colors ${isOpen ? 'bg-[#ed6a5a]' : ''}`}>
          {isOpen ? <Minus className="w-3 h-3 text-[#1a1a1a]" strokeWidth={3} /> : <Plus className="w-3 h-3 text-[#1a1a1a]" strokeWidth={3} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-white border-l-2 border-r-2 border-b-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] transform translate-y-[2px] translate-x-[2px]"
          >
            <div className="p-4 text-[#1a1a1a] text-xs md:text-sm leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
