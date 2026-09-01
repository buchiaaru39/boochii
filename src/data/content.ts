// ─────────────────────────────────────────────────────────────────────────
// EVERYTHING ON THE WEBSITE THAT YOU'D WANT TO EDIT LIVES IN THIS FILE.
// No coding needed — just change the text between the quotes " " below,
// save, and the site updates itself. Follow the existing shape (the
// { curly braces } and commas) and you can't go wrong.
// ─────────────────────────────────────────────────────────────────────────

// The passcode he types to enter the site. Change it any time.
export const SITE_PASSCODE = 'aaru'

// ── HOME SCREEN ────────────────────────────────────────────────────────
export const home = {
  eyebrow: 'A LITTLE PIECE OF US',
  greeting: 'Hey, you. ❤️',
  message: "I made a little place for the memories I never want to forget.",
  enterButton: 'Enter our little world',
}

// ── OUR STORY (timeline) ───────────────────────────────────────────────
// Add as many memories as you like — just copy one of the blocks below
// (including the { and }) and change the date/title/text.
// "date" is used for the live counter, so keep the very first entry as
// the day your story began.
export const timelineStart = '2023-09-11' // used for the live "for X days" counter

export const timeline = [
  {
    date: '11 September 2023',
    title: 'Where our story began',
    text: 'The day everything quietly changed.',
  },
  {
    date: '15 June 2025',
    title: 'The day it became us',
    text: 'No more question marks. Just us.',
  },
  // Add more memories here, for example:
  // {
  //   date: '1 January 2026',
  //   title: 'A little memory title',
  //   text: 'A sentence or two about it.',
  // },
]

// ── PHOTOS ──────────────────────────────────────────────────────────────
// Put your photos in the /public/photos folder, then reference them here
// as '/photos/your-file-name.jpg'. Until you do, placeholder tiles will
// show instead so the layout still looks nice.
export type Photo = { src: string | null; caption: string }

export const photoCategories: { name: string; photos: Photo[] }[] = [
  {
    name: 'First photo together',
    photos: [
      { src: null, caption: 'The very first one' },
    ],
  },
  {
    name: 'Favourite memories',
    photos: [
      { src: null, caption: 'A favourite' },
      { src: null, caption: 'Another favourite' },
    ],
  },
  {
    name: 'Funny moments',
    photos: [
      { src: null, caption: 'You, being ridiculous' },
    ],
  },
  {
    name: 'Random memories',
    photos: [
      { src: null, caption: 'Just because' },
    ],
  },
]

// ── SONGS ───────────────────────────────────────────────────────────────
// Paste a Spotify track/playlist link as "spotifyUrl" — the site will
// show a small player card for it. Leave it as null to show it as a
// "coming soon" card instead.
export type Song = { title: string; subtitle: string; spotifyUrl: string | null }

export const songSections: { name: string; songs: Song[] }[] = [
  {
    name: 'Our song',
    songs: [{ title: 'Add our song', subtitle: 'Tap to add a Spotify link', spotifyUrl: null }],
  },
  {
    name: 'Songs that remind me of her',
    songs: [
      { title: 'Add a song', subtitle: 'Tap to add a Spotify link', spotifyUrl: null },
    ],
  },
  {
    name: 'Our Spotify playlist',
    songs: [{ title: 'Our playlist', subtitle: 'Tap to add a Spotify link', spotifyUrl: null }],
  },
]

// ── VIDEOS ("Little Moments") ────────────────────────────────────────────
// Put video files in /public/videos and reference them below, e.g.
// '/videos/beach-day.mp4'. Leave src as null for a "coming soon" card.
export type Video = { src: string | null; caption: string }

export const videos: Video[] = [
  { src: null, caption: 'A little moment' },
  { src: null, caption: 'Another little moment' },
]

// ── LETTERS ───────────────────────────────────────────────────────────────
// Write freely — line breaks are kept, so just write like a normal letter.
export type Letter = { title: string; body: string }

export const letters: Letter[] = [
  {
    title: 'Open when you miss me',
    body: `I'm not far, I promise.\n\nClose your eyes for a second — I'm right there with you.`,
  },
  {
    title: "Open when you're having a bad day",
    body: `Today is just one day.\n\nIt doesn't get to decide how much I love you, and it doesn't get to stay.`,
  },
  {
    title: 'Open when you need a smile',
    body: `Remember that time we couldn't stop laughing over nothing?\n\nThat. Think about that.`,
  },
  {
    title: "Open when you can't sleep",
    body: `Breathe slow.\n\nWherever I am, some part of me is already dreaming about you.`,
  },
  {
    title: 'A letter from me',
    body: `There are a hundred small moments I never want to lose — so I put them here, just for you.\n\nThis is only the beginning.`,
  },
]
