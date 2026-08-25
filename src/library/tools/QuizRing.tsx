import { useState } from 'react';
import ShareResults from './ShareResults';

/** Which ring are you on? — emotional granularity, felt not read.
 *  Each moment offers three true-ish words at rising resolution. */
const MOMENTS = [
  {
    prompt: 'A friend cancels plans at the last minute.',
    words: ['Bad', 'Disappointed', 'Dismissed'],
  },
  {
    prompt: 'A project you care about finally moves forward.',
    words: ['Good', 'Relieved', 'Vindicated'],
  },
  {
    prompt: 'Someone talks over you in a conversation that matters.',
    words: ['Annoyed', 'Frustrated', 'Discounted'],
  },
  {
    prompt: 'An evening alone stretches out in front of you.',
    words: ['Fine', 'Restless', 'Untethered'],
  },
  {
    prompt: 'A person you admire compliments your work.',
    words: ['Happy', 'Proud', 'Seen'],
  },
];

export default function QuizRing() {
  const [picks, setPicks] = useState<(number | null)[]>(MOMENTS.map(() => null));
  const [done, setDone] = useState(false);

  const complete = picks.every((p) => p !== null);
  const avg = complete ? picks.reduce((s, p) => s + (p as number), 0) / MOMENTS.length : 0;
  const ring = avg < 0.8 ? 'inner' : avg < 1.7 ? 'middle' : 'outer';
  const ringLine = {
    inner:
      'You currently feel in broad strokes — pleasant, unpleasant, big and simple. A true starting point, and a clear next ring to grow into.',
    middle:
      'You feel in families — anger apart from sadness, relief apart from joy. The next ring out holds the finer words, and they are learnable.',
    outer:
      'You feel in fine grain — the differences between near-neighbors are alive for you. The practice now is range: fine grain even in the hard moments.',
  }[ring];

  const summary = `Ring: ${ring}. Picks: ${MOMENTS.map((m, i) => m.words[picks[i] ?? 0]).join(', ')}`;

  return (
    <div>
      <p className="text-[15px] text-brand-paper/80 mb-3">
        Five moments. For each, the word that you would most <em>genuinely feel</em> &mdash;
        not the one that reads best. All three are honest answers.
      </p>
      {MOMENTS.map((m, i) => (
        <div key={i} className="mb-3 border-t border-brand-gold/10 pt-2.5">
          <p className="text-[15px] text-brand-paper/85 mb-1.5">{m.prompt}</p>
          <div className="flex flex-wrap gap-2">
            {m.words.map((w, j) => (
              <button
                key={w}
                onClick={() => {
                  const next = [...picks];
                  next[i] = j;
                  setPicks(next);
                  setDone(false);
                }}
                className={`rounded-full px-4 py-1.5 text-[14px] border transition-colors ${
                  picks[i] === j
                    ? 'border-brand-teal text-brand-teal'
                    : 'border-brand-gold/25 text-brand-paper/70 hover:border-brand-gold/50'
                }`}
              >
                {w}
              </button>
            ))}
          </div>
        </div>
      ))}
      {complete && !done && (
        <button
          onClick={() => setDone(true)}
          className="mt-1 rounded-full px-5 py-2.5 text-[15px] font-semibold bg-brand-teal text-[#0d1b1a]"
        >
          Which ring am I on?
        </button>
      )}
      {done && (
        <div className="mt-4 rounded-2xl border border-brand-gold/20 bg-white/[0.04] p-5">
          <p className="text-[15px] text-brand-paper/85">
            Right now you&rsquo;re reading from the{' '}
            <em className="text-brand-gold">{ring} ring</em>. {ringLine}
          </p>
          <p className="text-[14px] text-brand-muted mt-2">
            One invitation: this week, when a feeling arrives, a name one ring finer than
            the first word that comes. That&rsquo;s the whole ladder.
          </p>
          <ShareResults quiz="Which ring are you on?" summary={summary} />
        </div>
      )}
    </div>
  );
}
