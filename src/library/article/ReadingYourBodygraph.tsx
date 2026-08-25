import type { ReactNode } from 'react';
import {
  ArticlePage,
  ArticleHeader,
  H2,
  H3,
  P,
  Callout,
  Cards,
  Card,
  TextLink,
} from './ArticleUI';

/** "Reading your bodygraph" — for someone already holding a paid interpretation,
 *  asking "what am I looking at?"
 *
 *  Copy approved and ported verbatim from the static mock at
 *  hd-reading-app/hosting/public/guide/index.html. Do not re-author it.
 *
 *  The swatch colours below are the chart's own colours and must keep matching
 *  the app's rendering: white for Personality, violet for Design, split for
 *  both, and the recessed navy for open. */
const SWATCH_FRAME = '#354B73';

function Swatch({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 74 22" aria-hidden="true" className="w-[74px] h-[22px] mt-1 shrink-0">
      <rect x="0" y="6" width="74" height="10" rx="1" fill={SWATCH_FRAME} />
      {children}
    </svg>
  );
}

function LegendRow({ swatch, title, children }: { swatch: ReactNode; title: string; children: ReactNode }) {
  return (
    <li className="flex gap-4 items-start">
      {swatch}
      <div>
        <h3 className="font-sans text-[17px] font-semibold text-brand-paper mb-1">{title}</h3>
        <p className="text-[16px] leading-relaxed text-brand-paper/80">{children}</p>
      </div>
    </li>
  );
}

export default function ReadingYourBodygraph() {
  return (
    <ArticlePage
      crumb="Reading your bodygraph"
      footerNote="Your chart was cast for your exact birth moment. If the birth time on your reading is wrong, the Type, Authority and Profile can change — tell us and we will recast it."
    >
      <ArticleHeader
        title="Reading your bodygraph"
        standfirst={
          <>
            The chart in your reading is a wiring diagram, not a verdict. Here is how to read
            the picture &mdash; what the colours mean, what the shapes mean, and what it means
            when a line &mdash; a <em className="text-brand-paper">channel</em> &mdash; is only
            half filled in.
          </>
        }
      />

      <H2>Start with what it is not</H2>
      <P>
        <strong className="text-brand-paper">More is not better.</strong> Every activation on
        this chart adds <em className="text-brand-paper">detail</em>, not value. A page with
        more colour on it is not a better page, and nobody is scoring yours.
      </P>
      <P>
        A centre or a channel that is not activated is{' '}
        <strong className="text-brand-paper">not a deficit</strong>. You can still express
        through it &mdash; everybody does, constantly. It simply does not carry the same
        energetic ease as the parts of you that are defined. Knowing which is which is the
        entire point: it tells you where you are running downhill and where you are pedalling.
      </P>
      <P>
        What the drawing actually shows is{' '}
        <strong className="text-brand-paper">
          where your energy is consistent and where it is not
        </strong>{' '}
        &mdash; and the inconsistent places are usually where the interesting part of your life
        happens.
      </P>
      <P>
        Read it the way you would read a floor plan of a house you already live in. You know the
        house. This just shows you why the living room is where everyone ends up.
      </P>

      <H2>Centres, channels and gates</H2>
      <P>
        Three words, and then you have the whole vocabulary. This is deliberately shallow &mdash;
        you do not need the theory to read your own chart.
      </P>

      <Cards>
        <Card title="Centres">
          The nine shapes &mdash; squares, triangles, diamonds. Each one governs a different kind
          of energy. You will also hear them called <em className="text-brand-paper">engines</em>{' '}
          &mdash; the two words mean the same thing and we use them interchangeably.
        </Card>
        <Card title="Channels">
          The lines running between centres. A channel wires two centres together. There are
          thirty-six of them.
        </Card>
      </Cards>

      <P>
        <span className="block mt-6" />
        <strong className="text-brand-paper">Gates</strong> are the numbered circles at each end
        of a channel &mdash; sixty-four in all. A channel has one gate at each end, and it takes{' '}
        <em className="text-brand-paper">both</em> of them switched on for that channel to
        complete. That single rule explains most of what you are about to look at.
      </P>
      <P>
        You do not need to memorise any of it. The numbers are there so that when your reading
        says <em className="text-brand-paper">this comes from your 34&ndash;57</em>, you can put
        a finger on the place it means.
      </P>

      <H2>The colours</H2>
      <P>
        Every channel and every gate is in one of four states. This is the whole vocabulary
        &mdash; once you have these four, the rest of the chart is just where they sit.
      </P>

      <ul className="list-none p-0 mt-6 mb-2 grid gap-6">
        <LegendRow
          title="Personality"
          swatch={
            <Swatch>
              <rect x="0" y="8" width="74" height="6" fill="#F0F3F9" />
            </Swatch>
          }
        >
          Conscious. The part you would describe about yourself if someone asked. You recognise
          these when you read them, sometimes with a wince.
        </LegendRow>
        <LegendRow
          title="Design"
          swatch={
            <Swatch>
              <rect x="0" y="8" width="74" height="6" fill="#7C5BFF" />
            </Swatch>
          }
        >
          Unconscious. The part your body runs without asking permission. Other people usually
          see these in you long before you do.
        </LegendRow>
        <LegendRow
          title="Both — the split one"
          swatch={
            <Swatch>
              <rect x="0" y="8" width="74" height="3" fill="#7C5BFF" />
              <rect x="0" y="11" width="74" height="3" fill="#F0F3F9" />
            </Swatch>
          }
        >
          Held consciously <em className="text-brand-paper">and</em> unconsciously at the same
          time. This is the one everybody asks about.
        </LegendRow>
        <LegendRow
          title="Open"
          swatch={
            <Swatch>
              <rect x="0" y="8" width="74" height="6" fill="#213456" />
            </Swatch>
          }
        >
          Not activated. Not missing, not broken &mdash; this is where you take the world in
          rather than broadcast it.
        </LegendRow>
      </ul>

      <H2>What the split colour actually means</H2>
      <P>
        A gate can be switched on from two directions at once: once by your Personality and once
        by your Design. When both land on the same gate, it draws in both colours, split down
        the length.
      </P>
      <P>
        In practice that means the theme is{' '}
        <strong className="text-brand-paper">doubled</strong>. You know you do it,{' '}
        <em className="text-brand-paper">and</em> your body does it whether you decided to or
        not. There is no gap between the intention and the reflex.
      </P>

      <Callout>
        A doubled gate is usually the thing people describe you with when you are not in the
        room. It is the least negotiable part of the chart &mdash; and the part that is hardest
        to talk yourself out of at two in the morning.
      </Callout>

      <P>
        It is not extra credit and it is not a warning. It is a note about{' '}
        <em className="text-brand-paper">reliability</em>: this one will show up under pressure,
        when the more considered parts of you have gone quiet.
      </P>

      <H2>Your centres: filled and open</H2>
      <P>
        Each of the nine centres is either filled in or it is not, and that single fact is the
        most load-bearing thing on the page.
      </P>

      <Cards>
        <Card title="Filled">
          Consistent. This runs the same way on a good day and a bad one. It is what other
          people can rely on you for, and what you can rely on yourself for.
        </Card>
        <Card title="Open">
          Variable. It amplifies whatever is around it. This is where you read a room accurately
          &mdash; and where you can mistake someone else&rsquo;s weather for your own.
        </Card>
      </Cards>

      <P>
        <span className="block mt-6" />
        Most people expect the filled centres to be the good news. Usually it is the open ones
        that explain the last ten years.
      </P>

      <H2>The half-filled channels</H2>
      <P>
        When both of a channel&rsquo;s gates are switched on, it fills all the way across and
        the two centres it joins are wired together permanently. That is the easy case.
      </P>

      <H3>When only half of it fills</H3>
      <P>
        That is a channel you carry one end of. It is not a partial version of the whole thing
        and it is not a deficiency. It means the other half arrives{' '}
        <em className="text-brand-paper">through other people</em> &mdash; and it completes the
        moment you are near someone who carries the opposite end.
      </P>
      <P>
        This is worth sitting with, because it is the mechanical explanation for something you
        have already noticed: certain people make you feel switched on in a way you cannot
        reproduce alone. Those are not always the people who are good for you. They are the
        people who complete the circuit.
      </P>

      <H2>Do this with it</H2>
      <P>
        A reading you agree with and then file away changes nothing. Here is the week that makes
        it worth what you paid for it.
      </P>

      <H3>1. Pick the line that stung</H3>
      <P>
        Go back through your reading and find the sentence you either recognised instantly or
        wanted to argue with. Both reactions mean the same thing. Write that one sentence
        somewhere you will see it &mdash; not the whole reading, one line.
      </P>

      <H3>2. Run your Authority once, on purpose</H3>
      <P>
        Your reading names an Authority. Give it exactly one real decision this week and
        actually follow it. If yours is <strong className="text-brand-paper">Sacral</strong>,
        answer something out loud in the first two seconds and do not revise it. If yours is{' '}
        <strong className="text-brand-paper">Emotional</strong>, take a decision you would
        normally close today and deliberately sleep on it. If yours is{' '}
        <strong className="text-brand-paper">Splenic</strong>, act on the first quiet read you
        get and do not wait for it to repeat &mdash; it will not.
      </P>
      <P>One decision. Not your career. Something with real stakes and a short fuse.</P>

      <H3>3. Write down what happened</H3>
      <P>
        Two lines is enough. What you decided, and how it landed. Do that for a week and you
        will have something the chart could never give you on its own: your own evidence.
      </P>

      {/* The mock's closing aside, ported verbatim. Its placeholder link pointed at the
          site root with a comment saying both the href and the visible text change once
          the HD 101 entry exists. It exists now, so both are updated here. */}
      <Callout>
        <strong className="font-semibold">Then go further.</strong> One week tells you whether
        this is real for you. If it is, the rest of the work &mdash; the experiments, the
        library, and the readings that go deeper than one page &mdash; starts with{' '}
        <TextLink href="/library/human-design/">Human Design, plainly</TextLink> and{' '}
        <TextLink href="/library/">the library</TextLink>. Bring your notes.
      </Callout>

      <P>If it holds up, it was never information. It was a mirror, and you already knew.</P>
    </ArticlePage>
  );
}
