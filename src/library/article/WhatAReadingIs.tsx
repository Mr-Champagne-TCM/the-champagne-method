import { useEffect, useState } from 'react';
import { ArticlePage, ArticleHeader, H2, P, TextLink } from './ArticleUI';

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
 * bodygraph below is what the engine draws, and the PDF is what the download
 * hands over. Both come from the SAME example already published on the shop --
 * 25 June 1985, Chicago, birth time unknown -- so nobody's chart is on show and
 * the two pages cannot disagree about what an example looks like.
 */

const SHOP = 'https://humandesign.thechampagnemethod.co';

/** The example's own values. Copied from a real engine run, not invented. */
const EXAMPLE: Array<[string, string]> = [
  ['Type', 'Manifesting Generator'],
  ['Strategy', 'Wait to respond, then inform'],
  ['Authority', 'Sacral'],
  ['Profile', '1/3 — Investigator / Martyr'],
  ['Definition', 'Split'],
  ['Not-Self Theme', 'Frustration'],
  ['Signature', 'Satisfaction'],
  ['Incarnation Cross', 'Right Angle Cross of Service (52/58 | 17/18)'],
  ['Defined centres', 'Ajna · Throat · G · Sacral · Spleen · Root'],
  ['Open centres', 'Head · Heart · Solar Plexus'],
];

const CHANNELS = '17-62 (Acceptance) · 10-20 (Awakening) · 2-14 (The Beat) · 18-58 (Judgment)';

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
      crumb="What a reading is"
      parent={{ label: 'Human Design readings', href: SHOP }}
      wide
    >
      <ArticleHeader
        eyebrow="The Champagne Method · Human Design readings"
        title="What each reading actually is"
        standfirst="Three ways in, and what arrives with each. Every sample on this page is real output from the same example chart, not a picture of one."
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
            'Profile, Definition, Signature and Not-Self Theme.',
            'Your incarnation cross, and which centres are defined and which are open.',
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
            25 June 1985, Chicago, birth time unknown. A chart cast without a
            time says so, and the parts that depend on one are marked provisional
            rather than quietly guessed.
          </NotYours>
        </Tier>

        <Tier
          name="The chart"
          price="$11.11"
          standfirst="Everything in the summary, and the bodygraph itself — the picture people mean when they say they have seen their chart."
          contains={[
            'Your bodygraph, drawn: the nine centres, which are filled, and every channel running between them.',
            'Your channels named, and your activated gates numbered.',
            'A page you can share, and a PDF you keep.',
            'The same drawing at print size, so it is readable on paper.',
          ]}
        >
          <div className="mt-6">
            <SampleBodygraph />
          </div>
          <NotYours>
            the same example, drawn. Its channels are {CHANNELS}.
          </NotYours>
          <p className="mt-5 text-[16px] leading-relaxed text-brand-paper/85">
            And the document that comes with it —{' '}
            <TextLink href="/samples/the-chart.pdf">
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
            Every paragraph names the feature of your chart it rests on — “because
            your Sacral centre is defined…”, “because your channel 10-20 joins…” —
            so nothing in it could have been written about somebody else.
          </p>
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
          buy: the birth details are used to work out the chart and then
          discarded — not kept, not logged, not written to disk.
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
          <TextLink href="/library/human-design/">Human Design, plainly</TextLink>{' '}
          for what the system is and is not, and{' '}
          <TextLink href="/library/bodygraph/">Reading your bodygraph</TextLink>{' '}
          for the picture itself.
        </P>
      </div>
    </ArticlePage>
  );
}
