import type { ReactNode } from 'react';

/** Small shared primitives so the nine sections stay visually consistent. */

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="block mb-3.5 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-brand-teal">
      {children}
    </span>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display font-medium tracking-tight leading-[1.12] text-[clamp(1.75rem,4.2vw,2.25rem)] text-brand-paper mb-5">
      {children}
    </h2>
  );
}

export function Lede({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-[60ch] mb-5 text-[clamp(1.125rem,2vw,1.3125rem)] leading-relaxed text-brand-paper/90">
      {children}
    </p>
  );
}

export function Body({ children }: { children: ReactNode }) {
  return <p className="max-w-[60ch] mb-5 leading-relaxed text-brand-paper/80">{children}</p>;
}

/** The italic display voice — used for the pull lines and the name-note. */
export function NameNote({ children }: { children: ReactNode }) {
  return (
    <p className="font-display italic text-[clamp(1.25rem,3vw,1.6875rem)] leading-snug text-brand-gold max-w-[34ch] mt-8">
      {children}
    </p>
  );
}

export function Pull({ children }: { children: ReactNode }) {
  return (
    <p className="font-display italic text-lg sm:text-xl leading-relaxed text-brand-gold max-w-[52ch] mb-5">
      {children}
    </p>
  );
}

export function Cta({
  href,
  children,
  ghost = false,
}: {
  href: string;
  children: ReactNode;
  ghost?: boolean;
}) {
  const base =
    'inline-block rounded-full px-6 py-3.5 font-sans text-[15px] font-semibold transition-all duration-200 hover:-translate-y-0.5';
  return (
    <a
      href={href}
      className={
        ghost
          ? `${base} border border-brand-gold/40 text-brand-paper hover:border-brand-gold/70`
          : `${base} bg-brand-teal text-[#0d1b1a] shadow-lg shadow-brand-teal/25 hover:shadow-brand-teal/35`
      }
    >
      {children}
    </a>
  );
}

/** A section shell: consistent rhythm, optional translucent tint. */
export function Section({
  id,
  tint = false,
  children,
}: {
  id?: string;
  tint?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${tint ? 'bg-white/[0.03]' : ''}`}>
      <div className="max-w-5xl mx-auto px-6 sm:px-8">{children}</div>
    </section>
  );
}

/**
 * Two-column text/photo row. Photos sit right by default; `flip` puts them left.
 * Collapses to a single column below the md breakpoint, text first.
 */
export function PhotoRow({
  src,
  alt,
  square = false,
  flip = false,
  children,
}: {
  src: string;
  alt: string;
  square?: boolean;
  flip?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="grid md:grid-cols-[1fr_minmax(0,320px)] gap-10 lg:gap-14 items-center">
      <div className={flip ? 'md:order-2' : ''}>{children}</div>
      <div className={flip ? 'md:order-1' : ''}>
        <div
          className={`relative w-full max-w-[320px] mx-auto md:mx-0 overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40 ${
            square ? 'aspect-square' : 'aspect-[4/5]'
          }`}
        >
          <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
