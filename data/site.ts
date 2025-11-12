export const site = {
  title: "Wholesale Tuna",
  author: "Camilo Hernández Nyreen",
  description: "Music, lyrics, and cover art by Wholesale Tuna.",
  social: [
    { name: "Twitter", url: "https://twitter.com/yourhandle" },
    { name: "Instagram", url: "https://instagram.com/yourhandle" },
    { name: "Bandcamp", url: "https://yourname.bandcamp.com" },
  ],
};

export type SocialLink = {
  name: string;
  url: string;
};

export const defaultSocial: SocialLink[] = [
  { name: "Spotify", url: "https://open.spotify.com/artist/04435ueRTaxUQmsiBoWocT" },
  { name: "Apple Music", url: "https://music.apple.com/artist/wholesale-tuna/1535800992" },
];
