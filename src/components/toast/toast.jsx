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

  const isError = type === 'error';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl border ${
        isError 
        ? 'bg-red-50 text-red-900 border-red-100' 
        : 'bg-black text-white border-white/10'
      }`}
    >
      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
        isError ? 'bg-red-200' : 'bg-white/10'
      }`}>
        {isError ? (
          <span className="text-[10px] font-bold">!</span>
        ) : (
          <Check className="w-3 h-3" />
        )}
      </div>
      <p className="text-xs font-semibold">{message}</p>
      <button 
        onClick={onClose}
        className={`ml-2 p-1 rounded-lg transition-colors ${
          isError ? 'hover:bg-red-100' : 'hover:bg-white/10'
        }`}
      >
        <X className={`w-3 h-3 ${isError ? 'text-red-400' : 'text-white/40'}`} />
      </button>
    </motion.div>
  );
};

export default Toast;
