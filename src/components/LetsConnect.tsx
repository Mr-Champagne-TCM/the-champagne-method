import { useState, type FormEvent } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

const FORMSPREE_URL = 'https://formspree.io/f/xkoabdpe';

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
    <section id="connect" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Let's Connect
        </h2>
        <p className="text-violet-300/70 text-center max-w-lg mx-auto mb-12">
          Ready to take the next step? I'd love to hear from you. Share a bit
          about what you're looking for, and I'll be in touch to start the
          conversation.
        </p>

        <div className="max-w-xl mx-auto">
          {submitted ? (
            <div className="flex flex-col items-center py-12 text-center">
              <CheckCircle size={48} className="text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Thank you for reaching out!
              </h3>
              <p className="text-violet-200/70">
                I'll review your message and be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-violet-200 mb-1.5"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl border border-violet-500/30 bg-white/5 text-white placeholder-violet-400/60 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/50 transition-all backdrop-blur-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-violet-200 mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-violet-500/30 bg-white/5 text-white placeholder-violet-400/60 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/50 transition-all backdrop-blur-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-violet-200 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a little about what you're looking for..."
                  className="w-full px-4 py-3 rounded-xl border border-violet-500/30 bg-white/5 text-white placeholder-violet-400/60 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/50 transition-all resize-none backdrop-blur-sm"
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-teal-500 hover:bg-teal-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-teal-500/25 hover:shadow-teal-600/30 hover:-translate-y-0.5"
              >
                {submitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
