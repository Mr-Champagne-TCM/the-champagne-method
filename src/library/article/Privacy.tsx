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
    <ArticlePage crumb="Privacy" parent={{ label: 'Readings', href: '/readings/' }} hd>
      <ArticleHeader
        eyebrow="Human Design readings"
        title="Privacy"
        standfirst="What is collected when you buy a Human Design reading, what is kept, for how long, and who else ever sees it."
      />
      <p className="text-[15px] text-brand-muted">Last updated October 23, 2026.</p>

      {/*
        CHANGED 16 OCTOBER 2026 (Jeremy: "a veer from our initial approach.
        Update Ts and Cs/privacy as needed"). A paid chart now keeps its birth
        details so the PDF can print the birth line under the name. Read out of
        hd-site netlify/lib/reading.mjs (birthRecord, fillReading): date, time
        or "unknown", the place as picked, the time zone -- no coordinates --
        on the chart and reading tiers only, in the reading's own record.

        CHANGED 19 OCTOBER 2026 (newcomer fixes 17A and 20A, Jeremy 10/19). The
        shop's birth form asks, optionally, for a "Name for this chart"; it is
        the title of the page and the PDF ("Alex's Human Design") and is kept in
        the same record as the birth details, for the same year, and deleted
        with them. The writer is sent chart values only, so never this name.
        The PDF's birth line no longer prints the time zone; the zone is still
        kept, because the chart is worked out from it. SHIP WITH THE SHOP: this
        describes the hd-site release that adds the field.

        CHANGED 20 OCTOBER 2026 (release 2, Jeremy 10/19: "capture birth details
        even for summary"). The summary keeps the details too (hd-site
        reading.mjs: fillReading keeps `birth` on every tier), so an upgrade
        carries them over. "Change a detail" keeps the details it replaced in
        the record's `history`, never sent to a page, a PDF or an email. "Email
        me my charts" keeps a list of record ids under a scrambled key per
        address (charts.mjs, store charts-by-email). And Jeremy 10/20: his page
        is "Human Design readings", never "the shop", in anything a reader sees.
        SHIP WITH hd-site release 2 -- not before.

        CHANGED 22 OCTOBER 2026 (fix 12): the payment page stopped asking for a
        phone number in hd-site release 1, so the payment rows and the Stripe
        line say name and email only. The in-person section below is a
        different system (the readings app on Jeremy's phone) and still takes
        a phone number or an email; it is unchanged. The date above is a stand-in
        for the day this goes live.
      */}
      <Callout>
        The birth details you type — date, time, place and time zone — are used to work out your
        chart, and they are kept with your chart so your page and PDF can show when and where you
        were born. They are kept for the same year as your chart, and they are never sent to Google,
        who writes the interpretation. The summary keeps them too, so going a step further never
        means typing them again.
        <span className="mt-3 block">
          The form also asks whose chart it will be, if you&rsquo;d like to give a name. It becomes the
          title of your page and your PDF (&ldquo;Alex&rsquo;s Human Design&rdquo;), and it is kept with
          your chart in the same way as your birth details: in the same place, for the same year, and
          deleted with them. Google never sees it.
        </span>
      </Callout>

      <P>
        The birth details changed on October 16, 2026, the name for the chart on October 19, 2026,
        and the summary keeping them too on October 20, 2026, so they come first. Everything below
        is the ordinary detail.
      </P>

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
            'To calculate your chart, and to show when and where you were born on your page and PDF. <strong>Kept with your chart, on every tier</strong> — the summary too',
          ],
          [
            '<strong>A name for the chart, if you give one</strong>',
            'The form, after you buy',
            'To put a title on your page and your PDF, like “Alex’s Human Design”. <strong>Kept with your chart</strong>, the same way as your birth details',
          ],
          [
            '<strong>Earlier details, if you correct one or add your birth time</strong>',
            '“Change a detail” or “Add your birth time”, after you buy',
            'Your corrected details, or the time you add, become your chart’s details. The ones they replaced are <strong>kept with the chart for its year, seen only by Jeremy</strong>, in case you ever write in about them. When you change a detail, the chart keeps the details it replaced and which of your Type, Profile and Authority came out differently — not a copy of the chart or reading before it. When you add a birth time, it keeps the details as they were, with the time unknown, and a copy of the chart made from them and of its written reading, if it had one. Apart from the short note at the top of your page that says what changed, they are never shown on your page, your PDF or in an email',
          ],
          [
            '<strong>The email you type on “Email me my charts”</strong>',
            'That page, if you use it',
            'To send a fresh link to each chart bought with that address — to that address and nowhere else. The page never shows whether it has any. The address itself is not stored; a scrambled version is counted for a day, so the page cannot be used to fill an inbox',
          ],
          [
            '<strong>Your name and email address</strong>',
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
        Human Design readings have no cookies, no trackers and no analytics at all. These library pages count
        visits with Umami, which sets no cookie, records no personal data, and cannot follow you
        to another site &mdash; it counts that a page was read, not who read it. Nothing follows
        you here from anywhere else. The only thing kept in your browser is a short-lived token
        proving you paid, and it disappears when you close the tab.
      </Callout>

      <H2>What is kept, and for how long</H2>
      <Table
        head={['What', 'How long']}
        rows={[
          [
            'Your chart, your reading, the birth details they were made from, the name you gave the chart (if you gave one), any earlier details you corrected (and, if you added a birth time, the chart and reading it replaced), and the name and email from your purchase',
            'One year from the day you bought it',
          ],
          [
            'Which charts were bought with your email, as record numbers under a scrambled key — no birth details, no address',
            'As long as those charts are kept',
          ],
          [
            'The link in your email',
            'Six days — then the page hands you a button that sends a fresh one',
          ],
          [
            'The link in the PDF of a chart made without a birth time, for adding the time later',
            'As long as the chart is kept. It does one thing only: add a birth time to that chart, once',
          ],
          ['The scrambled IP hash', 'One week'],
          ['A record of a technical failure, so it can be fixed', 'Fourteen days'],
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
        will ever go to, which is what stops the button from being a way for somebody else to have
        your reading mailed to them.
      </P>
      <P>
        One link works differently. When a chart is made without a birth time, its PDF carries a
        link for adding the time later, and that link does not stop after six days, because a PDF
        is kept for years. It can do one thing only: add a birth time to that one chart, once. The
        page it opens shows nothing that is not already on the PDF. Once the time is added, it
        opens the chart made with it, and after that it only says the time has been added. It works
        for as long as the chart is kept.
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
            <strong>Your birth details are kept only beside your chart</strong> — the date, the
            time, the place you picked and its time zone. Your PDF prints the date, the time and the
            place; the time zone is kept because your chart is worked out from it. No map
            coordinates are kept, and they are never filed anywhere on their own. The name you give
            the chart, if you give one, is kept beside your reading in the same way.
          </>,
        ]}
      />

      <H2>Who else sees any of it</H2>
      <P>A handful of companies do specific jobs, and each one gets only what that job needs.</P>
      <Bullets
        items={[
          <>
            <strong>Stripe</strong> takes the payment and holds your card details. They receive
            your name and email.
          </>,
          <>
            <strong>Resend</strong> delivers the emails. They receive your email address and what
            the message says.
          </>,
          <>
            <strong>Google</strong> writes the interpretation on the reading tier, using their
            Gemini model. <strong>They receive the values of your chart and nothing else</strong> —
            no name (not yours, and not the one you gave the chart), no email, no birth date, no
            birth time, no place. What is sent looks like
            “Projector, 1/3, Self-Projected, channels 11-56 and 1-8”, attached to nobody.
          </>,
          <>
            <strong>Netlify</strong> hosts the site and stores your reading.
          </>,
          <>
            <strong>Fly.io</strong> runs the chart calculator. Your birth date, time and time zone
            pass through it to be computed — never your name or the place — and are not stored
            there.
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
            <strong>A correction</strong> to your name, email or birth details, or to the name on
            your chart.
          </>,
          <>
            <strong>Your reading again</strong> — the link can be re-sent to the address you
            bought with, as often as you need, for the whole year. If you have lost the email,
            &ldquo;Email me my charts&rdquo; on the Human Design readings page sends a fresh link to
            each chart bought with your address.
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

      {/*
        READINGS MADE IN PERSON (10/17, footer-everywhere mock, open item: the
        readings site's footer had no privacy line because this page described
        the shop only). Every fact read out of hd-reading-app: ClientStore.kt
        keeps the client in the app until "Forget"; Delivery.upload days = 7;
        Reading.kt sends chart values only; OPT_IN is the email box. The
        laptop copy is the backup taken before each app update.
        NOT SAID, ON PURPOSE: that the PDF is deleted when the link closes. The
        readings site only deletes it when somebody opens an expired link
        (hosting/netlify/lib/delivery.mjs) -- an open item until a sweep exists.

        CHANGED 23 OCTOBER 2026 (Jeremy 10/23, call 1 = OPTION 2: a phone
        reading made without a birth time gets an "add it here" form on the
        readings site). Read out of hd-reading-app hosting/netlify/lib/
        addtime.mjs, upload.mjs and sweep.mjs (release-1022): store "addtime",
        `t/<token>` = the date-and-place line the form shows + the first six
        characters of the reading link + when it was registered (no name, no
        time, no zone, no contact); `used/<token>` = when + the time + a
        one-off number; both deleted when Jeremy deletes the client in the app
        (DELETE /upload), never swept. Store "limits", `ip/<HMAC>` = the times
        of a visitor's tries in the last day under an IP scrambled with the
        site's secret, expiring a day on, cleared by the monthly sweep. Jeremy's
        email goes through the alert mail (Resend): the time + six characters
        of each link, never a name, contact, date or place. SHIP WITH the
        readings-site deploy of that release -- not before.
      */}
      <div id="in-person" className="scroll-mt-28">
        <H2>Readings made with Jeremy in person</H2>
      </div>
      <P>
        Some readings are made face to face, on Jeremy&rsquo;s phone, rather than bought here.
        Their links open on readings.thechampagnemethod.co. For those:
      </P>
      <Table
        head={['What', 'Where, and for how long']}
        rows={[
          [
            '<strong>Your name, your birth date, time and place, and the phone number or email you give</strong>',
            'In the readings app on Jeremy&rsquo;s phone, so your reading can be sent again, until you ask for them to be removed. A backup copy is kept on his computer when the app is updated',
          ],
          [
            '<strong>Your reading&rsquo;s PDF</strong>, behind a private link and a short code',
            'The link stops working after seven days',
          ],
          [
            '<strong>If your reading was made without a birth time: the link in your PDF for adding it</strong>',
            'On readings.thechampagnemethod.co: the link&rsquo;s own code, the birth date and place the form shows you, the first six characters of your reading&rsquo;s link, and when it was made &mdash; never your name, a birth time or a way to reach you. Kept for as long as your reading is kept on Jeremy&rsquo;s phone, and removed with it',
          ],
          [
            '<strong>The birth time you add on that form</strong>',
            'Kept there once, with when it was sent and a one-off number that tells two quick sends apart, and removed with the link above. It is emailed to Jeremy, through Resend, so he can redo your chart and your reading: the email carries the time and the first six characters of each link &mdash; no name, no contact details, no birth date and no place',
          ],
          [
            '<strong>A scrambled version of your IP address</strong>, when you use that form',
            'The times of your tries in the last day, under your IP address scrambled with a secret, so the form can&rsquo;t be tried over and over. The address itself is never stored. Each count runs for a day, and a monthly clean-up clears the ones that have run out',
          ],
          [
            '<strong>Occasional emails</strong>',
            'Only if you checked the box for them',
          ],
        ]}
      />
      <P>
        Google writes the interpretation for these too, from the values of your chart only &mdash;
        no name, no birth date, no birth time, no place. A copy, a correction or deletion works
        the same way as above: one email to{' '}
        <TextLink href={`mailto:${CONTACT}`}>{CONTACT}</TextLink>.
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
        If a purchase was made by one, write in and it will be refunded and erased. Purchases are
        otherwise final, with the two exceptions named before you pay: if something did not arrive,
        or did not work, that is Jeremy’s to put right; and if the birth details went in wrong,
        write in and he will do what he can.
      </P>

      <H2>When this page changes</H2>
      <P>
        The rule, so it is not left to memory: this page is updated in the same piece of work that
        changes how information is handled — not afterward, and not when somebody notices. If a
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
