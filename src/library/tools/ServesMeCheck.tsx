import { useState } from 'react';
import ShareResults from './ShareResults';

/** Serves-Me Belief Check — a belief, taken apart with four questions.
 *  Everything stays on the page unless the visitor chooses to send it. */
const QUESTIONS = [
  'Where did this belief come from — and roughly when?',
  'What does keeping it cost you?',
  'What is it protecting you from?',
  'Is it serving you — or are you serving it?',
];

export default function ServesMeCheck() {
  const [belief, setBelief] = useState('');
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>(['', '', '', '']);
  const [done, setDone] = useState(false);

  const started = belief.trim().length > 0;
  const summary =
    `Belief: ${belief}\n` + QUESTIONS.map((q, i) => `${q} — ${answers[i]}`).join('\n');

  const field =
    'w-full px-3.5 py-2.5 rounded-xl border border-brand-gold/25 bg-white/5 text-brand-paper placeholder-brand-muted/60 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-teal/40';

  return (
    <div>
      <p className="text-[15px] text-brand-paper/80 mb-3">
        A belief that might be up for review &mdash; written in your own words, taken apart
        with four questions. It stays on this page unless you choose otherwise.
      </p>
      <textarea
        rows={2}
        value={belief}
        onChange={(e) => {
          setBelief(e.target.value);
          setDone(false);
        }}
        placeholder={'The belief, as it sounds in your head. ("I’m not someone who…", "People always…", "I have to…")'}
        className={`${field} resize-none mb-3`}
      />
      {started &&
        QUESTIONS.slice(0, step + 1).map((q, i) => (
          <div key={i} className="mb-3">
            <p className="text-[15px] text-brand-gold font-display italic mb-1.5">{q}</p>
            <textarea
              rows={2}
              value={answers[i]}
              onChange={(e) => {
                const next = [...answers];
                next[i] = e.target.value;
                setAnswers(next);
              }}
              className={`${field} resize-none`}
            />
            {i === step && step < QUESTIONS.length - 1 && answers[i].trim() && (
              <button
                onClick={() => setStep(step + 1)}
                className="mt-2 rounded-full px-4 py-2 text-[14px] font-semibold border border-brand-gold/40 text-brand-paper hover:border-brand-gold/70"
              >
                Next question
              </button>
            )}
          </div>
        ))}
      {started && step === QUESTIONS.length - 1 && answers[3].trim() && !done && (
        <button
          onClick={() => setDone(true)}
          className="rounded-full px-5 py-2.5 text-[15px] font-semibold bg-brand-teal text-[#0d1b1a]"
        >
          Read it back to me
        </button>
      )}
      {done && (
        <div className="mt-4 rounded-2xl border border-brand-gold/20 bg-white/[0.04] p-5">
          <p className="text-[15px] text-brand-paper/85 mb-2">
            In your own words: this belief arrived <em className="text-brand-gold">{answers[0].trim() || 'somewhere along the way'}</em>,
            it costs you <em className="text-brand-gold">{answers[1].trim() || 'something real'}</em>, and it&rsquo;s
            been protecting you from <em className="text-brand-gold">{answers[2].trim() || 'something that once felt dangerous'}</em>.
          </p>
          <p className="text-[15px] text-brand-paper/85">
            And your own verdict on whether it serves you:{' '}
            <em className="text-brand-teal">{answers[3].trim()}</em>
          </p>
          <p className="text-[14px] text-brand-muted mt-2">
            Nothing needs deciding today. A belief seen this clearly tends to renegotiate itself.
          </p>
          <ShareResults quiz="Serves-Me Belief Check" summary={summary} />
        </div>
      )}
    </div>
  );
}
