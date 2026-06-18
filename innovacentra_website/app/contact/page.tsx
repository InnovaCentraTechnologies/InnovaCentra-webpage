"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import SectionHeader from "@/components/SectionHeader";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-blue-50 rounded-full blur-[100px] opacity-50"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-orange-50 rounded-full blur-[100px] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-16">
          <SectionHeader
            badge="Contact Us"
            titleStart="Get In"
            titleHighlight="Touch"
            subtitle="Ready to start your next project? Get in touch with us today to discuss how we can help your business grow."
            isPageTitle
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-[var(--color-dark)] p-8 rounded-2xl text-white shadow-xl relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)] opacity-20 blur-[50px] rounded-full"></div>
              
              <h2 className="text-2xl font-bold mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg flex-shrink-0">
                    <Phone className="text-[var(--color-secondary)]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone Number</h3>
                    <p className="text-slate-300">+91 8220614407</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg flex-shrink-0">
                    <Mail className="text-[var(--color-secondary)]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Address</h3>
                    <p className="text-slate-300">innovacentratech@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}
