import { Eyebrow, SectionTitle, Body, Pull, NameNote, Section, PhotoRow } from './ui';
import storyPortrait from '../assets/story-portrait.jpg';

export default function MyStory() {
  return (
    <Section id="my-story">
      <PhotoRow src={storyPortrait} alt="Jeremy Champagne" flip>
        <Eyebrow>My Story</Eyebrow>
        <SectionTitle>From engineering to this.</SectionTitle>
        <Body>
          I came up in the structured, analytical world of engineering &mdash; systems, precision,
          problems taken apart until they made sense. Useful training. But over time I felt a pull
          toward working with people instead of parts.
        </Body>
        <Body>
          So I studied: conflict resolution, communication, coaching. And I kept finding the same
          thing &mdash; the deepest changes didn&rsquo;t come from new information. They came from
          someone seeing their own situation differently.
        </Body>
        {/* Restored from v1.3 — the only place the site says what the method *is*. */}
        <Body>
          That became The Champagne Method: a practice rooted in empathy, intentionality, and the
          belief that every person holds the capacity for profound growth.
        </Body>
        <Body>
          Then my path took a turn I didn&rsquo;t plan. A heart attack stopped me cold, and the
          strain of it moved straight into my closest relationships. It could have been the hardest
          season of my life. It became the most honest one &mdash; an invitation to look inward and
          do the growth and healing I didn&rsquo;t know I needed.
        </Body>
        <Pull>The tools I share aren&rsquo;t theory. They&rsquo;re what carried me through.</Pull>
        <NameNote>
          Champagne is my name. And the second fermentation &mdash; the one that actually makes the
          bubbles &mdash; happens sealed in the bottle, under pressure. That parallel wasn&rsquo;t
          lost on me.
        </NameNote>
      </PhotoRow>
    </Section>
  );
}
