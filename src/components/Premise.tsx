import { Eyebrow, SectionTitle, Lede, Body, Section, PhotoRow } from './ui';
import heroPortrait from '../assets/hero-portrait.jpg';

export default function Premise() {
  return (
    <Section>
      <PhotoRow src={heroPortrait} alt="Jeremy Champagne">
        <Eyebrow>The Premise</Eyebrow>
        <SectionTitle>The questions are the work.</SectionTitle>
        <Lede>
          Courageous, curious, sincere ones. The kind you can&rsquo;t answer on autopilot &mdash;
          where the first response that arrives isn&rsquo;t quite the true one, and the true one
          takes a moment to surface.
        </Lede>
        <Body>
          I&rsquo;m not here to hand you a conclusion. I&rsquo;m here to hold steady, open space
          while we work together to find yours, because the answers you arrive at yourself are the
          ones that hold.
        </Body>
        <p className="max-w-[60ch] text-brand-muted leading-relaxed">
          Expanding your awareness and expanding your consciousness are the same motion. Everything
          else follows from there.
        </p>
      </PhotoRow>
    </Section>
  );
}
