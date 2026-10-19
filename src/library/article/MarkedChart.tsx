import { useEffect, useLayoutEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { createPortal } from 'react-dom';
import {
  ASPECT,
  MAX_SCALE,
  MIN_SCALE,
  SOURCE_BOX,
  clamp,
  clampScale,
  fitScale,
  viewBoxAttr,
  viewBoxFor,
  visible,
  CHROME_TOP,
} from './zoomBounds';

/**
 * Jeremy's own chart -- the one example everywhere (public/samples/bodygraph.svg)
 * -- with teal numbered rings on the exact spots the key beside it names.
 * Newcomer fix 12A, accepted 10/19 on one condition: "Provided that the BG is
 * 'zoomable' like we have devised for other bodygraph viewers."
 *
 * SO IT ZOOMS LIKE THE SHOP'S CHART. Tap or click it and it opens full screen;
 * pinch or wheel to zoom, drag to move, Done to close -- the viewer from the
 * shop's reading page (hd-site src/Bodygraph.tsx), ported, with its clamp
 * (./zoomBounds.ts) copied unchanged.
 *
 * THE MARKS ARE IN THE SAME SVG AS THE DRAWING, so they zoom and pan with it
 * and a ring can never drift off the thing it circles. The drawing is fetched
 * and put in the page, not loaded as an image, for the reason the readings page
 * gives: an SVG image cannot reach the page's Outfit, and the labels were placed
 * against Outfit.
 *
 * Points are in the drawing's own units (viewBox -120 -12 1090 1330), checked
 * against the drawing in the 10/17 mock (ux-mock-8-20).
 */
export type Mark = { n: number | string; x: number; y: number; r?: number; dx?: number; dy?: number };

const TEAL = '#3FE0C5';
const INK = '#0d1b1a';
const SRC_VIEW = `${SOURCE_BOX.x} ${SOURCE_BOX.y} ${SOURCE_BOX.w} ${SOURCE_BOX.h}`;

/** The drawing's insides, without its own <svg> wrapper, so the marks can share its coordinate system. */
function useDrawing(): { inner: string | null; failed: boolean } {
  const [inner, setInner] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    let alive = true;
    fetch('/samples/bodygraph.svg')
      .then((r) => (r.ok ? r.text() : Promise.reject(new Error('no'))))
      .then((t) => {
        const body = t.replace(/^[\s\S]*?<svg\b[^>]*>/, '').replace(/<\/svg>\s*$/, '');
        if (alive) setInner(body);
      })
      .catch(() => alive && setFailed(true));
    return () => {
      alive = false;
    };
  }, []);
  return { inner, failed };
}

function Marks({ marks }: { marks: Mark[] }) {
  return (
    <g aria-hidden="true">
      {marks.map((m) => {
        const r = m.r ?? 30;
        const bx = m.x + (m.dx ?? r + 22);
        const by = m.y + (m.dy ?? -(r + 22));
        return (
          <g key={String(m.n)}>
            <circle cx={m.x} cy={m.y} r={r} fill="none" stroke={TEAL} strokeWidth={6} />
            <circle cx={bx} cy={by} r={27} fill={TEAL} />
            <text
              x={bx}
              y={by + 11}
              textAnchor="middle"
              fontSize={31}
              fontWeight={700}
              fill={INK}
              fontFamily="Outfit, system-ui, sans-serif"
            >
              {m.n}
            </text>
          </g>
        );
      })}
    </g>
  );
}

/** One SVG: the drawing, then the marks on top, in the drawing's own units. */
function ChartSvg({
  inner,
  marks,
  viewBox = SRC_VIEW,
  stretch = false,
}: {
  inner: string;
  marks: Mark[];
  viewBox?: string;
  stretch?: boolean;
}) {
  return (
    <svg
      viewBox={viewBox}
      // Only the zoom window stretches, and only because its viewBox is built the
      // same shape as the window (see viewBoxFor): both axes share one scale.
      preserveAspectRatio={stretch ? 'none' : undefined}
      className="block h-full w-full"
      aria-hidden="true"
    >
      <g dangerouslySetInnerHTML={{ __html: inner }} />
      <Marks marks={marks} />
    </svg>
  );
}

export function MarkedChart({ marks, label, className = '' }: { marks: Mark[]; label: string; className?: string }) {
  const { inner, failed } = useDrawing();
  const [open, setOpen] = useState(false);

  if (failed) return null;
  return (
    <>
      <button
        type="button"
        onClick={() => inner && setOpen(true)}
        className={`group relative block w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/60 ${className}`}
        style={{ aspectRatio: `${SOURCE_BOX.w} / ${SOURCE_BOX.h}` }}
        aria-label={`${label}. Open larger`}
      >
        {inner ? (
          <ChartSvg inner={inner} marks={marks} />
        ) : (
          <span className="grid h-full place-items-center text-[15px] text-brand-muted">Drawing…</span>
        )}
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-full border border-brand-gold/30 bg-[#0E1A2B]/90 px-3 py-1 font-sans text-[12px] text-brand-teal transition-colors group-hover:border-brand-teal/60">
          &#10530; Enlarge
        </span>
      </button>
      {open && inner && createPortal(<Zoom inner={inner} marks={marks} label={label} onClose={() => setOpen(false)} />, document.body)}
    </>
  );
}

/**
 * The full-screen viewer: the shop's (hd-site src/Bodygraph.tsx, Zoom), ported.
 * Opens with the whole chart showing; pinch or wheel zooms 1x to 8x about the
 * pointer; one finger or the mouse drags, clamped so the chart can never be
 * dragged out of sight; double-click fits; Escape or Done closes; the - / + /
 * Fit row is there for anyone who cannot pinch. Scale is in multiples of the
 * window's width, as in the shop and the app.
 */
function Zoom({ inner, marks, label, onClose }: { inner: string; marks: Mark[]; label: string; onClose: () => void }) {
  const surface = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(MIN_SCALE);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const gesture = useRef<{ dist: number; cx: number; cy: number } | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  // Measured after it exists, and kept up to date through a rotation or a resize.
  const [box, setBox] = useState({ w: 0, h: 0 });
  useLayoutEffect(() => {
    const el = surface.current;
    if (!el) return;
    const measure = () => setBox({ w: el.clientWidth, h: el.clientHeight });
    measure();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', measure);
      return () => window.removeEventListener('resize', measure);
    }
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // The first real measurement sets the opening scale: the whole chart, in the space not under the controls.
  const fitted = useRef(false);
  useLayoutEffect(() => {
    if (fitted.current || !(box.w > 0 && box.h > 0)) return;
    fitted.current = true;
    const { w, h } = visible(box);
    setScale(fitScale(w, h));
    setOffset({ x: 0, y: 0 });
  }, [box]);

  const view = () => visible(box);

  function centroid() {
    const pts = [...pointers.current.values()];
    const cx = pts.reduce((s, p) => s + p.x, 0) / pts.length;
    const cy = pts.reduce((s, p) => s + p.y, 0) / pts.length;
    const dist = pts.length > 1 ? Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y) : 0;
    return { cx, cy, dist };
  }

  function down(e: ReactPointerEvent) {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    gesture.current = centroid();
  }

  function move(e: ReactPointerEvent) {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const now = centroid();
    const was = gesture.current;
    if (!was) return;
    // Pinch only when two fingers are down; one finger is a drag.
    const { w, h } = view();
    const next = was.dist > 0 && now.dist > 0 ? clampScale(scale * (now.dist / was.dist), fitScale(w, h)) : scale;
    // Re-clamped against the NEW scale, so zooming back out can never strand the chart off-screen.
    const moved = clamp(offset.x + (now.cx - was.cx), offset.y + (now.cy - was.cy), next, w, h, ASPECT);
    gesture.current = now;
    setScale(next);
    setOffset(moved);
  }

  function up(e: ReactPointerEvent) {
    pointers.current.delete(e.pointerId);
    gesture.current = pointers.current.size ? centroid() : null;
  }

  /** Zoom to a point, keeping whatever is under it under it (the centre when no point is given). */
  function zoomTo(nextRaw: number, px?: number, py?: number) {
    const { w, h } = view();
    if (!(w > 0 && h > 0)) return;
    const next = clampScale(nextRaw, fitScale(w, h));
    const curW = w * scale;
    const curH = curW / ASPECT;
    const nxtW = w * next;
    const nxtH = nxtW / ASPECT;
    const ax = px ?? w / 2;
    const ay = py ?? h / 2;
    const left = (w - curW) / 2 + offset.x;
    const top = (h - curH) / 2 + offset.y;
    const u = curW ? (ax - left) / curW : 0.5;
    const v = curH ? (ay - top) / curH : 0.5;
    const ox = ax - u * nxtW - (w - nxtW) / 2;
    const oy = ay - v * nxtH - (h - nxtH) / 2;
    setScale(next);
    setOffset(clamp(ox, oy, next, w, h, ASPECT));
  }

  // The wheel is the viewer's while it is open: added by hand with passive:false so
  // preventDefault() stops ctrl+wheel zooming the whole page behind it.
  useEffect(() => {
    const el = surface.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      const step = Math.exp(-e.deltaY / 320);
      zoomTo(scale * step, e.clientX - rect.left, e.clientY - rect.top - CHROME_TOP);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  });

  function reset() {
    const { w, h } = view();
    setScale(fitScale(w, h));
    setOffset({ x: 0, y: 0 });
  }

  const { w, h } = view();
  const ready = w > 0 && h > 0;
  const floor = fitScale(w, h);
  const vb = ready ? viewBoxAttr(viewBoxFor({ viewW: w, viewH: h, scale, offset })) : null;

  return (
    <div className="fixed inset-0 z-[70] bg-[#0E1A2B]" role="dialog" aria-modal="true" aria-label={label}>
      <div
        ref={surface}
        className="absolute inset-0 touch-none overflow-hidden"
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerCancel={up}
        onDoubleClick={reset}
      >
        {ready && vb && (
          <div role="img" aria-label={label} className="absolute" style={{ width: w, height: h, left: 0, top: CHROME_TOP }}>
            <ChartSvg inner={inner} marks={marks} viewBox={vb} stretch />
          </div>
        )}
      </div>

      <p className="pointer-events-none absolute left-5 top-4 font-sans text-[12px] text-brand-muted">
        Pinch or scroll to zoom, drag to move
      </p>
      <button
        type="button"
        onClick={onClose}
        className="absolute right-3 top-2 rounded-full px-4 py-2 font-sans text-[16px] text-brand-gold"
      >
        Done
      </button>
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-brand-gold/25 bg-[#0E1A2B]/90 px-2 py-1.5">
        <button
          type="button"
          aria-label="Zoom out"
          disabled={scale <= floor + 0.001}
          onClick={() => zoomTo(scale / 1.4)}
          className="h-9 w-9 rounded-full font-sans text-[20px] leading-none text-brand-gold disabled:opacity-30"
        >
          &minus;
        </button>
        <span className="min-w-[5.5rem] text-center font-sans text-[12px] tabular-nums text-brand-muted">
          {scale.toFixed(1)}&times; of {MAX_SCALE}&times;
        </span>
        <button
          type="button"
          aria-label="Zoom in"
          disabled={scale >= MAX_SCALE}
          onClick={() => zoomTo(scale * 1.4)}
          className="h-9 w-9 rounded-full font-sans text-[20px] leading-none text-brand-gold disabled:opacity-30"
        >
          +
        </button>
        <button
          type="button"
          disabled={scale <= floor + 0.001}
          onClick={reset}
          className="ml-1 rounded-full px-3 py-1.5 font-sans text-[13px] text-brand-teal disabled:opacity-30"
        >
          Fit
        </button>
      </div>
    </div>
  );
}
