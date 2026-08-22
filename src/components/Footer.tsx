const columns = [
  {
    title: 'The Library',
    links: [
      { label: 'Awareness', href: '/library#awareness' },
      { label: 'Communication', href: '/library#communication' },
      { label: 'Beliefs & Stories', href: '/library#beliefs' },
      { label: 'Empathy', href: '/library#empathy' },
      { label: 'Agency', href: '/library#agency' },
    ],
  },
  {
    title: 'The Practice',
    links: [
      { label: 'Free tools', href: '#tools' },
      { label: 'The method', href: '#method' },
      { label: 'My story', href: '#my-story' },
      { label: 'Start a conversation', href: '#connect' },
    ],
  },
  {
    title: 'Contact',
    links: [{ label: 'thechampagnemethod.co', href: 'https://thechampagnemethod.co' }],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-gold/15 pt-12 pb-11">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {columns.map((c) => (
            <div key={c.title}>
              <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3">
                {c.title}
              </h4>
              {c.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="block py-1 text-sm text-brand-muted hover:text-brand-teal transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 justify-between items-center pt-6 border-t border-brand-gold/10">
          <span className="text-sm text-brand-muted/70">
            &copy; 2026 The Champagne Method. All rights reserved.
          </span>
          <span className="text-xs text-brand-muted/40">v2.0 &middot; Aug 2026</span>
        </div>
      </div>
    </footer>
  );
}
