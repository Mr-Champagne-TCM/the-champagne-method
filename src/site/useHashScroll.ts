import { useEffect } from 'react';

/**
 * Makes cross-page anchor links work.
 *
 * Every page here is React mounted into an empty `<div id="root">`. When someone
 * arrives from another page on a URL like `/#connect`, the browser looks for that
 * element while the document is still empty, finds nothing, and gives up — it does
 * not try again after React renders. The reader lands at the top of the page with
 * no indication anything was missed.
 *
 * Same-page anchors are unaffected, because by then the sections exist. This only
 * has to cover the first paint, so it retries for a handful of frames and stops.
 */
export function useHashScroll() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.replace('#', ''));
    if (!id) return;

    let frame = 0;
    let tries = 0;
    const tick = () => {
      const el = document.getElementById(id);
      if (el) {
        // Must be 'instant', not 'auto'. 'auto' defers to the CSS `scroll-behavior:
        // smooth` set on <html>, which makes a fresh load animate the whole way down
        // the page. On arrival the reader should simply be there.
        el.scrollIntoView({ block: 'start', behavior: 'instant' });
        return;
      }
      if (tries++ < 30) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);
}
