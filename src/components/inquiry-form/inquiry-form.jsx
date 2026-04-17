import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import InputField from '../input-field/input-field';
import ButtonPrimary from '../button-primary/button-primary';

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
        onShowToast('Configuration error. Please check .env file.', 'error');
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
          from_name: 'PingMe Inquiry',
          subject: `New Inquiry from ${formData.name}`
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        if (onShowToast) {
          onShowToast('Message sent — talk soon!', 'success');
        }
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      if (onShowToast) {
        onShowToast('Something went wrong. Please try again.', 'error');
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
    <div className="w-full">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-10 rounded-2xl border border-neutral-200"
          >
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold text-black tracking-tight">Send a message</h2>
              <p className="text-sm text-neutral-400 mt-2">Tell me about your idea — I'd love to hear it.</p>
            </div>

            <div className="space-y-5">
              <InputField
                label="Your name"
                name="name"
                placeholder="What should I call you?"
                value={formData.name}
                onChange={handleChange}
                required
              />
              
              <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="Where can I reply?"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <InputField
                label="Your message"
                name="message"
                placeholder="What's on your mind? Share as much or as little as you'd like..."
                isTextArea
                value={formData.message}
                onChange={handleChange}
                required
              />

              <ButtonPrimary 
                type="submit" 
                loading={loading}
                className="w-full mt-4"
              >
                Send it over
              </ButtonPrimary>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center bg-white p-10 md:p-16 rounded-2xl border border-neutral-200"
          >
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-8 mx-auto">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display text-2xl font-bold mb-3 tracking-tight">Got it!</h2>
            <p className="text-neutral-500 mb-10 text-sm max-w-xs mx-auto leading-relaxed">
              Your message is on its way. I'll get back to you as soon as I can.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="group text-sm font-semibold flex items-center gap-2 mx-auto text-neutral-400 hover:text-black transition-colors"
            >
              Send another <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InquiryForm;
