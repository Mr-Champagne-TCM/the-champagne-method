import { Eyebrow, SectionTitle, Lede, Pull, Cta, Section } from './ui';

const tools = [
  {
    n: '1',
    name: 'The nervous system check-in',
    note: 'One page. Where am I right now, and what does that change?',
  },
  {
    n: '2',
    name: 'NVC in four steps',
    note: 'Observation, feeling, need, request — with real examples.',
  },
  {
    n: '3',
    name: 'Emotions as navigation',
    note: 'Reading what a feeling is pointing at, instead of arguing with it or ruling it invalid.',
  },
  {
    n: '4',
    name: 'Where your boundaries actually are',
    note: 'Finding the line before you need to hold it. The words are yours to find — this helps you locate what you’re protecting.',
  },
];

export default function FreeResources() {
  return (
    <Section id="tools" tint>
      <Eyebrow>Free Resources</Eyebrow>
      <SectionTitle>Take the tools. They&rsquo;re yours.</SectionTitle>
      <Lede>
        Everything below is free, and plenty of people get real distance with them alone.
        I&rsquo;d rather you have them than not.
      </Lede>

      <div className="mt-7 rounded-2xl border border-brand-gold/20 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-8">
        {tools.map((t) => (
          <div key={t.n} className="flex gap-4 py-3.5 border-t border-brand-gold/10 first:border-0">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-teal/15 text-brand-teal text-sm font-semibold flex items-center justify-center">
              {t.n}
            </span>
            <div>
              <b className="block font-sans font-semibold text-brand-paper">{t.name}</b>
              <span className="block text-sm leading-relaxed text-brand-paper/70">{t.note}</span>
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

      <Cta href="/library" ghost>
        Open the full library &rarr;
      </Cta>
    </Section>
  );
}
