"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function TechBadge({ index, isHovered, accent }: { index: number, isHovered: boolean, accent: string }) {
  const [displayNum, setDisplayNum] = useState(`0${index + 1}`);
  
  useEffect(() => {
    if (isHovered) {
      setDisplayNum("00");
      const timeout = setTimeout(() => {
        setDisplayNum(`0${index + 1}`);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      setDisplayNum(`0${index + 1}`);
    }
  }, [isHovered, index]);

  const isBlue = accent === "blue";
  const tagBg = isBlue ? "bg-blue-100" : "bg-orange-100";
  const tagText = isBlue ? "text-blue-700" : "text-orange-700";

  return (
    <div className={`relative flex items-center gap-1.5 px-2.5 py-1 rounded-full ${isHovered ? "bg-slate-800 text-white" : `${tagBg} ${tagText}`} transition-colors duration-300`}>
      {isHovered && (
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_5px_rgba(52,211,153,0.8)]" />
      )}
      <span className="text-xs font-bold tracking-widest uppercase font-mono w-[18px] text-center">
        {displayNum}
      </span>
    </div>
  );
}

export function TechCard({
  category,
  icon,
  items,
  index,
  accent,
}: {
  category: string;
  icon: React.ReactNode;
  items: string[];
  index: number;
  accent: "blue" | "orange";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const [windowWidth, setWindowWidth] = useState(1200);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const rotations = [-12, 8, -6, 10, -8, 6];

  const getCardVariants = () => {
    return {
      hidden: (i: number) => {
        let xOffset = 0;
        let yOffset = 0;
        
        if (isMobile) {
          xOffset = 400;
          yOffset = (2.5 - i) * 250;
        } else if (isTablet) {
          const col = i % 2;
          const row = Math.floor(i / 2);
          xOffset = (1 - col) * 350 + 400;
          yOffset = (1 - row) * 300;
        } else {
          const col = i % 3;
          const row = Math.floor(i / 3);
          xOffset = (2 - col) * 380 + 400;
          yOffset = (0.5 - row) * 280;
        }

        return {
          opacity: 0,
          scale: 0.8,
          y: yOffset,
          x: xOffset,
          rotate: rotations[i % 6],
          filter: "blur(8px)",
        };
      },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        x: 0,
        rotate: 0,
        filter: "blur(0px)",
        scale: [0.8, 1, 0.96, 1.02, 1],
        transition: {
          delay: i * 0.3, // Slower stagger
          duration: 1.0,  // Slower movement
          ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
          scale: {
            delay: i * 0.3,
            duration: 1.5, // 1s movement + 0.5s bounce
            times: [0, 0.66, 0.77, 0.88, 1],
            ease: [
              [0.25, 0.1, 0.25, 1] as [number, number, number, number],
              "easeOut",
              "easeInOut",
              "easeOut"
            ]
          }
        }
      })
    };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const isBlue = accent === "blue";
  const primary = isBlue ? "#007BFF" : "#FF7F50";
  const bgLight = isBlue ? "bg-blue-50/50" : "bg-orange-50/50";
  const textAccent = isBlue ? "text-[#007BFF]" : "text-[#FF7F50]";
  const dotColor = isBlue ? "bg-[#007BFF]" : "bg-[#FF7F50]";

  // Icon animation class mapping
  let iconAnimClass = "";
  if (category.includes("Frontend")) iconAnimClass = "tech-icon-frontend";
  else if (category.includes("Backend")) iconAnimClass = "tech-icon-backend";
  else if (category.includes("Database")) iconAnimClass = "tech-icon-database";
  else if (category.includes("Cloud")) iconAnimClass = "tech-icon-cloud";
  else if (category.includes("DevOps")) iconAnimClass = "tech-icon-devops";
  else iconAnimClass = "tech-icon-generic";

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={getCardVariants()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove as any}
      className="group relative bg-white rounded-2xl overflow-hidden"
    >
      {/* ── Energy Circuit Border ── */}
      <div className="absolute inset-0 rounded-2xl p-[1px] tech-border-circuit overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-white rounded-2xl" />
      </div>

      {/* ── Background Connection Lines ── */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-[1]">
        <svg className="w-full h-full text-slate-300/40" preserveAspectRatio="none">
           <pattern id={`grid-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
          <path className="tech-conn-line" d="M10,10 Q50,40 90,10 T170,10" fill="none" stroke="currentColor" strokeWidth="1" />
          <path className="tech-conn-line-alt" d="M10,80 Q50,50 90,80 T170,80" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* ── Mouse Spotlight ── */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[2]"
        style={{
          background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(15,23,42,0.03), transparent 40%)`
        }}
      />

      {/* ── Technology Scanner Line ── */}
      <div className="tech-scanner hidden group-hover:block" />

      {/* ── Content ── */}
      <div className="relative p-7 md:p-8 h-full flex flex-col bg-white/95 backdrop-blur-sm z-10 m-[1px] rounded-2xl">
        {/* Header row */}
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center gap-4">
            {/* Icon */}
            <div className={`${bgLight} w-14 h-14 rounded-xl flex items-center justify-center relative overflow-hidden group-hover:bg-slate-900 transition-colors duration-500`}>
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 ${iconAnimClass}`} />
              <div className={`relative z-10 transition-colors duration-500 ${isHovered ? "text-white" : textAccent}`}>
                {icon}
              </div>
            </div>

            {/* Category name */}
            <h3 className="text-[1.15rem] font-bold text-slate-900 leading-tight">
              {category}
            </h3>
          </div>

          {/* Badge */}
          <TechBadge index={index} isHovered={isHovered} accent={accent} />
        </div>

        {/* Tech item list */}
        <ul className="flex-grow space-y-2.5 relative z-10">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-slate-600 font-medium text-sm tech-item-reveal group-hover:text-slate-800"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span
                className={`w-2 h-2 rounded-full flex-shrink-0 ${dotColor} opacity-70 tech-item-dot`}
                style={{ animationDelay: `${i * 100}ms` }}
              />
              <span className="relative">
                {item}
                <span className="absolute inset-0 bg-white/50 blur-sm opacity-0 tech-item-glow" style={{ animationDelay: `${i * 100}ms` }} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
