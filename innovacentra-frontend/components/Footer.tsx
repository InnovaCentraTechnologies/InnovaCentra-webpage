import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="relative h-14 w-52 rounded-lg -ml-2">
                <Image src="/image/bf9c18de-0cb9-4dc6-b6c1-62c6ff000ed6.png" alt="InnovaCentra Logo" fill className="object-contain" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Where Innovation Finds Its Center. Transforming ideas into scalable digital products, SaaS platforms, and AI-powered solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {['Home', 'About Us', 'Portfolio', 'Case Studies', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[var(--color-primary)] transition-colors text-sm flex items-center gap-2 group">
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
              <li className="flex items-start gap-3">
                <MapPin className="text-[var(--color-primary)] flex-shrink-0 mt-1" size={20} />
                <span className="text-sm">Redhills, Chennai - 600052, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[var(--color-primary)] flex-shrink-0" size={20} />
                <span className="text-sm">+91 8220614407</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[var(--color-primary)] flex-shrink-0" size={20} />
                <span className="text-sm">innovacentratech@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} InnovaCentra Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
