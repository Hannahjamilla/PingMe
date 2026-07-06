import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

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
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-4 py-2 border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] ${
        isError ? 'bg-[#ed6a5a] text-white' : 'bg-[#9bc1bc] text-[#1a1a1a]'
      }`}
    >
      <div className={`w-5 h-5 border-2 border-[#1a1a1a] flex items-center justify-center font-black animate-bounce text-xs ${isError ? 'bg-white' : 'bg-[#f4f1bb]'}`}>
        {isError ? '!' : '+'}
      </div>
      <p className="font-mono font-bold uppercase tracking-wider text-[10px]">{message}</p>
    </motion.div>
  );
};

export default Toast;
