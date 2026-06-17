"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
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
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 h-full">
      <h2 className="text-2xl font-bold text-[var(--color-dark)] mb-6">Send us a message</h2>
      {isSuccess ? (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">✓</div>
          <h3 className="text-2xl font-bold text-slate-800 mb-3">Message Sent Successfully!</h3>
          <p className="text-slate-600 mb-8">Thank you for reaching out. Our team will review your details and get back to you shortly.</p>
          <button onClick={() => setIsSuccess(false)} className="text-[var(--color-primary)] font-bold hover:underline">
            Send another message
          </button>
        </div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
              <input name="fullName" type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all" placeholder="John Doe" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <input name="email" type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all" placeholder="john@example.com" required />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
              <input name="phone" type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all" placeholder="+91 9876543210" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
              <input name="company" type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all" placeholder="Your Company" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Estimated Budget</label>
            <input 
              name="budget" 
              list="budget-options" 
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all bg-white" 
              placeholder="Select or type your budget..." 
              required 
            />
            <datalist id="budget-options">
              <option value="Under $1,000" />
              <option value="$1,000 - $5,000" />
              <option value="$5,000 - $10,000" />
              <option value="$10,000+" />
            </datalist>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Project Description</label>
            <textarea name="description" rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us about your project goals and requirements..." required></textarea>
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
            {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={20} />
          </button>

        </form>
      )}
    </div>
  );
}
