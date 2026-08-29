import { Cta } from './ui';

/**
 * Layout B: the hero stays pure type over the bubble field. No portrait here —
 * the first face arrives one beat later, in The Premise.
 */
export default function Hero() {
  return (
    <header className="relative min-h-[90vh] flex items-center pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 w-full">
        <div className="mb-6">
          <span className="block mb-2.5 font-sans text-[15px] font-semibold uppercase tracking-[0.26em] text-brand-teal">
            Coaching
          </span>
          <span className="block font-sans text-[13px] font-medium uppercase tracking-[0.2em] text-brand-gold/85">
            Agency &middot; Communication &middot; Empathy
          </span>
        </div>

        <h1 className="font-display font-medium tracking-tight leading-[1.1] text-[clamp(2.375rem,6.4vw,3.75rem)] text-brand-paper text-balance">
          Nothing changes until you{' '}
          <span className="text-brand-teal italic">see it differently</span>.
        </h1>

        <p className="mt-6 max-w-[60ch] text-[clamp(1.25rem,2.2vw,1.4375rem)] leading-relaxed text-brand-paper/90">
          Not more effort. Not a harder push. A different set of eyes on the same situation &mdash;
          and suddenly the thing that felt immovable has a door in it.
        </p>

        {/*
          THE LINE TRAILS RATHER THAN CLOSES (B-1, option 2).

          Two people told Jeremy on the same day that the opening screen reads
          as the whole site. Nothing is confusing about it -- it is clean and it
          works -- they simply thought it was finished.

          His reasoning for an ellipsis over an arrow or a nudge word, kept
          because it is the argument that justifies the instrument: "the
          ellipsis will give the feel that there is more to see elsewhere. Like
          a process didn't complete and does elsewhere. They may intuitively
          feel inclined to scroll."

          Which is also the only version of this that stays in his voice. It
          does not instruct anybody to scroll; it leaves a sentence unfinished
          and lets the reader want the rest. The site asks, it does not tell.
        */}
        <p className="mt-4 font-display italic text-xl sm:text-[1.375rem] text-brand-gold">
          My work is asking the questions that open it&hellip;
        </p>

        <div className="mt-9 flex flex-wrap gap-3.5">
          <Cta href="#connect">Book a free 30-minute conversation</Cta>
          <Cta href="#tools" ghost>
            Start with the free tools
          </Cta>
        </div>
      </div>
    </header>
  );
}
