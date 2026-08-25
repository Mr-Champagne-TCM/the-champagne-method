import { useEffect, useRef, useState } from 'react';

/**
 * 4-7-8 breathing pacer. In for 4, hold for 7, out for 8.
 * Humming on the exhale is offered as an optional layer for stronger moments —
 * louder at first, resolving toward a whisper or silence.
 * Min 3 rounds, aim for 10 — and one round is already a win.
 */
const PHASES = [
  { name: 'Breathe in', secs: 4, scale: 1.35 },
  { name: 'Hold', secs: 7, scale: 1.35 },
  { name: 'Breathe out', secs: 8, scale: 0.75 },
] as const;

export default function Breather() {
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState(0);
  const [count, setCount] = useState<number>(PHASES[0].secs);
  const [rounds, setRounds] = useState(0);
  const [hum, setHum] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (!running) return;
    timer.current = window.setInterval(() => {
      setCount((c) => {
        if (c > 1) return c - 1;
        setPhase((p) => {
          const next = (p + 1) % PHASES.length;
          if (next === 0) setRounds((r) => r + 1);
          setCount(PHASES[next].secs);
          return next;
        });
        return 0;
      });
    }, 1000);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [running]);

  const stop = () => {
    setRunning(false);
    setPhase(0);
    setCount(PHASES[0].secs);
  };

  const p = PHASES[phase];
  const humLine =
    hum && p.name === 'Breathe out'
      ? rounds < 2
        ? 'Hum it out — louder is welcome'
        : rounds < 5
          ? 'Hum it out — settling toward a regular tone'
          : 'Hum it out — a whisper now, or silence'
      : null;

  return (
    <div className="text-center py-2">
      <div className="flex items-center justify-center h-44">
        <div
          className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-teal/60 to-brand-violet/50 shadow-lg shadow-brand-teal/20 motion-reduce:transition-none"
          style={{
            transform: `scale(${running ? p.scale : 1})`,
            transition: running ? `transform ${p.secs}s ease-in-out` : 'transform .4s',
          }}
        />
      </div>
      {running ? (
        <>
          <p className="font-display text-2xl text-brand-paper">{p.name}</p>
          <p className="text-brand-muted text-lg tabular-nums">{count || p.secs}</p>
          {humLine && <p className="text-brand-gold text-[15px] mt-1 italic font-display">{humLine}</p>}
        </>
      ) : (
        <p className="text-brand-paper/75 text-[15px] max-w-sm mx-auto">
          In for 4 &middot; hold for 7 &middot; out for 8. A minimum of 3 rounds, aiming
          for 10 &mdash; and even 1 is a win.
        </p>
      )}
      <p className="mt-2 text-[15px] text-brand-muted">
        Rounds: <b className="text-brand-paper">{rounds}</b>
        <span className="opacity-70"> &middot; min 3 &middot; aim 10 &middot; 1 is a win</span>
      </p>
      <div className="mt-3 flex flex-wrap gap-2.5 justify-center">
        {!running ? (
          <button
            onClick={() => setRunning(true)}
            className="rounded-full px-5 py-2.5 text-[15px] font-semibold bg-brand-teal text-[#0d1b1a]"
          >
            {rounds ? 'Continue' : 'Begin'}
          </button>
        ) : (
          <button
            onClick={stop}
            className="rounded-full px-5 py-2.5 text-[15px] font-semibold border border-brand-gold/40 text-brand-paper"
          >
            Pause
          </button>
        )}
        <button
          onClick={() => setHum(!hum)}
          className={`rounded-full px-5 py-2.5 text-[15px] font-semibold border transition-colors ${
            hum
              ? 'border-brand-teal text-brand-teal'
              : 'border-brand-gold/40 text-brand-paper hover:border-brand-gold/70'
          }`}
        >
          {hum ? 'Humming on' : 'Add humming'}
        </button>
      </div>
      <p className="mt-3 text-[14px] text-brand-muted max-w-sm mx-auto">
        If holding feels like straining, the hold is skippable &mdash; the long exhale is
        doing most of the work.
      </p>
      <p className="mt-2 text-[14px]">
        <a
          href="https://www.youtube.com/watch?v=Gb9YxCC5WBw&t=4s"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-teal underline underline-offset-4 hover:text-brand-gold"
        >
          A favorite of mine to go deeper: breathwork with Sandi &rarr;
        </a>
      </p>
    </div>
  );
}
