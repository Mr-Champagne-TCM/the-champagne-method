# Backlog — captured, not started

> **B-1 is DECIDED and queued.** Options 1 and 2 are approved and option 3 is
> dropped. Scheduled for after the Human Design site's launch deploy, at
> Jeremy's call, so the two do not compete for attention.

Things noticed and worth doing, written down before they are decided. Nothing in
here has been implemented. Each item records what was observed, whose idea each
option was, and what still needs a call — so that picking one up later does not
start from a half-remembered conversation.

Anything acted on moves out of here and into a commit that says why.

---

## B-1 · The first view looks like the whole site — 2026-08-28, Jeremy

**The observation, and it is real feedback rather than a hunch.** Two separate
people said the same thing on the same day: the homepage's opening view gives no
obvious sign that scrolling is needed. It is self-contained enough that it reads
as the entire site.

That is the cost of a deliberately clean opening screen, and it is worth taking
seriously precisely because the screen is working — nobody is confused by it,
they just think it is finished.

**Where the relevant copy lives** (verified, not assumed):

| What | File | Line |
|---|---|---|
| "My work is asking the questions that open it." | `src/components/Hero.tsx` | 31 |
| "Book a free 30-minute conversation" | `src/components/Hero.tsx` | 35 |

Both are in the Hero, which confirms the description: the opening view is the
Hero, and the section after it is what nobody knows is there.

**Three ideas, Jeremy's, recorded as given:**

1. **A scroll indicator**, bottom right of the viewport. In addition to the
   window's own scrollbar, not instead of it.

2. **Change the full stop to an ellipsis** at the end of "My work is asking the
   questions that open it." — so the line trails rather than closes.

   **His reasoning, given 2026-08-28 and worth keeping verbatim because it is
   the thing that justifies the instrument:** "the ellipsis will give the feel
   that there is more to see elsewhere. Like a process didn't complete and does
   elsewhere. They may intuitively feel inclined to scroll."

   That is a precise argument and it is why an ellipsis rather than an arrow or
   a nudge word: it does not instruct anybody to scroll, it leaves a sentence
   unfinished and lets the reader want the rest. Which is also the only version
   of this that stays in his voice — the site asks, it does not tell.

3. **Reduce the empty space** between the booking call-to-action and the top of
   the following section, so the next section peeks into view.
   **Jeremy flagged this one himself: discuss first, may not do it.** His own
   objection, and it is the right one: it would show there is more to scroll to,
   but it would wreck the clean opening view that already works.

### Decided — 2026-08-28, Jeremy

**Do 1 and 2. Drop 3.**

| Option | Call |
|---|---|
| 1 · scroll indicator, bottom right | **Do it** |
| 2 · ellipsis on the Hero line | **Do it** |
| 3 · close the gap so the next section peeks | **Dropped** |

Option 3 was the one he raised the objection to himself, and dropping it holds
the line the other two are built to respect: **the opening view does not
change.** Both approved options add a signal on top of a composition that is
working. That is a different kind of change from rebuilding the composition to
be the signal, and it is the reason they can ship together while 3 could not
have shipped with either.

**When.** After the Human Design site's launch deploy. Not because it is hard,
but because it is a different site and splitting attention across two live
deploys is how one of them gets a careless push.

**Still worth doing when it is picked up:** measure whether the next section's
top edge falls below the fold across common phone and laptop heights. Not to
reopen option 3 — that is closed — but because it says how strong the indicator
in option 1 has to be. If the next section already peeks on a laptop and only
hides on a phone, the indicator's job is narrower than the two reports suggest.
