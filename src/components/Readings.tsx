import { Eyebrow, SectionTitle, Lede, Body, Cta, Section } from './ui';

/**
 * The Human Design readings, on the main site.
 *
 * WHY IT EXISTS AT ALL. Stripe's account review asks that "your business
 * website must be accessible and include detailed information about your
 * business and the products you sell", and thechampagnemethod.co is the
 * website on file. It mentioned Human Design twice in passing and linked to
 * nothing -- so somebody checking, human or automated, found a coaching site
 * with no route to the thing the payments are for. The page that describes all
 * three properly already existed at /readings/ and simply was not reachable
 * from here.
 *
 * ITS OWN SECTION, NOT INSIDE "Free Resources". That block opens "Take the
 * tools. They're yours." Putting something priced inside it would make the
 * free promise read as a lead-in to a sale, which is the register this site
 * avoids -- and it would be the first dishonest thing on the page.
 *
 * NO PRICES HERE. They live in one place, on the readings page, next to what
 * each one actually contains. A number on its own invites a decision nobody
 * has enough to make yet.
 */
export default function Readings() {
  return (
    <Section id="readings">
      <Eyebrow>Human Design readings</Eyebrow>
      <SectionTitle>Your chart, read three ways.</SectionTitle>
      <Lede>
        Human Design is a map of how your energy works &mdash; how it starts, how a
        decision settles, what you take in from the people around you. A reading is that
        map, drawn from your birth moment and written to your chart alone.
      </Lede>
      <Body>
        There are three ways in. A written summary of the named parts of your chart; the
        chart itself, drawn, as a page you keep and a document you can print; and the full
        reading, where every section names the feature of your chart it rests on. Nothing
        is held back from the smaller ones to make the larger ones look better.
      </Body>
      <Body>
        Two pieces in the library explain every word of it, and both are free and always
        will be &mdash; worth reading first if the language is new.
      </Body>

      <Cta href="/readings/">See what each reading is &rarr;</Cta>
    </Section>
  );
}
