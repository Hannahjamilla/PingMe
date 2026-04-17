import React from 'react';
import { cn } from '../../utils/cn';

const ButtonPrimary = ({ children, onClick, className, type = 'button', disabled = false, loading = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        'relative inline-flex items-center justify-center px-8 py-3.5 font-semibold text-sm transition-all duration-300 rounded-full overflow-hidden',
        'bg-black text-white hover:bg-neutral-800 active:scale-[0.97]',
        'disabled:bg-neutral-200 disabled:text-neutral-400 disabled:scale-100',
        className
      )}
    >
      <span className={cn('flex items-center gap-2', loading && 'opacity-0')}>
        {children}
      </span>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </button>
  );
};

export default ButtonPrimary;
