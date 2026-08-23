import { Eyebrow, SectionTitle, Body, Section } from './ui';

const draws = [
  {
    name: 'Nonviolent Communication',
    note: 'Naming needs and requests so they can actually be heard.',
  },
  { name: 'Somatic work', note: 'What the body is holding, and how to let it move.' },
  {
    name: 'Nervous system awareness',
    note: 'Reading your own state, because what’s possible at rest isn’t what’s possible braced.',
  },
  {
    name: 'Emotions as navigation',
    note: 'Cells in a dish move toward nutrients and away from toxins. Pleasant means move closer. Unpleasant means move away. Your feelings are data, not verdicts.',
  },
  {
    name: 'Belief inquiry',
    note: 'Taking a belief apart to see whether it’s yours, and whether it’s still serving.',
  },
  {
    name: 'Serves me / doesn’t serve me',
    note: 'A measuring stick that works better than right and wrong, because it doesn’t require anyone to be at fault.',
  },
  {
    name: 'The stories we fill gaps with',
    note: 'When information is missing we invent it, then forget we invented it. Finding those seams changes a lot.',
  },
  {
    name: 'Rationalization that hardened into belief',
    note: 'An explanation that made sense once, kept long past the situation that produced it.',
  },
  {
    name: 'Self-empathy',
    note: 'The kind you extend outward all day. Turned around, deliberately.',
  },
  {
    name: 'Cognitive vs. emotional empathy',
    note: 'Understanding someone, versus feeling with them. Knowing which you’re doing changes what you can offer.',
  },
  {
    name: 'A shame-free approach',
    note: 'Too much, not enough, wrong, bad, broken — these are all the same tool, and it isn’t one I use.',
  },
  {
    name: 'Rehearsal while calm',
    note: 'Practicing a new response before you need it, so it’s the one within reach when things get heavy.',
  },
];

export default function HowItAdapts() {
  return (
    <Section>
      <Eyebrow>How It Adapts</Eyebrow>
      <SectionTitle>No single approach reaches everyone.</SectionTitle>
      <Body>
        One person needs a reframe. Another needs to work through the body. Another needs the thing
        said in the language of the beliefs they already hold. I meet you inside your framework
        rather than asking you to adopt mine.
      </Body>

      <div className="mt-8 rounded-2xl border border-brand-gold/20 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-8">
        <h3 className="font-display font-medium text-xl text-brand-paper mb-5">
          What that draws on
        </h3>
        <div className="grid sm:grid-cols-2 gap-x-8">
          {draws.map((d) => (
            <div key={d.name} className="flex gap-3 py-3 border-t border-brand-gold/10">
              <span aria-hidden="true" className="text-brand-teal leading-6">
                &middot;
              </span>
              <div>
                <b className="block font-sans font-semibold text-[17px] text-brand-paper">
                  {d.name}
                </b>
                <span className="block text-[16px] leading-relaxed text-brand-paper/70">{d.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
