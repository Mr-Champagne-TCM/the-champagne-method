import { ArrowDown } from 'lucide-react';
import heroPortrait from '../assets/hero-portrait.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight text-balance">
            Discover Possibilities and Realize Your Potential
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-violet-200/80 leading-relaxed max-w-xl mx-auto md:mx-0">
            Welcome to a space of transformation. Here, we believe in your innate
            ability to grow, evolve, and thrive.
          </p>
          <a
            href="#possibilities"
            className="inline-flex items-center gap-2 mt-10 px-8 py-3.5 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-teal-500/30 hover:shadow-teal-600/35 hover:-translate-y-0.5"
          >
            Explore the Possibilities
            <ArrowDown size={18} />
          </a>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto md:mx-0 w-full max-w-xs sm:max-w-sm">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-violet-950/50 border border-white/10">
            <img
              src={heroPortrait}
              alt="Jeremy, founder of The Champagne Method"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-teal-500/20 rounded-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}
