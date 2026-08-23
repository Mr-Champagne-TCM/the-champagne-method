import { useMemo } from 'react';

/**
 * The fixed page background, in three stacked layers:
 *
 *   z0  gradient ground + glow   (v1.3, retained)
 *   z1  three animated waves     (v1.3, retained — timings are deliberate)
 *   z2  rising bubbles           (v2.0 signature element)
 *
 * Content sits above all of this at z10. Both backgrounds coexist because
 * they are explicitly stacked rather than each claiming the whole layer.
 */

const BUBBLE_COUNT = 60;

function Waves() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className="wave-animate absolute bottom-0 left-0 w-[200%] h-[60%] opacity-20"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,250 C240,180 480,320 720,250 C960,180 1200,320 1440,250 L1440,400 L0,400 Z"
          fill="url(#wave1)"
        />
        <defs>
          <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C5CE0" />
            <stop offset="50%" stopColor="#6d28d9" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="wave-animate-alt absolute bottom-0 left-0 w-[200%] h-[45%] opacity-[0.15]"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,280 C200,220 400,340 600,280 C800,220 1000,340 1200,280 C1320,240 1380,300 1440,280 L1440,400 L0,400 Z"
          fill="url(#wave2)"
        />
        <defs>
          <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3FE0C5" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#7C5CE0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Gold third layer — the only place gold appears at full width. */}
      <svg
        className="wave-animate-slow absolute bottom-0 left-0 w-[200%] h-[30%] opacity-25"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,300 C360,250 720,350 1080,300 C1260,275 1380,325 1440,300 L1440,400 L0,400 Z"
          fill="url(#wave3)"
        />
        <defs>
          <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6d28d9" />
            <stop offset="50%" stopColor="#E8CBA0" />
            <stop offset="100%" stopColor="#7C5CE0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Bubbles() {
  // Generated once per mount so no two loads look identical, but stable across
  // re-renders. Negative delays mean the field is already in motion on arrival.
  const bubbles = useMemo(
    () =>
      Array.from({ length: BUBBLE_COUNT }, () => {
        const size = 3 + Math.random() * 9;
        return {
          size,
          left: Math.random() * 100,
          duration: 9 + Math.random() * 13,
          delay: -Math.random() * 18,
        };
      }),
    [],
  );

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: `${b.left}%`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* z0 — ground */}
      <div className="absolute inset-0 bg-gradient-to-b from-ground-top via-ground-mid to-ground-bottom" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-lavender-600/10 rounded-full blur-[120px]" />

      {/* z1 — waves */}
      <div className="absolute inset-0 z-[1]">
        <Waves />
      </div>

      {/* z2 — bubbles */}
      <div className="absolute inset-0 z-[2]">
        <Bubbles />
      </div>
    </div>
  );
}
