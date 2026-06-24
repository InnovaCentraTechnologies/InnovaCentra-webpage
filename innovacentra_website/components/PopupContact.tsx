"use client";

import { useState, useEffect } from "react";
import { Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PopupContact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);

  useEffect(() => {
    // Show the popup after 5 seconds if not closed
    const timer = setTimeout(() => {
      if (!hasClosed) {
        setIsVisible(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [hasClosed]);

  const handleClose = () => {
    setIsVisible(false);
    setHasClosed(true); // Don't show again in this session
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = { ...Object.fromEntries(formData.entries()), type: 'contact' };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        
        // Auto close after 3 seconds
        setTimeout(() => {
          handleClose();
        }, 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
          />

          {/* Popup Content with Glassy Look */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar rounded-2xl bg-white/70 backdrop-blur-xl shadow-2xl border border-white/50 p-6 md:p-8"
          >
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-800 hover:bg-white/50 rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-dark)]">Get a Free Consultation</h2>
              <p className="text-slate-600 mt-2">Let's discuss how we can help your business grow.</p>
            </div>

            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">✓</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Message Sent Successfully!</h3>
                <p className="text-slate-600 mb-8">Thank you for reaching out. Our team will contact you shortly.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                    <input name="fullName" type="text" className="w-full px-4 py-2.5 rounded-lg border border-slate-200/50 bg-white/50 focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all text-slate-900 placeholder:text-slate-400" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                    <input name="email" type="email" className="w-full px-4 py-2.5 rounded-lg border border-slate-200/50 bg-white/50 focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all text-slate-900 placeholder:text-slate-400" placeholder="john@example.com" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
                    <input name="phone" type="tel" className="w-full px-4 py-2.5 rounded-lg border border-slate-200/50 bg-white/50 focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all text-slate-900 placeholder:text-slate-400" placeholder="+91 9876543210" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Company Name *</label>
                    <input name="company" type="text" className="w-full px-4 py-2.5 rounded-lg border border-slate-200/50 bg-white/50 focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all text-slate-900 placeholder:text-slate-400" placeholder="Your Company" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Tell us about your need *</label>
                  <textarea name="description" rows={3} className="w-full px-4 py-2.5 rounded-lg border border-slate-200/50 bg-white/50 focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all resize-none text-slate-900 placeholder:text-slate-400" placeholder="Tell us about your project goals..." required></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white px-8 py-3.5 rounded-xl font-bold text-[15px] hover:shadow-lg hover:-translate-y-0.5 transition-all flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
