import { useEffect, useRef } from 'react';
import Background from '../../components/Background';
import { Nav, Footer } from '../article/ArticleUI';
import { initHdLibrary, SHOP } from './engine';

/**
 * The Human Design library: every part of a chart, one layer at a time.
 *
 * PORTED FROM HD-Library-Work/mocks/HD-Library-Flow-Mock-v29.html, the version
 * Jeremy approved, with its 62 locked calls (HD-Library-Locked-Calls.md). The
 * static markup is here as JSX; the interactive parts (folds, pill rows, the
 * three clickable bodygraphs, gate multi-pick, crosses, search, hovers, the
 * Topics bar) are the mock's own script, typed, in engine.ts, run once the
 * markup is mounted. That was chosen over a rewrite into React state because
 * every behaviour was approved by real clicks on that script, and a rewrite
 * is where calls get lost.
 *
 * React renders this once and never again (no state), so the engine owns the
 * insides of the containers it fills and React never fights it for them.
 */
export default function HdLibrary() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    return initHdLibrary(ref.current);
  }, []);

  return (
    <div className="font-sans text-brand-paper">
      <Background />
      <div className="relative z-10">
        <Nav />
        <main className="pt-16 sm:pt-20">
          <div className="hdlib" ref={ref}>
            <div className="wrap">
              <header className="hero">
                <span className="eyebrow">The Library · Human Design</span>
                <h1>
                  Every part of a chart, <em>one layer</em> at a time.
                </h1>
                <p className="sub">A line to start. A tap if it pulls at you. As deep as you like after that.</p>
                <div className="find">
                  <input id="q" type="search" placeholder="2/4, 10-34, gate 34, Vessel of Love…" aria-label="Find an entry" />
                  <button className="btn" id="qgo" type="button">
                    Find
                  </button>
                  <span className="hint" id="qhint">
                    Anything on your chart or reading takes you straight there.
                  </span>
                </div>
                <div className="how">
                  <div>
                    <b>
                      <span className="num">1</span>One part per section
                    </b>
                    Each section below is one part of a Human Design chart.
                  </div>
                  <div>
                    <b>
                      <span className="num">2</span>Your chart picks from each
                    </b>
                    You have one type, one profile, a handful of channels. A reading names yours.{' '}
                    <a href={SHOP}>Get yours!</a>
                  </div>
                  <div>
                    <b>
                      <span className="num">3</span>Tap to go deeper
                    </b>
                    Start with the one-line version. Open only what interests you.
                  </div>
                </div>
                <div className="map">
                  <a href="#types">
                    <b>Types</b>
                    <span>How your energy moves</span>
                  </a>
                  <a href="#authority">
                    <b>Authority</b>
                    <span>Where your yes comes from</span>
                  </a>
                  <a href="#centers">
                    <b>Centers</b>
                    <span>The nine hubs on the chart</span>
                  </a>
                  <a href="#definition">
                    <b>Definition</b>
                    <span>How your hubs connect</span>
                  </a>
                  <a href="#profiles">
                    <b>Profiles</b>
                    <span>How you learn and meet people</span>
                  </a>
                  <a href="#channels">
                    <b>Channels</b>
                    <span>What runs in you all the time</span>
                  </a>
                  <a href="#gates">
                    <b>Gates</b>
                    <span>The 64 numbered points</span>
                  </a>
                  <a href="#crosses">
                    <b>Crosses</b>
                    <span>The big-picture life theme</span>
                  </a>
                </div>
              </header>

              {/* Marks where the Topics bar sits in the flow, so it can tell when it has pinned. */}
              <div id="topicsMark" style={{ height: 1 }} />
              <nav className="topics" aria-label="Topics">
                <div className="pills">
                  <span className="lab">Topics</span>
                  {TOPICS.map(([id, label, sub]) => (
                    <a key={id} className="pill" href={`#${id}`}>
                      {label}
                      <small>{sub}</small>
                    </a>
                  ))}
                </div>
              </nav>

              {/* TYPES */}
              <section className="topic" id="types">
                <span className="eyebrow">How energy moves</span>
                <h2>
                  Types<span className="count">5</span>
                </h2>
                <p className="tldr">
                  Five ways energy moves.
                  <span className="pull">Which one you are sets the rhythm for everything else.</span>
                </p>
                <p className="yours">
                  Your chart has one of these five. <a href={SHOP}>See which is yours &rarr;</a>
                </p>
                <div className="where" data-w="types" />
                <div id="typeList" />
                <p className="alt">
                  <b>Other names you might see:</b> the off-track feeling is often called the <b>not-self</b> or{' '}
                  <b>not-self theme</b>. It doesn&rsquo;t mean someone isn&rsquo;t being themselves. It&rsquo;s the
                  feeling that shows up when life is lived against their design, and it points the way back. The
                  on-track feeling is often called the <b>signature</b>.
                </p>
              </section>

              {/* AUTHORITY */}
              <section className="topic" id="authority">
                <span className="eyebrow">How you decide</span>
                <h2>
                  Strategy &amp; Authority<span className="count">7</span>
                </h2>
                <p className="tldr">
                  How you&rsquo;re built to make decisions.
                  <span className="pull">The answer is already in you. This is where it speaks.</span>
                </p>
                <p className="yours">
                  You have one authority, and it depends on your{' '}
                  <a className="xref" href="#centers">
                    Centers
                  </a>
                  . <a href={SHOP}>Find yours &rarr;</a>
                </p>
                <div className="where" data-w="authority" />
                <div className="tabs" id="authTabs" />
                <div className="panel" id="authOut" />
                <p className="alt">
                  <b>Other names you might see:</b> Emotional is also called <b>Solar Plexus</b>. Ego is also called{' '}
                  <b>Heart</b>. Self-Projected is also called <b>G</b> or <b>Self</b>. Some sites join type and
                  authority into one label, so &ldquo;Emotional Generator&rdquo; means a Generator with Emotional
                  authority.
                </p>
              </section>

              {/* CENTERS */}
              <section className="topic" id="centers">
                <span className="eyebrow">The nine hubs</span>
                <h2>
                  Centers<span className="count">9</span>
                </h2>
                <p className="tldr">
                  Nine hubs on the chart. Each one is colored in, or not.
                  <span className="pull">
                    Colored in is steady and yours. Not colored in is where you take in other people.
                  </span>
                </p>
                <p className="yours">
                  Your chart colors in some of the nine and leaves the rest. <a href={SHOP}>See your chart &rarr;</a>
                </p>
                <div className="where" data-w="centers" />
                <div className="states" id="ctrStates" />
                <div className="tabs" id="ctrTabs" />
                <div className="bgblock" id="bbCenters">
                  <svg className="bgsvg" id="bgCenters" viewBox="-95 -15 1035 1575" aria-label="Bodygraph centers" />
                  <p className="bgcap" id="capCenters" />
                </div>
                <div className="panel" id="ctrOut" style={{ marginTop: 12 }} />
              </section>

              {/* DEFINITION */}
              <section className="topic" id="definition">
                <span className="eyebrow">How it links up</span>
                <h2>
                  Definition<span className="count">5</span>
                </h2>
                <p className="tldr">
                  Whether your colored-in{' '}
                  <a className="xref" href="#centers">
                    Centers
                  </a>{' '}
                  are joined up, or sit in separate groups.
                  <span className="pull">It shapes how you take things in and think them through.</span>
                </p>
                <p className="yours">
                  Your chart has one of these. <a href={SHOP}>See yours &rarr;</a>
                </p>
                <div className="where" data-w="definition" />
                <div className="tabs" id="defTabs" />
                <div className="panel" id="defOut" />
                <p className="alt">
                  <b>Other names you might see:</b> &ldquo;Split &ndash; Small&rdquo; or &ldquo;Split &ndash;
                  Wide&rdquo; says how far apart the two groups sit.
                </p>
              </section>

              {/* PROFILES (approved, call 15) */}
              <section className="topic" id="profiles">
                <span className="eyebrow">How you learn and connect</span>
                <h2>
                  Profiles<span className="count">12</span>
                </h2>
                <p className="tldr">
                  Two numbers, like 2/4. The first is the part of you that you know.
                  <span className="pull">The second is the part others see first.</span>
                </p>
                <p className="yours">
                  You have one profile. A reading names it and explains both lines. <a href={SHOP}>See yours &rarr;</a>
                </p>
                <div className="where" data-w="profiles" />
                <div className="picker">
                  <label>First number (the part you&rsquo;re aware of)</label>
                  <div className="lines" id="l1" />
                  <label>Second number (the part others meet first)</label>
                  <div className="lines" id="l2" />
                  <div id="profOut" />
                </div>
                <p className="alt">
                  <b>Where the two numbers come from:</b> your birth date and time. A reading works them out for you.
                </p>
                <div id="lineCards" />
              </section>

              {/* CHANNELS */}
              <section className="topic" id="channels">
                <span className="eyebrow">What runs all the time</span>
                <h2>
                  Channels<span className="count">36</span>
                </h2>
                <p className="tldr">
                  A channel is a line joining two{' '}
                  <a className="xref" href="#centers">
                    Centers
                  </a>
                  . When it&rsquo;s colored in on your chart, that pairing is a steady part of how you work.
                  <span className="pull">Most charts have between two and six.</span>
                </p>
                <p className="yours">
                  Your colored-in channels show on your chart&rsquo;s drawing. <a href={SHOP}>See which you have &rarr;</a>
                </p>
                <div className="where" data-w="channels" />
                <div className="example">
                  <span className="tag teal">Example</span>
                  <b>20-34 &middot; Charisma</b> joins the Sacral (life energy) to the Throat (speaking and doing).
                  <p>
                    If it&rsquo;s colored in on your chart, your energy can go straight into action. You tend to be
                    doing the thing while others are still talking about it. That&rsquo;s what &ldquo;all the
                    time&rdquo; means: it doesn&rsquo;t wait for anyone else to switch it on.
                  </p>
                </div>
                <div className="states" id="chanStates" />
                <p className="lead">
                  <b>New to this?</b> Each kind below lights up its channels on the drawing. <b>Know your chart?</b> A
                  channel or a center on the drawing opens it.
                </p>
                <div className="themechips" id="themeChips" />
                <div className="bgblock" id="bbChannels">
                  <svg className="bgsvg big" id="bgChannels" viewBox="-95 -15 1035 1575" aria-label="Bodygraph channels" />
                  <p className="bgcap" id="capChannels" />
                  <div className="bgtools">
                    <button type="button" data-z="channels">
                      &#10530; Enlarge
                    </button>
                    <button type="button" id="chanAllBtn">
                      Full list (36)
                    </button>
                  </div>
                </div>
                <div id="chanOut" />
                <div id="chanAll" hidden />
              </section>

              {/* GATES */}
              <section className="topic" id="gates">
                <span className="eyebrow">The numbered points</span>
                <h2>
                  Gates<span className="count">64</span>
                </h2>
                <p className="tldr">
                  The small numbered circles on the chart. Your chart lights up about 26 of them.
                  <span className="pull">
                    A gate is a quality. A{' '}
                    <a className="xref" href="#channels">
                      Channel
                    </a>{' '}
                    is two gates joined, and something flows between them.
                  </span>
                </p>
                <p className="yours">
                  A reading lists every gate you have, with the planet behind each. <a href={SHOP}>See yours &rarr;</a>
                </p>
                <div className="where" data-w="gates" />
                <div className="example">
                  <span className="tag teal">Example</span>
                  <b>Gate 34</b> sits in the Sacral and is about raw power to do things.
                  <ul>
                    <li>
                      <b>A gate is a quality.</b> Gate 34&rsquo;s quality is power.
                    </li>
                    <li>
                      <b>A channel is a flow.</b> Two gates joined, so energy moves from one center to another.
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <b>Only 34 lit:</b> the power is yours, every day.
                    </li>
                    <li>
                      <b>34 and 20 both lit:</b> the power has a way out, straight into action. That&rsquo;s the{' '}
                      <a href="#channels" data-ch="20-34">
                        channel 20-34
                      </a>
                      , and it runs every day.
                    </li>
                    <li>
                      <b>Only 34 lit, with someone who has 20:</b> the flow switches on while you&rsquo;re together.
                    </li>
                  </ul>
                </div>
                <div className="states" id="gateStates" />
                <div className="view" id="gateView">
                  <button type="button" data-v="chart" aria-pressed="true">
                    On the chart
                  </button>
                  <button type="button" data-v="asked" aria-pressed="false">
                    Most asked
                  </button>
                  <button type="button" data-v="all" aria-pressed="false">
                    All 64
                  </button>
                </div>
                <div id="gateChart">
                  <div className="bgblock" id="bbGates">
                    <svg className="bgsvg big" id="bgGates" viewBox="-95 -15 1035 1575" aria-label="Bodygraph gates" />
                    <p className="bgcap" id="capGates" />
                    <div className="bgtools">
                      <button type="button" data-z="gates">
                        &#10530; Enlarge
                      </button>
                    </div>
                  </div>
                  <div id="gateSel" />
                  <div id="gateOut" />
                </div>
                <div id="gateAsked" hidden>
                  <p className="lead">The gates people ask about most.</p>
                  <div id="askedList" />
                </div>
                <p className="alt" id="gateLines">
                  <b>Other names you might see:</b> a reading lists gates like <b>46.4</b>: gate 46, line 4. Every
                  gate has six lines, the same six as in{' '}
                  <a className="xref" href="#profiles">
                    Profiles
                  </a>
                  .
                </p>
                <div id="gateAll" hidden>
                  <div className="picker">
                    <div className="gates" id="gateGrid" />
                  </div>
                  <div id="gateOut2" />
                </div>
              </section>

              {/* CROSSES (call 25: pick the kind, see its list) */}
              <section className="topic" id="crosses">
                <span className="eyebrow">The widest view</span>
                <h2>
                  Incarnation Crosses<span className="count">192</span>
                </h2>
                <p className="tldr">
                  Four of your{' '}
                  <a className="xref" href="#gates">
                    Gates
                  </a>{' '}
                  combine into one life theme.
                  <span className="pull">Less about a Tuesday, more about the shape of a life.</span>
                </p>
                <p className="yours">
                  Your chart prints your cross&rsquo;s full name. <a href={SHOP}>See yours &rarr;</a>
                </p>
                <div className="where" data-w="crosses" />
                <div className="xintro">
                  <ul>
                    <li>
                      <b>What it is:</b> the big-picture theme of a life. It often comes into focus with age.
                    </li>
                    <li>
                      <b>Which four gates:</b> the gates your Sun and Earth were in, at your birth and about three
                      months before.
                    </li>
                    <li>
                      <b>Where to find them:</b> on your chart, in brackets after the cross name, like{' '}
                      <b>(36/6 | 11/12)</b>. The first pair is your Sun and Earth at birth, the second about three
                      months before. A cross isn&rsquo;t a place on the body drawing.{' '}
                      <a
                        className="exchart"
                        href="/samples/charts/example-chart-crosses.pdf"
                        data-tip="Download example chart, marked to show where the cross and its four gates are"
                      >
                        It&rsquo;s marked on an example chart
                      </a>
                      .
                    </li>
                    <li>
                      <b>The three kinds:</b> your{' '}
                      <a className="xref" href="#profiles">
                        Profile
                      </a>{' '}
                      decides which. Right Angle, most people: a life mostly about your own path. Left Angle: a life
                      lived with and through others. Juxtaposition, only the 4/1: a fixed path between the two.
                    </li>
                  </ul>
                </div>
                <div className="find xfind">
                  <input id="xq" type="search" placeholder="Search your cross here" aria-label="Find a cross" />
                  <button className="btn" id="xqgo" type="button">
                    Find
                  </button>
                  <span className="hint" id="xqhint">
                    Typing the exact name from your chart here opens its entry.
                  </span>
                </div>
                <div className="tabs" id="angleTabs" />
                <p className="lead" id="angleLine" />
                <div id="crossList" />
                <p className="alt">
                  <b>Other names you might see:</b> RAX, LAX and JX are short for Right Angle, Left Angle and
                  Juxtaposition. A number after the name (&ldquo;Vessel of Love 4&rdquo;) says which of its versions it
                  is.
                </p>
              </section>

              <div className="cta">
                <p>Seeing your own chart makes all of this easier to follow.</p>
                <a className="btn" href={SHOP}>
                  Get your reading &rarr;
                </a>{' '}
                <a className="btn ghost" href="/#connect">
                  Start a conversation
                </a>
              </div>
            </div>
            {/* Outside .wrap on purpose: .wrap is its own stacking layer (z-index 10), which would put the
                enlarged view under the site nav. Here it covers the nav, as it covers the whole mock. */}
            <div className="zoom" id="zoom">
              <div className="box">
                <button className="x" type="button" aria-label="Close">
                  &times;
                </button>
                <div className="pan" id="zoomPan">
                  <svg className="bgsvg big" id="bgZoom" viewBox="-95 -15 1035 1575" />
                </div>
                <p id="zoomHint">Tap a channel, a center or a number.</p>
              </div>
            </div>
            <div className="tip" role="tooltip" />
          </div>
        </main>
        <Footer
          note={
            <>
              Source material: Ra Uru Hu and the{' '}
              <a
                href="https://www.jovianarchive.com/"
                rel="noopener"
                className="text-brand-teal underline underline-offset-4 decoration-brand-teal/40 hover:decoration-brand-teal"
              >
                Jovian Archive
              </a>
              . Every word here is The Champagne Method&rsquo;s own, written plainly and offered for self-reflection.
            </>
          }
        />
      </div>
    </div>
  );
}

/** The Topics bar: id, label, and the word or two under each pill (v21, call 44). */
const TOPICS: [string, string, string][] = [
  ['types', 'Types', 'your energy'],
  ['authority', 'Authority', 'how you decide'],
  ['centers', 'Centers', 'the nine hubs'],
  ['definition', 'Definition', 'how they link'],
  ['profiles', 'Profiles', 'how you learn'],
  ['channels', 'Channels', 'always on'],
  ['gates', 'Gates', 'the 64 points'],
  ['crosses', 'Crosses', 'life theme'],
];
