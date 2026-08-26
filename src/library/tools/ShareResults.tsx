import { useState, type FormEvent } from 'react';
import { track } from '../../site/track';

/** Option B share block: private by default; sending is the visitor's request.
 *  Same Formspree endpoint as the contact form; _subject separates the streams. */
const FORMSPREE_URL = 'https://formspree.io/f/xkoabdpe';

export default function ShareResults({ quiz, summary }: { quiz: string; summary: string }) {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState('sending');
    const data = new FormData(e.currentTarget);
    data.set('_subject', `Quiz results: ${quiz}`);
    data.set('quiz', quiz);
    data.set('results', summary);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) track('quiz-results-sent', { quiz });
      setState(res.ok ? 'sent' : 'error');
    } catch {
      setState('error');
    }
  };

  if (state === 'sent') {
    return (
      <p className="mt-4 text-[15px] text-brand-teal">
        Sent. Thank you for sharing it &mdash; it will be read.
      </p>
    );
  }

  return (
    <div className="mt-5 border-t border-brand-gold/15 pt-4">
      <p className="text-[14px] text-brand-muted mb-2">
        Nothing you entered leaves this page &mdash; unless you choose to send it.
      </p>
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="rounded-full px-5 py-2.5 text-[15px] font-semibold border border-brand-gold/40 text-brand-paper hover:border-brand-gold/70 transition-colors"
        >
          Send my results to Mr. Champagne
        </button>
      ) : (
        <form onSubmit={submit} className="space-y-3 max-w-md">
          <p className="text-[14px] text-brand-paper/75">
            This sends your answers above, and nothing else. Include your email if
            you&rsquo;d like a free follow-up &mdash; entirely optional.
          </p>
          <input
            name="name"
            type="text"
            placeholder="Your name (optional)"
            className="w-full px-3.5 py-2.5 rounded-xl border border-brand-gold/25 bg-white/5 text-brand-paper placeholder-brand-muted/60 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-teal/40"
          />
          <input
            name="email"
            type="email"
            placeholder="Your email (optional — for a free follow-up)"
            className="w-full px-3.5 py-2.5 rounded-xl border border-brand-gold/25 bg-white/5 text-brand-paper placeholder-brand-muted/60 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-teal/40"
          />
          <textarea
            name="note"
            rows={2}
            placeholder="Anything you'd like to add (optional)"
            className="w-full px-3.5 py-2.5 rounded-xl border border-brand-gold/25 bg-white/5 text-brand-paper placeholder-brand-muted/60 text-[15px] resize-none focus:outline-none focus:ring-2 focus:ring-brand-teal/40"
          />
          {state === 'error' && (
            <p className="text-red-400 text-[14px]">
              That didn&rsquo;t go through &mdash; a retry is welcome, or the contact form on
              the homepage reaches the same inbox.
            </p>
          )}
          <button
            type="submit"
            disabled={state === 'sending'}
            className="rounded-full px-5 py-2.5 text-[15px] font-semibold bg-brand-teal text-[#0d1b1a] disabled:opacity-60"
          >
            {state === 'sending' ? 'Sending…' : 'Send'}
          </button>
        </form>
      )}
    </div>
  );
}
