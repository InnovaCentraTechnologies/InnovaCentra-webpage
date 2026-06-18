import { Code2, Smartphone, Monitor, Cpu, Cloud, Settings, Share2, BarChart3 } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";

export const metadata = {
  title: "Services | InnovaCentra Technologies",
  description: "Explore our comprehensive IT solutions including Web Development, AI, Cloud, SaaS, and more.",
};

export default function ServicesPage() {
  const allServices = [
    { title: "Web Development", icon: <Code2 size={32} />, desc: "Custom websites, enterprise portals, and scalable e-commerce platforms built using modern frameworks like React and Next.js.", accent: "blue" as const },
    { title: "Mobile Applications", icon: <Smartphone size={32} />, desc: "High-performance cross-platform applications for iOS and Android using Flutter and React Native.", accent: "orange" as const },
    { title: "Desktop Applications", icon: <Monitor size={32} />, desc: "Robust and secure desktop applications tailored for Windows, macOS, and Linux environments.", accent: "blue" as const },
    { title: "Custom Software Development", icon: <Settings size={32} />, desc: "Bespoke software solutions designed specifically to address your unique business challenges and workflows.", accent: "orange" as const },
    { title: "SaaS Applications", icon: <Cloud size={32} />, desc: "End-to-end Software as a Service product development, from architecture design to deployment.", accent: "blue" as const },
    { title: "AI Solutions", icon: <Cpu size={32} />, desc: "Intelligent automations, machine learning models, and AI integrations to give your business a competitive edge.", accent: "orange" as const },
    { title: "Social Media Marketing", icon: <Share2 size={32} />, desc: "Social media marketing services including WhatsApp, Facebook, Instagram, and other digital channels to grow your business.", accent: "blue" as const },
    { title: "Digital Marketing", icon: <BarChart3 size={32} />, desc: "Data-driven SEO, content marketing, and digital campaigns to drive traffic and conversions.", accent: "orange" as const },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-blue-50 rounded-full blur-[100px] opacity-50"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-orange-50 rounded-full blur-[100px] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-20">
          <SectionHeader
            badge="Services"
            titleStart="Our"
            titleHighlight="Services"
            subtitle="We provide a full spectrum of IT services, combining deep technical expertise with industry best practices to deliver solutions that drive real business value."
            isPageTitle
            colorTheme="secondary"
          />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {allServices.map((service, idx) => (
            <ServiceCard
              key={idx}
              title={service.title}
              description={service.desc}
              icon={service.icon}
              index={idx}
              variant="full"
              accent={service.accent}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[var(--color-dark)] rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)] opacity-20 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-secondary)] opacity-15 blur-[100px] rounded-full"></div>
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
