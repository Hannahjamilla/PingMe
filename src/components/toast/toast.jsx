import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose, duration = 4000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-4 rounded-xl bg-black text-white shadow-2xl"
    >
      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
        <Check className="w-3 h-3 text-white" />
      </div>
      <p className="text-xs font-semibold">{message}</p>
      <button 
        onClick={onClose}
        className="ml-2 p-1 hover:bg-white/10 rounded-lg transition-colors"
      >
        <X className="w-3 h-3 text-white/40" />
      </button>
    </motion.div>
  );
};

export default Toast;
