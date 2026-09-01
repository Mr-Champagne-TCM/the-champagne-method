import {
  ArticlePage,
  ArticleHeader,
  H2,
  P,
  Callout,
  Cards,
  Card,
  CardStack,
  Bullets,
  ClosingBox,
  TextLink,
} from './ArticleUI';

/** "Human Design, plainly" — a six-minute introduction for someone who has
 *  never heard of any of this.
 *
 *  The copy is approved and ported verbatim from the static mock at
 *  hd-reading-app/docs/hd101-library-draft.html. Do not re-author it.
 *
 *  Load-bearing, do not "tidy":
 *   - "Nothing on your chart is a limit" appears three times on purpose.
 *   - Type proportions stay fractions; published sources disagree on the figures.
 *   - The origin section is verified and deliberately short and unsoftened.
 *   - The call to action says "interpretation", matching the PDF the client holds. */
export default function HumanDesignPlainly() {
  return (
    <ArticlePage
      crumb="Human Design"
      footerNote="Readings describe a Human Design chart and are offered for self-reflection. They are not medical, psychological, legal or financial advice, and they do not predict the future."
    >
      <ArticleHeader
        title="Human Design, plainly"
        standfirst="What it is, what it is not, and the one thing it is actually useful for. No jargon you have to look up."
        readTime="About six minutes"
      />

      <H2>The short version</H2>
      <P>
        Human Design is a map of how <em className="text-brand-paper not-italic font-medium">your</em>{' '}
        energy works, drawn from the exact moment you were born. It is not a personality test
        and it does not predict anything. What it describes is mechanics: where your energy is
        consistent, where it is variable, and how you are built to make a decision.
      </P>

      <Callout>
        Nothing on your chart is a limit. It is a map of where energy flows freely &mdash; and,
        just as usefully, where you are open to everyone else&rsquo;s.
      </Callout>

      <H2>The part most people get backwards</H2>
      <P>
        Every chart has parts that are <strong className="text-brand-paper">defined</strong> and
        parts that are not. The instinct is to read defined as good and the rest as missing.
        That is the wrong way round, and it is the single most useful thing on this page.
      </P>
      <P>
        The parts that are not defined come in{' '}
        <strong className="text-brand-paper">two kinds</strong>, and they do not behave the
        same way. Most explanations of Human Design collapse them into one word. The
        difference is worth the extra minute.
      </P>

      <CardStack>
        <Card title="Defined">
          Consistent. It runs the same way on a good day and a bad one. Reliable, and it is what
          you can be counted on for &mdash; including by yourself.
        </Card>
        <Card title="Undefined">
          Variable, but with a fixed way in. Something of yours reaches this part without
          completing it, so you do not run it under your own power &mdash; yet it always
          arrives through the same door, which is why particular people and particular rooms
          switch it on and others never do. Not absent &mdash;{' '}
          <em className="text-brand-paper">borrowed</em>, and often more strongly felt than the
          person it came from.
        </Card>
        <Card title="Open">
          Variable, with no fixed way in. Nothing of yours reaches here at all, so nothing of
          your own is mixed into what you take on. It is the most changeable part of a chart,
          the hardest to call yours &mdash; and the most accurate instrument you have for
          reading a room, because there is nothing of you in the way.
        </Card>
      </CardStack>

      <P>
        <span className="block mt-6" />
        You can express through every part of your chart. A centre that is not defined is not a
        thing you cannot do &mdash; it is a thing you do{' '}
        <em className="text-brand-paper">through other people</em>, by picking up what they are
        carrying and running it. That is why some rooms make you brilliant and others flatten
        you, and why certain people make you feel switched on in a way you cannot manufacture
        alone.
      </P>
      <P>
        The difference is not <em className="text-brand-paper">can</em> or{' '}
        <em className="text-brand-paper">cannot</em>. It is{' '}
        <strong className="text-brand-paper">ease</strong>. Defined parts move under their own
        power. The other two move when there is something to move with &mdash; and they are also
        where you read a room accurately, because you are feeling it rather than broadcasting
        over it.
      </P>

      <Callout>
        Most people arrive expecting their defined centres to be the good news. It is usually
        the other two that explain the last ten years.
      </Callout>

      <H2>What it is actually for</H2>
      <P>
        Not prediction. <strong className="text-brand-paper">Decisions.</strong>
      </P>
      <P>
        The most practical thing in a chart is your <em className="text-brand-paper">Strategy</em>{' '}
        and <em className="text-brand-paper">Authority</em> &mdash; how you, specifically, are
        built to arrive at a yes or a no. Some people know in their gut immediately. Some need
        to sleep on it and watch the feeling settle. Some get one quiet read in the moment and
        it does not come again.
      </P>
      <P>
        Almost everyone has been taught to decide the same way: think it through, weigh it up,
        make a list. For a good many people that is precisely the wrong instrument &mdash; and
        it is where the decisions they regret came from.
      </P>

      <H2>The five types</H2>
      <P>
        A shorthand for how your energy meets the world. Nobody&rsquo;s type is better than
        anybody else&rsquo;s, and all five need the other four.
      </P>

      <CardStack>
        <Card gold title="Generator" meta="· roughly a third of people">
          Built to respond. Energy arrives when something outside you is worth engaging with.
          Going well: deep satisfaction from work that used you properly. Going badly:
          frustration, and a lot of effort spent on things that never really pulled at you.
        </Card>
        <Card gold title="Manifesting Generator" meta="· roughly a third of people">
          The same engine, in a hurry. Responds, then moves fast and skips steps other people
          think are compulsory. Going well: enormous ground covered. Going badly: half-finished
          things, and people startled by your speed because you did not tell them first.
        </Card>
        <Card gold title="Projector" meta="· about a fifth">
          Built to see other people clearly and guide them. Works through recognition, not
          effort. Going well: your insight is asked for and it lands. Going badly: bitterness
          &mdash; seeing exactly what someone needs and nobody asking.
        </Card>
        <Card gold title="Manifestor" meta="· fewer than one in ten">
          Built to start things without waiting for permission. Going well: initiating, with
          peace around you. Going badly: anger, and the resistance that arrives when people are
          surprised by what you have already begun.
        </Card>
        <Card gold title="Reflector" meta="· about one in a hundred">
          Almost nothing defined, and therefore an unusually accurate instrument for the health of
          a place and the people in it. Going well: surprise and delight. Going badly:
          disappointment, and the sense of having become whatever the room was.
        </Card>
      </CardStack>

      <H2>Your profile: the two numbers</H2>
      <P>
        A profile is written as two numbers &mdash; 2/4, 1/3, 5/1 &mdash; and it describes{' '}
        <em className="text-brand-paper">how you learn and how you connect</em>. The first
        number is the part you are aware of. The second is the part other people see in you long
        before you do.
      </P>

      <Cards>
        <Card title="1 · Investigator">
          Needs to know the foundations. Uneasy until the ground has been checked.
        </Card>
        <Card title="2 · Hermit">
          Natural talent that arrives without study, and a real need for time alone. Gets called
          out of it by other people.
        </Card>
        <Card title="3 · Martyr">
          Learns by trying it and finding out. What looks like failure is the method working.
        </Card>
        <Card title="4 · Opportunist">
          Everything comes through the people already known. Opportunity arrives by network, not
          by application.
        </Card>
        <Card title="5 · Heretic">
          People project solutions onto you. Practical rescuer when it is real, unfairly blamed
          when it is not.
        </Card>
        <Card title="6 · Role Model">
          Lives in three acts &mdash; trial, then a long look from the roof, then example.
          Slower, and worth the wait.
        </Card>
      </Cards>

      <P>
        <span className="block mt-6" />
        So a <strong className="text-brand-paper">2/4</strong> is a natural gift that wants
        solitude, paired with a life that arrives through people who already know you &mdash; a
        hermit with a network. The two halves pull against each other on purpose. Most profiles
        do.
      </P>

      <H2>Channels, and what a name like Charisma means</H2>
      <P>
        A channel is a line joining two centres, and it only completes when both of its numbered
        ends are switched on. There are thirty-six of them and each has a name for what it does
        when it runs.
      </P>
      <P>
        The <strong className="text-brand-paper">34&ndash;20, Charisma</strong> is a fair
        example: it wires raw available power straight to the throat, so energy becomes action
        in the present moment without a committee meeting first. Someone carrying it tends to be
        doing the thing while others are still discussing it.
      </P>

      <Callout>
        You do not need the other thirty-five. Your own chart carries a handful, and those are
        the ones worth knowing &mdash; which is what an interpretation is for.
      </Callout>

      <H2>The Incarnation Cross</H2>
      <P>
        Four gates &mdash; two from the conscious side of your chart, two from the unconscious
        &mdash; combine into a single named theme, like the Right Angle Cross of Eden. It is the
        broadest thing on the page: less about what you do on a Tuesday and more about the shape
        of a life.
      </P>
      <P>
        Roughly two-thirds of people carry a <em className="text-brand-paper">Right Angle</em>{' '}
        cross, which is a life largely about their own path. A{' '}
        <em className="text-brand-paper">Left Angle</em> cross is a life worked out through
        other people. A <em className="text-brand-paper">Juxtaposition</em> cross is the rare
        fixed one in between.
      </P>
      <P>
        It is the part of a chart that means least on first reading and most on the third. Worth
        noting and coming back to.
      </P>

      <H2>Why the birth time matters</H2>
      <P>
        The chart is cast from a moment, not a day. The Sun and the outer planets barely move in
        twenty-four hours, so most of your chart holds without a time &mdash; your gates, most
        of your channels and centres, usually your Type and Authority.
      </P>
      <P>
        The Moon is the fast one. It shifts through the day, and it carries your Profile with
        it. So a chart without a birth time is genuinely useful and honestly incomplete, and any
        reading worth having will say which is which rather than quietly guessing.
      </P>

      <H2>Where it comes from</H2>
      <P>
        Human Design was put together in January 1987 on Ibiza by a Canadian named Robert Alan
        Krakower, who afterwards went by Ra Uru Hu. He described receiving it over eight days
        and nights from what he called a Voice.
      </P>
      <P>
        It draws on four older systems &mdash; the I Ching, Western astrology, the Kabbalah&rsquo;s
        Tree of Life and the Hindu-Brahmin chakra system &mdash; and borrows language from
        genetics and neutrino physics.
      </P>
      <P>
        That is the whole of it, and it is worth saying plainly rather than dressing up: it is
        not ancient, and the origin story asks a lot of you. What it has going for it is not its
        provenance. It is whether the description fits &mdash; which is something you can check
        for yourself in about a week, and the only test that matters here.
      </P>

      <H2>What it cannot do</H2>
      <Bullets
        items={[
          'Predict your future.',
          'Diagnose anything, or replace a doctor or a therapist.',
          'Tell you who to marry or what job to take.',
          <>Excuse anything. &ldquo;That&rsquo;s just my design&rdquo; is not in here.</>,
        ]}
      />
      <P>It is a lens. Try it on, keep what fits, and put down what does not.</P>

      <ClosingBox
        title="See your own"
        /* THIS USED TO POINT AT /#connect, THE FREE COACHING FORM.
           The label promises an interpretation and "a PDF you keep" -- which is
           the chart tier. So the one page where somebody has just learned what
           Human Design is, and might want theirs, sent them to a contact form
           for something else entirely. */
        buttonHref="https://humandesign.thechampagnemethod.co"
        buttonLabel="Get your Human Design interpretation"
        event="hd-interpretation-click"
        aside={
          <>
            Already have your chart?{' '}
            <TextLink href="/library/bodygraph/">How to read your bodygraph</TextLink> walks
            through the picture itself.
          </>
        }
      >
        Your chart, in your words, with the parts that matter to you drawn out &mdash; and a PDF
        you keep.
      </ClosingBox>
    </ArticlePage>
  );
}
