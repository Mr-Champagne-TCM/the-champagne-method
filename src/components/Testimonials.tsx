import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Working with The Champagne Method completely shifted how I approach challenges in my life. I went from feeling stuck and overwhelmed to having a clear sense of direction and the confidence to take meaningful steps forward.",
    name: 'Sarah M.',
    role: 'Career Transition Client',
  },
  {
    quote:
      "The personalized approach made all the difference. I never felt like I was being put through a program\u2014every session felt tailored to exactly what I needed that day. That kind of attentiveness is rare and incredibly powerful.",
    name: 'David R.',
    role: 'Personal Growth Client',
  },
  {
    quote:
      "I came in struggling with communication in my most important relationships. Through our work together, I learned not just how to express myself, but how to truly listen. The impact has been profound and lasting.",
    name: 'Amara K.',
    role: 'Communication Coaching Client',
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
