import { useState, useEffect, type ReactNode } from 'react';
import Background from '../components/Background';
import { shelves } from './content';
import QuizEase from './tools/QuizEase';
import QuizRing from './tools/QuizRing';
import QuizConfidence from './tools/QuizConfidence';
import Breather from './tools/Breather';
import ServesMeCheck from './tools/ServesMeCheck';
import EmotionWheel from './tools/EmotionWheel';
import { SITE_VERSION } from '../site/version';
import { useHashScroll } from '../site/useHashScroll';

/**
 * The interactive pieces, in one list, in the order they appear down the page.
 *
 * WHY ONE LIST AND NOT TWO. These are named in two places now -- the grid at the
 * top that gets somebody to them, and the block further down where they actually
 * live. Two hand-kept lists is how a link at the top eventually points at a
 * heading that has been renamed, and a reader lands somewhere that does not say
 * what they clicked. `after` is the concept card each one is slotted behind, so
 * the reading order we chose is still decided here and only here.
 *
 * `blurb` exists only for the grid. Down the page the tool is already in front
 * of you and does not need describing.
 */
type Tool = { id: string; title: string; after: string; blurb: string; node: ReactNode };

const TOOLS: Tool[] = [
  {
    id: 'wheel',
    title: 'The wheel itself',
    after: 'The wheel of emotions',
    blurb: 'Open it full-screen, zoom in, and take it with you.',
    node: <EmotionWheel />,
  },
  {
    id: 'ring',
    title: 'Which ring are you on?',
    after: 'The wheel of emotions',
    blurb: 'Six picks. Reads how finely you name what you feel.',
    node: <QuizRing />,
  },
  {
    id: 'ease',
    title: 'Where&rsquo;s your ease?',
    after: 'The three points of ease',
    blurb: 'Two areas of your life, placed. A location, not a grade.',
    node: <QuizEase />,
  },
  {
    id: 'breather',
    title: 'The 4-7-8 breather',
    after: 'Your nervous system, briefly',
    blurb: 'In for 4, hold for 7, out for 8. One round is already a win.',
    node: <Breather />,
  },
  {
    id: 'serves-me',
    title: 'Serves-Me Belief Check',
    after: 'Serves me / doesn&rsquo;t serve me',
    blurb: 'Bring a belief. Four questions take it apart.',
    node: <ServesMeCheck />,
  },
  {
    id: 'confidence',
    title: 'Where&rsquo;s your confidence pointed?',
    after: 'The confidence continuum',
    blurb: 'Every statement is confident. Only the direction is in question.',
    node: <QuizConfidence />,
  },
];

/** Grouped by the card they sit behind, derived rather than written out again. */
const TOOLS_AFTER: Record<string, Tool[]> = TOOLS.reduce((acc, t) => {
  (acc[t.after] ??= []).push(t);
  return acc;
}, {} as Record<string, Tool[]>);

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
        {/* Starts smaller than on desktop: at every common phone width (390/414/430) a
            26px brand plus the right-hand link overruns the bar and the two collide. */}
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

function Tag({ children, gold = false }: { children: ReactNode; gold?: boolean }) {
  return (
    <span
      className={`inline-block text-[10px] font-semibold uppercase tracking-[0.18em] rounded-full px-2.5 py-0.5 mb-2 border ${
        gold ? 'text-brand-teal border-brand-teal/40' : 'text-brand-gold border-brand-gold/30'
      }`}
    >
      {children}
    </span>
  );
}

export default function LibraryApp() {
  useHashScroll();

  return (
    <div className="font-sans text-brand-paper">
      <Background />
      <div className="relative z-10">
        <Nav />
        <main>
          <section className="pt-32 pb-8">
            <div className="max-w-5xl mx-auto px-6 sm:px-8">
              <span className="block mb-4 font-sans text-[15px] font-semibold uppercase tracking-[0.22em] text-brand-teal">
                The Library
              </span>
              <h1 className="font-display font-medium tracking-tight leading-[1.1] text-[clamp(2.375rem,6.4vw,3.75rem)]">
                Take the tools. They&rsquo;re yours.
              </h1>
              <p className="mt-4 max-w-[60ch] text-[clamp(1.125rem,2vw,1.3125rem)] leading-relaxed text-brand-paper/90">
                Everything here is free. Plenty of people get real distance with these alone,
                and I&rsquo;d rather you have them than not.
              </p>
              <p className="mt-2 text-brand-muted text-[15px]">
                This grows. New pieces arrive as they&rsquo;re written &mdash; and the
                interactive ones keep everything on your screen, always.
              </p>
              <ul className="flex flex-wrap gap-2.5 mt-6 list-none p-0">
                {shelves.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="inline-block rounded-full px-4 py-2 text-[14px] border border-brand-gold/30 text-brand-paper hover:border-brand-teal hover:text-brand-teal transition-colors"
                    >
                      {s.title.replace('&amp;', '&')}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>


          {/*
            THE INTERACTIVE PIECES, BROUGHT FORWARD.
            
            They were only reachable by reading the whole page, which meant most
            of them were never reached at all. Nothing has moved: each one still
            sits behind the concept card that teaches it, because that is the
            order that makes them make sense. This is a way in, not a reordering.
          */}
          <section id="try" className="scroll-mt-24 pb-4">
            <div className="max-w-5xl mx-auto px-6 sm:px-8">
              <div className="rounded-3xl border border-brand-gold/25 bg-white/[0.035] p-6 sm:p-8">
                <span className="block mb-3 font-sans text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-teal">
                  Try one
                </span>
                <p className="text-brand-paper/85 max-w-[58ch] mb-6">
                  Six things on this page you can actually do rather than read. They take a
                  minute or two each, nothing is saved anywhere, and you can start with
                  whichever one you like the sound of.
                </p>
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
                  {TOOLS.map((t) => (
                    <li key={t.id}>
                      <a
                        href={`#tool-${t.id}`}
                        /* INSTANT, NOT SMOOTH. <html> carries scroll-behavior:
                           smooth, and these jumps are long -- the last tool sits
                           around thirteen thousand pixels down. Animated, that is
                           a several-second ride past everything on the way, which
                           is the opposite of what a "try one" button promises.
                           Same call, and same reason, as useHashScroll. */
                        onClick={(e) => {
                          const el = document.getElementById(`tool-${t.id}`);
                          if (!el) return;
                          e.preventDefault();
                          el.scrollIntoView({ block: 'start', behavior: 'instant' });
                          history.replaceState(null, '', `#tool-${t.id}`);
                        }}
                        className="group flex h-full flex-col rounded-2xl border border-brand-gold/20 bg-black/20 px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-teal/60 hover:bg-black/30"
                      >
                        <span
                          className="font-display font-medium text-[17px] text-brand-paper group-hover:text-brand-teal transition-colors"
                          dangerouslySetInnerHTML={{ __html: t.title }}
                        />
                        <span className="mt-1.5 text-[14px] leading-relaxed text-brand-muted">
                          {t.blurb}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {shelves.map((shelf) => (
            <section key={shelf.id} id={shelf.id} className="py-8">
              <div className="max-w-5xl mx-auto px-6 sm:px-8">
                <div className="border-t border-brand-gold/15 pt-8">
                  <h2
                    className="font-display font-medium text-[clamp(1.75rem,4.2vw,2.25rem)] mb-1"
                    dangerouslySetInnerHTML={{ __html: shelf.title }}
                  />
                  <p className="text-brand-muted mb-7" dangerouslySetInnerHTML={{ __html: shelf.blurb }} />
                  {shelf.cards.map((card) => (
                    <div key={card.title}>
                      <div className="border-l-2 border-brand-teal/35 pl-5 mb-7 max-w-[64ch]">
                        <Tag>{card.tag}</Tag>
                        <h3
                          className="font-display font-medium text-xl mb-2"
                          dangerouslySetInnerHTML={{ __html: card.title }}
                        />
                        <div className="libcard" dangerouslySetInnerHTML={{ __html: card.html }} />
                      </div>
                      {(TOOLS_AFTER[card.title] ?? []).map((tool) => (
                        <div
                          key={tool.id}
                          id={`tool-${tool.id}`}
                          /* scroll-mt clears the fixed nav; without it an anchor
                             lands with the heading tucked underneath the bar. */
                          className="scroll-mt-24 border-l-2 border-brand-gold/45 pl-5 mb-7 max-w-[64ch] rounded-r-2xl bg-white/[0.03] py-4 pr-5"
                        >
                          <Tag gold>Try it</Tag>
                          <h3
                            className="font-display font-medium text-xl mb-2"
                            dangerouslySetInnerHTML={{ __html: tool.title }}
                          />
                          {tool.node}
                        </div>
                      ))}
                    </div>
                  ))}
                  {shelf.id === 'agency' && (
                    <>
                      <p className="font-display italic text-xl text-brand-gold max-w-[52ch] mb-6">
                        Anyone can own a hammer, a chisel, and a saw. Knowing which one, when,
                        and for what &mdash; <em>that&rsquo;s the method.</em>
                      </p>
                      <a
                        href="/#connect"
                        className="inline-block rounded-full px-6 py-3.5 font-sans text-[16px] font-semibold bg-brand-teal text-[#0d1b1a] shadow-lg shadow-brand-teal/25 transition-all duration-200 hover:-translate-y-0.5"
                      >
                        Start a conversation
                      </a>
                    </>
                  )}
                </div>
              </div>
            </section>
          ))}
        </main>

        <footer className="border-t border-brand-gold/15 pt-12 pb-11 mt-8">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <div className="grid sm:grid-cols-3 gap-8 mb-10">
              <div>
                <h4 className="font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-brand-gold mb-3">
                  The Library
                </h4>
                {shelves.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block py-2.5 sm:py-1 text-[15px] text-brand-muted hover:text-brand-teal transition-colors"
                    dangerouslySetInnerHTML={{ __html: s.title }}
                  />
                ))}
              </div>
              <div>
                <h4 className="font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-brand-gold mb-3">
                  The Practice
                </h4>
                {[
                  ['Free tools', '/#tools'],
                  ['The method', '/#method'],
                  ['My story', '/#my-story'],
                  ['Start a conversation', '/#connect'],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="block py-2.5 sm:py-1 text-[15px] text-brand-muted hover:text-brand-teal transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
              <div>
                <h4 className="font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-brand-gold mb-3">
                  Contact
                </h4>
                <a
                  href="https://thechampagnemethod.co"
                  className="block py-1 text-[15px] text-brand-muted hover:text-brand-teal transition-colors"
                >
                  thechampagnemethod.co
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-between items-center pt-6 border-t border-brand-gold/10">
              <span className="text-[15px] text-brand-muted/70">
                &copy; 2026 The Champagne Method. All rights reserved.
              </span>
              <span className="text-xs text-brand-muted/40">{SITE_VERSION}</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
