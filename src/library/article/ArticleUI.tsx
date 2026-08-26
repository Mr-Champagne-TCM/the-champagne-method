import { useState, useEffect, type ReactNode } from 'react';
import Background from '../../components/Background';
import { SITE_VERSION } from '../../site/version';
import { useHashScroll } from '../../site/useHashScroll';

/** Shared chrome and primitives for the long-form library articles.
 *
 *  Every style here is a utility on the element that needs it. Nothing styles
 *  its descendants — the static mock had a `.cta a { …gold pill… }` rule that
 *  caught the quiet text link as well as the button and rendered two
 *  overlapping pills. Scoping by structure rather than by descent means that
 *  fault cannot come back. */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ground-top/90 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div
        className={`max-w-5xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-4 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        {/* The brand starts smaller than on the wider pages: at 390px a 26px brand
            plus the right-hand link overruns the bar and the two collide. */}
        <a
          href="/"
          className={`font-display font-medium tracking-tight whitespace-nowrap text-brand-paper transition-all duration-300 ${
            scrolled ? 'text-[18px] sm:text-[19px]' : 'text-[20px] sm:text-[26px] md:text-[30px]'
          }`}
        >
          The <span className="text-brand-gold">Champagne</span> Method
        </a>
        <a
          href="/#connect"
          className="font-sans text-[14px] sm:text-[15px] whitespace-nowrap shrink-0 text-brand-muted hover:text-brand-teal transition-colors"
        >
          Start a conversation
        </a>
      </div>
    </nav>
  );
}

function Footer({ note }: { note?: ReactNode }) {
  return (
    <footer className="border-t border-brand-gold/15 pt-12 pb-11 mt-8">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {note && <p className="max-w-[62ch] text-[15px] text-brand-muted mb-8">{note}</p>}
        <div className="flex flex-wrap gap-4 mb-8">
          <a
            href="/library/"
            className="text-[15px] text-brand-muted hover:text-brand-teal transition-colors"
          >
            The Library
          </a>
          <a
            href="/#connect"
            className="text-[15px] text-brand-muted hover:text-brand-teal transition-colors"
          >
            Start a conversation
          </a>
          <a
            href="https://thechampagnemethod.co"
            className="text-[15px] text-brand-muted hover:text-brand-teal transition-colors"
          >
            thechampagnemethod.co
          </a>
        </div>
        <div className="flex flex-wrap gap-2 justify-between items-center pt-6 border-t border-brand-gold/10">
          <span className="text-[15px] text-brand-muted/70">
            &copy; 2026 The Champagne Method. All rights reserved.
          </span>
          <span className="text-xs text-brand-muted/40">{SITE_VERSION}</span>
        </div>
      </div>
    </footer>
  );
}

/** Page shell: the site background, nav, a reading-width column, and the footer. */
export function ArticlePage({
  crumb,
  footerNote,
  children,
}: {
  crumb: string;
  footerNote?: ReactNode;
  children: ReactNode;
}) {
  useHashScroll();
  return (
    <div className="font-sans text-brand-paper">
      <Background />
      <div className="relative z-10">
        <Nav />
        <main className="pt-28 sm:pt-32 pb-4">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <p className="mb-6 font-sans text-[13px] uppercase tracking-[0.16em] text-brand-muted/70">
              <a href="/library/" className="hover:text-brand-teal transition-colors">
                Library
              </a>
              <span className="mx-2">/</span>
              {crumb}
            </p>
            <article className="max-w-[64ch]">{children}</article>
          </div>
        </main>
        <Footer note={footerNote} />
      </div>
    </div>
  );
}

export function ArticleHeader({
  title,
  standfirst,
  readTime,
}: {
  title: ReactNode;
  standfirst: ReactNode;
  readTime?: string;
}) {
  return (
    <header className="border-b border-brand-gold/15 pb-9 mb-10">
      <span className="block mb-4 font-sans text-[14px] font-semibold uppercase tracking-[0.22em] text-brand-teal">
        The Champagne Method &middot; Library
      </span>
      <h1 className="font-display font-medium tracking-tight leading-[1.08] text-[clamp(2.25rem,6vw,3.4rem)]">
        {title}
      </h1>
      <p className="mt-5 text-[clamp(1.125rem,2vw,1.3125rem)] leading-relaxed text-brand-paper/90">
        {standfirst}
      </p>
      {readTime && <p className="mt-4 text-[15px] text-brand-muted/80">{readTime}</p>}
    </header>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display font-medium tracking-tight leading-[1.18] text-[clamp(1.6rem,3.6vw,2rem)] text-brand-gold mt-14 mb-4">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-sans text-[17px] font-semibold text-brand-paper mt-8 mb-1.5">{children}</h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mb-5 text-[18px] leading-relaxed text-brand-paper/80">{children}</p>;
}

/** The gold-ruled callout — the mock's `.lead` and `.aside`, which were the same thing. */
export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-2 border-brand-gold pl-5 my-8">
      <p className="text-[19px] leading-relaxed text-brand-paper">{children}</p>
    </div>
  );
}

export function Cards({ children }: { children: ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2 mt-6 mb-2">{children}</div>;
}

/** One raised card. `gold` titles the type cards; the plain form is the split cells. */
export function Card({
  title,
  meta,
  gold = false,
  children,
}: {
  title: string;
  meta?: string;
  gold?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-brand-gold/20 bg-white/[0.04] p-5">
      <h3
        className={`font-sans text-[16px] font-semibold mb-1.5 ${
          gold ? 'text-brand-gold' : 'text-brand-paper'
        }`}
      >
        {title}
        {meta && (
          <span className="ml-2 font-normal text-[13px] tracking-wide text-brand-muted/80">
            {meta}
          </span>
        )}
      </h3>
      <p className="text-[16px] leading-relaxed text-brand-paper/80">{children}</p>
    </div>
  );
}

/** A single stacked column of cards — used for the five types. */
export function CardStack({ children }: { children: ReactNode }) {
  return <div className="grid gap-4 mt-6 mb-2">{children}</div>;
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc pl-6 mb-5 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="text-[18px] leading-relaxed text-brand-paper/80">
          {item}
        </li>
      ))}
    </ul>
  );
}

/**
 * The closing box: one solid button, and — separately — a quiet text link.
 * They are different elements with different classes on purpose. Never style
 * these by descent from the wrapper.
 */
export function ClosingBox({
  title,
  children,
  buttonHref,
  buttonLabel,
  event,
  aside,
}: {
  title: string;
  children: ReactNode;
  buttonHref: string;
  buttonLabel: string;
  /** Conversion name, if this button is worth counting. */
  event?: string;
  aside?: ReactNode;
}) {
  return (
    <div className="mt-14 rounded-2xl border border-brand-gold/45 bg-white/[0.05] p-6 sm:p-7">
      <h2 className="font-display font-medium text-[clamp(1.375rem,3vw,1.6rem)] text-brand-gold mb-3">
        {title}
      </h2>
      <p className="mb-6 text-[18px] leading-relaxed text-brand-paper/85">{children}</p>
      <a
        href={buttonHref}
        data-umami-event={event}
        className="inline-block rounded-full px-6 py-3.5 font-sans text-[16px] font-semibold bg-brand-gold text-[#1a1040] shadow-lg shadow-brand-gold/20 transition-all duration-200 hover:-translate-y-0.5"
      >
        {buttonLabel}
      </a>
      {aside && <p className="mt-5 text-[16px] leading-relaxed text-brand-muted">{aside}</p>}
    </div>
  );
}

/** A quiet inline link — the text link inside the closing box uses this. */
export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="text-brand-teal underline underline-offset-4 decoration-brand-teal/40 hover:decoration-brand-teal transition-colors"
    >
      {children}
    </a>
  );
}
