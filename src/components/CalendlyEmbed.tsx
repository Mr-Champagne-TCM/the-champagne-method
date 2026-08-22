import { useEffect, useRef, useState } from 'react';

/** The 30-minute free intake event. Note there is also a 1-hour event in the
 *  Calendly account — the site deliberately points only at the intake one. */
const BOOKING_URL =
  'https://calendly.com/thechampagnemethod/the-champagne-method-30-min-free-intake-session';

/** Colours as supplied by the owner. See the note in Drive if these are revisited. */
const PARAMS = new URLSearchParams({
  hide_gdpr_banner: '1',
  background_color: 'ac0ce5',
  text_color: 'ffffff',
  primary_color: '3f9cf6',
});

const WIDGET_SRC = 'https://assets.calendly.com/assets/external/widget.js';
const WIDGET_CSS = 'https://assets.calendly.com/assets/external/widget.css';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

/**
 * Inline Calendly widget with a real fallback.
 *
 * The widget is a third-party script, which makes it the one thing on this page
 * that can fail on its own. If it does not come up within a few seconds we show
 * a plain link instead — a booking page you can still reach beats a blank box.
 */
export default function CalendlyEmbed() {
  const host = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const url = `${BOOKING_URL}?${PARAMS.toString()}`;
    let cancelled = false;

    if (!document.querySelector(`link[href="${WIDGET_CSS}"]`)) {
      const css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = WIDGET_CSS;
      document.head.appendChild(css);
    }

    const init = () => {
      if (cancelled || !host.current || !window.Calendly) return;
      host.current.innerHTML = '';
      window.Calendly.initInlineWidget({ url, parentElement: host.current });
    };

    if (window.Calendly) {
      init();
    } else {
      let script = document.querySelector<HTMLScriptElement>(`script[src="${WIDGET_SRC}"]`);
      if (!script) {
        script = document.createElement('script');
        script.src = WIDGET_SRC;
        script.async = true;
        document.body.appendChild(script);
      }
      script.addEventListener('load', init);
      script.addEventListener('error', () => !cancelled && setFailed(true));
    }

    // If nothing has rendered by now, the script is blocked or down.
    const timer = window.setTimeout(() => {
      if (!cancelled && !host.current?.querySelector('iframe')) setFailed(true);
    }, 6000);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);

  if (failed) {
    return (
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-full px-6 py-3.5 font-sans text-[16px] font-semibold bg-brand-teal text-[#0d1b1a] shadow-lg shadow-brand-teal/25 transition-all duration-200 hover:-translate-y-0.5"
      >
        Pick a time &rarr;
      </a>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-brand-gold/20">
      <div
        ref={host}
        className="calendly-inline-widget"
        data-url={`${BOOKING_URL}?${PARAMS.toString()}`}
        style={{ minWidth: 320, height: 700 }}
      />
    </div>
  );
}
