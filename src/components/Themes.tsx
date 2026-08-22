import { Eyebrow, SectionTitle, Lede, Section } from './ui';

const themes = [
  {
    num: '01',
    title: 'Agency',
    question: 'Who’s been holding the wheel?',
    body: 'We hand our choices away in small pieces — to keep the peace, to be agreeable, to avoid a hard moment. Then something arrives and we find we’ve been driving from the passenger seat. The work is taking it back deliberately, before you need it.',
  },
  {
    num: '02',
    title: 'Communication',
    question: 'Is the message sent the message received?',
    body: 'Almost never, and that gap is where most conflict actually lives. We look at what you meant, what landed, and what to do differently — using tools like Nonviolent Communication to make the invisible part visible.',
  },
  {
    num: '03',
    title: 'Empathy',
    question: 'Can you extend to yourself what you give everyone else?',
    body: 'There’s the empathy that understands someone and the empathy that feels with them — knowing which you’re using changes what’s possible. And most people I meet are fluent in it outward and beginners at it inward.',
  },
];

export default function Themes() {
  return (
    <Section>
      <Eyebrow>Where We Usually Start</Eyebrow>
      <SectionTitle>Three common areas of work.</SectionTitle>
      <Lede>
        These come up more than anything else &mdash; but they&rsquo;re a starting point, not a
        menu. Most people arrive knowing something&rsquo;s off without knowing where it lives.
        Finding that is part of the work.
      </Lede>

      <div className="mt-8">
        {themes.map((t) => (
          <div key={t.num} className="py-7 border-t border-brand-gold/15">
            <span className="block font-display text-3xl leading-none text-brand-teal/90 mb-3">
              {t.num}
            </span>
            <h3 className="font-display font-medium text-xl text-brand-paper mb-2">{t.title}</h3>
            <p className="font-display italic text-xl text-brand-gold mb-3">{t.question}</p>
            <p className="max-w-[62ch] text-[18px] leading-relaxed text-brand-paper/80">{t.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
