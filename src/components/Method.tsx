import { Eyebrow, SectionTitle, Lede, Section } from './ui';

const stages = [
  {
    label: 'First',
    title: 'Arrive',
    body: 'We check where your nervous system actually is before we touch anything else. Nothing useful happens in a body that’s still braced.',
  },
  {
    label: 'Second',
    title: 'Open',
    body: 'You bring the thing. And if the thing is too hot to hold right now, we start somewhere softer and work toward it.',
  },
  {
    label: 'Third',
    title: 'Get curious',
    body: 'I ask about what you were reaching for underneath the action. Not to catch you out — to find out what you actually wanted.',
  },
  {
    label: 'Fourth',
    title: 'Find the gap',
    body: 'Between what you did and what you hoped it would get you. Seeing that gap clearly is usually the moment the courage to try something else shows up on its own.',
  },
  {
    label: 'Fifth',
    title: 'New eyes',
    body: 'Same facts, wider view. We set aside right and wrong in favor of a more useful measure: does this serve me, or doesn’t it?',
  },
  {
    label: 'Sixth',
    title: 'Practice',
    body: 'You leave with something to try — rehearsed while things are calm. Under stress we reach for what’s familiar, so the goal is to make the new thing familiar first.',
  },
];

export default function Method() {
  return (
    <Section id="method" tint>
      <Eyebrow>The Method</Eyebrow>
      <SectionTitle>Six moves, in order.</SectionTitle>
      <Lede>The sequence stays consistent. The tools inside it are chosen for you.</Lede>

      <div className="mt-8 grid sm:grid-cols-2 gap-x-10">
        {stages.map((s) => (
          <div key={s.title} className="py-5 border-t border-brand-gold/15">
            <span className="block font-sans text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-gold/80 mb-1.5">
              {s.label}
            </span>
            <h3 className="font-display font-medium text-lg text-brand-paper mb-1.5">{s.title}</h3>
            <p className="leading-relaxed text-brand-paper/80 text-[16px]">{s.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
