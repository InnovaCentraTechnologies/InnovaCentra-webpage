import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { ArrowRight, CheckCircle2, Code2, Smartphone, Cpu, Cloud, Settings, Share2, ChevronRight, Mail, Phone, MapPin, Send, Target, Eye, Tag, Handshake } from "lucide-react";

export default function Home() {
  const services = [
    { title: "Web Development", icon: <Code2 size={28} />, desc: "Scalable and responsive websites built with modern frameworks.", accent: "blue" as const },
    { title: "Mobile Application", icon: <Smartphone size={28} />, desc: "Cross-platform mobile applications for iOS and Android.", accent: "orange" as const },
    { title: "Custom Software", icon: <Settings size={28} />, desc: "Bespoke software solutions tailored to address your business challenges.", accent: "blue" as const },
    { title: "SaaS Applications", icon: <Cloud size={28} />, desc: "End-to-end Software as a Service product design and development.", accent: "orange" as const },
    { title: "AI Solutions", icon: <Cpu size={28} />, desc: "Intelligent AI-powered tools and automations to scale your business.", accent: "blue" as const },
    { title: "Social Media Marketing", icon: <Share2 size={28} />, desc: "Social media marketing services including WhatsApp, Facebook, Instagram, and more.", accent: "orange" as const },
  ];

  const processSteps = [
    { title: "Discovery", desc: "Understanding your needs and goals." },
    { title: "Planning", desc: "Creating a roadmap and architecture." },
    { title: "Design", desc: "Crafting intuitive and beautiful UI." },
    { title: "Development", desc: "Writing clean, scalable code." },
    { title: "Deployment", desc: "Launching your product to the world." },
    { title: "Service and maintenance", desc: "Providing ongoing support and updates." },
  ];

  const reasons = [
    "Affordable Pricing", "Fast Delivery", "Dedicated Project Management", 
    "Agile Development", "AI Expertise", "24/7 Support", "Enterprise-Grade Security"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-50 overflow-hidden pt-32 pb-20 lg:pt-36 lg:pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-orange-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-[var(--color-dark)] leading-tight tracking-tight">
                Innovative IT Solutions for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">Digital Future</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Transform your ideas into scalable websites, mobile applications, custom software, SaaS platforms, and AI-powered solutions.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/contact" className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 transition-all flex items-center gap-2">
                  Start Your Project <ArrowRight size={20} />
                </Link>
                <Link href="/services" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-medium hover:bg-slate-50 transition-all">
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/image/hero_illustration.png" alt="Technology Innovation" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute -left-40 top-20 w-96 h-96 bg-blue-50 rounded-full blur-[80px] opacity-70"></div>
        <div className="absolute -right-40 bottom-20 w-96 h-96 bg-orange-50 rounded-full blur-[80px] opacity-70"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 lg:pr-8">
              <SectionHeader
                badge="Who We Are"
                titleStart="Empowering businesses with"
                titleHighlight="digital excellence."
                subtitle="InnovaCentra Technologies is a modern IT solutions company helping startups, businesses, and enterprises transform ideas into powerful digital products. We don't just build software; we build solutions that drive growth."
                align="left"
              />
            </div>

            {/* Right Content - Core Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group animate-float" style={{ animationDelay: '0s' }}>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-dark)] mb-2">Unmatched Quality</h3>
                <p className="text-slate-600 text-sm">We deliver robust, scalable, and bug-free solutions adhering to the highest standards.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Eye size={24} />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-dark)] mb-2">Total Transparency</h3>
                <p className="text-slate-600 text-sm">Clear communication and regular updates so you always know your project's status.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Tag size={24} />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-dark)] mb-2">Affordability</h3>
                <p className="text-slate-600 text-sm">Premium software development at highly competitive and predictable pricing.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Handshake size={24} />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-dark)] mb-2">Long-term Partners</h3>
                <p className="text-slate-600 text-sm">We provide ongoing support and maintenance to ensure your continued success.</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-50 rounded-full blur-[100px] opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-orange-50 rounded-full blur-[100px] opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <SectionHeader
              badge="Our Services"
              titleStart="Comprehensive"
              titleHighlight="Technology Solutions"
              subtitle="Tailored to your business needs."
              colorTheme="secondary"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard
                key={idx}
                title={service.title}
                description={service.desc}
                icon={service.icon}
                index={idx}
                variant="compact"
                accent={service.accent}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:text-[var(--color-secondary)] transition-colors">
              View all services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Process */}
      <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
        <div className="absolute -left-20 top-1/3 w-64 h-64 bg-blue-50 rounded-full blur-[80px] opacity-60"></div>
        <div className="absolute -right-20 bottom-1/3 w-64 h-64 bg-orange-50 rounded-full blur-[80px] opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Why Choose Us */}
            <div>
              <div className="mb-8">
                <SectionHeader
                  badge="Why Choose Us?"
                  titleStart="Your"
                  titleHighlight="Trusted"
                  titleEnd="Partner"
                  align="left"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                {reasons.map((reason, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[var(--color-secondary)] flex-shrink-0" size={24} />
                    <span className="text-slate-700 font-medium">{reason}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image src="/image/about_innovation.png" alt="Innovation and Teamwork" fill className="object-cover" />
              </div>
            </div>

            {/* Process */}
            <div>
              <div className="mb-8">
                <SectionHeader
                  badge="Our Process"
                  titleStart="How We"
                  titleHighlight="Deliver"
                  align="left"
                  colorTheme="secondary"
                />
              </div>
              <div className="space-y-8 mt-10">
                {processSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-6 relative">
                    {idx !== processSteps.length - 1 && (
                      <div className="absolute left-6 top-14 bottom-[-2rem] w-px bg-slate-200"></div>
                    )}
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-[var(--color-primary)] flex items-center justify-center flex-shrink-0 font-bold border-2 border-white shadow-sm z-10">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--color-dark)] mb-2">{step.title}</h3>
                      <p className="text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-blue-50 rounded-full blur-[100px] opacity-40"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-orange-50 rounded-full blur-[100px] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto mb-16">
            <SectionHeader
              badge="Contact Us"
              titleStart="Let's Build"
              titleHighlight="Together"
              subtitle="Ready to build your next digital product? Get in touch with us today."
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
      </section>
    </div>
  );
}
