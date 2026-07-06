import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Zap } from 'lucide-react';

// Custom Gamey Input Field for this form only
const GameInput = ({ label, type = 'text', placeholder, value, onChange, name, required = false, isTextArea = false }) => {
  const commonClasses = "w-full p-2.5 bg-[#f4f1bb] border-2 border-[#1a1a1a] placeholder:text-[#9bc1bc] text-[#1a1a1a] font-bold outline-none focus:bg-white focus:-translate-y-0.5 focus:shadow-[2px_2px_0px_#9bc1bc] transition-all duration-200 uppercase text-xs md:text-sm tracking-wide";
  
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-[10px] font-black text-[#1a1a1a] uppercase bg-[#ed6a5a] text-white self-start px-2 py-0.5 shadow-[1px_1px_0px_#1a1a1a] border border-[#1a1a1a]">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          rows={4}
          className={`${commonClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={commonClasses}
        />
      )}
    </div>
  );
};

// Custom Game Button
const GameButton = ({ children, loading, ...props }) => (
  <button 
    {...props}
    disabled={loading}
    className={`relative w-full group overflow-hidden bg-[#ed6a5a] border-2 border-[#1a1a1a] text-white font-black uppercase tracking-widest text-sm md:text-base py-3 transition-all ${loading ? 'opacity-70 shadow-none translate-x-[2px] translate-y-[2px]' : 'shadow-[4px_4px_0px_#1a1a1a] hover:shadow-[2px_2px_0px_#1a1a1a] hover:translate-x-[1px] hover:translate-y-[1px] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]'}`}
  >
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmZmZmMiI+PC9yZWN0Pgo8L3N2Zz4=')] opacity-20" />
    <span className="relative z-10 flex items-center justify-center gap-2">
      {loading ? (
        <>
          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          PROCESSING...
        </>
      ) : children}
    </span>
  </button>
);

const InquiryForm = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const accessKey = import.meta.env.VITE_WEB3_FORMS_KEY;

    if (!accessKey || accessKey === 'your_access_key_here') {
      console.error('Web3Forms Access Key is missing in .env');
      if (onShowToast) {
        onShowToast('Quest Error! Check .env file!', 'error');
      }
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: 'PingMe Quest Board',
          subject: `New Quest from ${formData.name}`
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        if (onShowToast) {
          onShowToast('Quest accepted! Talk soon.', 'success');
        }
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      if (onShowToast) {
        onShowToast('Error! Please try again.', 'error');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full relative z-10">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="bg-[#9bc1bc] p-5 md:p-8 rounded-lg border-2 border-[#1a1a1a] shadow-[6px_6px_0px_#1a1a1a] relative"
          >
            {/* Corner blocky accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-r-2 border-b-2 border-[#1a1a1a]" />
            <div className="absolute top-0 right-0 w-3 h-3 border-l-2 border-b-2 border-[#1a1a1a]" />
            
            <div className="mb-6 text-center bg-white p-3 border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] rotate-1">
              <h2 className="font-display text-xl font-black text-[#1a1a1a] uppercase">Your Details</h2>
            </div>

            <div className="space-y-4">
              <GameInput
                label="Your Name"
                name="name"
                placeholder="WHAT CAN I CALL YOU?"
                value={formData.name}
                onChange={handleChange}
                required
              />
              
              <GameInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="WHERE CAN I REACH YOU?"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <GameInput
                label="Message"
                name="message"
                placeholder="TELL ME ABOUT YOUR PROJECT..."
                isTextArea
                value={formData.message}
                onChange={handleChange}
                required
              />

              <div className="pt-2">
                <GameButton type="submit" loading={loading}>
                  <Zap className="w-4 h-4 fill-white" />
                  SEND MESSAGE
                </GameButton>
              </div>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="text-center bg-[#ed6a5a] text-white p-8 md:p-12 rounded-lg border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a]"
          >
            <div className="w-16 h-16 bg-white border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] rounded flex items-center justify-center mb-6 mx-auto animate-bounce">
              <CheckCircle className="w-8 h-8 text-[#9bc1bc]" />
            </div>
            
            <h2 className="font-display text-3xl font-black mb-3 uppercase tracking-tight"
                style={{ textShadow: '2px 2px 0px #1a1a1a' }}>
              Message Sent!
            </h2>
            
            <p className="font-bold text-xs bg-[#1a1a1a] p-3 text-[#f4f1bb] border border-white mb-8 mx-auto uppercase">
              Your message was sent successfully. I will respond to you shortly!
            </p>
            
            <button
              onClick={() => setSubmitted(false)}
              className="bg-white text-[#1a1a1a] px-4 py-2 font-black uppercase text-xs border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#1a1a1a] active:shadow-none active:translate-y-[2px] transition-all"
            >
              Send Another
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InquiryForm;
