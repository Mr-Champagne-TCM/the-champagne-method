import { useState, useEffect, type ReactNode } from 'react';
import Background from '../components/Background';
import { TOOLS } from './toolList';
import { SITE_VERSION } from '../site/version';
import { useHashScroll } from '../site/useHashScroll';

/**
 * The six interactive pieces, on a page of their own.
 *
 * WHY THEY LEFT THE LIBRARY. They were slotted in behind the concept card that
 * taught each one, which was right about meaning and wrong about reading: six
 * working tools stacked between the shelves made the library a page you scroll
 * past rather than read, and most of them were never reached anyway. Here they
 * have room, and the library gets its own shape back.
 *
 * THE PAIRING IS NOT LOST. Every library section that used to hold one now
 * carries a button to the exact tool that lived there, worded for that tool.
 * The idea and the doing are still one click apart, in both directions.
 */

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
        <a
          href="/"
          className={`font-display font-medium tracking-tight whitespace-nowrap text-brand-paper transition-all duration-300 ${
            scrolled ? 'text-[18px] sm:text-[19px]' : 'text-[20px] sm:text-[26px] md:text-[30px]'
          }`}
        >
          The <span className="text-brand-gold">Champagne</span> Method
        </a>
        <a
          href="/library/"
          className="font-sans text-[14px] sm:text-[15px] whitespace-nowrap shrink-0 text-brand-muted hover:text-brand-teal transition-colors"
        >
          The Library
        </a>
      </div>
    </nav>
  );
}

function Kind({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.18em] rounded-full px-2.5 py-0.5 mb-2 border text-brand-teal border-brand-teal/40">
      {children}
    </span>
  );
}

/**
 * Re-assert an arriving anchor once the page has stopped growing.
 *
 * THE BUG THIS FIXES, measured rather than guessed. Arriving on
 * /tools/#tool-ease put the heading 26px below the top of the viewport instead
 * of the 96px `scroll-mt-24` asks for -- far enough up to sit under the fixed
 * nav. The first tool on the page landed correctly and the later ones did not,
 * which is the tell: useHashScroll fires on first paint, and everything above
 * the target is still growing at that moment. Web fonts swap and six live
 * components lay themselves out, the document gets taller above the anchor,
 * and the position that was right when it scrolled is wrong a moment later.
 *
 * So it is checked again after the two things that move layout: fonts becoming
 * ready, and window load. Only ever corrected when it is actually wrong by
 * more than a couple of pixels, and only for a short while after arriving --
 * once somebody has scrolled for themselves, the page is theirs and must not
 * yank itself back.
 */
function useAnchorSettles() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.replace('#', ''));
    if (!id) return;

    let cancelled = false;
    const WANT = 96; // matches scroll-mt-24
    const DEADLINE = Date.now() + 2500;

    /**
     * The baseline is adopted on the FIRST check, not at mount.
     *
     * It was captured at mount to begin with, and that made the whole thing a
     * no-op: useHashScroll has already jumped the page by the time this runs,
     * so the very first comparison saw thousands of pixels of movement, read
     * its own sibling's scroll as the reader's, and bailed. Measured, not
     * reasoned about -- five of six anchors still landed 70px high.
     */
    let lastY: number | null = null;
    let done = false;

    const correct = () => {
      if (cancelled || done || Date.now() > DEADLINE) return;
      if (lastY !== null && Math.abs(window.scrollY - lastY) > 4) {
        done = true; // the reader has taken over; the page is theirs now
        return;
      }
      const el = document.getElementById(id);
      if (!el) return;
      if (Math.abs(el.getBoundingClientRect().top - WANT) > 2) {
        el.scrollIntoView({ block: 'start', behavior: 'instant' });
      }
      lastY = window.scrollY;
    };

    const t1 = setTimeout(correct, 250);
    const t2 = setTimeout(correct, 800);
    window.addEventListener('load', correct);
    document.fonts?.ready.then(correct).catch(() => {});

    return () => {
      cancelled = true;
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('load', correct);
    };
  }, []);
}

export default function ToolsApp() {
  useHashScroll();
  useAnchorSettles();

  return (
    <div className="font-sans text-brand-paper">
      <Background />
      <div className="relative z-10">
        <Nav />
        <main>
          <section className="pt-32 pb-6">
            <div className="max-w-5xl mx-auto px-6 sm:px-8">
              <span className="block mb-4 font-sans text-[15px] font-semibold uppercase tracking-[0.22em] text-brand-teal">
                Free tools
              </span>
              <h1 className="font-display font-medium tracking-tight leading-[1.1] text-[clamp(2.375rem,6.4vw,3.75rem)]">
                Try one.
              </h1>
              {/*
                THE INTRODUCTION NAMES THE KINDS RATHER THAN CALLING THEM ALL
                QUIZZES. Three of the six are; the wheel is something you look
                at, the breather is a pacer you follow, and the check is a
                worksheet you bring your own material to. One word for all six
                would be shorter and wrong about half of them.

                The last sentence stays because it is true, unusual, and answers
                the thing that actually stops somebody: what happens to what I
                type. Nothing here posts anywhere -- it is all in the page.
              */}
              <p className="mt-4 max-w-[62ch] text-[clamp(1.125rem,2vw,1.3125rem)] leading-relaxed text-brand-paper/90">
                Three short quizzes, a breathing pacer, the emotion wheel, and a worksheet for a
                belief you&rsquo;d like to look at properly. A minute or two each.
              </p>
              <p className="mt-3 max-w-[62ch] text-[17px] leading-relaxed text-brand-muted">
                Nothing is saved, nothing is scored against anybody else, and none of it asks for
                your email.
              </p>

              <ul className="flex flex-wrap gap-2.5 mt-7 list-none p-0">
                {TOOLS.map((t) => (
                  <li key={t.id}>
                    <a
                      href={`#tool-${t.id}`}
                      onClick={(e) => {
                        const el = document.getElementById(`tool-${t.id}`);
                        if (!el) return;
                        e.preventDefault();
                        el.scrollIntoView({ block: 'start', behavior: 'instant' });
                        history.replaceState(null, '', `#tool-${t.id}`);
                      }}
                      className="inline-block rounded-full px-4 py-2 text-[14px] border border-brand-gold/30 text-brand-paper hover:border-brand-teal hover:text-brand-teal transition-colors"
                      dangerouslySetInnerHTML={{ __html: t.title }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {TOOLS.map((t) => (
            <section key={t.id} id={`tool-${t.id}`} className="scroll-mt-24 py-8">
              <div className="max-w-5xl mx-auto px-6 sm:px-8">
                <div className="border-t border-brand-gold/15 pt-8">
                  <Kind>{t.kind}</Kind>
                  <h2
                    className="font-display font-medium text-[clamp(1.75rem,4.2vw,2.25rem)] mb-1"
                    dangerouslySetInnerHTML={{ __html: t.title }}
                  />
                  <p className="text-brand-muted mb-7 max-w-[62ch]">{t.blurb}</p>
                  <div className="max-w-[64ch]">{t.node}</div>
                </div>
              </div>
            </section>
          ))}

          <section className="py-10">
            <div className="max-w-5xl mx-auto px-6 sm:px-8">
              <div className="border-t border-brand-gold/15 pt-8">
                <p className="font-display italic text-xl text-brand-gold max-w-[52ch] mb-6">
                  Anyone can own a hammer, a chisel, and a saw. Knowing which one, when, and for
                  what &mdash; <em>that&rsquo;s the method.</em>
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/library/"
                    className="inline-block rounded-full px-6 py-3.5 font-sans text-[16px] font-semibold border border-brand-gold/30 text-brand-paper transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-teal hover:text-brand-teal"
                  >
                    Read what&rsquo;s behind these &rarr;
                  </a>
                  <a
                    href="/#connect"
                    className="inline-block rounded-full px-6 py-3.5 font-sans text-[16px] font-semibold bg-brand-teal text-[#0d1b1a] shadow-lg shadow-brand-teal/25 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Start a conversation
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-brand-gold/15 pt-12 pb-11 mt-8">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
              {[
                ['/library/', 'The Library'],
                ['/readings/', 'Human Design readings'],
                ['/#connect', 'Start a conversation'],
                ['/readings/privacy/', 'Privacy'],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="text-[15px] text-brand-muted hover:text-brand-teal transition-colors"
                >
                  {label}
                </a>
              ))}
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
