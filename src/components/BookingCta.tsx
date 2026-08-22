/**
 * Booking is a link out to Calendly, not an embed.
 *
 * Calendly's own page is a better booking experience than anything framed
 * inside this layout, and it keeps a third-party iframe off the page entirely.
 * The colour params below theme Calendly's hosted page to match this site.
 */

/** The 30-minute free intake event. The account also has a 1-hour event — the
 *  site deliberately offers only the intake one. */
const BOOKING_URL =
  'https://calendly.com/thechampagnemethod/the-champagne-method-30-min-free-intake-session';

/** Site palette: ground-mid, paper, teal. */
const PARAMS = new URLSearchParams({
  hide_gdpr_banner: '1',
  background_color: '1a1040',
  text_color: 'f3eff7',
  primary_color: '3fe0c5',
});

export const bookingHref = `${BOOKING_URL}?${PARAMS.toString()}`;

export default function BookingCta() {
  return (
    <div>
      <a
        href={bookingHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-full px-6 py-3.5 font-sans text-[16px] font-semibold bg-brand-teal text-[#0d1b1a] shadow-lg shadow-brand-teal/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brand-teal/35"
      >
        Pick a time &rarr;
      </a>
      <p className="mt-3 text-[16px] text-brand-muted">
        Opens my calendar in a new tab. Thirty minutes, free.
      </p>
    </div>
  );
}
