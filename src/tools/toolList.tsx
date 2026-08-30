import type { ReactNode } from 'react';
import QuizEase from '../library/tools/QuizEase';
import QuizRing from '../library/tools/QuizRing';
import QuizConfidence from '../library/tools/QuizConfidence';
import Breather from '../library/tools/Breather';
import ServesMeCheck from '../library/tools/ServesMeCheck';
import EmotionWheel from '../library/tools/EmotionWheel';

/**
 * The six interactive pieces, described once and read by three pages.
 *
 * WHY THIS FILE EXISTS. They are now named on /tools/ (where they live), at the
 * top of the library, and again inside the library section each one belongs to.
 * Three hand-kept lists is three places for a renamed heading to leave a link
 * pointing at something that no longer says what was clicked. Everything any
 * surface needs is here, and nothing about them is decided anywhere else.
 *
 * `after` is the library concept card each one grew out of. The tools moved to
 * their own page because six of them stacked inside the shelves crowded the
 * reading, but the pairing is still real -- the card teaches the idea and the
 * tool is the idea done -- so the link stays where the tool used to be.
 *
 * THREE OF SIX ARE QUIZZES. The wheel is a thing you look at, the breather is a
 * pacer you follow, and the belief check is a worksheet you bring your own
 * material to. `kind` keeps that honest on the page rather than letting one
 * word flatten all six into something half of them are not.
 *
 * `cta` is deliberately different from `title`. On /tools/ the heading says
 * what it is; in the library the button has to say what will happen if you
 * press it, because you are mid-paragraph about something else.
 */
export type Tool = {
  id: string;
  title: string;
  kind: 'Quiz' | 'Look' | 'Practice' | 'Worksheet';
  blurb: string;
  /** The library card this one belongs beside. */
  after: string;
  /** Button wording used in the library, specific to this one. */
  cta: string;
  node: ReactNode;
};

export const TOOLS: Tool[] = [
  {
    id: 'wheel',
    title: 'The wheel itself',
    kind: 'Look',
    blurb: 'Open it full-screen, zoom in, and take it with you.',
    after: 'The wheel of emotions',
    cta: 'Open the wheel',
    node: <EmotionWheel />,
  },
  {
    id: 'ring',
    title: 'Which ring are you on?',
    kind: 'Quiz',
    blurb: 'Six picks. Shows how finely you name what you feel.',
    after: 'The wheel of emotions',
    cta: 'Take the ring quiz',
    node: <QuizRing />,
  },
  {
    id: 'ease',
    title: 'Where’s your ease?',
    kind: 'Quiz',
    blurb: 'Two areas of your life, placed. A location, not a grade.',
    after: 'The three points of ease',
    cta: 'Find where your ease sits',
    node: <QuizEase />,
  },
  {
    id: 'breather',
    title: 'The 4-7-8 breather',
    kind: 'Practice',
    blurb: 'In for 4, hold for 7, out for 8. One round is already a win.',
    after: 'Your nervous system, briefly',
    cta: 'Start the 4-7-8 breather',
    node: <Breather />,
  },
  {
    id: 'serves-me',
    title: 'Serves-Me Belief Check',
    kind: 'Worksheet',
    blurb: 'Bring a belief. Four questions take it apart.',
    after: 'Serves me / doesn’t serve me',
    cta: 'Run a belief through the check',
    node: <ServesMeCheck />,
  },
  {
    id: 'confidence',
    title: 'Where’s your confidence pointed?',
    kind: 'Quiz',
    blurb: 'Every statement is confident. Only the direction is in question.',
    after: 'The confidence continuum',
    cta: 'See where your confidence points',
    node: <QuizConfidence />,
  },
];

/** Where a tool lives now, as a link from anywhere else on the site. */
export const toolHref = (id: string) => `/tools/#tool-${id}`;

/** Grouped by the library card they belong beside. Derived, never written twice. */
export const TOOLS_BY_CARD: Record<string, Tool[]> = TOOLS.reduce(
  (acc, t) => {
    (acc[t.after] ??= []).push(t);
    return acc;
  },
  {} as Record<string, Tool[]>,
);
