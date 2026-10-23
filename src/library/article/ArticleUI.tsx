import { useState, useEffect, type ReactNode } from 'react';
import Background from '../../components/Background';
import { SITE_VERSION } from '../../site/version';
import { useHashScroll } from '../../site/useHashScroll';
import { HINT, hint } from '../../site/linkHints';

/** Shared chrome and primitives for the long-form library articles.
 *
 *  Every style here is a utility on the element that needs it. Nothing styles
 *  its descendants — the static mock had a `.cta a { …gold pill… }` rule that
 *  caught the quiet text link as well as the button and rendered two
 *  overlapping pills. Scoping by structure rather than by descent means that
 *  fault cannot come back. */

/** The small lines above and below the name in the top bar (mock: Outfit 12px, 500, 0.2em, uppercase, muted). */
const BRAND_SMALL =
  'block font-sans font-medium leading-[1.5] uppercase text-brand-muted transition-all duration-300';
const BRAND_SMALL_TOP = 'text-[9px] tracking-[0.16em] sm:text-[12px] sm:tracking-[0.2em]';
const BRAND_SMALL_SCROLLED = 'text-[8px] tracking-[0.16em] sm:text-[9px] sm:tracking-[0.18em]';

/**
 * The Human Design line above a title: "<lead> by The Champagne Method Coaching
 * and Consulting" (Jeremy 10/16, mock changes 2 and 3, option A). It breaks only
 * between whole phrases, so a wrapped line never splits "Coaching and / Consulting";
 * "by" stays lowercase inside the capitalized line.
 */
export function BrandEyebrow({ lead }: { lead: string }) {
  return (
    <>
      <span className="whitespace-nowrap">
        {lead} <span className="normal-case">by</span>
      </span>{' '}
      <span className="whitespace-nowrap">The Champagne Method</span>{' '}
      <span className="whitespace-nowrap">Coaching and Consulting</span>
    </>
  );
}

export function Nav() {
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
        className={`max-w-5xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-2 sm:gap-4 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        {/* PHONE FIT (10/23 2x renders): at the top of the page the 20px brand is 222px wide, so a
            one-line "Start a conversation" (125px) ran past the 24px margin at 390 (3px from the
            edge) and off the screen at 375 and 360. On a phone the link now goes onto two lines,
            right-aligned ("Start a / conversation", 80px), with an 8px gap: it fits down to 360. */}
        {/* The brand starts smaller than on the wider pages: at 390px a 26px brand
            plus the right-hand link overruns the bar and the two collide.
            The Human Design brand (Jeremy 10/16, mock change 1, option B): "Human
            Design by" above the name, "Coaching and Consulting" under it; "by"
            always lowercase. The two small lines shrink on a phone so they never
            run wider than the name, and follow it down when the bar compacts. */}
        {/* Link labels (Jeremy 10/23): the brand says "Human Design by", and opens the coaching home page. */}
        <a
          href="/"
          {...hint('Human Design by The Champagne Method Coaching and Consulting', HINT.home)}
          className={`font-display font-medium tracking-tight whitespace-nowrap text-brand-paper transition-all duration-300 ${
            scrolled ? 'text-[18px] sm:text-[19px]' : 'text-[20px] sm:text-[26px] md:text-[30px]'
          }`}
        >
          <span className={`${BRAND_SMALL} ${scrolled ? BRAND_SMALL_SCROLLED : BRAND_SMALL_TOP}`}>
            Human Design <span className="normal-case">by</span>
          </span>
          <span className="block">
            The <span className="text-brand-gold">Champagne</span> Method
          </span>
          <span className={`${BRAND_SMALL} ${scrolled ? BRAND_SMALL_SCROLLED : BRAND_SMALL_TOP}`}>
            Coaching and Consulting
          </span>
        </a>
        <a
          href="/#connect"
          {...hint('Start a conversation', HINT.connect)}
          className="font-sans text-[14px] sm:text-[15px] leading-snug text-right sm:whitespace-nowrap sm:shrink-0 text-brand-muted hover:text-brand-teal transition-colors"
        >
          Start a conversation
        </a>
      </div>
    </nav>
  );
}

/**
 * THE FOOTER THEME, on the Human Design pages only (Jeremy 10/17, footer-
 * everywhere mock): the same two names the readings' emails, shop and readings
 * site end with, side by side, stacked on a phone. Words as in hd-site
 * shared/footerTheme.mjs (test/footer-theme.test.mjs holds them).
 *
 * ONLY WHERE HUMAN DESIGN ALREADY LIVES. The coaching pages stay clean of HD
 * (Jeremy 10/16: "keep clean of HD stuff on coaching site, except if there is
 * already a link to my HD stuff"), so this is opt-in: `hd` on the footer.
 *
 * The HD name is this site's gold (brand-gold); the business name the
 * lavender the emails use (#a78bfa, the site's own lavender-400).
 */
export const FOOTER_THEME = [
  {
    href: 'https://humandesign.thechampagnemethod.co/',
    name: 'Human Design by The Champagne Method',
    line: 'Charts and readings, for you or someone close to you.',
    color: '#E8CBA0',
    bar: 'rgba(232,203,160,0.55)',
  },
  {
    href: 'https://thechampagnemethod.co',
    name: 'The Champagne Method Coaching and Consulting',
    line: 'Coaching, if you’d like to go further.',
    color: '#a78bfa',
    bar: 'rgba(167,139,250,0.55)',
  },
];

function FooterTheme() {
  return (
    <div data-footer-theme="" className="grid gap-x-8 gap-y-5 sm:grid-cols-2 max-w-3xl mb-8">
      {FOOTER_THEME.map((c) => (
        <div key={c.href} className="pl-3" style={{ borderLeft: `2px solid ${c.bar}` }}>
          <a
            href={c.href}
            className="font-sans text-[16px] font-semibold leading-snug hover:underline"
            style={{ color: c.color }}
          >
            {c.name}
          </a>
          <p className="mt-1 text-[15px] leading-relaxed text-brand-muted">{c.line}</p>
        </div>
      ))}
    </div>
  );
}

export function Footer({ note, hd = false }: { note?: ReactNode; hd?: boolean }) {
  return (
    <footer className="border-t border-brand-gold/15 pt-12 pb-11 mt-8">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {note && <p className="max-w-[62ch] text-[15px] text-brand-muted mb-8">{note}</p>}
        {hd && <FooterTheme />}
        <div className="flex flex-wrap gap-4 mb-8">
          {/*
            THE WIDER LIBRARY, NAMED (Jeremy 10/20): on a Human Design page a
            link to the whole /library/ says "Open the full Coaching Library";
            on the coaching site it stays "The Library".
          */}
          <a
            href="/library/"
            className="text-[15px] text-brand-muted hover:text-brand-teal transition-colors"
          >
            {hd ? 'Open the full Coaching Library' : 'The Library'}
          </a>
          <a
            href="/#connect"
            {...hint('Start a conversation', HINT.connect)}
            className="text-[15px] text-brand-muted hover:text-brand-teal transition-colors"
          >
            Start a conversation
          </a>
          {/* On an HD page the coaching name above already opens the home page. */}
          {!hd && (
            <a
              href="https://thechampagnemethod.co"
              className="text-[15px] text-brand-muted hover:text-brand-teal transition-colors"
            >
              thechampagnemethod.co
            </a>
          )}
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
  parent,
  wide = false,
  footerNote,
  hd = false,
  children,
}: {
  crumb: string;
  /**
   * What the breadcrumb hangs off. Defaults to the Library because that is
   * where every page using this shell lived until the readings page, which is
   * not library matter -- it describes something for sale.
   */
  parent?: { label: string; href: string };
  /**
   * Article measure is 64ch, which is right for prose and too narrow for a
   * page whose evidence is a chart and a document. Opt-in, so nothing that
   * reads as an article gets wider by accident.
   */
  wide?: boolean;
  footerNote?: ReactNode;
  /** A Human Design page: its footer carries the footer theme (10/17). */
  hd?: boolean;
  children: ReactNode;
}) {
  useHashScroll();
  /*
   * The breadcrumb's default. On a Human Design page it hangs off the Human
   * Design library (release 2, Jeremy 10/20: a bare "Library" there led to the
   * wider library under no name -- that link now lives in the footer as "Open
   * the full Coaching Library"). Elsewhere it is the Library, as before.
   */
  const up = parent ?? (hd ? { label: 'Human Design library', href: '/library/human-design/' } : { label: 'Library', href: '/library/' });
  return (
    <div className="font-sans text-brand-paper">
      <Background />
      <div className="relative z-10">
        <Nav />
        <main className="pt-28 sm:pt-32 pb-4">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <p className="mb-6 font-sans text-[13px] uppercase tracking-[0.16em] text-brand-muted/70">
              <a href={up.href} className="hover:text-brand-teal transition-colors">
                {up.label}
              </a>
              <span className="mx-2">/</span>
              {crumb}
            </p>
            <article className={wide ? '' : 'max-w-[64ch]'}>{children}</article>
          </div>
        </main>
        <Footer note={footerNote} hd={hd} />
      </div>
    </div>
  );
}

export function ArticleHeader({
  title,
  standfirst,
  readTime,
  /** The line above the title. Defaults to the Human Design library (Jeremy
   *  10/16, mock change 2, option A); only "Reading your bodygraph" still uses
   *  the default -- the other pages set their own. It runs to two lines on a
   *  laptop, by his choice, so it breaks between whole phrases. */
  eyebrow = <BrandEyebrow lead="Human Design library" />,
}: {
  title: ReactNode;
  standfirst: ReactNode;
  readTime?: string;
  eyebrow?: ReactNode;
}) {
  return (
    <header className="border-b border-brand-gold/15 pb-9 mb-10">
      <span className="block mb-4 font-sans text-[14px] leading-[1.6] font-semibold uppercase tracking-[0.22em] text-brand-teal">
        {eyebrow}
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

/** A quiet inline link — the text link inside the closing box uses this.
 *  `download` names the saved file when the link is a file to keep.
 *  `where` is the hover hint when the words alone do not say where it goes (link labels, Jeremy 10/23). */
export function TextLink({
  href,
  download,
  where,
  children,
}: {
  href: string;
  download?: string;
  where?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      download={download}
      {...(where && typeof children === 'string' ? hint(children, where) : where ? { title: where } : {})}
      className="text-brand-teal underline underline-offset-4 decoration-brand-teal/40 hover:decoration-brand-teal transition-colors"
    >
      {children}
    </a>
  );
}
