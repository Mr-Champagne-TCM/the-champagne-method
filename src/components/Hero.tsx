import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight text-balance">
          Discover Possibilities and Realize Your Potential
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-violet-200/80 leading-relaxed max-w-xl mx-auto">
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
    </section>
  );
}
