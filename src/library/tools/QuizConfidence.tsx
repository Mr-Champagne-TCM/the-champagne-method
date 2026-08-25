import { useState } from 'react';
import ShareResults from './ShareResults';

/** Where's your confidence pointed? — every statement is confident;
 *  the question is only the direction. */
const STATEMENTS = [
  { text: 'When something matters to me, some part of me expects it to work out.', dir: 'can' },
  { text: "I can list the reasons a thing won't work before I've tried it.", dir: 'cant' },
  { text: 'New situations feel like places I can figure out.', dir: 'can' },
  { text: "There are things I've quietly decided are just not for people like me.", dir: 'cant' },
  { text: "When I picture attempting the hard thing, I picture how it fails.", dir: 'cant' },
] as const;

export default function QuizConfidence() {
  const [answers, setAnswers] = useState<(boolean | null)[]>(STATEMENTS.map(() => null));
  const [done, setDone] = useState(false);

  const complete = answers.every((a) => a !== null);
  const cantVotes = STATEMENTS.filter((s, i) => answers[i] && s.dir === 'cant').length;
  const canVotes = STATEMENTS.filter((s, i) => answers[i] && s.dir === 'can').length;

  const read =
    cantVotes > canVotes
      ? "A good share of your confidence is currently pointed at can't — with a well-kept file of evidence. That's not a lack of confidence. It's aim."
      : canVotes > cantVotes
        ? 'Most of your confidence is currently pointed at can — the reaches are getting attempted. Worth noticing where the exceptions live.'
        : "Your confidence points both ways, depending on the territory. Worth noticing which areas get the can't.";

  const summary = `can-pointed: ${canVotes}, can't-pointed: ${cantVotes}. ${
    cantVotes > canVotes ? "leaning can't" : canVotes > cantVotes ? 'leaning can' : 'split'
  }`;

  return (
    <div>
      <p className="text-[15px] text-brand-paper/80 mb-3">
        Five statements &mdash; for each, does it sound like you? A small heads-up:
        every one of them is a <em>confident</em> sentence. The only question is where
        the confidence points.
      </p>
      {STATEMENTS.map((s, i) => (
        <div key={i} className="mb-2.5 border-t border-brand-gold/10 pt-2.5">
          <p className="text-[15px] text-brand-paper/85 mb-1.5">{s.text}</p>
          <div className="flex gap-2">
            {[true, false].map((v) => (
              <button
                key={String(v)}
                onClick={() => {
                  const next = [...answers];
                  next[i] = v;
                  setAnswers(next);
                  setDone(false);
                }}
                className={`rounded-full px-4 py-1.5 text-[14px] border transition-colors ${
                  answers[i] === v
                    ? 'border-brand-teal text-brand-teal'
                    : 'border-brand-gold/25 text-brand-paper/70 hover:border-brand-gold/50'
                }`}
              >
                {v ? 'Sounds like me' : 'Not really me'}
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
          Where is mine pointed?
        </button>
      )}
      {done && (
        <div className="mt-4 rounded-2xl border border-brand-gold/20 bg-white/[0.04] p-5">
          <p className="text-[15px] text-brand-paper/85">{read}</p>
          <p className="text-[14px] text-brand-muted mt-2">
            The move isn&rsquo;t acquiring confidence &mdash; it&rsquo;s sliding where it
            points. The confidence continuum, above, is the map behind this.
          </p>
          <ShareResults quiz="Where's your confidence pointed?" summary={summary} />
        </div>
      )}
    </div>
  );
}
