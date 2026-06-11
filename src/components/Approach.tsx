import { Fingerprint, Lightbulb, Route } from 'lucide-react';

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
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4 leading-snug text-balance">
          An Individualized Approach, Based on Your Unique Circumstances
        </h2>
        <p className="text-violet-300/70 text-center max-w-2xl mx-auto mb-16">
          This practice is built on the belief that meaningful change begins with
          genuine understanding. Challenges across every area of life&mdash;career,
          relationships, personal fulfillment&mdash;are met not with a preconceived
          formula, but with curiosity, empathy, and intentionality.
        </p>

        <div className="space-y-10">
          {points.map((p) => (
            <div key={p.title} className="flex gap-6 items-start">
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
    </section>
  );
}
