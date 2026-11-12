/**
 * Turns a Spotify share link into the URL for Spotify's embedded player (dark theme):
 *   https://open.spotify.com/track/ID  ->  https://open.spotify.com/embed/track/ID?...
 * Works for tracks, albums, playlists, artists, shows and episodes. Returns "" for anything else.
 */
export function toSpotifyEmbed(link?: string): string {
  if (!link) return "";
  try {
    const url = new URL(link);
    if (url.hostname !== "open.spotify.com") return "";
    const path = url.pathname.replace(/^\/intl-[a-z-]+/i, "").replace(/^\/embed/, "");
    if (!/^\/(track|album|playlist|artist|show|episode)\/[A-Za-z0-9]+/.test(path)) return "";
    return `https://open.spotify.com/embed${path}?utm_source=generator&theme=0`;
  } catch {
    return "";
  }
}
