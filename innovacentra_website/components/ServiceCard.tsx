"use client";

import { useEffect, useRef, useState } from "react";

/**
 * ServiceCard v2 — Three distinct animation personalities per card.
 * Animation types:
 *   "float"  — card gently levitates with a glow halo (cards 0,3,6...)
 *   "pulse"  — card border breathes in and out (cards 1,4,7...)
 *   "slide"  — card content slides up internally (cards 2,5,8...)
 *
 * All animations run continuously without hover.
 * Logo-brand colors: blue (#007BFF) and orange (#FF7F50).
 */

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index?: number;
  variant?: "compact" | "full";
  accent?: "blue" | "orange";
}

const accentMap = {
  blue: {
    bg:       "bg-blue-50",
    iconText: "text-[#007BFF]",
    borderRgb:"0,123,255",
    glowColor:"rgba(0,123,255,0.18)",
    tagBg:    "bg-blue-100",
    tagText:  "text-blue-700",
    barColor: "#007BFF",
  },
  orange: {
    bg:       "bg-orange-50",
    iconText: "text-[#FF7F50]",
    borderRgb:"255,127,80",
    glowColor:"rgba(255,127,80,0.18)",
    tagBg:    "bg-orange-100",
    tagText:  "text-orange-700",
    barColor: "#FF7F50",
  },
};

type AnimationType = "float" | "pulse" | "slide";

export default function ServiceCard({
  title,
  description,
  icon,
  index = 0,
  variant = "compact",
  accent = "blue",
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const colors = accentMap[accent];
  const isFull = variant === "full";

  // Cycle through 3 distinct animation personalities
  const animType: AnimationType = (["float", "pulse", "slide"] as AnimationType[])[index % 3];

  // Staggered entrance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  // ─── Animation class map ───
  const cardAnimClass =
    animType === "float" ? "sc-anim-float" :
    animType === "pulse" ? "sc-anim-pulse" :
                           "sc-anim-slide";

  return (
    <div
      ref={cardRef}
      className={`sc-card group relative rounded-2xl bg-white overflow-hidden transition-all duration-700 ${cardAnimClass} ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* ─── Animated glow halo (float cards only) ─── */}
      {animType === "float" && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none sc-halo"
          style={{ boxShadow: `0 0 0 0 ${colors.glowColor}` }}
        />
      )}

      {/* ─── Breathing border (pulse cards only) ─── */}
      {animType === "pulse" && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none sc-border-pulse"
          style={{
            border: `2px solid rgba(${colors.borderRgb},0.25)`,
          }}
        />
      )}

      {/* ─── Accent bar — always left-side vertical stripe ─── */}
      <div
        className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full sc-bar"
        style={{ backgroundColor: colors.barColor }}
      />

      {/* ─── Sliding content wrapper (slide cards only) ─── */}
      <div
        className={`relative h-full flex flex-col ${isFull ? "p-8 md:p-10" : "p-7"} ${
          animType === "slide" ? "sc-content-slide" : ""
        }`}
      >
        {/* ─── Top area: icon + number badge ─── */}
        <div className="flex items-start justify-between mb-5">
          {/* Icon box */}
          <div
            className={`${colors.bg} ${isFull ? "w-16 h-16" : "w-13 h-13"} rounded-xl flex items-center justify-center relative overflow-hidden sc-icon-box group-hover:scale-105 transition-transform duration-300`}
          >
            {/* shimmer sweep on icon bg */}
            <div className="absolute inset-0 sc-icon-shimmer" />
            <div className={`relative z-10 ${colors.iconText}`}>{icon}</div>
          </div>

          {/* Card index badge */}
          <span
            className={`text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${colors.tagBg} ${colors.tagText}`}
          >
            0{index + 1}
          </span>
        </div>

        {/* ─── Title ─── */}
        <h3 className={`font-bold text-[#0f172a] mb-3 leading-snug ${isFull ? "text-[1.35rem]" : "text-[1.15rem]"}`}>
          {title}
        </h3>

        {/* ─── Description ─── */}
        <p className={`text-slate-500 leading-relaxed flex-grow ${isFull ? "text-[0.97rem]" : "text-[0.88rem]"}`}>
          {description}
        </p>


      </div>
    </div>
  );
}
