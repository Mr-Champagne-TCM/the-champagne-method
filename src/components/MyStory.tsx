import { Sparkles } from 'lucide-react';

export default function MyStory() {
  return (
    <section id="my-story" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
          My Story
        </h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl shadow-violet-950/50">
              <img
                src="https://images.pexels.com/photos/3756165/pexels-photo-3756165.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional coaching environment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-violet-600/20 rounded-2xl -z-10" />
          </div>

          {/* Story content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-violet-500/30 rounded-full backdrop-blur-sm">
              <Sparkles size={14} className="text-teal-400" />
              <span className="text-sm font-medium text-violet-200">From Engineering to Empowerment</span>
            </div>

            <p className="text-violet-100/80 leading-relaxed">
              My journey began in the structured, analytical world of
              engineering&mdash;a field that taught me the power of systems,
              precision, and thoughtful problem-solving. But over time, I felt a
              deeper calling: to work directly with people, helping them navigate
              the complexities of their own lives with clarity and confidence.
            </p>
            <p className="text-violet-100/80 leading-relaxed">
              Through years of study and practice in conflict resolution,
              communication strategies, and personalized coaching, I discovered
              that the most meaningful transformations happen when people feel
              truly heard. That insight became the foundation of The Champagne
              Method&mdash;a practice rooted in empathy, intentionality, and the
              belief that every person holds the capacity for profound growth.
            </p>
            <p className="text-violet-100/80 leading-relaxed">
              Today, I bring that unique blend of analytical rigor and human
              compassion to every client relationship, creating a space where
              challenges are met with understanding and possibilities are
              uncovered together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
