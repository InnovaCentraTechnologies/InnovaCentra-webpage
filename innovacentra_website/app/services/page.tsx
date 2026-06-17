import { Code2, Smartphone, Monitor, Cpu, Cloud, Settings, Share2 , BarChart3} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Services | InnovaCentra Technologies",
  description: "Explore our comprehensive IT solutions including Web Development, AI, Cloud, SaaS, and more.",
};

export default function ServicesPage() {
  const allServices = [
    { title: "Web Development", icon: <Code2 size={40} className="text-[var(--color-primary)]" />, desc: "Custom websites, enterprise portals, and scalable e-commerce platforms built using modern frameworks like React and Next.js." },
    { title: "Mobile Applications", icon: <Smartphone size={40} className="text-[var(--color-primary)]" />, desc: "High-performance cross-platform applications for iOS and Android using Flutter and React Native." },
    { title: "Desktop Applications", icon: <Monitor size={40} className="text-[var(--color-primary)]" />, desc: "Robust and secure desktop applications tailored for Windows, macOS, and Linux environments." },
    { title: "Custom Software Development", icon: <Settings size={40} className="text-[var(--color-primary)]" />, desc: "Bespoke software solutions designed specifically to address your unique business challenges and workflows." },
    { title: "SaaS Applications", icon: <Cloud size={40} className="text-[var(--color-primary)]" />, desc: "End-to-end Software as a Service product development, from architecture design to deployment." },
    { title: "AI Solutions", icon: <Cpu size={40} className="text-[var(--color-primary)]" />, desc: "Intelligent automations, machine learning models, and AI integrations to give your business a competitive edge." },
    { title: "Social Media Marketing", icon: <Share2 size={40} className="text-[var(--color-primary)]" />, desc: "Social media marketing services including WhatsApp, Facebook, Instagram, and other digital channels to grow your business." },
    { title: "Digital Marketing", icon: <BarChart3 size={40} className="text-[var(--color-primary)]" />, desc: "Data-driven SEO, content marketing, and digital campaigns to drive traffic and conversions." },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-dark)] mb-6">Our Services</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We provide a full spectrum of IT services, combining deep technical expertise with industry best practices to deliver solutions that drive real business value.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {allServices.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[var(--color-primary)] transition-all duration-300 group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform origin-left">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-dark)] mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[var(--color-dark)] rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)] opacity-20 blur-[100px] rounded-full"></div>
          <h2 className="text-3xl font-bold text-white mb-6 relative z-10">Need a Custom Solution?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">
            If you don't see exactly what you're looking for, reach out. We specialize in building custom ERP, CRM, and bespoke software solutions.
          </p>
          <Link href="/contact" className="inline-block bg-[var(--color-secondary)] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors relative z-10">
            Discuss Your Project
          </Link>
        </div>

      </div>
    </div>
  );
}
