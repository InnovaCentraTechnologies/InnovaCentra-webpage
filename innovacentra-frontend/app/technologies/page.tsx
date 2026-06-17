import { Layers, Database, Smartphone, Cloud, Code, Terminal } from "lucide-react";

export const metadata = {
  title: "Technologies | InnovaCentra Technologies",
  description: "The modern tech stack we use to build scalable digital products.",
};

export default function TechnologiesPage() {
  const techCategories = [
    {
      category: "Frontend Development",
      icon: <Layers className="text-[var(--color-primary)] mb-4" size={32} />,
      items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5/CSS3"]
    },
    {
      category: "Backend Development",
      icon: <Code className="text-[var(--color-primary)] mb-4" size={32} />,
      items: ["Node.js", "Python", "Django", "Laravel", "Express", "RESTful APIs"]
    },
    {
      category: "Mobile App Development",
      icon: <Smartphone className="text-[var(--color-primary)] mb-4" size={32} />,
      items: ["Flutter", "React Native", "iOS", "Android"]
    },
    {
      category: "Cloud Infrastructure",
      icon: <Cloud className="text-[var(--color-primary)] mb-4" size={32} />,
      items: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform", "Vercel"]
    },
    {
      category: "Databases",
      icon: <Database className="text-[var(--color-primary)] mb-4" size={32} />,
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase"]
    },
    {
      category: "DevOps & Tools",
      icon: <Terminal className="text-[var(--color-primary)] mb-4" size={32} />,
      items: ["Docker", "Kubernetes", "GitHub Actions", "Git", "Jest", "Linux"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-dark)] mb-6">Our Technologies</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We leverage cutting-edge technologies and robust frameworks to build secure, scalable, and high-performance digital products for our clients.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((tech, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-50 p-3 rounded-lg">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-dark)]">{tech.category}</h3>
              </div>
              <ul className="space-y-3">
                {tech.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-3 text-slate-600 font-medium">
                    <span className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
