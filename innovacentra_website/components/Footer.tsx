import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from './SocialIcons';
import LegalModals from './LegalModals';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="relative h-40 w-60 rounded-lg -ml-2">
                <Image src="/image/logo 1.png" alt="InnovaCentra Logo" fill className="object-contain" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Where Innovation Finds Its Center. Transforming ideas into scalable digital products, SaaS platforms, and AI-powered solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {['Home', 'About', 'Portfolio', 'Technologies', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-[var(--color-primary)] transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[var(--color-primary)]" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2.5">
              {['Web Development', 'Mobile App Development', 'AI Solutions', 'Cloud Solutions', 'UI/UX Design', 'SaaS Development'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="hover:text-[var(--color-secondary)] transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-3">
                <Phone className="text-[var(--color-primary)] flex-shrink-0" size={20} />
                <span className="text-sm">+91 8220614407</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[var(--color-primary)] flex-shrink-0" size={20} />
                <span className="text-sm">innovacentratech@gmail.com</span>
              </li>
              <li className="pt-4 flex gap-4 mt-2">
                <a href="https://wa.me/918220614407" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2.5 rounded-lg hover:bg-[#25D366] transition-colors group">
                  <MessageCircle className="text-slate-300 group-hover:text-white transition-colors" size={20} />
                </a>
                <a href="https://www.instagram.com/innovacentratech/" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2.5 rounded-lg hover:bg-[#E1306C] transition-colors group">
                  <InstagramIcon className="text-slate-300 group-hover:text-white transition-colors" size={20} />
                </a>
                <a href="https://www.linkedin.com/company/innovacentra-technologies/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2.5 rounded-lg hover:bg-[#0077B5] transition-colors group">
                  <LinkedinIcon className="text-slate-300 group-hover:text-white transition-colors" size={20} />
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} InnovaCentra Technologies. All rights reserved.
          </p>
          <LegalModals />
        </div>
      </div>
    </footer>
  );
}
