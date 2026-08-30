import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'The Method', href: '#method' },
  { label: 'Library', href: '#tools' },
  { label: 'Readings', href: '#readings' },
  { label: 'My Story', href: '#my-story' },
  { label: 'Connect', href: '#connect' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ground-top/90 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div
        className={`max-w-5xl mx-auto px-6 sm:px-8 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <a
          href="#"
          className={`font-display font-medium tracking-tight whitespace-nowrap text-brand-paper transition-all duration-300 ${
            scrolled ? 'text-[19px]' : 'text-[26px] sm:text-[30px]'
          }`}
        >
          The <span className="text-brand-gold">Champagne</span> Method
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-[15px] text-brand-muted hover:text-brand-teal transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-brand-paper p-3 -m-1"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-ground-top/95 backdrop-blur-md border-t border-brand-gold/20">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="font-sans text-[17px] text-brand-muted hover:text-brand-teal transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
