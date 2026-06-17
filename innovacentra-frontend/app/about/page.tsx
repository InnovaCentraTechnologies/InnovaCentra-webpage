import Image from "next/image";
import { CheckCircle2, Target, Eye, Users } from "lucide-react";

export const metadata = {
  title: "About Us | InnovaCentra Technologies",
  description: "Learn more about InnovaCentra Technologies, our mission, vision, and team.",
};

export default function AboutPage() {
  const values = [
    { title: "Quality Focus", desc: "We deliver robust, error-free, and scalable solutions.", icon: <CheckCircle2 className="text-[var(--color-primary)]" size={32} /> },
    { title: "Transparency", desc: "Clear communication at every stage of the process.", icon: <Eye className="text-[var(--color-primary)]" size={32} /> },
    { title: "Affordability", desc: "Enterprise-grade solutions accessible to startups.", icon: <Target className="text-[var(--color-primary)]" size={32} /> },
    { title: "Long-term Partnerships", desc: "We grow alongside your business.", icon: <Users className="text-[var(--color-primary)]" size={32} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-dark)] mb-6">About InnovaCentra Technologies</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Founded in 2026, InnovaCentra Technologies delivers innovative technology solutions tailored to business needs. Our team focuses on quality, transparency, affordability, and long-term partnerships.
          </p>
        </div>

        {/* Vision & Mission Image */}
        <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-24">
          <Image src="/image/about_innovation.png" alt="InnovaCentra Teamwork and Innovation" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/80 to-transparent flex items-end">
            <div className="p-8 md:p-12 text-white max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-slate-200">
                To be the global center of digital innovation, empowering businesses of all sizes to leverage the power of technology, AI, and scalable software architecture.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-[var(--color-dark)] mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:-translate-y-1 transition-transform">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-dark)] mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
