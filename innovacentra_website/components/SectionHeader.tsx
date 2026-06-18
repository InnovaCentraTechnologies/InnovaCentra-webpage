/**
 * SectionHeader — A premium, reusable section heading component.
 * Features decorative gradient lines, floating accent dots, and a consistent
 * pill + gradient-text heading style used across the entire InnovaCentra website.
 */

interface SectionHeaderProps {
  /** Small uppercase pill text (e.g. "Our Services") */
  badge: string;
  /** The main heading — plain text portion */
  titleStart: string;
  /** The gradient-highlighted portion of the heading */
  titleHighlight: string;
  /** Optional trailing plain text after the highlight */
  titleEnd?: string;
  /** Subtitle / description paragraph */
  subtitle?: string;
  /** Use h1 instead of h2 (for page-level headers) */
  isPageTitle?: boolean;
  /** Left-aligned variant (for side-by-side layouts) */
  align?: "center" | "left";
  /** Color theme for the badge pill */
  colorTheme?: "primary" | "secondary";
}

export default function SectionHeader({
  badge,
  titleStart,
  titleHighlight,
  titleEnd,
  subtitle,
  isPageTitle = false,
  align = "center",
  colorTheme = "primary",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const HeadingTag = isPageTitle ? "h1" : "h2";

  return (
    <div className={`relative ${isCenter ? "text-center" : "text-left"}`}>
      {/* ─── Decorative elements that fill the empty left/right space ─── */}
      {isCenter && (
        <>
          {/* Left decorative line + dot */}
          <div className="hidden lg:flex items-center absolute left-0 top-1/2 -translate-y-1/2 w-[calc(50%-280px)] gap-3">
            <div className="section-accent-dot w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] opacity-60 flex-shrink-0" />
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-primary)]/20 to-[var(--color-primary)]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/30 flex-shrink-0" />
          </div>

          {/* Right decorative line + dot */}
          <div className="hidden lg:flex items-center absolute right-0 top-1/2 -translate-y-1/2 w-[calc(50%-280px)] gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]/30 flex-shrink-0" />
            <div className="h-px w-full bg-gradient-to-l from-transparent via-[var(--color-secondary)]/20 to-[var(--color-secondary)]/40" />
            <div className="section-accent-dot w-2.5 h-2.5 rounded-full bg-gradient-to-l from-[var(--color-primary)] to-[var(--color-secondary)] opacity-60 flex-shrink-0" />
          </div>

          {/* Floating corner accents — top-left */}
          <div className="hidden lg:block absolute -top-4 left-8">
            <div className="w-8 h-8 border-l-2 border-t-2 border-[var(--color-primary)]/10 rounded-tl-lg" />
          </div>

          {/* Floating corner accents — top-right */}
          <div className="hidden lg:block absolute -top-4 right-8">
            <div className="w-8 h-8 border-r-2 border-t-2 border-[var(--color-secondary)]/10 rounded-tr-lg" />
          </div>

          {/* Floating corner accents — bottom-left */}
          <div className="hidden lg:block absolute -bottom-4 left-8">
            <div className="w-8 h-8 border-l-2 border-b-2 border-[var(--color-primary)]/10 rounded-bl-lg" />
          </div>

          {/* Floating corner accents — bottom-right */}
          <div className="hidden lg:block absolute -bottom-4 right-8">
            <div className="w-8 h-8 border-r-2 border-b-2 border-[var(--color-secondary)]/10 rounded-br-lg" />
          </div>
        </>
      )}

      {/* Left-aligned decorative line */}
      {!isCenter && (
        <div className="hidden lg:block absolute -left-6 top-4 bottom-4 w-1 rounded-full bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)] opacity-30" />
      )}

      {/* ─── Core heading content ─── */}
      <div className={`relative z-10 flex flex-col ${isCenter ? "items-center" : "items-start"}`}>
        {/* Badge pill */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-5 section-badge-glow ${colorTheme === 'primary' ? 'bg-blue-100/80 text-[var(--color-primary)]' : 'bg-orange-100/80 text-[var(--color-secondary)]'}`}>
          {badge}
        </div>

        {/* Heading */}
        <HeadingTag
          className={`font-extrabold text-[var(--color-dark)] leading-[1.1] tracking-tight mb-4 ${
            isPageTitle
              ? "text-4xl md:text-5xl lg:text-[52px]"
              : "text-3xl md:text-4xl lg:text-[44px]"
          }`}
        >
          {titleStart}
          {titleStart && " "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
            {titleHighlight}
          </span>
          {titleEnd && ` ${titleEnd}`}
        </HeadingTag>

        {/* Subtitle */}
        {subtitle && (
          <p className={`text-lg md:text-xl text-slate-600 leading-relaxed mt-4 ${isCenter ? "max-w-4xl mx-auto" : "max-w-3xl"}`}>
            {subtitle}
          </p>
        )}

        {/* Bottom accent bar */}
        <div className={`mt-6 flex items-center gap-1.5 ${isCenter ? "justify-center" : "justify-start"}`}>
          <span className="w-3 h-1 rounded-full bg-[var(--color-primary)]" />
          <span className="w-8 h-1 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]" />
          <span className="w-3 h-1 rounded-full bg-[var(--color-secondary)]" />
        </div>
      </div>
    </div>
  );
}
