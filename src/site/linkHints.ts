/**
 * LINK LABELS (Jeremy 10/23, GO PDF: "Good, lets add link labels (hover hints?)").
 *
 * Every link says where it goes. Where its words have to stay short ("See
 * yours →", "Start a conversation"), the destination rides along as a hover
 * hint (title) and in the link's accessible name (aria-label), so a screen
 * reader hears it too. The Human Design library page has its own hover box
 * (data-tip, calls 39 and 40) and uses these same words there.
 *
 * One place for the words, so the same destination is always named the same way.
 */
export const HINT = {
  /** humandesign.thechampagnemethod.co, the readings' own front page */
  readings: 'Opens Human Design readings',
  /** /#connect: the booking link and the contact form on the home page */
  connect: 'Opens the contact section on the home page',
  /** / */
  home: 'Opens The Champagne Method home page',
  /** an outside video, opened in a new tab */
  video: 'Opens a YouTube video in a new tab',
} as const;

/** title + aria-label for a link whose visible words are `label`. The accessible name starts with the visible words. */
export const hint = (label: string, where: string) => ({ title: where, 'aria-label': `${label} (${where})` });
