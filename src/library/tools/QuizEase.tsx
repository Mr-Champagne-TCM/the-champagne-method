import { useState } from 'react';
import ShareResults from './ShareResults';

/** Where's your ease? — two life areas × the three points of ease.
 *  Result is a location, not a grade. */
const AREAS = ['Work', 'Relationship', 'Body', 'Family', 'Money', 'Creative life'];
const POINTS = ['safe', 'connected', 'fulfilled'] as const;
const CHOICES = ['Yes', 'Somewhat', 'Not right now'] as const;

type Answers = Record<string, Record<string, number>>;

export default function QuizEase() {
  const [areas, setAreas] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);

  const toggleArea = (a: string) => {
    setAnswers({});
    setDone(false);
    setAreas((prev) =>
      prev.includes(a) ? prev.filter((x) => x !== a) : prev.length < 2 ? [...prev, a] : prev,
    );
  };

  const setAns = (area: string, point: string, v: number) =>
    setAnswers((prev) => ({ ...prev, [area]: { ...(prev[area] || {}), [point]: v } }));

  const complete =
    areas.length === 2 && areas.every((a) => POINTS.every((p) => answers[a]?.[p] !== undefined));

  const locate = (a: string) => {
    const total = POINTS.reduce((s, p) => s + (answers[a]?.[p] ?? 0), 0);
    return total <= 1 ? 'easy' : total <= 3 ? 'mixed — leaning easy' : total <= 4 ? 'mixed — leaning dis-easy' : 'dis-easy';
  };
  const quietest = (a: string) => {
    const worst = [...POINTS].sort((x, y) => (answers[a]?.[y] ?? 0) - (answers[a]?.[x] ?? 0))[0];
    return (answers[a]?.[worst] ?? 0) > 0 ? worst : null;
  };

  const summary = areas
    .map((a) => `${a}: ${locate(a)}${quietest(a) ? ` (quietest point: feeling ${quietest(a)})` : ''}`)
    .join(' | ');

  return (
    <div>
      <p className="text-[15px] text-brand-paper/80 mb-3">
        A first read of where you are &mdash; two areas of life, three honest questions each.
        The result is a location, not a grade.
      </p>
      <p className="text-[14px] text-brand-muted mb-2">Two areas to look at:</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {AREAS.map((a) => (
          <button
            key={a}
            onClick={() => toggleArea(a)}
            className={`rounded-full px-4 py-2 text-[14px] border transition-colors ${
              areas.includes(a)
                ? 'border-brand-teal text-brand-teal'
                : 'border-brand-gold/30 text-brand-paper/80 hover:border-brand-gold/60'
            }`}
          >
            {a}
          </button>
        ))}
      </div>

      {areas.map((a) => (
        <div key={a} className="mb-4 border-t border-brand-gold/10 pt-3">
          <p className="font-display text-lg text-brand-paper mb-2">{a}</p>
          {POINTS.map((p) => (
            <div key={p} className="mb-2.5">
              <p className="text-[15px] text-brand-paper/80 mb-1.5">
                In this area, am I feeling {p}?
              </p>
              <div className="flex gap-2">
                {CHOICES.map((c, i) => (
                  <button
                    key={c}
                    onClick={() => setAns(a, p, i)}
                    className={`rounded-full px-3.5 py-1.5 text-[14px] border transition-colors ${
                      answers[a]?.[p] === i
                        ? 'border-brand-teal text-brand-teal'
                        : 'border-brand-gold/25 text-brand-paper/70 hover:border-brand-gold/50'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}

      {complete && !done && (
        <button
          onClick={() => setDone(true)}
          className="rounded-full px-5 py-2.5 text-[15px] font-semibold bg-brand-teal text-[#0d1b1a]"
        >
          Where am I?
        </button>
      )}

      {done && (
        <div className="mt-4 rounded-2xl border border-brand-gold/20 bg-white/[0.04] p-5">
          {areas.map((a) => (
            <p key={a} className="text-[15px] text-brand-paper/85 mb-2">
              <b className="text-brand-paper">{a}</b> reads as{' '}
              <em className="text-brand-gold">{locate(a)}</em> on the continuum
              {quietest(a) && (
                <>
                  {' '}
                  &mdash; and the quietest of the three points is{' '}
                  <em className="text-brand-teal">feeling {quietest(a)}</em>. That&rsquo;s where
                  the looking is likely to pay off.
                </>
              )}
              .
            </p>
          ))}
          <p className="text-[14px] text-brand-muted">
            The health continuum and the three points of ease, above, are the map behind this.
          </p>
          <ShareResults quiz="Where's your ease?" summary={summary} />
        </div>
      )}
    </div>
  );
}
