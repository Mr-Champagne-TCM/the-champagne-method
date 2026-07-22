import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MyStory from './components/MyStory';
import Possibilities from './components/Possibilities';
import Approach from './components/Approach';
import Testimonials from './components/Testimonials';
import LetsConnect from './components/LetsConnect';
import Footer from './components/Footer';

function WavyBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient: deep blue to violet */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1428] via-[#1a1040] to-[#2d1155]" />

      {/* Animated wave layers */}
      <svg
        className="wave-animate absolute bottom-0 left-0 w-[200%] h-[60%] opacity-20"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,250 C240,180 480,320 720,250 C960,180 1200,320 1440,250 L1440,400 L0,400 Z"
          fill="url(#wave1)"
        />
        <defs>
          <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="50%" stopColor="#6d28d9" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="wave-animate-alt absolute bottom-0 left-0 w-[200%] h-[45%] opacity-15"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,280 C200,220 400,340 600,280 C800,220 1000,340 1200,280 C1320,240 1380,300 1440,280 L1440,400 L0,400 Z"
          fill="url(#wave2)"
        />
        <defs>
          <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="wave-animate-slow absolute bottom-0 left-0 w-[200%] h-[30%] opacity-25"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,300 C360,250 720,350 1080,300 C1260,275 1380,325 1440,300 L1440,400 L0,400 Z"
          fill="url(#wave3)"
        />
        <defs>
          <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6d28d9" />
            <stop offset="50%" stopColor="#5b21b6" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>

      {/* Top subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/10 rounded-full blur-[120px]" />
    </div>
  );
}

export default function App() {
  return (
    <div className="font-sans text-white relative">
      <WavyBackground />
      <Navbar />
      <Hero />
      <MyStory />
      <Possibilities />
      <Approach />
      <Testimonials />
      <LetsConnect />
      <Footer />
    </div>
  );
}
