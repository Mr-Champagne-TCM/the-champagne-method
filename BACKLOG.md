# Backlog — captured, not started

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
   *(Jeremy's reason for this one was cut off mid-sentence — "This would" — so
   it is not recorded here rather than guessed at. Worth asking before building
   it, because the reason probably decides whether the ellipsis is the right
   instrument.)*

3. **Reduce the empty space** between the booking call-to-action and the top of
   the following section, so the next section peeks into view.
   **Jeremy flagged this one himself: discuss first, may not do it.** His own
   objection, and it is the right one: it would show there is more to scroll to,
   but it would wreck the clean opening view that already works.

**What is not yet decided.** Whether this is one change or a choice between
three. Options 1 and 2 add a signal without touching the composition; option 3
changes the composition to become the signal. They are not the same kind of fix
and probably should not all ship together.

**Worth measuring before choosing.** Whether the next section's top edge falls
below the fold is a function of viewport height, and the two reports came from
two unknown screens. A quick pass across common phone and laptop heights would
say whether option 3 is even needed, or whether it already peeks on some
devices and the problem is narrower than it looks.
