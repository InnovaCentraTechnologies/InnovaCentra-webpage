"use client";

import { Layers, Database, Smartphone, Cloud, Code, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { TechCard } from "./TechCard";

export default function TechnologiesPage() {
  const techCategories = [
    {
      category: "Frontend Development",
      icon: <Layers size={28} />,
      items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5/CSS3"],
      accent: "blue" as const,
    },
    {
      category: "Backend Development",
      icon: <Code size={28} />,
      items: ["Node.js", "Python", "Django", "Laravel", "Express", "RESTful APIs"],
      accent: "orange" as const,
    },
    {
      category: "Mobile App Development",
      icon: <Smartphone size={28} />,
      items: ["Flutter", "React Native", "iOS", "Android"],
      accent: "blue" as const,
    },
    {
      category: "Cloud Infrastructure",
      icon: <Cloud size={28} />,
      items: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform", "Vercel"],
      accent: "orange" as const,
    },
    {
      category: "Databases",
      icon: <Database size={28} />,
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase"],
      accent: "blue" as const,
    },
    {
      category: "DevOps & Tools",
      icon: <Terminal size={28} />,
      items: ["Docker", "Kubernetes", "GitHub Actions", "Git", "Jest", "Linux"],
      accent: "orange" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] opacity-50"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-orange-50 rounded-full blur-[100px] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-20">
          <SectionHeader
            badge="Tech Stack"
            titleStart="Our"
            titleHighlight="Technologies"
            subtitle="We leverage cutting-edge technologies and robust frameworks to build secure, scalable, and high-performance digital products for our clients."
            isPageTitle
          />
        </div>

        {/* Tech Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {techCategories.map((tech, idx) => (
            <TechCard
              key={idx}
              category={tech.category}
              icon={tech.icon}
              items={tech.items}
              index={idx}
              accent={tech.accent}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
