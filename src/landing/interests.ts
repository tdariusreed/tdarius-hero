export interface Interest {
  title: string;
  /** Shown in the small meta line, left. */
  kind: "Book" | "Music" | "Film";
  /** One line, in the site's serif voice: who made it. */
  by: string;
  /** One sentence. */
  note: string;
  cover: string;
  alt: string;
  width: number;
  height: number;
  /** Plain external link. Leave out to hide. */
  link?: { href: string; label: string };
  /** A Spotify share link. Adds a "Listen here" toggle that opens Spotify's own player. */
  spotify?: string;
}

export const INTERESTS_INTRO =
  "Here’s what I’m reading, listening to and watching right now.";

export const INTERESTS: Interest[] = [
  {
    title: "A Brief History of Seven Killings",
    kind: "Book",
    by: "Written by Marlon James",
    note: "I'll let you know when I'm finished",
    cover: "/interests/book.webp",
    alt: "Cover of A Brief History of Seven Killings by Marlon James",
    width: 560,
    height: 855,
    link: {
      href: "https://www.goodreads.com/en/book/show/20893314-a-brief-history-of-seven-killings",
      label: "Goodreads",
    },
  },
  {
    title: "Love is Stronger than Pride",
    kind: "Music",
    by: "Performed by Sade",
    note: "All the journaling is getting to me.",
    cover: "/interests/music.webp",
    alt: "Cover art for Love is Stronger than Pride by Sade",
    width: 399,
    height: 501,
    spotify: "https://open.spotify.com/track/5Qrcxc2YPomtX6UB0bwNaf?si=97f19acb12ea4e0e",
  },
  {
    title: "Clayface",
    kind: "Film",
    by: "Directed by  James Watkins",
    note: "I'm obsessed with the whole DCU right now.",
    cover: "/interests/movie.webp",
    alt: "Poster for Clayface",
    width: 258,
    height: 382,
    link: { href: "https://youtu.be/OGO4Mqvo3jI?si=ECyj1xsGsmywgSFE", label: "Trailer Here" },
  },
];
