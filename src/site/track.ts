/**
 * Conversion events.
 *
 * Most events are declared straight on the element with `data-umami-event`, which
 * needs no code at all. This helper is only for the cases where the conversion is
 * not a click — a form that succeeds after a fetch, for instance.
 *
 * It is a no-op when the analytics script has not loaded: while the site is not
 * yet wired up, on local previews, and for anyone blocking third-party scripts.
 * Nothing here should ever be able to break a page.
 */
declare global {
  interface Window {
    umami?: { track: (event: string, data?: Record<string, unknown>) => void };
  }
}

export function track(event: string, data?: Record<string, unknown>) {
  try {
    window.umami?.track(event, data);
  } catch {
    /* analytics must never take a page down with it */
  }
}
