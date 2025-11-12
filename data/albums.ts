export type Track = {
  id: string;
  title: string;
};

export type Album = {
  slug: string;
  title: string;
  year: number;
  cover: string;
  tracks: Track[];
  // optional streaming links (rendered on album page)
  links?: { name: string; url: string }[];
};

export const albums: Album[] = [
  {
    slug: "all-hail-the-king",
    title: "All Hail The King",
    year: 2025,
    cover: "/albums/all_hail_the_king.png",
    links: [
      { name: "Spotify", url: "https://open.spotify.com/artist/04435ueRTaxUQmsiBoWocT" },
      { name: "Apple Music", url: "https://music.apple.com/artist/wholesale-tuna/1535800992" },
      { name: "Youtube Music", url: "https://music.youtube.com/channel/UCwarG5-Eh9-sbmN374C4BaQ" },
    ],
    tracks: [
      { id: "urban-native", title: "Urban Native" },
      { id: "galileo-galilei", title: "Galileo Galilei" },
      { id: "king-of-the-fools", title: "King of the Fools" },
      { id: "dogs-of-war", title: "The Dogs of War" },
      { id: "ozymandias", title: "Ozymandias" },
      { id: "dreamsnatchers", title: "The Dreamsnatchers" },
      { id: "blood-transfusion", title: "Blood Transfusion" },
      { id: "take-me", title: "Take Me" },
      { id: "ay-ay-ay", title: "Ay Ay Ay" },
      { id: "over-our-heads", title: "Over Our Heads" },
      { id: "arachnids", title: "Arachnids" },
      { id: "must-we-stay-here-in-the-shadows", title: "Must We Stay Here, in the Shadows?" },
    ],
  },
  {
    slug: "ethics-for-heretics",
    title: "Ethics for Heretics",
    year: 2024,
    cover: "/albums/ethics_for_heretics.png",
    tracks: [
      { id: "dogs-of-war", title: "Dogs of War" },
      { id: "flowers", title: "Flowers" },
      { id: "the-past-the-future-and-the-inbetween", title: "The Past, the Future and the In Between" },
      { id: "dreams-of-japan", title: "Dreams of Japan" },
      { id: "all-my-friends", title: "All My Friends" },
    ],
  },
  {
    slug: "the-pizza-connection",
    title: "The Pizza Connection",
    year: 2023,
    cover: "/albums/the_pizza_connection.jpg",
    tracks: [
      { id: "2001", title: "2001" },
      { id: "post-shower", title: "Post-Shower" },
      { id: "adult-life", title: "Adult LIfe (Vegan Hot Dog)" },
      { id: "tuna-swim", title: "Tuna Swim" },
      { id: "jenny", title: "Jenny" },
      { id: "salami-vice", title: "Salami Vice" },
      { id: "food-is", title: "Food Is..." },
      { id: "in-the-basement", title: "In The Basement" },
      { id: "food-is-good", title: "Food Is Good" },
    ],
  },
  {
    slug: "polarized-mood",
    title: "Polarized Mood",
    year: 2023,
    cover: "/albums/polarized_mood.jpg",
    tracks: [
      { id: "transmission", title: "Transmission" },
      { id: "bleed-for-you", title: "Bleed For You" },
      { id: "under-the-stars", title: "Under The Stars" },
      { id: "the-vegetable-of-tomorrow", title: "The Vegetable Of Tomorrow" },
      { id: "vaporave", title: "Vaporave" },
      { id: "coughing", title: "Coughing" },
      { id: "vamonos", title: "Vamonos" },
      { id: "fido", title: "Fido" },
    ],
  },
  {
    slug: "entry-level-escapism",
    title: "Entry Level Escapism",
    year: 2022,
    cover: "/albums/entry_level_escapism.png",
    tracks: [
      { id: "entry-level-escapism", title: "Entry Level Escapism" },
      { id: "squid-pron", title: "Squid Pron" },
    ],
  },
  {
    slug: "birds",
    title: "Birds",
    year: 2022,
    cover: "/albums/birds.png",
    tracks: [
      { id: "birds", title: "Birds" },
      { id: "dreamsnatchers", title: "Dream Snatchers" },
    ],
  },
  {
    slug: "necromancer",
    title: "Necromancer",
    year: 2021,
    cover: "/albums/necromancer.png",
    tracks: [
      { id: "comedia", title: "Comedia" },
      { id: "luna", title: "Luna" },
      { id: "this-glimmering-haze", title: "This Glimmering Haze" },
      { id: "sacrilege", title: "Sacrilege" },
    ],
  },
  {
    slug: "drowning-man",
    title: "Drowning Man",
    year: 2021,
    cover: "/albums/drowning_man.png",
    tracks: [
      { id: "una-vida", title: "Una Vida" },
      { id: "if-the-bombs-were-dropped-tomorrow", title: "If The Bombs Were Dropped Tomorrow" },
      { id: "what-the-hell-is-going-on", title: "What The Hell Is Going On" },
      { id: "remember-to-recycle", title: "Remember To Recycle" },
    ],
  },
  {
    slug: "the-dark-side-of-the-prune",
    title: "The Dark Side of the Prune",
    year: 2021,
    cover: "/albums/dark_side_of_the_prune.png",
    tracks: [
      { id: "moaning-under-prunelight", title: "Moaning Under Prunelight" },
      { id: "looney-prunes", title: "Looney Prunes" },
    ],
  },
  {
    slug: "drifters",
    title: "Drifters",
    year: 2021,
    cover: "/albums/drifters.png",
    tracks: [
      { id: "drifters", title: "Drifters" },
      { id: "ecstasy", title: "Ecstasy" },
      { id: "raising-the-alarm", title: "Raising The Alarm" },
      { id: "jellyfish", title: "Jellyfish" },
      { id: "in-the-shadow-of-a-fleeting-moon", title: "In the Shadow of a Fleeting Moon" },
      { id: "anthony-the-dragon", title: "Anthony the Dragon" },
      { id: "drifters", title: "Drifters - Remix" },
    ],
  },
  {
    slug: "ad-libitum",
    title: "Ad Libitum",
    year: 2021,
    cover: "/albums/ad_libitum.png",
    tracks: [
      { id: "i-am-potato", title: "I am Potato" },
      { id: "spoon-of-truth", title: "Spoon of Truth" },
      { id: "idle-days", title: "Idle Days" },
      { id: "lemon-zest-holy-quest", title: "Lemon Zest Holy Quest" },
      { id: "hidden-shade", title: "Hidden Shade" },
      { id: "mask-on-mask-off", title: "Mask On Mask Off" },
      { id: "house-of-the-goat", title: "House of the Goat" },
      { id: "slippery-trials", title: "Slippery Trials" },
      { id: "phase-one-tangerine", title: "Phase One - Tangerine" },
      { id: "phase-two-clementine", title: "Phase Two - Clementine" },
      { id: "return-of-the-twins", title: "Return of the Twins" },
      { id: "final-retreat", title: "Final Retreat" },
      { id: "one-last-stop", title: "One Last Stop" },
    ],
  },
  {
    slug: "fish-out-of-water",
    title: "Fish Out Of Water",
    year: 2020,
    cover: "/albums/fish_out_of_water.png",
    tracks: [
      { id: "letterbomb", title: "Letterbomb" },
      { id: "over-here", title: "Over Here" },
      { id: "still-water-depression", title: "Still Water Depression" },
      { id: "supernova-suicide", title: "Supernova Suicide" },
      { id: "the-moon-goddess-ascends", title: "The Moon Goddess Ascends" },
      { id: "the-sun-kings-ship", title: "The Sun King's Ship" },
      { id: "the-trees-are-on-the-march-again", title: "The Trees Are On The March Again" },
      { id: "heavens-tears", title: "Heaven's Tears" },
      { id: "instant-fluff", title: "Instant Fluff" },
      { id: "killer-on-the-loose", title: "Killer On The Loose" },
      { id: "nave-espacial", title: "Nave Espacial" },
      { id: "so-is-this-hell", title: "So Is This Hell" },
      { id: "locust", title: "Locust" },
      { id: "happy", title: "Happy" },
      { id: "alice", title: "Alice" },
      { id: "in-the-year-of-the-rabbit", title: "In The Year Of The Rabbit" },
    ],
  },
];

export function getAlbumBySlug(slug: string) {
  return albums.find((a) => a.slug === slug) ?? null;
}

export function getAllSlugs() {
  return albums.map((a) => a.slug);
}
