import { useEffect, useState } from 'react';

/**
 * A quiet sign that the page continues (B-1, option 1).
 *
 * THE PROBLEM IT ANSWERS is not a design flaw. Two people told Jeremy on the
 * same day that the opening screen reads as the entire site -- and they were
 * not confused by it, they thought it was finished. That is the cost of a
 * deliberately clean first view, and it is worth taking seriously precisely
 * because the screen is working.
 *
 * IT DOES NOT SAY "SCROLL". The site asks, it does not tell, and an instruction
 * in the corner would be the one element on the page talking down to the
 * reader. A chevron that drifts downward makes the same point by pointing, and
 * the ellipsis on the Hero line does the other half of the job in words.
 *
 * IT LEAVES AS SOON AS IT IS ANSWERED. A cue that stays after somebody has
 * started scrolling has stopped being a cue and become furniture -- so it fades
 * out for good at the first sign of movement, and does not come back when they
 * return to the top. It has already been read.
 *
 * IT IS A REAL BUTTON, not decoration. Anybody who notices it will try to press
 * it, and a hint that does nothing when pressed reads as a broken control.
 */
export default function ScrollCue() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    // Already partway down -- a returning visitor, or a reload mid-page. The
    // question has been answered before it was asked.
    if (window.scrollY > 40) {
      setGone(true);
      return;
    }
    const onScroll = () => {
      if (window.scrollY > 40) setGone(true);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (gone) return null;

  function down() {
    // One viewport, rather than an anchor. The section below the Hero has
    // changed twice already; a scroll that is expressed in what the reader can
    // see cannot fall out of date with the running order.
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    window.scrollBy({ top: window.innerHeight * 0.85, behavior: reduce ? 'auto' : 'smooth' });
  }

  return (
    <button
      type="button"
      onClick={down}
      aria-label="See what is further down the page"
      className="group fixed bottom-6 right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-brand-gold/30 bg-ground-top/70 text-brand-gold/80 backdrop-blur-sm transition-all duration-300 hover:border-brand-gold/60 hover:text-brand-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/60 motion-safe:animate-scrollcue"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  );
}
