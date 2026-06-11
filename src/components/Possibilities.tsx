import { Heart, Compass, MessageCircle } from 'lucide-react';

const cards = [
  {
    icon: Heart,
    title: 'Personal Growth',
    description:
      'Unlock your potential through self-awareness, intentional goal-setting, and the confidence to pursue what truly matters to you. Together, we build a foundation for lasting change.',
  },
  {
    icon: Compass,
    title: 'Navigating Transition',
    description:
      "Whether it's a career shift, life milestone, or unexpected change, transitions can feel overwhelming. I provide the clarity and support you need to move forward with purpose and resilience.",
  },
  {
    icon: MessageCircle,
    title: 'Collaborative Communication',
    description:
      'Strong relationships are built on understanding and respect. Learn to navigate conflict, express your needs, and create meaningful connections in every area of your life.',
  },
];

export default function Possibilities() {
  return (
    <section id="possibilities" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          The Possibilities
        </h2>
        <p className="text-violet-300/70 text-center max-w-xl mx-auto mb-16">
          Three areas where focused coaching can create meaningful, lasting
          transformation in your life.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group bg-white/5 backdrop-blur-md border border-violet-500/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30"
            >
              <div className="w-12 h-12 bg-teal-500/15 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-500/25 transition-colors">
                <card.icon size={24} className="text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-violet-200/70 leading-relaxed text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
