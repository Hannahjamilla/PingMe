import React from 'react';
import { cn } from '../../utils/cn';

const InputField = ({ label, type = 'text', placeholder, value, onChange, name, required = false, isTextArea = false }) => {
  const inputClasses = cn(
    'w-full px-4 py-3.5 text-sm bg-white border border-[#9bc1bc]/30 rounded-xl',
    'focus:outline-none focus:border-[#ed6a5a] focus:ring-2 focus:ring-[#ed6a5a]/20 transition-all duration-300',
    'placeholder:text-[#9bc1bc] text-neutral-900',
    'hover:border-[#9bc1bc]'
  );

  return (
    <div className="flex flex-col gap-2 w-full group">
      {label && (
        <label className="text-[10px] font-semibold text-[#9bc1bc] uppercase tracking-widest ml-1 group-focus-within:text-[#ed6a5a] transition-colors">
          {label}
        </label>
      )}
      {isTextArea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          rows={4}
          className={cn(inputClasses, 'resize-none')}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={inputClasses}
        />
      )}
    </div>
  );
};

export default InputField;
