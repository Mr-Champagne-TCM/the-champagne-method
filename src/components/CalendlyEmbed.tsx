/**
 * Calendly, embedded as a plain iframe.
 *
 * Deliberately NOT Calendly's widget.js. Their script injects the same iframe,
 * but costs a third-party script on every page load and can fail on its own.
 * Pointing an iframe at the booking URL does the same job with nothing to break
 * and no extra bytes.
 */

/** The 30-minute free intake event. The account also has a 1-hour event — the
 *  site deliberately offers only the intake one. */
const BOOKING_URL =
  'https://calendly.com/thechampagnemethod/the-champagne-method-30-min-free-intake-session';

/** Colours as supplied by the owner. embed_* tells Calendly to render in its
 *  embedded layout rather than the full standalone page. */
const PARAMS = new URLSearchParams({
  hide_gdpr_banner: '1',
  background_color: 'ac0ce5',
  text_color: 'ffffff',
  primary_color: '3f9cf6',
  embed_domain: 'thechampagnemethod.co',
  embed_type: 'Inline',
});

export default function CalendlyEmbed() {
  return (
    <div>
      <div className="rounded-2xl overflow-hidden border border-brand-gold/20 bg-white/[0.03]">
        <iframe
          src={`${BOOKING_URL}?${PARAMS.toString()}`}
          title="Book a free 30-minute intake session"
          loading="lazy"
          className="block w-full border-0"
          style={{ minWidth: 320, height: 700 }}
        />
      </div>

      {/* If the iframe is blocked — strict privacy settings, an extension, a
          locked-down network — the booking page is still one click away. */}
      <p className="mt-3 text-[16px] text-brand-muted">
        Trouble with the calendar?{' '}
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-teal underline underline-offset-4 hover:text-brand-gold transition-colors"
        >
          Open it in a new tab
        </a>
        .
      </p>
    </div>
  );
}
