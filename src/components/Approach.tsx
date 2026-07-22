import { Fingerprint, Lightbulb, Route } from 'lucide-react';
import approachCandid from '../assets/approach-candid.jpg';

const points = [
  {
    icon: Fingerprint,
    title: 'No Two Paths Are the Same',
    text: 'Your circumstances, challenges, and aspirations are entirely your own. I listen deeply to understand the full picture before we begin any work together.',
  },
  {
    icon: Lightbulb,
    title: 'Insight Over Formula',
    text: 'There is no preset methodology or rigid framework here. Instead, I draw from a wealth of approaches to craft a process that responds to your unique needs.',
  },
  {
    icon: Route,
    title: 'A Path Designed for You',
    text: 'Every session, every conversation is shaped by where you are and where you want to go. The result is a coaching experience that feels relevant, responsive, and genuinely transformative.',
  },
];

export default function Approach() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4 leading-snug text-balance">
          An Individualized Approach, Based on Your Unique Circumstances
        </h2>
        <p className="text-violet-300/70 text-center max-w-2xl mx-auto mb-16">
          This practice is built on the belief that meaningful change begins with
          genuine understanding. Challenges across every area of life&mdash;career,
          relationships, personal fulfillment&mdash;are met not with a preconceived
          formula, but with curiosity, empathy, and intentionality.
        </p>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Candid photo */}
          <div className="relative mx-auto md:mx-0 w-full max-w-sm md:max-w-none">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl shadow-violet-950/50 border border-white/10">
              <img
                src={approachCandid}
                alt="Jeremy, founder of The Champagne Method"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-lavender-500/20 rounded-2xl -z-10" />
          </div>

          {/* Points */}
          <div className="space-y-8">
            {points.map((p) => (
              <div key={p.title} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-white/5 border border-violet-500/25 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <p.icon size={24} className="text-teal-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {p.title}
                  </h3>
                  <p className="text-violet-200/70 leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
