/**
 * The Human Design library's behaviour: the script of HD-Library-Flow-Mock-v29.html,
 * typed and scoped to the page, logic unchanged.
 *
 * Every interaction here was approved by Jeremy from real clicks on the mock, and
 * each is pinned by a numbered call in HD-Library-Locked-Calls.md. Comments carry
 * the call numbers. Before changing what something does, find its call; a call
 * changes only when Jeremy changes it.
 *
 * Differences from the mock, all of them about living inside the site:
 * - Everything is looked up inside `root`, and every listener is removed by the
 *   returned cleanup (React runs effects twice in development).
 * - Scroll offsets add the height of the site's fixed nav (NAVH).
 * - Example charts and the sample chart are served from this site.
 * - A link that arrives with an entry in its hash (#channel-10-34, #gate-12,
 *   #profile-5-2, #cross-l-control, #type-projector…) opens that entry. The mock
 *   only wrote these hashes; readings link to them (call 3), so the page reads them.
 * - No review sheet, option pickers or bar switcher (review scaffolding), and no
 *   bubbles (the site Background draws them).
 */
import { AUTHTXT, CHAN, CRIX, CRTXT, CTRTXT, DEFTXT, GATETXT, PROF, TYPETXT, type CrossText } from './data';
import { GATE, HEADC, LBL, LBLBIG, NUDGE, ROBE, SHAPE, SOLAR2 } from './geometry';

export const SHOP = 'https://humandesign.thechampagnemethod.co';
const SAMPLE = '/samples/the-chart.pdf';
const CHARTS = '/samples/charts';

/** Height of the site nav once the page has scrolled (it shrinks after 70px). Matches --navh in the CSS. */
const NAVH = 52;

const CHEV = '<svg viewBox="0 0 12 12"><path d="M2 4l4 4 4-4"/></svg>';
const ICO = {
  def: '<svg class="ico" viewBox="0 0 40 40"><rect x="6" y="6" width="28" height="28" rx="3" fill="#C9A227" stroke="#E8CBA0"/></svg>',
  und: '<svg class="ico" viewBox="0 0 40 40"><rect x="6" y="6" width="28" height="28" rx="3" fill="#213456" stroke="#8DA3CC"/><circle cx="13" cy="13" r="4" fill="#F0F3F9"/><circle cx="27" cy="27" r="4" fill="#7C5BFF"/></svg>',
  opn: '<svg class="ico" viewBox="0 0 40 40"><rect x="6" y="6" width="28" height="28" rx="3" fill="#213456" stroke="#8DA3CC"/></svg>',
};
const CHI = {
  full: '<svg viewBox="0 0 40 40"><path d="M8 32 L32 8" stroke="#2a3d60" stroke-width="7" stroke-linecap="round"/><path d="M8 32 L32 8" stroke="#F0F3F9" stroke-width="4" stroke-linecap="round"/><circle cx="8" cy="32" r="5" fill="#F0F3F9"/><circle cx="32" cy="8" r="5" fill="#F0F3F9"/></svg>',
  half: '<svg viewBox="0 0 40 40"><path d="M8 32 L32 8" stroke="#2a3d60" stroke-width="7" stroke-linecap="round"/><path d="M8 32 L20 20" stroke="#F0F3F9" stroke-width="4" stroke-linecap="round"/><circle cx="8" cy="32" r="5" fill="#F0F3F9"/><circle cx="32" cy="8" r="5" fill="#0E1726" stroke="#8DA3CC"/></svg>',
  none: '<svg viewBox="0 0 40 40"><path d="M8 32 L32 8" stroke="#2a3d60" stroke-width="7" stroke-linecap="round"/><path d="M8 32 L32 8" stroke="#0E1726" stroke-width="4" stroke-linecap="round"/><circle cx="8" cy="32" r="5" fill="#0E1726" stroke="#8DA3CC"/><circle cx="32" cy="8" r="5" fill="#0E1726" stroke="#8DA3CC"/></svg>',
};
const GTI = {
  lit: '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="12" fill="#F0F3F9"/><text x="20" y="21" font-family="Outfit" font-size="12" font-weight="600" text-anchor="middle" dominant-baseline="central" fill="#0E1726">34</text></svg>',
  off: '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="12" fill="#0E1726" stroke="#8DA3CC"/><text x="20" y="21" font-family="Outfit" font-size="12" font-weight="600" text-anchor="middle" dominant-baseline="central" fill="#A9BCD8">34</text></svg>',
};

/** The content's tiny markdown: blank-line paragraphs, and [Centers](#centers) cross-links (call 14). */
const md = (t: string) =>
  t
    .split(/\n\n/)
    .map((p) => '<p>' + p.replace(/\[([^\]]+)\]\((#[a-z-]+)\)/g, '<a class="xref" href="$2">$1</a>') + '</p>')
    .join('');
const md1 = (t: string) => md(t).replace(/^<p>|<\/p>$/g, '');

/* ---------- static data (mock v29) ---------- */
const GC: Record<number, string> = {};
const put = (g: number[], c: string) => g.forEach((x) => (GC[x] = c));
put([64, 61, 63], 'Head');
put([47, 24, 4, 17, 43, 11], 'Ajna');
put([62, 23, 56, 35, 12, 45, 33, 8, 31, 16, 20], 'Throat');
put([1, 13, 25, 46, 2, 15, 10, 7], 'G');
put([21, 40, 26, 51], 'Heart');
put([34, 5, 14, 29, 59, 9, 3, 42, 27], 'Sacral');
put([48, 57, 44, 50, 32, 28, 18], 'Spleen');
put([36, 22, 37, 6, 49, 55, 30], 'Solar Plexus');
put([53, 60, 52, 19, 39, 41, 58, 38, 54], 'Root');
const RAW: [number, number, string][] = [[64, 47, 'Abstraction'], [61, 24, 'Awareness'], [63, 4, 'Logic'], [17, 62, 'Acceptance'], [43, 23, 'Structuring'], [11, 56, 'Curiosity'], [1, 8, 'Inspiration'], [13, 33, 'The Prodigal'], [7, 31, 'The Alpha'], [10, 20, 'Awakening'], [21, 45, 'The Money Line'], [16, 48, 'The Wavelength'], [20, 57, 'The Brainwave'], [20, 34, 'Charisma'], [35, 36, 'Transitoriness'], [12, 22, 'Openness'], [25, 51, 'Initiation'], [2, 14, 'The Beat'], [5, 15, 'Rhythm'], [29, 46, 'Discovery'], [10, 34, 'Exploration'], [10, 57, 'Perfected Form'], [37, 40, 'Community'], [26, 44, 'Surrender'], [34, 57, 'Power'], [27, 50, 'Preservation'], [6, 59, 'Intimacy'], [3, 60, 'Mutation'], [42, 53, 'Maturation'], [9, 52, 'Concentration'], [32, 54, 'Transformation'], [28, 38, 'Struggle'], [18, 58, 'Judgment'], [19, 49, 'Synthesis'], [39, 55, 'Emoting'], [30, 41, 'Recognition']];
const THEME_OF: Record<string, string> = {};
const T = (k: string, l: string[]) => l.forEach((c) => (THEME_OF[c] = k));
T('self', ['10-20', '20-34', '20-57', '34-57', '10-57']);
T('own', ['1-8', '2-14', '3-60', '12-22', '23-43', '24-61', '28-38', '39-55', '10-34', '25-51']);
T('logic', ['4-63', '5-15', '7-31', '9-52', '16-48', '17-62', '18-58']);
T('exp', ['11-56', '13-33', '29-46', '30-41', '35-36', '42-53', '47-64']);
T('tribe', ['19-49', '21-45', '26-44', '32-54', '37-40', '6-59', '27-50']);
/** Channel theme names (call 18). */
const THEMES: [string, string, string][] = [
  ['own', 'Your own way', 'Your own timing; moments of sudden knowing.'],
  ['logic', 'Making sense of patterns', 'Spotting and testing patterns.'],
  ['exp', 'Learning through experience', 'Living it first, making sense after.'],
  ['tribe', 'Looking after your people', 'Support, deals, family, belonging.'],
  ['self', 'Self-powered', 'Getting things done on your own.'],
];
interface Chan { k: string; lo: number; hi: number; n: string; c1: string; c2: string; theme: string }
const CH: Chan[] = RAW.map(([a, b, n]) => {
  const lo = Math.min(a, b), hi = Math.max(a, b), k = `${lo}-${hi}`;
  return { k, lo, hi, n, c1: GC[lo], c2: GC[hi], theme: THEME_OF[k] };
}).sort((x, y) => x.lo - y.lo || x.hi - y.hi);
const CENTERS = ['Head', 'Ajna', 'Throat', 'G', 'Heart', 'Spleen', 'Sacral', 'Solar Plexus', 'Root'];
const CTR_LINE: Record<string, string> = { Head: 'Pressure to think about questions.', Ajna: 'How you make sense of things.', Throat: 'How you speak and act.', G: 'Direction, love and who you are.', Heart: 'Willpower, promises and self-worth.', Spleen: 'Gut instinct and health in the moment.', Sacral: 'Life force and work energy.', 'Solar Plexus': 'Emotions, in waves.', Root: 'Drive and pressure to get going.' };
const NAMES: Record<number, string> = { 1: 'Investigator', 2: 'Hermit', 3: 'Martyr', 4: 'Opportunist', 5: 'Heretic', 6: 'Role Model' };
const VALID: Record<number, number[]> = { 1: [3, 4], 2: [4, 5], 3: [5, 6], 4: [6, 1], 5: [1, 2], 6: [2, 3] };

/* Where-on-your-chart strips (call 26), each linking its own marked example chart (call 52). */
const YC = `<a href="${SAMPLE}">your chart</a>`;
const SUM = `<a href="${SHOP}">The summary</a> ($1.11) and up.`;
const CHT = `<a href="${SHOP}">The chart</a> ($11.11) and up.`;
const WHERE: Record<string, [string, string]> = {
  types: [`The Type line at the top of ${YC}. It comes from which <a class="xref" href="#centers">Centers</a> are colored in.`, SUM],
  authority: [`The Authority line on ${YC}. It comes from your colored-in <a class="xref" href="#centers">Centers</a>.`, SUM],
  centers: [`The nine shapes on the drawing of ${YC}. Gold means colored in.`, SUM + ' The chart draws them.'],
  definition: [`The Definition line on ${YC}.`, SUM],
  profiles: [`The Profile line on ${YC}, like 2/4.`, SUM + ' The reading explains both lines.'],
  channels: [`The colored-in lines joining two shapes on the drawing of ${YC}.`, CHT],
  gates: [`The numbered circles on the drawing of ${YC}. Yours are lit.`, CHT + ' The reading ($44.44) adds the planet behind each.'],
  crosses: [`The Incarnation Cross line on ${YC}.`, SUM],
};
const XNAME: Record<string, string> = { types: 'your type', authority: 'your authority', centers: 'the centers', definition: 'your definition', profiles: 'your profile', channels: 'the channels', gates: 'the gates', crosses: 'the cross' };

/* Hovers (calls 39, 40) */
const TIP_ALL = 'Summary $1.11 · Chart $11.11 · Reading $44.44';
const TIP_TOPIC: Record<string, string> = {
  types: 'Your type is in the summary · $1.11', authority: 'Your authority is in the summary · $1.11', centers: 'Your centers are in the summary · $1.11',
  definition: 'Your definition is in the summary · $1.11', profiles: 'Your profile is in the summary · $1.11', channels: 'Your channels are in the chart · $11.11',
  gates: 'Your gates are in the chart · $11.11', crosses: 'Your cross is in the summary · $1.11',
};

/* Crosses (calls 25, 60) */
const RAX = ['the Sphinx', 'the Vessel of Love', 'Rulership', 'Explanation', 'Contagion', 'Eden', 'Consciousness', 'the Unexpected', 'Service', 'Planning', 'Maya', 'Penetration', 'Laws', 'the Four Ways', 'Tension', 'the Sleeping Phoenix'];
type Kind = 'R' | 'L' | 'J';
const ANG: Record<string, [Kind, string, string]> = {
  'Right Angle · 16': ['R', 'Right Angle', 'More than half of people. A life mostly about your own path.'],
  'Left Angle · 33': ['L', 'Left Angle', 'About a third of people. A life worked out with and through other people.'],
  'Juxtaposition · 64': ['J', 'Juxtaposition', 'About one in twelve. A fixed, steady path between the other two.'],
};
interface CrossRow { n: string; t?: CrossText; g?: number; gates: number[] }
const byName = (a: string, b: string) => a.replace(/^the /, '').localeCompare(b.replace(/^the /, ''));
const CROSSDATA: Record<Kind, CrossRow[]> = {
  R: RAX.map((n) => ({ n, t: CRTXT.right[n], gates: CRIX.RIGHT[n].gates })),
  L: Object.keys(CRTXT.left).sort(byName).map((n) => ({ n, t: CRTXT.left[n], gates: CRIX.LEFT[n].gates })),
  J: Object.entries(CRIX.JUXTA).map(([n, v]) => ({ n, g: v.sunGates[0], gates: v.gates })).sort((a, b) => (a.g ?? 0) - (b.g ?? 0)),
};
const crossId = (k: Kind, n: string) => 'cross-' + (k + '-' + n).toLowerCase().replace(/[^a-z0-9]+/g, '-');

interface Drawing {
  tubes: Record<string, SVGPathElement>;
  ctrs: Record<string, SVGPolygonElement>;
  gs: Record<number, SVGGElement>;
  clear(): void;
}
interface FoldSpec { id: string; title: string; line: string; summary: string; subs?: [string, string][]; group?: string }

export function initHdLibrary(root: HTMLElement): () => void {
  const ac = new AbortController();
  const sig = { signal: ac.signal };
  const observers: (MutationObserver | IntersectionObserver)[] = [];
  const $ = <E extends Element = HTMLElement>(s: string) => root.querySelector(s) as E;
  const $$ = <E extends Element = HTMLElement>(s: string) => [...root.querySelectorAll<E>(s)];
  let booted = false;

  /* Start clean: React's development double-run calls this twice on the same nodes. */
  ['#typeList', '#authTabs', '#authOut', '#ctrStates', '#ctrTabs', '#ctrOut', '#defTabs', '#defOut', '#l1', '#l2', '#profOut', '#lineCards', '#chanStates', '#themeChips', '#chanOut', '#chanAll', '#gateStates', '#gateSel', '#gateOut', '#askedList', '#gateGrid', '#gateOut2', '#angleTabs', '#angleLine', '#crossList'].forEach((s) => ($(s).innerHTML = ''));

  function stateCards(host: HTMLElement, rows: [string, string, string, string][]) {
    host.innerHTML = rows
      .map(([svg, term, plain, mean]) => `<div>${svg.replace('class="ico" ', '')}<span><span class="term">${term}</span><span class="plain">${plain}</span><span class="mean">${mean}</span></span></div>`)
      .join('');
  }

  /* Three depths (call 1): one-line glance, fold-open summary with header links, then one part. */
  function subsHtml(subs: [string, string][]) {
    return (
      (subs.length ? `<div class="jump">${subs.map((s, i) => `<button class="pill" type="button" data-sub="${i}">${s[0]}</button>`).join('')}</div>` : '') +
      subs.map((s) => `<div class="subsec"><button type="button">${s[0]}</button><div class="txt">${s[1]}</div></div>`).join('')
    );
  }
  function wireSubs(host: HTMLElement) {
    host.querySelectorAll<HTMLButtonElement>('.subsec>button').forEach((b) => (b.onclick = () => b.parentElement!.classList.toggle('open')));
    host.querySelectorAll<HTMLButtonElement>('.jump .pill').forEach(
      (b) =>
        (b.onclick = () => {
          const s = host.querySelectorAll('.subsec')[+b.dataset.sub!];
          s.classList.add('open');
          s.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }),
    );
  }
  function fold({ id, title, line, summary, subs = [], group }: FoldSpec) {
    const el = document.createElement('div');
    el.className = 'fold';
    el.id = id;
    el.dataset.group = group || '';
    el.innerHTML = `<button class="head" type="button" aria-expanded="false"><div class="t"><strong>${title}</strong><span>${line}</span></div><span class="chev">${CHEV}</span></button><div class="body"><div><div class="inner"><p class="summary">${summary}</p>${subsHtml(subs)}</div></div></div>`;
    el.querySelector<HTMLButtonElement>('.head')!.onclick = () => toggle(el);
    wireSubs(el);
    return el;
  }
  function toggle(el: HTMLElement, force?: boolean) {
    const open = force ?? !el.classList.contains('open');
    if (open && el.dataset.group)
      $$(`.fold.open[data-group="${el.dataset.group}"]`).forEach((o) => {
        if (o !== el) {
          o.classList.remove('open');
          o.querySelector('.head')!.setAttribute('aria-expanded', 'false');
        }
      });
    el.classList.toggle('open', open);
    el.querySelector('.head')!.setAttribute('aria-expanded', String(open));
    if (open && booted) history.replaceState(null, '', '#' + el.id);
  }
  function pillRow(host: HTMLElement, items: string[], onPick: (it: string) => void, initial?: string) {
    items.forEach((it) => {
      const b = document.createElement('button');
      b.className = 'pill';
      b.type = 'button';
      b.textContent = it;
      b.setAttribute('aria-pressed', String(it === initial));
      b.onclick = () => {
        host.querySelectorAll('.pill').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
        onPick(it);
      };
      host.append(b);
    });
    if (initial) onPick(initial);
  }
  function press(host: HTMLElement, label: string) {
    host.querySelectorAll('.pill').forEach((x) => x.setAttribute('aria-pressed', String(x.textContent === label)));
  }
  /* Short lists: pill row + an always-open panel (call 11). */
  function panel(host: HTMLElement, { title, line, summary, subs }: { title: string; line: string; summary: string; subs: [string, string][] }) {
    host.innerHTML = `<h3>${title}</h3><p class="line">${line}</p><p class="summary">${summary}</p>${subsHtml(subs)}`;
    wireSubs(host);
  }
  function viewSwitch(host: HTMLElement, map: Record<string, HTMLElement>) {
    host.querySelectorAll<HTMLButtonElement>('button').forEach(
      (b) =>
        (b.onclick = () => {
          host.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
          Object.entries(map).forEach(([v, el]) => (el.hidden = v !== b.dataset.v));
        }),
    );
  }
  /* Captions say Click, or Tap on touch screens (call 31). */
  const VERB = () => (matchMedia('(pointer:coarse)').matches ? 'Tap' : 'Click');
  const HINT = { center: () => `${VERB()} a center`, channel: () => `${VERB()} a channel or a center`, gate: () => `${VERB()} numbers or lines` };
  function cap(id: string, html: string, kind: keyof typeof HINT) {
    $('#' + id).innerHTML = `${html}<span class="more">Details below &darr; &middot; ${HINT[kind]()} to change</span>`;
  }
  /* Pills, theme cards and gate links bring the drawing's top into view (call 21);
     a click ON a drawing does not (call 31, changed by Jeremy 10/4): NOJUMP. */
  let NOJUMP = false;
  /* Arriving from a link: land on the entry at once, no long animated scroll. */
  let ARRIVE = false;
  function toTop(block: string) {
    if (!booted || NOJUMP) return;
    const el = $('#' + block);
    const y = el.getBoundingClientRect().top + scrollY - 66 - NAVH;
    window.scrollTo({ top: y, behavior: ARRIVE || Math.abs(y - scrollY) > 1200 ? 'instant' : 'smooth' });
  }

  $$('.where').forEach((w) => {
    const k = w.dataset.w!;
    const [a0, b] = WHERE[k];
    const a = a0.replace(`<a href="${SAMPLE}">`, `<a class="exchart" href="${CHARTS}/example-chart-${k}.pdf" data-tip="Download example chart, marked to show ${XNAME[k]}">`);
    w.innerHTML = `<div><b>Where it is on your chart</b>${a}</div><div><b>Which reading shows it</b>${b}</div>`;
  });

  /* ---------- bodygraph ---------- */
  function drawBG(
    svg: SVGSVGElement,
    opts: { gates?: boolean; onCenter?: (n: string) => void; onChannel?: (k: string) => void; onGate?: (g: number) => void } = {},
  ): Drawing {
    const { gates = true, onCenter, onChannel, onGate } = opts;
    const NS = 'http://www.w3.org/2000/svg';
    const mk = <E extends SVGElement>(t: string, a: Record<string, string | number>, p: Element = svg) => {
      const e = document.createElementNS(NS, t) as E;
      for (const k in a) e.setAttribute(k, String(a[k]));
      p.append(e);
      return e;
    };
    svg.innerHTML = '';
    mk('path', { d: ROBE, class: 'robe' });
    mk('circle', { cx: HEADC[0], cy: HEADC[1], r: HEADC[2], class: 'robe' });
    const tubes: Record<string, SVGPathElement> = {};
    CH.forEach((c) => {
      const [ax, ay] = GATE[c.lo], [bx, by] = GATE[c.hi];
      const n = NUDGE[c.k] || [0, 0];
      const mx = (ax + bx) / 2 + n[0], my = (ay + by) / 2 + n[1];
      const d = `M${ax} ${ay} L${mx} ${my} L${bx} ${by}`;
      mk('path', { d, class: 'tubeedge' });
      tubes[c.k] = mk<SVGPathElement>('path', { d, class: 'tube' });
      if (onChannel) {
        const h = mk<SVGPathElement>('path', { d, class: 'tubehit' });
        h.onclick = () => onChannel(c.k);
      }
    });
    const ctrs: Record<string, SVGPolygonElement> = {};
    CENTERS.forEach((n) => {
      const p = mk<SVGPolygonElement>('polygon', { points: SHAPE[n].map((q) => q.join(',')).join(' '), class: 'ctr' });
      ctrs[n] = p;
      if (onCenter) p.onclick = () => onCenter(n);
      else p.style.cursor = 'default';
      if (gates) {
        const [fs, x, y] = LBLBIG[n];
        const words = n === 'Solar Plexus' ? ['SOLAR', 'PLEXUS'] : [LBL[n][0]];
        words.forEach((w, k) => {
          mk('text', { x, y: y + (k - (words.length - 1) / 2) * fs * 1.05, class: 'lblb', 'font-size': fs, 'text-anchor': 'middle', 'dominant-baseline': 'central' }).textContent = w;
        });
      } else {
        const [t, x, y] = LBL[n];
        mk('text', { x, y, class: 'lbl', 'text-anchor': 'middle', 'dominant-baseline': 'central' }).textContent = t;
        if (n === 'Solar Plexus') mk('text', { x: SOLAR2[0], y: SOLAR2[1], class: 'lbl', 'text-anchor': 'middle', 'dominant-baseline': 'central' }).textContent = 'PLEXUS';
      }
    });
    const gs: Record<number, SVGGElement> = {};
    if (gates)
      for (let g = 1; g <= 64; g++) {
        const [x, y] = GATE[g];
        const grp = mk<SVGGElement>('g', { class: 'g' });
        mk('circle', { cx: x, cy: y, r: 19, class: 'disc' }, grp);
        mk('text', { x, y, class: 'gnum' }, grp).textContent = String(g);
        gs[g] = grp;
        if (onGate)
          grp.onclick = (e) => {
            e.stopPropagation();
            onGate(g);
          };
        else grp.style.pointerEvents = 'none';
      }
    return {
      tubes,
      ctrs,
      gs,
      clear() {
        Object.values(tubes).forEach((t) => t.classList.remove('on'));
        Object.values(ctrs).forEach((c) => c.classList.remove('on', 'rel'));
        Object.values(gs).forEach((g) => g.classList.remove('on', 'rel'));
      },
    };
  }

  /* ---------- TYPES ---------- */
  Object.entries(TYPETXT).forEach(([t, x]) =>
    $('#typeList').append(
      fold({
        id: 'type-' + t.toLowerCase().replace(/ /g, '-'),
        title: t,
        line: md1(x.glance),
        group: 'types',
        summary: md1(x.summary),
        // On track / off track wording (call 45)
        subs: [['How the energy works', md(x.works)], ['When it&rsquo;s on track', md(x.working)], ['When it&rsquo;s off track', md(x.notworking)]],
      }),
    ),
  );

  /* ---------- AUTHORITY (call 11: Emotional default) ---------- */
  pillRow($('#authTabs'), ['Emotional', 'Sacral', 'Splenic', 'Ego', 'Self-Projected', 'Mental', 'Lunar'], (a) => {
    const t = AUTHTXT[a];
    panel($('#authOut'), { title: a + ' authority', line: md1(t.glance), summary: md1(t.summary), subs: [['What it feels like', md(t.feels)], ['Timing', md(t.timing)], ['Common mix-ups', md(t.mixups)]] });
  }, 'Emotional');

  /* ---------- CENTERS: states in three layers (call 13), default Heart (call 12), undefined wording (call 58) ---------- */
  stateCards($('#ctrStates'), [
    [ICO.def, 'Defined', 'Colored in', 'Steadily active within you, on its own. Always yours.'],
    [ICO.und, 'Undefined', 'Not colored in, any gates lit', 'Sometimes active in you, through those gates. The rest of the time it&rsquo;s switched on by other people.'],
    [ICO.opn, 'Open', 'Not colored in, nothing lit', 'Never active on its own. It takes in whatever the people and places around you bring.'],
  ]);
  const bgC = drawBG($<SVGSVGElement>('#bgCenters'), {
    gates: false,
    onCenter: (n) => {
      press($('#ctrTabs'), n);
      pickCenter(n);
      toTop('bbCenters');
    },
  });
  function pickCenter(n: string) {
    const t = CTRTXT[n];
    bgC.clear();
    bgC.ctrs[n].classList.add('on');
    cap('capCenters', `<b>${n === 'Heart' ? 'Heart (Ego)' : n}</b>: ${CTR_LINE[n]}`, 'center');
    panel($('#ctrOut'), {
      title: n === 'Heart' ? 'Heart (also called Ego)' : n,
      line: CTR_LINE[n],
      summary: md1(t.summary),
      subs: [[ICO.def + 'Defined: colored in', md(t.defined)], [ICO.und + 'Undefined: any gates lit', md(t.undefined)], [ICO.opn + 'Open: nothing lit', md(t.open)]],
    });
  }
  pillRow($('#ctrTabs'), CENTERS, (n) => {
    pickCenter(n);
    toTop('bbCenters');
  }, 'Heart');

  /* ---------- DEFINITION (Split default) ---------- */
  pillRow($('#defTabs'), Object.keys(DEFTXT), (d) => {
    const t = DEFTXT[d];
    panel($('#defOut'), { title: d, line: md1(t.glance), summary: md1(t.summary), subs: [['What it&rsquo;s like day to day', md(t.day)], ['How other people fit in', md(t.others)]] });
  }, 'Split');

  /* ---------- PROFILES: approved as built, pick line 1 then line 2 (call 15) ---------- */
  let p1: number | null = null;
  for (let i = 1; i <= 6; i++) {
    const b = document.createElement('button');
    b.type = 'button';
    b.innerHTML = `<b>${i}</b>${NAMES[i]}`;
    b.setAttribute('aria-pressed', 'false');
    b.onclick = () => {
      p1 = i;
      $$('#l1 button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      drawL2();
      $('#profOut').innerHTML = '<p class="empty">And the second number&hellip;</p>';
    };
    $('#l1').append(b);
  }
  function drawL2(sel?: number) {
    $('#l2').innerHTML = '';
    for (let i = 1; i <= 6; i++) {
      const b = document.createElement('button');
      b.type = 'button';
      b.innerHTML = `<b>${i}</b>${NAMES[i]}`;
      b.disabled = !(p1 && VALID[p1].includes(i));
      b.setAttribute('aria-pressed', String(i === sel));
      b.onclick = () => {
        drawL2(i);
        showProfile(p1!, i);
      };
      $('#l2').append(b);
    }
  }
  function showProfile(a: number, b: number) {
    const k = `${a}/${b}`, p = PROF.profiles[k];
    $('#profOut').innerHTML = '';
    $('#profOut').append(
      fold({
        id: `profile-${a}-${b}`,
        title: `<span class="tag teal">Profile</span>${k} &middot; ${NAMES[a]} / ${NAMES[b]}`,
        line: md1(p.glance),
        summary: md1(p.summary),
        subs: [[`Line ${a}: ${NAMES[a]}, the side you know`, md(PROF.lines[a].first)], [`Line ${b}: ${NAMES[b]}, the side others see`, md(PROF.lines[b].second)], ['How the two work together', md(p.together)]],
      }),
    );
    toggle($('#profOut .fold'), true);
  }
  function setProfile(a: number, b: number) {
    p1 = a;
    $$('#l1 button').forEach((x, i) => x.setAttribute('aria-pressed', String(i + 1 === a)));
    drawL2(b);
    showProfile(a, b);
  }
  drawL2();
  setProfile(2, 4);
  for (let i = 1; i <= 6; i++)
    $('#lineCards').append(
      fold({ id: 'line-' + i, title: `<span class="tag gold">Line</span>${i} &middot; ${NAMES[i]}`, line: md1(PROF.lines[i].glance), group: 'lines', summary: md1(PROF.lines[i].summary), subs: [['As your first number', md(PROF.lines[i].first)], ['As your second number', md(PROF.lines[i].second)]] }),
    );

  /* ---------- CHANNELS: drawing visible by default (call 16); themes light it (call 19); full/half/empty (call 29) ---------- */
  stateCards($('#chanStates'), [
    [CHI.full, 'Defined channel', 'Colored in all the way', 'Both gates are lit on your chart. Always on in you.'],
    [CHI.half, 'Hanging gate', 'Half colored in', 'One gate is lit. Someone with the other gate can complete it while you&rsquo;re together.'],
    [CHI.none, 'Open channel', 'Not colored in', 'Neither gate is lit. You can still feel it around people who have it.'],
  ]);
  const ctrName = (n: string) => (n === 'Heart' ? 'Heart (Ego)' : n);
  const ctrWhat = (n: string) => {
    const s = CTR_LINE[n].replace(/\.$/, '');
    return s[0].toLowerCase() + s.slice(1);
  };
  function chanGates(c: Chan) {
    return `<p><a href="#gates" data-g="${c.lo}">Gate ${c.lo}</a> sits in the ${ctrName(c.c1)} (${ctrWhat(c.c1)}). <a href="#gates" data-g="${c.hi}">Gate ${c.hi}</a> sits in the ${ctrName(c.c2)} (${ctrWhat(c.c2)}).</p><p>When both gates are lit on your chart, the channel is colored in. With only one lit, it&rsquo;s half colored in, and someone with the other gate can complete it while you&rsquo;re together. More on this under <a class="xref" href="#gates">Gates</a>.</p>`;
  }
  function chanCard(c: Chan, group: string) {
    const t = CHAN[c.k];
    return fold({ id: `channel-${c.k}`, title: `${c.k} &middot; ${c.n}`, line: md1(t.glance), group, summary: md1(t.summary), subs: [['What it does', md(t.does)], ['When it&rsquo;s working', md(t.working)], [`Its two gates: ${c.lo} and ${c.hi}`, chanGates(c)]] });
  }
  const unpressThemes = () => $$('#themeChips button').forEach((x) => x.setAttribute('aria-pressed', 'false'));
  function chanTheme(t: [string, string, string], fromTap: boolean) {
    const list = CH.filter((c) => c.theme === t[0]);
    bgCh.clear();
    list.forEach((c) => bgCh.tubes[c.k].classList.add('on'));
    cap('capChannels', `<b>${t[1]}</b>: ${list.length} channels, lit above.`, 'channel');
    $('#chanOut').innerHTML = '';
    list.forEach((c) => $('#chanOut').append(chanCard(c, 'chan')));
    if (fromTap) toTop('bbChannels');
  }
  function chanCenter(n: string) {
    unpressThemes();
    bgCh.clear();
    bgCh.ctrs[n].classList.add('on');
    const list = CH.filter((c) => c.c1 === n || c.c2 === n);
    list.forEach((c) => bgCh.tubes[c.k].classList.add('on'));
    cap('capChannels', `<b>${n}</b> has ${list.length} channels, lit above.`, 'channel');
    $('#chanOut').innerHTML = '';
    list.forEach((c) => $('#chanOut').append(chanCard(c, 'chan')));
    toTop('bbChannels');
  }
  function chanPick(k: string) {
    unpressThemes();
    const c = CH.find((x) => x.k === k)!;
    bgCh.clear();
    bgCh.tubes[k].classList.add('on');
    bgCh.ctrs[c.c1].classList.add('rel');
    bgCh.ctrs[c.c2].classList.add('rel');
    bgCh.gs[c.lo].classList.add('on');
    bgCh.gs[c.hi].classList.add('on');
    cap('capChannels', `<b>${k} &middot; ${c.n}</b>, joining ${c.c1} and ${c.c2}.`, 'channel');
    $('#chanOut').innerHTML = '';
    const el = chanCard(c, 'chan');
    $('#chanOut').append(el);
    toggle(el, true);
    toTop('bbChannels');
  }
  const bgCh = drawBG($<SVGSVGElement>('#bgChannels'), { gates: true, onCenter: chanCenter, onChannel: chanPick });
  THEMES.forEach((t, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-pressed', String(i === 0));
    b.innerHTML = `<b>${t[1]}</b><span>${t[2]}</span>`;
    b.onclick = () => {
      $$('#themeChips button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      $('#chanAll').hidden = true;
      chanTheme(t, true);
    };
    $('#themeChips').append(b);
  });
  chanTheme(THEMES[0], false);
  /* "All channels" card, last after the five themes (call 17). Lights all 36 and lists them below. */
  const allCard = document.createElement('button');
  allCard.type = 'button';
  allCard.id = 'chanAllCard';
  allCard.setAttribute('aria-pressed', 'false');
  allCard.innerHTML = '<b>All channels</b><span>All 36, in number order.</span>';
  allCard.onclick = () => {
    $$('#themeChips button').forEach((x) => x.setAttribute('aria-pressed', String(x === allCard)));
    $('#chanAll').hidden = true;
    $('#chanAllBtn').textContent = 'Full list (36)';
    bgCh.clear();
    CH.forEach((c) => bgCh.tubes[c.k].classList.add('on'));
    cap('capChannels', '<b>All channels</b>: 36, lit above.', 'channel');
    $('#chanOut').innerHTML = '';
    CH.forEach((c) => $('#chanOut').append(chanCard(c, 'chan')));
    toTop('bbChannels');
  };
  $('#themeChips').append(allCard);

  /* Channel lists sit in a scroll window (call 36): about 6.5 collapsed cards, never taller than 70% of the
     screen, always ending on a half card. Lists of 6 or fewer get no window. */
  const SHOW = 6.5;
  function fitBox(box: HTMLElement) {
    const cards = [...box.querySelectorAll<HTMLElement>(':scope>.fold')];
    if (box.hidden || cards.length <= 6) {
      box.classList.remove('scrollbox', 'more');
      box.style.maxHeight = '';
      return;
    }
    const keep = box.scrollTop;
    box.classList.add('scrollbox');
    box.style.maxHeight = 'none';
    const c = cards.find((f) => !f.classList.contains('open')) || cards[0], i = cards.indexOf(c), n = cards[i + 1] || cards[i - 1];
    const h = c.getBoundingClientRect().height, gap = Math.abs(n.getBoundingClientRect().top - c.getBoundingClientRect().top) - h;
    const pad = parseFloat(getComputedStyle(box).paddingTop);
    const pitch = h + gap, fit = Math.max(2.5, Math.floor((0.7 * innerHeight) / pitch - 0.5) + 0.5);
    box.style.maxHeight = Math.round(pad + pitch * Math.min(SHOW, fit)) + 'px';
    box.scrollTop = keep;
    shade(box);
  }
  function shade(box: HTMLElement) {
    box.classList.toggle('more', box.scrollTop + box.clientHeight < box.scrollHeight - 4);
  }
  function watchBox(box: HTMLElement, hiddenToo: boolean) {
    const mo = new MutationObserver(() => requestAnimationFrame(() => fitBox(box)));
    mo.observe(box, hiddenToo ? { childList: true, attributes: true, attributeFilter: ['hidden'] } : { childList: true });
    observers.push(mo);
    box.addEventListener('scroll', () => shade(box), { passive: true, ...sig });
  }
  ['#chanOut', '#chanAll'].forEach((sel) => {
    const box = $(sel);
    watchBox(box, true);
    /* an opened card slides (after its 0.3s open animation) to the top of the window, so its text starts in view */
    box.addEventListener(
      'click',
      (e) => {
        const head = (e.target as Element).closest('.fold>.head');
        if (!head || !box.classList.contains('scrollbox')) return;
        const f = head.parentElement as HTMLElement;
        if (f.classList.contains('open')) setTimeout(() => box.scrollTo({ top: f.offsetTop - 8, behavior: 'smooth' }), 340);
        setTimeout(() => shade(box), 800);
      },
      sig,
    );
    fitBox(box);
  });
  addEventListener('resize', () => ['#chanOut', '#chanAll'].forEach((s) => fitBox($(s))), sig);

  CH.forEach((c) => $('#chanAll').append(chanCard(c, 'all')));
  /* "Full list (36)" selects the All channels card and hides while it is selected (call 38). */
  {
    const btn = $<HTMLButtonElement>('#chanAllBtn');
    $('#chanAll').hidden = true;
    btn.textContent = 'Full list (36)';
    btn.onclick = () => allCard.click();
    const sync = () => {
      btn.hidden = allCard.getAttribute('aria-pressed') === 'true';
    };
    const mo = new MutationObserver(sync);
    mo.observe($('#themeChips'), { subtree: true, attributes: true, attributeFilter: ['aria-pressed'] });
    observers.push(mo);
    sync();
  }

  /* A click ON a drawing no longer scrolls the page (call 31, Jeremy 10/4). */
  ['#bgCenters', '#bgChannels', '#bgGates'].forEach((s) =>
    $(s).addEventListener(
      'click',
      () => {
        NOJUMP = true;
        setTimeout(() => (NOJUMP = false), 0);
      },
      { capture: true, ...sig },
    ),
  );

  /* ---------- hovers ---------- */
  const noHover = matchMedia('(hover: none)').matches;
  $$<HTMLAnchorElement>(`a[href="${SAMPLE}"]`).forEach((a) => {
    a.dataset.tip = 'Download example chart';
    /* phones have no hover, so the words carry it (call 43) */
    if (noHover) a.textContent = 'an example chart';
  });
  /* every shop link says what you get and the price (call 40) */
  $$<HTMLAnchorElement>(`a[href="${SHOP}"]`).forEach((a) => {
    const t = a.textContent!.trim(), sec = a.closest('section.topic');
    a.dataset.tip =
      t === 'The summary' ? 'Type, strategy, authority, profile, definition, centers, cross · $1.11'
      : t === 'The chart' ? 'Your drawing, channels and gates · $11.11'
      : sec && TIP_TOPIC[sec.id] ? TIP_TOPIC[sec.id]
      : TIP_ALL;
  });
  /* marked example-chart links read "an example chart" on phones (call 43) */
  if (noHover) $$('a.exchart').forEach((a) => (a.textContent = 'an example chart'));

  /* One tooltip element, two independent hover handlers, as in the mock (each keeps its own `cur`). */
  const tip = $('.tip');
  const place = (a: HTMLElement) => {
    const r = a.getBoundingClientRect(), t = tip.getBoundingClientRect();
    const left = Math.max(8, Math.min(innerWidth - t.width - 8, r.left + r.width / 2 - t.width / 2));
    tip.style.left = left + 'px';
    tip.style.top = r.top - t.height - 10 + 'px';
    tip.style.setProperty('--ax', r.left + r.width / 2 - left + 'px');
  };
  {
    let cur: HTMLElement | null = null;
    const show = (a: HTMLElement) => {
      cur = a;
      tip.textContent = a.dataset.tip!;
      tip.classList.add('on');
      place(a);
    };
    const hide = () => {
      cur = null;
      tip.classList.remove('on');
    };
    $$<HTMLAnchorElement>('a[data-tip]').forEach((a) => {
      a.setAttribute('aria-label', a.textContent + ' (' + a.dataset.tip + ')');
      a.addEventListener('mouseenter', () => show(a), sig);
      a.addEventListener('mousemove', () => {
        if (cur !== a || !tip.classList.contains('on')) show(a);
      }, sig);
      a.addEventListener('focus', () => show(a), sig);
      a.addEventListener('mouseleave', hide, sig);
      a.addEventListener('blur', hide, sig);
    });
    /* a scroll moves the link: follow it while the pointer is still on it, otherwise close */
    addEventListener('scroll', () => {
      if (cur && (cur.matches(':hover') || cur === document.activeElement)) show(cur);
      else hide();
    }, { passive: true, ...sig });
  }
  /* channel links in Gates (and gate cards): what the channel is, and that it opens in Channels (call 53) */
  {
    let cur: HTMLElement | null = null;
    const show = (a: HTMLElement) => {
      const c = CH.find((x) => x.k === a.dataset.ch);
      if (!c) return;
      cur = a;
      tip.textContent = `${c.k} ${c.n}: ${CHAN[c.k].glance} Opens in Channels.`;
      tip.classList.add('on');
      place(a);
    };
    root.addEventListener('mouseover', (e) => {
      const a = (e.target as Element).closest<HTMLElement>('a[data-ch]');
      if (a && a !== cur) show(a);
    }, sig);
    root.addEventListener('mousemove', (e) => {
      const a = (e.target as Element).closest<HTMLElement>('a[data-ch]');
      if (a && !tip.classList.contains('on')) show(a);
    }, sig);
    root.addEventListener('mouseout', (e) => {
      const a = (e.target as Element).closest<HTMLElement>('a[data-ch]');
      if (a && !a.contains(e.relatedTarget as Node)) {
        cur = null;
        tip.classList.remove('on');
      }
    }, sig);
    root.addEventListener('focusin', (e) => {
      const a = (e.target as Element).closest<HTMLElement>('a[data-ch]');
      if (a) show(a);
    }, sig);
    addEventListener('scroll', () => {
      if (cur && cur.matches(':hover')) show(cur);
    }, { passive: true, ...sig });
  }

  /* ---------- Topics bar: "you are here" + progress line (call 44) ---------- */
  {
    const bar = $('nav.topics'), pills = [...bar.querySelectorAll<HTMLAnchorElement>('a.pill')];
    const secs = pills.map((p) => root.querySelector<HTMLElement>(p.getAttribute('href')!));
    let last: number | null = null;
    const spy = () => {
      const y = bar.getBoundingClientRect().bottom + innerHeight * 0.3;
      let now: number | null = null;
      for (let i = 0; i < secs.length; i++) {
        const s = secs[i];
        if (s && s.getBoundingClientRect().top <= y) now = i;
      }
      pills.forEach((p, i) => p.classList.toggle('here', i === now));
      if (now !== null && now !== last) {
        const p = pills[now], box = bar.querySelector<HTMLElement>('.pills')!;
        const l = p.offsetLeft - box.offsetLeft, r = l + p.offsetWidth;
        if (l < box.scrollLeft || r > box.scrollLeft + box.clientWidth) box.scrollTo({ left: l - 40, behavior: 'smooth' });
      }
      last = now;
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.setProperty('--prog', Math.round((100 * scrollY) / Math.max(1, max)) + '%');
    };
    addEventListener('scroll', spy, { passive: true, ...sig });
    spy();
    /* the words under the pills fold away once the bar pins */
    const io = new IntersectionObserver(([e]) => bar.classList.toggle('stuck', !e.isIntersecting), { rootMargin: `-${NAVH + 8}px 0px 0px 0px` });
    io.observe($('#topicsMark'));
    observers.push(io);
  }

  /* ---------- GATES: chart first, then most asked, then all 64 (call 24) ---------- */
  stateCards($('#gateStates'), [
    [GTI.lit, 'Defined gate', 'Lit', 'A steady thing you bring, every day.'],
    [GTI.off, 'Undefined gate', 'Not lit', 'Not yours, but you can meet it in other people.'],
  ]);
  viewSwitch($('#gateView'), { chart: $('#gateChart'), asked: $('#gateAsked'), all: $('#gateAll') });
  function gateFold(g: number, extra: { id?: string; group?: string } = {}) {
    const t = GATETXT[g];
    return fold({
      id: extra.id || 'gate-' + g,
      group: extra.group,
      title: `Gate ${g} &middot; ${t.name} <span class="tag gold">${GC[g]}</span>`,
      line: md1(t.glance),
      summary: md1(t.summary),
      subs: [['What it brings', md(t.brings)], ['Its channels', `<p>${CH.filter((c) => c.lo === g || c.hi === g).map((c) => `<a href="#channels" data-ch="${c.k}">${c.k} ${c.n}</a>`).join(' &middot; ')}</p>`]],
    });
  }
  function gateCard(g: number, host: HTMLElement) {
    host.innerHTML = '';
    const el = gateFold(g);
    host.append(el);
    toggle(el, true);
  }
  root.addEventListener('click', (e) => {
    const a = (e.target as Element).closest<HTMLElement>('a[data-ch]');
    if (!a) return;
    e.preventDefault();
    chanPick(a.dataset.ch!);
  }, sig);
  /* Pick several gates to match your chart, with Clear (calls 48, 50). A line on the drawing adds both its
     gates, no jump (call 49). Both gates of a channel picked says so, with a link. */
  let SEL: number[] = [];
  function renderGates() {
    bgG.clear();
    SEL.forEach((g) => {
      bgG.gs[g].classList.add('on');
      bgG.ctrs[GC[g]].classList.add('rel');
    });
    const both = CH.filter((c) => SEL.includes(c.lo) && SEL.includes(c.hi));
    both.forEach((c) => bgG.tubes[c.k].classList.add('on'));
    const bar = $('#gateSel');
    bar.innerHTML = SEL.length
      ? `<span><b>${SEL.length}</b> ${SEL.length === 1 ? 'gate' : 'gates'} picked</span><button type="button" class="pill" id="gateClear">Clear</button>`
      : '<span>No gates picked. Numbers on the drawing add them.</span>';
    if (SEL.length)
      $<HTMLButtonElement>('#gateClear').onclick = () => {
        SEL = [];
        renderGates();
      };
    bar.insertAdjacentHTML('beforeend', both.map((c) => `<p class="gboth">Both gates of <a href="#channels" data-ch="${c.k}">${c.k} ${c.n}</a> are picked, so that channel runs every day.</p>`).join(''));
    const host = $('#gateOut');
    host.innerHTML = '';
    [...SEL].sort((a, b) => a - b).forEach((g) => host.append(gateFold(g)));
    if (SEL.length === 1) toggle(host.querySelector<HTMLElement>('.fold')!, true);
    cap(
      'capGates',
      SEL.length === 0 ? '<b>No gates picked</b>'
      : SEL.length === 1 ? `<b>Gate ${SEL[0]}</b>, in the ${GC[SEL[0]]}.`
      : `<b>${SEL.length} gates</b> picked${both.length ? `, ${both.length} full ${both.length === 1 ? 'channel' : 'channels'}` : ''}.`,
      'gate',
    );
    if (SEL.length) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'gclear';
      b.textContent = '✕ Clear';
      b.onclick = () => {
        SEL = [];
        renderGates();
      };
      $('#capGates').insertBefore(b, $('#capGates .more'));
    }
  }
  function toggleGate(g: number) {
    const i = SEL.indexOf(g);
    if (i < 0) SEL.push(g);
    else SEL.splice(i, 1);
    renderGates();
  }
  function pickGate(g: number) {
    $<HTMLButtonElement>('#gateView [data-v=chart]').click();
    SEL = [g];
    renderGates();
    toTop('bbGates');
  }
  const bgG = drawBG($<SVGSVGElement>('#bgGates'), {
    gates: true,
    onGate: toggleGate,
    onChannel: (k) => {
      const c = CH.find((x) => x.k === k)!;
      const has = SEL.includes(c.lo) && SEL.includes(c.hi);
      SEL = has ? SEL.filter((g) => g !== c.lo && g !== c.hi) : [...new Set([...SEL, c.lo, c.hi])];
      renderGates();
    },
  });
  SEL = [34];
  renderGates();
  [34, 1, 10, 20, 57, 51, 25, 13].forEach((g) => $('#askedList').append(gateFold(g, { id: 'asked-' + g, group: 'asked' })));
  for (let g = 1; g <= 64; g++) {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = String(g);
    b.setAttribute('aria-pressed', 'false');
    b.onclick = () => {
      $$('#gateGrid button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      gateCard(g, $('#gateOut2'));
    };
    $('#gateGrid').append(b);
  }
  root.addEventListener('click', (e) => {
    const a = (e.target as Element).closest<HTMLElement>('a[data-g]');
    if (!a) return;
    e.preventDefault();
    pickGate(+a.dataset.g!);
  }, sig);

  /* ---------- CROSSES: kind, then that kind's list (call 25); intro option 1 (call 51) ---------- */
  const gList = (gs: number[]) => {
    const a = gs.map((g) => `<a href="#gates" data-g="${g}">${g}</a>`);
    return a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1];
  };
  const FOUR = (gs: number[]) => `<p>Gates ${gList(gs)}.</p><p>These are the gates of the Sun and Earth on a chart: once at birth, and once about three months before.</p>`;
  function crossFold(v: Kind, x: CrossRow, name: string) {
    const id = crossId(v, x.n);
    if (v === 'J') {
      const G = GATETXT[x.g!];
      return fold({ id, title: `${name} Cross of ${x.n}`, line: md1(G.glance), group: 'cross', summary: `A fixed, steady life theme built on gate ${x.g}, ${G.name}. ${G.summary}`, subs: [['Its four gates', FOUR(x.gates) + `<p>Its main gate is <a href="#gates" data-g="${x.g}">gate ${x.g}</a>.</p>`]] });
    }
    const t = x.t!;
    return fold({ id, title: `${name} Cross of ${x.n}`, line: md1(t.glance), group: 'cross', summary: md1(t.summary), subs: ([['The theme', md(t.theme)], ['Its four gates', FOUR(x.gates)]] as [string, string][]).concat(t.living ? [['Living it', md(t.living)]] : []) });
  }
  function showAngle(label: string) {
    const [v, name, line] = ANG[label];
    $('#angleLine').innerHTML = `<b>${name}.</b> ${line}`;
    $('#crossList').innerHTML = '';
    CROSSDATA[v].forEach((x) => $('#crossList').append(crossFold(v, x, name)));
  }
  /* Reads the full name a chart prints, e.g. "Left Angle Cross of Control (26/45 | 6/36)" (calls 3, 60, 61) */
  function crossFind(v: string) {
    let s = v.toLowerCase().replace(/[([].*$/, '').replace(/[.,;:]+$/, '').trim();
    let kind: Kind | null = null;
    const km = /^(right angle|left angle|juxtaposition|rax|lax|jx)\b(?:\s+cross)?(?:\s+of)?\s*/.exec(s);
    if (km) {
      kind = ({ 'right angle': 'R', rax: 'R', 'left angle': 'L', lax: 'L', juxtaposition: 'J', jx: 'J' } as Record<string, Kind>)[km[1]];
      s = s.slice(km[0].length);
    }
    s = s.replace(/^cross of\s+/, '').replace(/^the\s+/, '').replace(/\s+\d+$/, '').replace(/\s+cross\b.*$/, '').trim();
    if (!s) return false;
    const norm = (n: string) => n.toLowerCase().replace(/^the /, '');
    const order: Kind[] = kind ? [kind] : ['R', 'L', 'J'];
    for (const exact of [true, false])
      for (const k of order) {
        const x = CROSSDATA[k].find((x) => {
          const n = norm(x.n);
          return exact ? n === s : s.length > 2 && (n.includes(s) || s.includes(n));
        });
        if (x) {
          openCross(k, x);
          return true;
        }
      }
    return false;
  }
  function openCross(k: Kind, x: CrossRow) {
    const lab = Object.keys(ANG).find((l) => ANG[l][0] === k)!;
    press($('#angleTabs'), lab);
    showAngle(lab);
    go(crossId(k, x.n));
  }
  ['#crossList', '#gateOut'].forEach((s) => {
    const box = $(s);
    watchBox(box, false);
    fitBox(box);
  });
  pillRow($('#angleTabs'), Object.keys(ANG), showAngle, 'Right Angle · 16');

  /* ---------- SEARCH (call 3) ---------- */
  function go(id: string) {
    const el = root.querySelector<HTMLElement>('#' + CSS.escape(id));
    if (el) {
      toggle(el, true);
      setTimeout(() => el.scrollIntoView({ behavior: ARRIVE ? 'instant' : 'smooth', block: 'center' }), 60);
    }
  }
  function runFind(v: string) {
    v = v.trim().toLowerCase();
    let m: RegExpExecArray | null;
    if ((m = /^([1-6])\s*\/\s*([1-6])$/.exec(v))) {
      const a = +m[1], b = +m[2];
      if (!VALID[a].includes(b)) {
        $('#qhint').textContent = `${a}/${b} isn't one of the 12 profiles.`;
        return;
      }
      setProfile(a, b);
      go(`profile-${a}-${b}`);
      return;
    }
    if ((m = /^(\d+)\s*-\s*(\d+)$/.exec(v))) {
      const k = `${Math.min(+m[1], +m[2])}-${Math.max(+m[1], +m[2])}`;
      if (!CH.find((c) => c.k === k)) {
        $('#qhint').textContent = `${k} isn't a channel.`;
        return;
      }
      chanPick(k);
      return;
    }
    if ((m = /^(?:gate\s*)?(\d+)$/.exec(v))) {
      const g = +m[1];
      if (g >= 1 && g <= 64) pickGate(g);
      return;
    }
    if (crossFind(v)) return;
    $('#qhint').textContent = 'Nothing matched that yet. 2/4, 10-34, gate 34 or a cross name all work.';
  }
  /* Crosses has its own search (calls 61, 62) */
  const XHINT = 'Typing the exact name from your chart here opens its entry.';
  function xRun() {
    const v = $<HTMLInputElement>('#xq').value.trim();
    if (!v || crossFind(v)) {
      $('#xqhint').textContent = XHINT;
      return;
    }
    $('#xqhint').textContent = 'No cross by that name yet. The full name from your chart works best, like Right Angle Cross of Eden.';
  }
  $('#xq').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') xRun();
  }, sig);
  $<HTMLButtonElement>('#xqgo').onclick = xRun;
  $('#q').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') runFind((e.target as HTMLInputElement).value);
  }, sig);
  $<HTMLButtonElement>('#qgo').onclick = () => runFind($<HTMLInputElement>('#q').value);

  /* ---------- ENLARGE (call 20): selection carries over; on phones a tap opens it first ---------- */
  const zoom = $('#zoom');
  function openZoom(kind: string) {
    const src = kind === 'gates' ? bgG : bgCh;
    const bgZ = drawBG(
      $<SVGSVGElement>('#bgZoom'),
      kind === 'gates'
        ? { gates: true, onGate: (g) => { closeZoom(); pickGate(g); } }
        : { gates: true, onCenter: (n) => { closeZoom(); chanCenter(n); }, onChannel: (k) => { closeZoom(); chanPick(k); } },
    );
    const copy = (a: Record<string, Element>, b: Record<string, Element>) =>
      Object.keys(a).forEach((id) => ['on', 'rel'].forEach((c) => {
        if (a[id].classList.contains(c) && b[id]) b[id].classList.add(c);
      }));
    copy(src.tubes, bgZ.tubes);
    copy(src.ctrs, bgZ.ctrs);
    copy(src.gs, bgZ.gs);
    $('#zoomHint').textContent = kind === 'gates' ? HINT.gate() + '.' : HINT.channel() + '.';
    zoom.classList.add('on');
    const p = $('#zoomPan');
    p.scrollLeft = (p.scrollWidth - p.clientWidth) / 2;
  }
  function closeZoom() {
    zoom.classList.remove('on');
  }
  zoom.addEventListener('click', (e) => {
    const t = e.target as Element;
    if (t === zoom || t.classList.contains('x')) closeZoom();
  }, sig);
  $$<HTMLButtonElement>('[data-z]').forEach((b) => (b.onclick = () => openZoom(b.dataset.z!)));
  ['bgChannels', 'bgGates'].forEach((id) =>
    $('#' + id).addEventListener('click', (e) => {
      if ($('#' + id).getBoundingClientRect().width < 480) {
        e.stopPropagation();
        e.preventDefault();
        openZoom(id === 'bgGates' ? 'gates' : 'channels');
      }
    }, { capture: true, ...sig }),
  );

  booted = true;

  /* ---------- arriving on an entry: readings link straight to one (call 3) ---------- */
  function openHash(raw: string) {
    const id = decodeURIComponent(raw.replace(/^#/, ''));
    if (!id) return false;
    let m: RegExpExecArray | null;
    if ((m = /^profile-([1-6])-([1-6])$/.exec(id))) {
      if (!VALID[+m[1]].includes(+m[2])) return false;
      setProfile(+m[1], +m[2]);
      go(id);
      return true;
    }
    if ((m = /^channel-(\d+)-(\d+)$/.exec(id))) {
      if (!CH.find((c) => c.k === `${m![1]}-${m![2]}`)) return false;
      chanPick(`${m[1]}-${m[2]}`);
      return true;
    }
    if ((m = /^gate-(\d+)$/.exec(id))) {
      const g = +m[1];
      if (g < 1 || g > 64) return false;
      pickGate(g);
      return true;
    }
    if ((m = /^cross-([rlj])-(.+)$/.exec(id))) {
      const k = m[1].toUpperCase() as Kind;
      const x = CROSSDATA[k].find((x) => crossId(k, x.n) === id);
      if (!x) return false;
      openCross(k, x);
      return true;
    }
    const el = root.querySelector<HTMLElement>('#' + CSS.escape(id));
    if (el && el.classList.contains('fold')) {
      go(id);
      return true;
    }
    return false;
  }
  /* On arrival, once the page is built (a timer, not a frame: a page opened in a background tab gets no frames). The browser's own jump to a section
     anchor (#centers) still happens as normal; this only handles entries, which do not exist until built. */
  const first = setTimeout(() => {
    ARRIVE = true;
    if (!openHash(location.hash)) {
      const el = location.hash && root.querySelector<HTMLElement>('#' + CSS.escape(decodeURIComponent(location.hash.slice(1))));
      if (el) el.scrollIntoView({ block: 'start', behavior: 'instant' });
    }
    setTimeout(() => (ARRIVE = false), 120);
  }, 0);
  addEventListener('hashchange', () => openHash(location.hash), sig);

  return () => {
    ac.abort();
    clearTimeout(first);
    observers.forEach((o) => o.disconnect());
    zoom.classList.remove('on');
    tip.classList.remove('on');
  };
}
