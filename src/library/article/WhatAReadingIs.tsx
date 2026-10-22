import { useEffect, useState } from 'react';
import { ArticlePage, ArticleHeader, BrandEyebrow, H2, P, TextLink } from './ArticleUI';

/**
 * What the three readings actually are.
 *
 * Jeremy asked for this after walking his own upgrade path: "We need a page
 * that they can access that describes the tiers in more detail." The offer page
 * has one sentence per tier, which is enough to price something and not enough
 * to choose between two of them.
 *
 * IT LIVES HERE, NOT ON THE SHOP. His call, and it is the cheap one: this repo
 * deploys to GitHub Pages for nothing, while every publish of the shop costs
 * Netlify credits. A page that will be edited for its wording rather than its
 * behaviour belongs on the side that is free to edit.
 *
 * EVERY SAMPLE IS REAL OUTPUT. Not a mock-up, not a screenshot of a design: the
 * bodygraph is what the engine draws, the PDF is what the download hands over,
 * and the reading is what the model actually wrote -- all four samples from ONE
 * chart, so the page cannot contradict itself.
 *
 * IT IS NO LONGER THE SHOP'S EXAMPLE, and that is the point. The reading tier
 * was the only one with no evidence, and a written interpretation cannot be
 * invented for a page like this -- it names the chart it came from in almost
 * every paragraph. So the whole page moved to a chart that HAS one.
 *
 * IT IS JEREMY CHAMPAGNE'S OWN CHART (Jeremy 10/16: "one example everywhere
 * ... OK to use mine", "9-17-83 3:17am Wichita Falls, Texas -- my name is
 * OK"). The same chart is the shop's example summary, this page's table,
 * drawing, PDF and excerpt, and the library's marked example charts. All of it
 * comes from ONE real shop record (a reading-tier purchase he made on 16 Oct
 * 2026), through hd-site tools/sample-from-record.mjs: the PDF is the chart
 * tier exactly as the shop builds it, with his name and the birth line the
 * record keeps. Two centers defined and one channel: a simple drawing, so a
 * buyer's own will look richer next to it.
 *
 * Before 10/16 the samples were an unnamed chart whose birth details were
 * never kept; nothing of it remains on this page.
 */

const SHOP = 'https://humandesign.thechampagnemethod.co';

/**
 * The example's own values: Jeremy Champagne's chart, copied from his shop
 * record (engine 0.5.0), not invented. The on-track and off-track rows use the
 * shop's own labels and order (its PDF: "When it's on track -- The feeling is
 * satisfaction"), not the system's names Signature and Not-Self Theme (fix 11).
 */
const EXAMPLE: Array<[string, string]> = [
  ['Type', 'Manifesting Generator'],
  ['Strategy', 'Wait to respond, then inform'],
  ['Authority', 'Sacral'],
  ['Profile', '2/4 — Hermit / Opportunist'],
  ['Definition', 'Single'],
  ['When it’s on track', 'The feeling is satisfaction'],
  ['When it’s off track', 'The feeling is frustration'],
  ['Incarnation Cross', 'Right Angle Cross of Eden (6/36 | 12/11)'],
  ['Defined centers', 'Throat · Sacral'],
  ['Undefined centers', 'Ajna · Heart · Spleen · Solar Plexus · Root'],
  ['Open centers', 'Head · G'],
  // Since 10/22 the summary lists these too, as values (Jeremy: "gates/channels go to summary
  // (with no explanation)"), copied from the same record.
  ['Channels', '20-34 (Charisma)'],
  ['Activated gates', '4, 6, 9, 11, 12, 20, 26, 28, 33, 34, 36, 45, 47, 50, 60'],
];

const CHANNELS = '20-34 (Charisma)';

/** Whose chart every sample on this page is (his leave, 10/16). */
const WHOSE = 'Jeremy Champagne’s own chart — September 17, 1983, 3:17 AM, Wichita Falls, Texas';

/**
 * Two of the eleven sections, verbatim.
 *
 * AN EXCERPT, NOT THE READING. Publishing 1,300 words here would be giving the
 * product away on the page that sells it. Two sections are enough to show what
 * the writing is like and that it is genuinely about THIS chart -- "Because
 * these open centers have no gates at all, nothing of your own mixes into what
 * you take in" could not have been written about anybody else -- and it is the
 * three-state model, on the page that sells it.
 *
 * Jeremy's own reading (his shop record, written 16 Oct 2026), the same two
 * sections as before, copied out of the record character for character.
 * Not edited, not tidied, not shortened. If it needed cleaning up before it
 * could be shown, that would be worth knowing rather than hiding.
 */
const READING_SAMPLE: Array<{ heading: string; lede?: string; paragraphs: string[] }> = [
  {
    heading: 'How you decide',
    lede: "Your decisions emerge from physical sounds and sensations rather than mental logic.",
    paragraphs: [
      "Your Sacral center acts as your inner authority, giving you guttural sounds and bodily pulls that know what is correct for you. This physical intelligence does not need reasons or arguments; it simply registers whether you have the fuel for something or not. You learn to trust these immediate bodily yes and no responses over any story your mind tries to construct.",
      "Your single definition works alongside your Sacral authority by letting your entire physical design process decisions without internal hesitation. Because your defined centers are already linked, your gut response has full access to your expression in the Throat without second-guessing. You discover that waiting for this clear physical signal keeps you aligned with your true path.",
    ],
  },
  {
    heading: 'What you take in from others',
    lede: "Your uncolored centers act as sensitive receptors for the shifting energies of other people and environments.",
    paragraphs: [
      "Your undefined Ajna, Heart, Spleen, Solar Plexus, and Root centers are areas where particular gates catch and amplify the energies carried by people around you. In these undefined spaces, you experience inconsistent pressures, survival fears, emotional waves, and mental certainties that belong entirely to others. You notice how easily these specific spots get switched on when certain rooms or individuals surround you.",
      "Your open Head and G centers take in the wider environment in whole, absorbing mental confusion and questions of identity without any filters of your own. Because these open centers have no gates at all, nothing of your own mixes into what you take in from the collective atmosphere. You observe how visiting different places alters your mental focus and your sense of direction entirely.",
    ],
  },
];

/** All eleven, as headed in his reading, so the two above are visibly a sample and not the whole thing. */
const ALL_SECTIONS = [
  'Your incarnation cross',
  'Your definition',
  'Your channels',
  'Your profile lines',
  'Your energy, and how it starts',
  'How you decide',
  'How you meet the world',
  'What is consistently yours',
  'What you take in from others',
  "When it's on track, and when it's off track",
  'Things to experiment with',
];

/**
 * The drawing, fetched and put in the page rather than loaded as an <img>.
 *
 * An SVG in an <img> is its own document and cannot reach this page's Outfit,
 * so every label would fall back to whatever the device has, take different
 * metrics, and land on top of the graphics. The label positions were solved
 * against Outfit; the font has to be the page's.
 *
 * Fetched rather than inlined in the bundle because it is 184 KB, and a
 * marketing page should not carry that before it is scrolled to.
 */
function SampleBodygraph() {
  const [svg, setSvg] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch('/samples/bodygraph.svg')
      .then((r) => (r.ok ? r.text() : Promise.reject(new Error('no'))))
      .then((t) => alive && setSvg(t))
      .catch(() => alive && setFailed(true));
    return () => {
      alive = false;
    };
  }, []);

  if (failed) return null;
  return (
    <div className="rounded-2xl border border-brand-gold/25 bg-white/[0.04] p-3 sm:p-5">
      <div
        className="mx-auto max-w-[30rem] [&>svg]:h-auto [&>svg]:w-full"
        role="img"
        aria-label="An example bodygraph, drawn by the engine"
        dangerouslySetInnerHTML={svg ? { __html: svg } : undefined}
      >
        {svg ? undefined : (
          <p className="py-16 text-center text-[15px] text-brand-muted">Drawing…</p>
        )}
      </div>
    </div>
  );
}

function Tier({
  name,
  price,
  standfirst,
  contains,
  children,
}: {
  name: string;
  price: string;
  standfirst: string;
  contains: string[];
  children?: React.ReactNode;
}) {
  return (
    <section className="border-t border-brand-gold/15 pt-10 mt-12 first:mt-0 first:border-0 first:pt-0">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h2 className="font-display text-[clamp(1.5rem,3.4vw,2rem)] font-medium tracking-tight text-brand-gold">
          {name}
        </h2>
        <span className="font-display text-[1.5rem] leading-none text-brand-teal tabular-nums">
          {price}
        </span>
      </div>
      <p className="mt-4 max-w-[62ch] text-[17px] leading-relaxed text-brand-paper/90">
        {standfirst}
      </p>
      <ul className="mt-5 max-w-[62ch] space-y-2">
        {contains.map((line) => (
          <li key={line} className="flex gap-3 text-[16px] leading-relaxed text-brand-paper/85">
            <span aria-hidden className="mt-[0.6em] h-[5px] w-[5px] shrink-0 rounded-full bg-brand-teal" />
            <span>{line}</span>
          </li>
        ))}
      </ul>
      {children}
    </section>
  );
}

/** Every sample is labelled, every time. Nobody should wonder whose chart it is. */
function NotYours({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 text-[14px] leading-relaxed text-brand-muted">
      <span className="font-semibold uppercase tracking-[0.14em] text-brand-gold/90">
        An example, not yours
      </span>{' '}
      — {children}
    </p>
  );
}

export default function WhatAReadingIs() {
  return (
    <ArticlePage
      hd
      crumb="What a reading is"
      parent={{ label: 'Human Design readings', href: SHOP }}
      wide
    >
      <ArticleHeader
        eyebrow={<BrandEyebrow lead="Human Design readings" />}
        title="What each reading actually is"
        standfirst="Three ways in, and what arrives with each. Every sample on this page is real output from one real chart — the drawing, the document and the writing all came out of the machine exactly as you see them."
      />

      <P>
        The same person is described three times, in more detail each time.
        Nothing is withheld from the smaller ones to make the larger ones look
        better — a summary is the whole summary, and what the others add is more
        of the chart rather than the rest of it.
      </P>

      <div className="mt-10">
        <Tier
          name="The summary"
          price="$1.11"
          standfirst="The named parts of a chart, as words. No picture, and nothing blurred out."
          contains={[
            'Type, Strategy and Authority — how your energy works, what it responds to, and how a decision settles.',
            'Profile and Definition, and how it feels when it is on track and when it is off track.',
            'Your incarnation cross, and which centers are defined, which are undefined, and which are open.',
            'Your channels and your activated gates, listed as values — the library explains each one.',
            'A page you can come back to for a year.',
          ]}
        >
          <div className="mt-6 overflow-hidden rounded-2xl border border-brand-gold/25 bg-white/[0.04]">
            <dl className="divide-y divide-brand-gold/10">
              {EXAMPLE.map(([label, value]) => (
                <div key={label} className="grid gap-1 px-5 py-3 sm:grid-cols-[13rem_1fr] sm:gap-4">
                  <dt className="font-sans text-[13px] uppercase tracking-[0.12em] text-brand-muted/80">
                    {label}
                  </dt>
                  <dd className="text-[16px] leading-snug text-brand-paper">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <NotYours>
            {WHOSE}. Every sample on this page comes from it.
          </NotYours>
        </Tier>

        <Tier
          name="The chart"
          price="$11.11"
          standfirst="Everything in the summary, and the bodygraph itself — the picture people mean when they say they have seen their chart."
          contains={[
            'Your bodygraph, drawn: the nine centers, which ones are colored in, and every channel running between them.',
            'Every channel and gate from the summary, in its place on the drawing.',
            'A page you can share, and a PDF you keep.',
            'The same drawing at print size, so it is readable on paper.',
          ]}
        >
          <div className="mt-6">
            <SampleBodygraph />
          </div>
          <NotYours>
            the same chart, drawn. Its one channel is {CHANNELS}.
          </NotYours>
          <p className="mt-5 text-[16px] leading-relaxed text-brand-paper/85">
            And the document that comes with it —{' '}
            <TextLink href="/samples/the-chart.pdf" download="TCM-Example-Chart.pdf">
              the example chart as a PDF
            </TextLink>
            , exactly as it downloads.
          </p>
        </Tier>

        <Tier
          name="The reading"
          price="$44.44"
          standfirst="Everything in the chart, and the written interpretation — the part that says what any of it means for the person holding it."
          contains={[
            'All twenty-six activations, with the planet behind each one.',
            'Your incarnation cross, your definition, your channels and your profile lines, each written out.',
            'Six sections on how your energy starts, how you decide, how you meet people, what is constant in you, what you take in from others, and what it feels like when it is working.',
            'Four things to experiment with, each naming the part of your chart it comes from.',
            'Around 1,200 words, written to your chart and no one else’s.',
          ]}
        >
          <p className="mt-6 max-w-[62ch] text-[16px] leading-relaxed text-brand-muted">
            Every paragraph names the feature of your chart it rests on, so
            nothing in it could have been written about somebody else. Two of the
            eleven sections from the same chart as everything else on this page,
            word for word:
          </p>

          <div className="mt-6 space-y-7 rounded-2xl border border-brand-gold/25 bg-white/[0.04] p-5 sm:p-7">
            {READING_SAMPLE.map((s) => (
              <section key={s.heading}>
                <h3 className="font-sans text-[13px] uppercase tracking-[0.14em] text-brand-gold/90">
                  {s.heading}
                </h3>
                {s.lede && (
                  <p className="mt-2 max-w-[62ch] font-display text-[18px] italic leading-relaxed text-brand-paper">
                    {s.lede}
                  </p>
                )}
                {s.paragraphs.map((para) => (
                  <p
                    key={para.slice(0, 40)}
                    className="mt-3 max-w-[62ch] text-[16px] leading-relaxed text-brand-paper/85"
                  >
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </div>
          <NotYours>
            an excerpt. The full reading has all eleven sections, around 1,200
            words, and is written to one chart only.
          </NotYours>

          <p className="mt-7 max-w-[62ch] text-[16px] leading-relaxed text-brand-paper/85">
            {/* FIX 19, OPTION A (Jeremy 10/20 "2A"): it said "the other nine" and then listed
                eleven. All eleven now, the two shown above marked in gold. */}
            All eleven, so you can see the shape of the whole thing (the two above in gold):
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-2">
            {ALL_SECTIONS.map((h) => {
              const shown = READING_SAMPLE.some((r) => r.heading === h);
              return (
                <li
                  key={h}
                  className={
                    shown
                      ? 'rounded-full border border-brand-gold/70 bg-brand-gold/10 px-3 py-1 text-[14px] text-brand-gold'
                      : 'rounded-full border border-brand-gold/20 px-3 py-1 text-[14px] text-brand-muted'
                  }
                >
                  {h}
                </li>
              );
            })}
          </ul>
        </Tier>
      </div>

      <div className="mt-14 border-t border-brand-gold/15 pt-10">
        <H2>Every route costs the same</H2>
        <P>
          Start with the summary and move up later, or go straight to the
          reading: the total is identical either way. What you have already paid
          comes off what you pay next, and the link in your email is what proves
          it — so opening the next step from there means the credit is already on
          the price.
        </P>
        <P>
          Your reading is kept for a year. Nothing is stored that you did not
          buy: the birth details are kept with your summary, your chart and your
          reading, so moving up never means typing them again, and your PDF can
          show when and where you were born.
        </P>
        <p className="mt-8">
          <a
            href={SHOP}
            className="inline-block rounded-full bg-brand-teal px-6 py-3 font-sans text-[16px] font-semibold text-[#0d1b1a] shadow-lg shadow-brand-teal/25 transition-all duration-200 hover:-translate-y-0.5"
          >
            See the three ways in
          </a>
        </p>
      </div>

      <div className="mt-12 border-t border-brand-gold/15 pt-10">
        <H2>Before you buy anything</H2>
        <P>
          Two pieces in the library explain the words on this page, and both are
          free and always will be:{' '}
          <TextLink href="/library/human-design/">The Human Design library</TextLink>{' '}
          for what the system is and is not, and{' '}
          <TextLink href="/library/bodygraph/">Reading your bodygraph</TextLink>{' '}
          for the picture itself.
        </P>
      </div>
    </ArticlePage>
  );
}
