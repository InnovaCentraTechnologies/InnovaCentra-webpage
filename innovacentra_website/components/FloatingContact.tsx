"use client";

import { useState } from "react";
import { MessageSquare, Phone, Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) {
      setIsSubmitting(true);
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'callback', fullName: name, phone: phone }),
        });
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
          setShowCallbackForm(false);
          setName("");
          setPhone("");
        }, 3000);
      } catch (error) {
        console.error("Failed to submit callback request");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans">
      
      {/* Expanded Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 w-72 md:w-80 overflow-hidden"
          >
            {!showCallbackForm ? (
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2 flex items-center justify-between">
                  <span>How can we help?</span>
                  <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                    <X size={18} />
                  </button>
                </h3>
                
                {/* WhatsApp Chat */}
                <a
                  href="https://wa.me/918220614407?text=Hi%20InnovaCentra,%20I'm%20interested%20in%20your%20services!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold transition-all border border-emerald-100"
                >
                  <div className="bg-emerald-500 text-white p-2 rounded-lg">
                    <MessageSquare size={18} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm">Chat on WhatsApp</div>
                    <div className="text-xs text-emerald-600 font-normal">Active & Instant</div>
                  </div>
                </a>

                {/* Call Now */}
                <a
                  href="tel:+918220614407"
                  className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 font-semibold transition-all border border-blue-100"
                >
                  <div className="bg-blue-600 text-white p-2 rounded-lg">
                    <Phone size={18} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm">Call Our Team</div>
                    <div className="text-xs text-blue-600 font-normal">+91 8220614407</div>
                  </div>
                </a>

                {/* Callback Request Trigger */}
                <button
                  onClick={() => setShowCallbackForm(true)}
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-800 font-semibold transition-all border border-orange-100 text-left"
                >
                  <div className="bg-orange-500 text-white p-2 rounded-lg">
                    <Send size={18} />
                  </div>
                  <div>
                    <div className="text-sm">Request Callback</div>
                    <div className="text-xs text-orange-600 font-normal">We'll call you back</div>
                  </div>
                </button>
              </div>
            ) : (
              // Callback request Form
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2 flex items-center justify-between">
                  <span>Callback Request</span>
                  <button onClick={() => setShowCallbackForm(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                    <X size={18} />
                  </button>
                </h3>
                
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-6 text-center space-y-2 text-emerald-600"
                  >
                    <div className="text-4xl">✓</div>
                    <h4 className="font-bold text-slate-800">Request Received!</h4>
                    <p className="text-xs text-slate-500 px-4">Our advisor will contact you within 15 minutes.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleCallbackSubmit} className="space-y-3">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange-500 text-white py-2 rounded-lg font-bold text-sm hover:bg-orange-600 transition-colors disabled:opacity-70"
                    >
                      {isSubmitting ? "Requesting..." : "Call Me Back"}
                    </button>
                  </form>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen(!isOpen);
          setShowCallbackForm(false);
        }}
        className={`shadow-2xl flex items-center justify-center rounded-full w-14 h-14 text-white transition-colors cursor-pointer ${
          isOpen ? "bg-slate-800" : "bg-[var(--color-primary)] hover:bg-blue-700"
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
}
