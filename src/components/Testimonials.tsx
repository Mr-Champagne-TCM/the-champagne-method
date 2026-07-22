import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Thank you for holding space, and helping me see where I can make improvements. And thank you for helping me process, and see that I am not acting from a space of love or peace.",
    name: 'Jessie Santos',
    role: 'Relationship Transition Client',
  },
  {
    quote:
      "I came into this conversation feeling anxious and overwhelmed. After our 1-hour discussion, I feel confident, motivated and relieved. I'm ready to get started on my project!",
    name: 'Charley S.',
    role: 'Confidence and Efficacy Improvement Client',
  },
  {
    quote:
      "Thank you for reminding me to honor myself. I see now that I was giving too much of myself to the event space. Now I understand that setting healthy boundaries around how much I engage—without falling out of honor with myself—helps me maintain a healthy balance between what I give to myself and what I contribute outward.",
    name: 'D. C.',
    role: 'Confidence and Efficacy Improvement Client',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Client Stories
        </h2>
        <p className="text-violet-300/70 text-center max-w-lg mx-auto mb-16">
          Real transformations from real people who chose to invest in
          themselves.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-violet-500/20 hover:border-violet-400/30 transition-all duration-300 flex flex-col"
            >
              <Quote size={28} className="text-teal-400/40 mb-4 flex-shrink-0" />
              <p className="text-violet-100/80 leading-relaxed flex-1 text-sm">
                {t.quote}
              </p>
              <div className="mt-6 pt-4 border-t border-violet-500/20">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-violet-300/60">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
