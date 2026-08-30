import { ArticlePage, ArticleHeader, H2, H3, P, Callout, Bullets, TextLink } from './ArticleUI';

/**
 * What is collected, what is kept, and who else sees it.
 *
 * EVERY FACT HERE WAS READ OUT OF THE CODE, not adapted from a template. The
 * one-year retention, the six-day link, the one-week IP hash and the fourteen
 * days of incident records are the constants in hd-site; the list of companies
 * is the list of things that module actually calls. A privacy policy that
 * describes a system nobody checked is worse than none, because it is a promise
 * with nothing behind it.
 *
 * IT LIVES ON THIS SITE rather than the shop for the same reason the readings
 * page does: this repo deploys to GitHub Pages for nothing, and a page that
 * will be edited for its wording rather than its behaviour belongs on the side
 * that is free to edit. It is also the site Stripe has on file.
 *
 * IT SITS UNDER /readings/, NOT AT THE ROOT. Every fact on this page is about
 * buying a Human Design reading -- the birth details, the chart, the year the
 * reading is kept. None of it describes the coaching, which collects nothing
 * and sells nothing through this site. At /privacy/ it read as a policy for the
 * whole practice and promised things about coaching that were never checked.
 * /privacy/ is kept alive as a redirect (public/privacy/index.html).
 *
 * REVIEWED BY JEREMY, 2026-08-29, with five corrections that are all in here:
 * why six days is six days, that an expired link self-serves, an honest
 * security section rather than an encryption claim we cannot make, a real rule
 * for when this page changes, and the children clause kept as the one refund
 * exception to "all purchases are final".
 */

const CONTACT = 'hd-readings@thechampagnemethod.co';

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full border-collapse text-[15px]">
        <thead>
          <tr>
            {head.map((h) => (
              <th
                key={h}
                className="border-b border-brand-gold/20 px-3 py-2 text-left font-sans text-[12px] uppercase tracking-[0.12em] text-brand-muted"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>
              {r.map((cell, i) => (
                <td
                  key={i}
                  className="border-b border-brand-gold/10 px-3 py-3 align-top leading-relaxed text-brand-paper/85"
                  dangerouslySetInnerHTML={{ __html: cell }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Privacy() {
  return (
    <ArticlePage crumb="Privacy" parent={{ label: 'Readings', href: '/readings/' }}>
      <ArticleHeader
        eyebrow="Human Design readings"
        title="Privacy"
        standfirst="What is collected when you buy a Human Design reading, what is kept, for how long, and who else ever sees it."
      />
      <p className="text-[15px] text-brand-muted">Last updated 29 August 2026.</p>

      <Callout>
        The birth details you type are used to work out your chart and are then discarded.
        They are not stored, not logged, and not written to disk — not even for you.
      </Callout>

      <P>That is the unusual one, so it comes first. Everything below is the ordinary detail.</P>

      <H2>Who is asking</H2>
      <P>
        The Champagne Method is a solo coaching practice run by Jeremy Champagne in Texas.
        Anything on this page can be asked about at{' '}
        <TextLink href={`mailto:${CONTACT}`}>{CONTACT}</TextLink>, which reaches Jeremy directly.
      </P>

      <H2>What is collected</H2>
      <Table
        head={['What', 'Where it comes from', 'Why']}
        rows={[
          [
            '<strong>Your birth date, time and place</strong>',
            'The form, after you buy',
            'To calculate your chart. <strong>Discarded the moment the chart is made.</strong>',
          ],
          [
            '<strong>Your name, email address and phone number</strong>',
            'The payment page',
            'To send you what you bought, and to send it again if you ask',
          ],
          [
            '<strong>Your card details</strong>',
            'The payment page',
            'Handled entirely by Stripe. They never reach this site and are never seen here',
          ],
          [
            '<strong>A scrambled version of your IP address</strong>',
            'Automatically',
            'To stop one machine asking for thousands of free charts. It is hashed with a secret before it is written, so the address itself is never stored',
          ],
        ]}
      />

      <Callout>
        There are no cookies, no trackers and no analytics on this site. Nothing follows you
        here from anywhere else, and nothing follows you away. The only thing kept in your
        browser is a short-lived token proving you paid, and it disappears when you close the tab.
      </Callout>

      <H2>What is kept, and for how long</H2>
      <Table
        head={['What', 'How long']}
        rows={[
          [
            'Your chart, your reading, and the name, email and phone from your purchase',
            'One year from the day you bought it',
          ],
          [
            'The link in your email',
            'Six days — then the page hands you a button that sends a fresh one',
          ],
          ['The scrambled IP hash', 'One week'],
          ['A record of a technical failure, so it can be fixed', 'Fourteen days'],
          ['Your birth date, time and place', '<strong>Not kept at all</strong>'],
        ]}
      />
      <P>
        After a year your reading is gone. If you want to keep it, download the PDF — that copy
        is yours and lives on your own device.
      </P>

      <H3>Why the link is short and the reading is not</H3>
      <P>
        They are two different clocks on purpose. The link is a key: anyone holding it can open
        your reading, so it stops working after six days in case it is forwarded, left in an old
        inbox, or read over your shoulder. The reading is the thing you bought, so it keeps for
        the year regardless.
      </P>
      <P>
        An expired link is not a dead end and you do not have to write in for it. Open it and the
        page offers you a button that sends a fresh one — to the address on your purchase and
        nowhere else, as many times as you need, for the whole year. That is the only address it
        will ever go to, which is what stops the button being a way for somebody else to have
        your reading mailed to them.
      </P>

      <H2>How it is kept safe</H2>
      <P>Plainly, and without overstating it:</P>
      <Bullets
        items={[
          <>
            <strong>Everything travels encrypted.</strong> Every connection to this site, and
            every connection from it to Stripe, Google, Resend and the chart calculator, is over
            HTTPS.
          </>,
          <>
            <strong>Everything sits encrypted.</strong> Your reading is stored by Netlify, which
            encrypts it at rest on their disks.
          </>,
          <>
            <strong>Your reading is not reachable by guessing.</strong> It is filed under a name
            derived from your payment with a secret key, and the link is signed. There is no page
            that lists readings and no address you can count up to.
          </>,
          <>
            <strong>Your card is never here.</strong> It goes from you to Stripe. This site never
            receives it and could not store it if it wanted to.
          </>,
          <>
            <strong>Your birth details are never written down at all</strong> — the strongest
            protection available, which is that there is nothing to protect.
          </>,
        ]}
      />

      <H2>Who else sees any of it</H2>
      <P>A handful of companies do specific jobs, and each one gets only what that job needs.</P>
      <Bullets
        items={[
          <>
            <strong>Stripe</strong> takes the payment and holds your card details. They receive
            your name, email and phone.
          </>,
          <>
            <strong>Resend</strong> delivers the emails. They receive your email address and what
            the message says.
          </>,
          <>
            <strong>Google</strong> writes the interpretation on the reading tier, using their
            Gemini model. <strong>They receive the values of your chart and nothing else</strong> —
            no name, no email, no birth date, no birth time, no place. What is sent looks like
            “Projector, 1/3, Self-Projected, channels 11-56 and 1-8”, attached to nobody.
          </>,
          <>
            <strong>Netlify</strong> hosts the site and stores your reading.
          </>,
          <>
            <strong>Fly.io</strong> runs the chart calculator. Your birth details pass through it
            to be computed and are not stored there either.
          </>,
        ]}
      />
      <P>
        Nothing is sold, rented, or handed to advertisers. There is no advertising here at all.
      </P>

      <H2>Being emailed</H2>
      <P>
        You are emailed about the thing you bought — that it is ready, and again if you ask for
        the link. That is delivery, and it is not permission to market to you. You will not be
        added to a mailing list because you bought a reading. If that ever changes you will be
        asked first, separately, and in plain words.
      </P>

      <H2>What you can ask for</H2>
      <Bullets
        items={[
          <>
            <strong>A copy</strong> of everything held about you.
          </>,
          <>
            <strong>Deletion.</strong> Your reading and your details can be removed before the
            year is up, and it will be done rather than debated. Ask, and it happens.
          </>,
          <>
            <strong>A correction</strong> to your name or email.
          </>,
          <>
            <strong>Your reading again</strong> — the link can be re-sent to the address you
            bought with, as often as you need, for the whole year.
          </>,
        ]}
      />
      <P>
        One email to <TextLink href={`mailto:${CONTACT}`}>{CONTACT}</TextLink> does any of these.
        There is no form and no process; it is one person reading it.
      </P>
      <P>
        Depending on where you live you may have these rights in law as well — under the GDPR in
        the UK and Europe, or state privacy laws in the US. They are offered here to everybody
        regardless.
      </P>

      <H2>If something goes wrong</H2>
      <P>
        The site watches itself and reports failures to Jeremy automatically. If a problem ever
        exposed somebody’s information, the people affected would be told what happened and what
        was done about it — not left to find out.
      </P>

      <H2>Children</H2>
      <P>
        This is not intended for anyone under 16, and readings are not knowingly sold to children.
        If a purchase was made by one, write in and it will be refunded and erased — the one
        exception to purchases being final.
      </P>

      <H2>When this page changes</H2>
      <P>
        The rule, so it is not left to memory: this page is updated in the same piece of work that
        changes how information is handled — not afterwards, and not when somebody notices. If a
        change adds something collected, adds a company that sees it, changes how long anything is
        kept, or turns on analytics, the page changes with it and the date at the top moves.
      </P>
      <P>
        A change that affects what is collected or who sees it will be said plainly here rather
        than slipped in. Anyone whose reading is still within its year at the time will be told by
        email as well.
      </P>
    </ArticlePage>
  );
}
