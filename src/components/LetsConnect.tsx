import { useState, type FormEvent } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { Eyebrow, SectionTitle, Lede, Section, PhotoRow } from './ui';
import approachCandid from '../assets/approach-candid.jpg';
import BookingCta from './BookingCta';
import { track } from '../site/track';

/** v1.3 backend, retained. A submit that fails silently is the worst possible
 *  first impression from a coach whose pitch is being reliably present. */
const FORMSPREE_URL = 'https://formspree.io/f/xkoabdpe';

const fieldClass =
  'w-full px-4 py-3 rounded-xl border border-brand-gold/25 bg-white/5 text-brand-paper placeholder-brand-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal/50 transition-all backdrop-blur-sm';

const labelClass =
  'block font-sans text-sm uppercase tracking-[0.12em] text-brand-muted mb-1.5';

export default function LetsConnect() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        track('contact-form-sent');
        setSubmitted(true);
      } else {
        const json = await res.json().catch(() => ({}));
        setError(json?.error ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Section id="connect">
      <PhotoRow src={approachCandid} alt="Jeremy Champagne" square>
        <Eyebrow>Let&rsquo;s Begin</Eyebrow>
        <SectionTitle>Start with a conversation.</SectionTitle>
        <Lede>
          Thirty minutes, free, no pitch at the end. You tell me what&rsquo;s going on and we find
          out together whether I&rsquo;m the right person for it.
        </Lede>
      </PhotoRow>

      <div className="mt-10">
        <BookingCta />
      </div>

      <div className="mt-12 max-w-xl">
        {submitted ? (
          <div className="flex flex-col items-start py-10">
            <CheckCircle size={44} className="text-brand-teal mb-4" />
            <h3 className="font-display font-medium text-xl text-brand-paper mb-2">
              Thank you for reaching out.
            </h3>
            <p className="text-[18px] text-brand-paper/70">I&rsquo;ll read this properly and be in touch.</p>
          </div>
        ) : (
          <>
            <p className="text-[18px] text-brand-muted mb-6">
              Or write to me first &mdash; these questions help me show up prepared.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="What should I call you?"
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="situation" className={labelClass}>
                  What&rsquo;s going on?
                </label>
                <textarea
                  id="situation"
                  name="situation"
                  required
                  rows={4}
                  placeholder="The situation, in whatever words come out first."
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <div>
                <label htmlFor="tried" className={labelClass}>
                  What have you already tried?
                </label>
                <textarea
                  id="tried"
                  name="tried"
                  rows={3}
                  placeholder="Even the things that didn't work — especially those."
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <div>
                <label htmlFor="different" className={labelClass}>
                  What would different look like?
                </label>
                <textarea
                  id="different"
                  name="different"
                  rows={3}
                  placeholder="If this were resolved six months from now, what's changed?"
                  className={`${fieldClass} resize-none`}
                />
              </div>

              {error && <p className="text-red-400 text-[16px]">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-teal text-[#0d1b1a] font-semibold shadow-lg shadow-brand-teal/25 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {submitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending&hellip;
                  </>
                ) : (
                  <>
                    Send
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </Section>
  );
}
