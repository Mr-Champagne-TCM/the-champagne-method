import { Eyebrow, SectionTitle, Lede, Pull, Cta, Section } from './ui';

/**
 * Set `hidden` on an entry to take it off the page without deleting it.
 * Numbering is derived, so hiding one renumbers the rest automatically.
 *
 * The nervous system check-in is hidden until there is something real behind
 * it — see the open question in Drive about whether a written one-pager is even
 * the right form for it.
 */
const tools = [
  {
    name: 'The nervous system check-in',
    note: 'One page. Where am I right now, and what does that change?',
    hidden: true,
  },
  {
    name: 'The wheel of emotions',
    note: 'A map of feeling, in rings — and a ladder: the more precisely you can name it, the more say you get.',
  },
  {
    name: 'Serves me / doesn’t serve me',
    note: 'The measuring stick you build yourself — where right and wrong always belonged to someone else.',
  },
  {
    name: 'Three wounds, and what heals each',
    note: 'Abandonment, betrayal, shame — met with commitment, loyalty, and honor to self.',
  },
];

export default function FreeResources() {
  const visible = tools.filter((t) => !t.hidden);

  return (
    <Section id="tools" tint>
      <Eyebrow>Free Resources</Eyebrow>
      <SectionTitle>Take the tools. They&rsquo;re yours.</SectionTitle>
      <Lede>
        Everything below is free, and plenty of people get real distance with them alone.
        I&rsquo;d rather you have them than not.
      </Lede>

      <div className="mt-7 rounded-2xl border border-brand-gold/20 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-8">
        {visible.map((t, i) => (
          <div
            key={t.name}
            className="flex gap-4 py-3.5 border-t border-brand-gold/10 first:border-0"
          >
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-teal/15 text-brand-teal text-sm font-semibold flex items-center justify-center">
              {i + 1}
            </span>
            <div>
              <b className="block font-sans font-semibold text-[17px] text-brand-paper">{t.name}</b>
              <span className="block text-[16px] leading-relaxed text-brand-paper/70">{t.note}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7">
        <Pull>
          Anyone can own a hammer, a chisel, and a saw. Knowing which one, when, and for what
          &mdash; that&rsquo;s the method.
        </Pull>
      </div>

      <Cta href="/library/" ghost>
        Open the full library &rarr;
      </Cta>
    </Section>
  );
}
