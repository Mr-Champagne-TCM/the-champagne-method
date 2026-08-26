import { useState, useEffect, useRef, useCallback } from 'react';

/** The wheel itself: preview on the card, tap to open full-screen, zoom, take it with you.
 *  Our own wheel and our own words, so it is ours to give away. */
const SRC = '/emotion-wheel.svg';
const PNG_SIZE = 2080; // 2x the SVG's natural 1040 — prints and shares cleanly

export default function EmotionWheel() {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  /** Half-steps are fine on a touch screen, where pinch does the fine work anyway.
   *  With a mouse the buttons are the only control, so they step finer. */
  const [step] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches ? 0.25 : 0.5,
  );
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState('');
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === '+' || e.key === '=') setZoom((z) => Math.min(4, z + step));
      if (e.key === '-') setZoom((z) => Math.max(1, z - step));
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, step]);

  /** Rasterise the SVG in the browser so the PNG needs no server. */
  const toPng = useCallback(async (): Promise<Blob | null> => {
    const svgText = await (await fetch(SRC)).text();
    const url = URL.createObjectURL(new Blob([svgText], { type: 'image/svg+xml' }));
    try {
      const img = new Image();
      img.decoding = 'sync';
      await new Promise<void>((res, rej) => {
        img.onload = () => res();
        img.onerror = () => rej(new Error('render failed'));
        img.src = url;
      });
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = PNG_SIZE;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;
      ctx.drawImage(img, 0, 0, PNG_SIZE, PNG_SIZE);
      return await new Promise((res) => canvas.toBlob((b) => res(b), 'image/png'));
    } finally {
      URL.revokeObjectURL(url);
    }
  }, []);

  const save = (blob: Blob, filename: string) => {
    const href = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = href;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(href), 4000);
  };

  /** PNG only, deliberately. An SVG download looks tidy and then will not open on a
   *  phone or in most photo apps — it stranded people we sent it to. */
  const downloadPng = async () => {
    setBusy(true);
    setNote('');
    try {
      const blob = await toPng();
      if (blob) save(blob, 'emotion-wheel.png');
      else setNote('That didn’t render — a second try usually does it.');
    } catch {
      setNote('That didn’t render — a second try usually does it.');
    }
    setBusy(false);
  };

  const share = async () => {
    setNote('');
    const pageUrl = `${window.location.origin}/library/#wheel`;
    try {
      const blob = await toPng();
      const file = blob && new File([blob], 'emotion-wheel.png', { type: 'image/png' });
      const nav = navigator as Navigator & { canShare?: (d: ShareData) => boolean };
      if (file && nav.canShare?.({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'The emotion wheel',
          text: 'A map of feeling, from The Champagne Method.',
        });
        return;
      }
      if (navigator.share) {
        await navigator.share({ title: 'The emotion wheel', url: pageUrl });
        return;
      }
      await navigator.clipboard.writeText(pageUrl);
      setNote('Link copied.');
    } catch {
      /* a cancelled share is not an error */
    }
  };

  const btn =
    'rounded-full px-4 py-2.5 text-[14px] font-semibold border border-brand-gold/40 ' +
    'text-brand-paper hover:border-brand-gold/70 transition-colors disabled:opacity-50';

  return (
    <div id="wheel">
      <p className="text-[15px] text-brand-paper/80 mb-3">
        Here is the wheel itself &mdash; eight families at the centre, finer words toward the
        edge. Yours to open, keep, or pass on.
      </p>

      <button
        onClick={() => {
          setZoom(1);
          setOpen(true);
        }}
        className="group block w-full rounded-2xl overflow-hidden border border-brand-gold/25 hover:border-brand-gold/60 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
        aria-label="Open the emotion wheel full screen"
      >
        <img
          src={SRC}
          alt="The emotion wheel: eight families of feeling arranged in three rings, from broad families at the centre to finer distinctions at the edge."
          className="w-full max-w-[520px] mx-auto block"
          loading="lazy"
          width={1040}
          height={1040}
        />
        <span className="block py-2.5 text-[14px] text-brand-muted group-hover:text-brand-teal transition-colors">
          Tap to open it full screen
        </span>
      </button>

      <div className="mt-4 flex flex-wrap gap-2.5">
        <button
          onClick={downloadPng}
          disabled={busy}
          data-umami-event="wheel-download"
          className={btn}
        >
          {busy ? 'Preparing…' : 'Download as image'}
        </button>
        <button onClick={share} data-umami-event="wheel-share" className={btn}>
          Share it
        </button>
      </div>
      {note && <p className="mt-2 text-[14px] text-brand-muted">{note}</p>}
      <p className="mt-3 text-[13px] text-brand-muted/80">
        This wheel is ours &mdash; drawn for this library, with its own words. Sharing it,
        printing it, or putting it on a wall is welcome.
      </p>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-[#0b1428]/95 backdrop-blur-sm flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="The emotion wheel, full screen"
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-brand-gold/15">
            <span className="font-display italic text-brand-gold text-[16px]">
              The emotion wheel
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoom((z) => Math.max(1, z - step))}
                className="w-11 h-11 rounded-full border border-brand-gold/35 text-brand-paper text-[20px] leading-none"
                aria-label="Zoom out"
              >
                &minus;
              </button>
              <span className="text-[13px] text-brand-muted w-12 text-center tabular-nums">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={() => setZoom((z) => Math.min(4, z + step))}
                className="w-11 h-11 rounded-full border border-brand-gold/35 text-brand-paper text-[20px] leading-none"
                aria-label="Zoom in"
              >
                +
              </button>
              <button
                onClick={() => setOpen(false)}
                className="ml-1 w-11 h-11 rounded-full border border-brand-gold/35 text-brand-paper text-[18px] leading-none"
                aria-label="Close"
              >
                &times;
              </button>
            </div>
          </div>

          <div ref={scroller} className="flex-1 overflow-auto overscroll-contain p-4">
            <img
              src={SRC}
              alt="The emotion wheel, enlarged."
              style={{ width: `${zoom * 100}%`, maxWidth: zoom === 1 ? '900px' : 'none' }}
              className="mx-auto block"
            />
          </div>

          <div className="px-4 py-3 border-t border-brand-gold/15 flex flex-wrap gap-2.5 justify-center">
            <button
          onClick={downloadPng}
          disabled={busy}
          data-umami-event="wheel-download"
          className={btn}
        >
              {busy ? 'Preparing…' : 'Download as image'}
            </button>
            <button onClick={share} data-umami-event="wheel-share" className={btn}>
              Share it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
