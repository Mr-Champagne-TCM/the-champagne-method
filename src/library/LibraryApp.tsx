import { useState, useEffect, type ReactNode } from 'react';
import Background from '../components/Background';
import { shelves } from './content';
import { TOOLS, TOOLS_BY_CARD, toolHref } from '../tools/toolList';
import { SITE_VERSION } from '../site/version';
import { useHashScroll } from '../site/useHashScroll';

function Nav() {
  const [scrolled, setScrolled] = useState(false);
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
        className={`max-w-5xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-4 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        {/* Starts smaller than on desktop: at every common phone width (390/414/430) a
            26px brand plus the right-hand link overruns the bar and the two collide. */}
        <a
          href="/"
          className={`font-display font-medium tracking-tight whitespace-nowrap text-brand-paper transition-all duration-300 ${
            scrolled ? 'text-[18px] sm:text-[19px]' : 'text-[20px] sm:text-[26px] md:text-[30px]'
          }`}
        >
          The <span className="text-brand-gold">Champagne</span> Method
        </a>
        <a
          href="/#connect"
          className="font-sans text-[14px] sm:text-[15px] whitespace-nowrap shrink-0 text-brand-muted hover:text-brand-teal transition-colors"
        >
          Start a conversation
        </a>
      </div>
    </nav>
  );
}

function Tag({ children, gold = false }: { children: ReactNode; gold?: boolean }) {
  return (
    <span
      className={`inline-block text-[10px] font-semibold uppercase tracking-[0.18em] rounded-full px-2.5 py-0.5 mb-2 border ${
        gold ? 'text-brand-teal border-brand-teal/40' : 'text-brand-gold border-brand-gold/30'
      }`}
    >
      {children}
    </span>
  );
}

export default function LibraryApp() {
  useHashScroll();

  return (
    <div className="font-sans text-brand-paper">
      <Background />
      <div className="relative z-10">
        <Nav />
        <main>
          {/*
            A SHORTER HERO, so the way in is visible without scrolling.

            The headline was set at a size that pushed everything under it off
            a laptop screen, and what got pushed off was the only part of this
            page somebody can act on immediately.

            THE "keeps everything on your screen, always" LINE IS GONE, and not
            only for room: the interactive pieces live on /tools/ now, so
            opening one leaves this page. The sentence had become untrue.
          */}
          <section className="pt-28 pb-2">
            <div className="max-w-5xl mx-auto px-6 sm:px-8">
              <span className="block mb-3 font-sans text-[15px] font-semibold uppercase tracking-[0.22em] text-brand-teal">
                The Library
              </span>
              <h1 className="font-display font-medium tracking-tight leading-[1.1] text-[clamp(2rem,4.6vw,2.875rem)]">
                Take the tools. They&rsquo;re yours.
              </h1>
              <p className="mt-3 max-w-[62ch] text-[clamp(1.0625rem,1.8vw,1.1875rem)] leading-relaxed text-brand-paper/90">
                Everything here is free. Plenty of people get real distance with these alone,
                and I&rsquo;d rather you have them than not.
              </p>
              <ul className="flex flex-wrap gap-2.5 mt-5 list-none p-0">
                {shelves.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="inline-block rounded-full px-4 py-2 text-[14px] border border-brand-gold/30 text-brand-paper hover:border-brand-teal hover:text-brand-teal transition-colors"
                    >
                      {s.title.replace('&amp;', '&')}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>


          {/*
            THE TOOLS LIVE ON THEIR OWN PAGE NOW.

            Six working tools stacked between the shelves made this a page to
            scroll past rather than read, and most of them were never reached
            anyway. This panel is the pointer, and each section below still
            carries a button to the exact one that used to sit there.

            NAMES ONLY, NO BLURBS. Each tool is described twice on the way to
            being used -- once on /tools/ and once by the button in its own
            section -- so a third description here would be the same six
            sentences a reader has to get past to reach the writing.
          */}
          <section id="try" className="scroll-mt-24 pb-4">
            <div className="max-w-5xl mx-auto px-6 sm:px-8">
              <div className="rounded-3xl border border-brand-gold/25 bg-white/[0.035] p-6 sm:p-8">
                <span className="block mb-3 font-sans text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-teal">
                  Try one
                </span>
                <p className="text-brand-paper/85 max-w-[60ch] mb-5">
                  Three short quizzes, a breathing pacer, the emotion wheel, and a belief
                  worksheet &mdash; a minute or two each, and none of them asks for your email.
                  They have their own page now, and each one is linked again below beside the
                  piece that explains it.
                </p>
                <ul className="flex flex-wrap gap-2.5 list-none p-0 m-0 mb-6">
                  {TOOLS.map((t) => (
                    <li key={t.id}>
                      <a
                        href={toolHref(t.id)}
                        className="inline-block rounded-full px-4 py-2 text-[14px] border border-brand-gold/30 text-brand-paper hover:border-brand-teal hover:text-brand-teal transition-colors"
                        dangerouslySetInnerHTML={{ __html: t.title }}
                      />
                    </li>
                  ))}
                </ul>
                <a
                  href="/tools/"
                  className="inline-block rounded-full px-6 py-3 font-sans text-[15px] font-semibold bg-brand-teal text-[#0d1b1a] shadow-lg shadow-brand-teal/25 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Open all six &rarr;
                </a>
              </div>
            </div>
          </section>

          {shelves.map((shelf) => (
            <section key={shelf.id} id={shelf.id} className="py-8">
              <div className="max-w-5xl mx-auto px-6 sm:px-8">
                <div className="border-t border-brand-gold/15 pt-8">
                  <h2
                    className="font-display font-medium text-[clamp(1.75rem,4.2vw,2.25rem)] mb-1"
                    dangerouslySetInnerHTML={{ __html: shelf.title }}
                  />
                  <p className="text-brand-muted mb-7" dangerouslySetInnerHTML={{ __html: shelf.blurb }} />
                  {shelf.cards.map((card) => (
                    <div key={card.title}>
                      <div className="border-l-2 border-brand-teal/35 pl-5 mb-7 max-w-[64ch]">
                        <Tag>{card.tag}</Tag>
                        <h3
                          className="font-display font-medium text-xl mb-2"
                          dangerouslySetInnerHTML={{ __html: card.title }}
                        />
                        <div className="libcard" dangerouslySetInnerHTML={{ __html: card.html }} />
                      </div>
                      {/*
                        THE BUTTON SAYS WHAT WILL HAPPEN, not "Try it".

                        A reader hits this mid-paragraph about something else,
                        so a generic label asks them to guess what is on the
                        other side. Each one is worded for the single tool that
                        used to sit in this exact spot -- the idea and the doing
                        are still one click apart, they are just not stacked on
                        top of each other any more.
                      */}
                      {(TOOLS_BY_CARD[card.title] ?? []).length > 0 && (
                        <div className="flex flex-wrap gap-2.5 mb-8 -mt-1 pl-5">
                          {(TOOLS_BY_CARD[card.title] ?? []).map((tool) => (
                            <a
                              key={tool.id}
                              href={toolHref(tool.id)}
                              className="inline-block rounded-full px-4 py-2.5 font-sans text-[15px] font-semibold border border-brand-teal/50 text-brand-teal transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-teal hover:text-[#0d1b1a]"
                            >
                              {tool.cta} &rarr;
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  {shelf.id === 'agency' && (
                    <>
                      <p className="font-display italic text-xl text-brand-gold max-w-[52ch] mb-6">
                        Anyone can own a hammer, a chisel, and a saw. Knowing which one, when,
                        and for what &mdash; <em>that&rsquo;s the method.</em>
                      </p>
                      <a
                        href="/#connect"
                        className="inline-block rounded-full px-6 py-3.5 font-sans text-[16px] font-semibold bg-brand-teal text-[#0d1b1a] shadow-lg shadow-brand-teal/25 transition-all duration-200 hover:-translate-y-0.5"
                      >
                        Start a conversation
                      </a>
                    </>
                  )}
                </div>
              </div>
            </section>
          ))}
        </main>

        <footer className="border-t border-brand-gold/15 pt-12 pb-11 mt-8">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <div className="grid sm:grid-cols-3 gap-8 mb-10">
              <div>
                <h4 className="font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-brand-gold mb-3">
                  The Library
                </h4>
                {shelves.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block py-2.5 sm:py-1 text-[15px] text-brand-muted hover:text-brand-teal transition-colors"
                    dangerouslySetInnerHTML={{ __html: s.title }}
                  />
                ))}
              </div>
              <div>
                <h4 className="font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-brand-gold mb-3">
                  The Practice
                </h4>
                {[
                  ['Free tools', '/#tools'],
                  ['The method', '/#method'],
                  ['My story', '/#my-story'],
                  ['Start a conversation', '/#connect'],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="block py-2.5 sm:py-1 text-[15px] text-brand-muted hover:text-brand-teal transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
              <div>
                <h4 className="font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-brand-gold mb-3">
                  Contact
                </h4>
                <a
                  href="https://thechampagnemethod.co"
                  className="block py-1 text-[15px] text-brand-muted hover:text-brand-teal transition-colors"
                >
                  thechampagnemethod.co
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-between items-center pt-6 border-t border-brand-gold/10">
              <span className="text-[15px] text-brand-muted/70">
                &copy; 2026 The Champagne Method. All rights reserved.
              </span>
              <span className="text-xs text-brand-muted/40">{SITE_VERSION}</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
