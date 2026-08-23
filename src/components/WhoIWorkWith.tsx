import { Eyebrow, SectionTitle, Section } from './ui';

/**
 * Recognition list, ordered outside-in: external circumstance → present anxiety →
 * interaction pattern → historical residue → self-erasure, then the assumption
 * underneath. The first line is where v1.3's "Navigating Transition" was folded in.
 */
const lines = [
  'Something changed — a job, a move, a marriage ending — and you haven’t found your footing in the new version of it yet.',
  'There’s a specific situation you’re carrying anxiety about right now.',
  'You second-guess yourself in conversations that matter — and replay them afterward.',
  'A breakup or an older relationship left a mark you’re still working around.',
  'You give and give, and somewhere along the way stopped being able to say no.',
];

export default function WhoIWorkWith() {
  return (
    <Section tint>
      <Eyebrow>Who I Work With</Eyebrow>
      <SectionTitle>You might recognize yourself here.</SectionTitle>

      <ul className="list-none p-0 mt-2 mb-7">
        {lines.map((line) => (
          <li
            key={line}
            className="relative max-w-[62ch] py-3 pl-7 border-b border-brand-gold/15 text-[18px] text-brand-paper/85 leading-relaxed"
          >
            <span
              aria-hidden="true"
              className="absolute left-1 top-1.5 text-brand-teal text-2xl leading-normal"
            >
              &middot;
            </span>
            {line}
          </li>
        ))}
      </ul>

      <p className="max-w-[60ch] text-[clamp(1.25rem,2.15vw,1.4375rem)] leading-relaxed text-brand-paper/90">
        Underneath a lot of this sits an old, quiet assumption about what we&rsquo;re worth &mdash;
        usually picked up long ago, rarely examined since.{' '}
        <span className="font-display italic text-brand-gold">
          Most of us are carrying some version of it.
        </span>
      </p>
    </Section>
  );
}
