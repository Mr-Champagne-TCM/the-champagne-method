import Background from '../components/Background';
import { Nav, Footer, ArticleHeader, TextLink } from '../library/article/ArticleUI';

/**
 * The page GitHub Pages serves for any address that does not exist.
 *
 * Parked items v2, 4a: Jeremy accepted the branded page with three cards
 * (10/15). Before it, a typo or an old link landed on GitHub's own 404, out of
 * the site's look with no way back in. Pages serves `404.html` from the publish
 * root for every wrong address, at any depth, so every asset path here is
 * absolute (vite `base: '/'`).
 *
 * The wording invites; it never tells the visitor what to do.
 */
const WAYS: { title: string; line: string; href: string; link: string }[] = [
  { title: 'Home', line: 'Coaching in agency, communication, and empathy.', href: '/', link: 'The front page' },
  {
    title: 'The Human Design library',
    line: 'Every part of a Human Design chart, one layer at a time, in plain words.',
    href: '/library/human-design/',
    link: 'The library',
  },
  {
    title: 'Readings',
    line: 'The summary, the chart and the reading: what arrives with each.',
    href: '/readings/',
    link: 'The three readings',
  },
];

export default function NotFound() {
  return (
    <div className="font-sans text-brand-paper">
      <Background />
      <div className="relative z-10">
        <Nav />
        <main className="pt-36 sm:pt-[204px] pb-12">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <div className="max-w-[64ch]">
              <ArticleHeader
                eyebrow="The Champagne Method"
                title={<>This page isn&rsquo;t here</>}
                standfirst="The link may be old, or the page may have moved. Any of these is a good place to pick up from."
              />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {WAYS.map((w) => (
                <a
                  key={w.href}
                  href={w.href}
                  className="group block rounded-2xl border border-brand-gold/20 bg-white/[0.04] p-5 transition-colors hover:border-brand-teal/60"
                >
                  <h2 className="font-sans text-[17px] font-semibold text-brand-paper mb-1">{w.title}</h2>
                  <p className="text-[16px] leading-relaxed text-brand-paper/80">{w.line}</p>
                  <span className="mt-3 inline-block text-[16px] text-brand-teal">
                    {w.link} <span aria-hidden="true">&rarr;</span>
                  </span>
                </a>
              ))}
            </div>
            <p className="mt-9 text-[16px] leading-relaxed text-brand-muted">
              If a link on this site brought you here, I&rsquo;d be grateful to hear which one.{' '}
              <TextLink href="/#connect">Start a conversation</TextLink>
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
