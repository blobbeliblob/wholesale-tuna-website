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
    slug: "the-seeds-of-chaos",
    title: "The Seeds of Chaos",
    year: 2026,
    cover: "/albums/the_seeds_of_chaos.png",
    links: [
      { name: "Spotify", url: "https://open.spotify.com/album/02ytzdzvdkdwwo0hqruCO0" },
      { name: "Apple Music", url: "https://music.apple.com/us/album/the-seeds-of-chaos/1882029274" },
      { name: "Youtube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_kRwBL-TVI8vODvs-uLLiHxafp0_K_Ul2o" },
    ],
    tracks: [
      { id: "wolves", title: "Wolves" },
      { id: "the-seeds-of-chaos", title: "The Seeds of Chaos" },
      { id: "apple", title: "Apple" },
      { id: "the-sound-of-moosic", title: "The Sound of Moosic" },
      { id: "counting-sheep", title: "Counting Sheep" },
      { id: "sinners", title: "Sinners" },
      { id: "when-the-hangman-comes", title: "When the Hangman Comes" },
      { id: "saviors-of-grace", title: "Saviors of Grace" },
    ],
  },
  {
    slug: "all-hail-the-king",
    title: "All Hail The King",
    year: 2025,
    cover: "/albums/all_hail_the_king.png",
    links: [
      { name: "Spotify", url: "https://open.spotify.com/album/11KlBmQ0D9Fw8HftkfrwA2" },
      { name: "Apple Music", url: "https://music.apple.com/us/album/all-hail-the-king/1794335309" },
      { name: "Youtube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_m6o60ZL-HHSRqs305yg9TyKxq1h2f6wKE" },
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
    links: [
      { name: "Spotify", url: "https://open.spotify.com/album/3xqhMZhzyIzlqKzxC9WOwV" },
      { name: "Apple Music", url: "https://music.apple.com/us/album/ethics-for-heretics-ep/1733660061" },
      { name: "Youtube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_laklr7JDoaOqLe6vBe4DhrVMYkl4B7-cg" },
    ],
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
    links: [
      { name: "Spotify", url: "https://open.spotify.com/album/20jkx0JSCFwJfuPnz1Vhwk" },
      { name: "Apple Music", url: "https://music.apple.com/us/album/the-pizza-connection/1704132497" },
      { name: "Youtube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_kXccax898gQTIM18csVtrWcaaIgmFwjrw" },
    ],
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
    links: [
      { name: "Spotify", url: "https://open.spotify.com/album/3mpVF0AVooeyruhvjn8p1u" },
      { name: "Apple Music", url: "https://music.apple.com/us/album/polarized-mood/1733682949" },
      { name: "Youtube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_l_sQOtCETc8Hz7xXkQIf4Sa-r_OYF3dsE" },
    ],
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
    links: [
      { name: "Spotify", url: "https://open.spotify.com/album/4OXgGDv62VwSEDDgWmGe1q" },
      { name: "Apple Music", url: "https://music.apple.com/us/album/entry-level-escapism-single/1720350048" },
      { name: "Youtube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_k-fwR8e2HUCMDQH8bd1c2k8gIjruohLfg" },
    ],
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
    links: [
      { name: "Spotify", url: "https://open.spotify.com/album/1UP1YZSqiC899ZMJgz3JVy" },
      { name: "Apple Music", url: "https://music.apple.com/us/album/birds-single/1716239325" },
      { name: "Youtube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_mP5yomZQPjetFARuOXrAFquxq_8PlXRyU" },
    ],
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
    links: [
      { name: "Spotify", url: "https://open.spotify.com/album/5tqBLTj50kOKWT1rlD0mo0" },
      { name: "Apple Music", url: "https://music.apple.com/us/album/necromancer-ep/1720346211" },
      { name: "Youtube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_nNApOCIJmG9d7yJ23jy5Y5KJ9CalT5ZLY" },
    ],
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
    links: [
      { name: "Spotify", url: "https://open.spotify.com/album/3Q4fLRf7YtHKQ9EpJRWqGW" },
      { name: "Apple Music", url: "https://music.apple.com/us/album/drowning-man-ep/1720347966" },
      { name: "Youtube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_kchAUvCFW20SJIMz8auMc47woYNAzlulg" },
    ],
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
    links: [
      { name: "Spotify", url: "https://open.spotify.com/album/4ZdXpiHMsIRDNRsS9B8skM" },
      { name: "Apple Music", url: "https://music.apple.com/us/album/the-dark-side-of-the-prune-single/1720112585" },
      { name: "Youtube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_kadXfbHNsCmoLSgpqF7DM5fNTjhoAfK3M" },
    ],
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
    links: [
      { name: "Spotify", url: "https://open.spotify.com/album/0jmmUCgOO2nRjmSdZMdzFY" },
      { name: "Apple Music", url: "https://music.apple.com/us/album/drifters/1720107530" },
      { name: "Youtube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_kuJf7AMjU2dEeZd7EEsmeDW_qpCXePKyo" },
    ],
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
    links: [
      { name: "Spotify", url: "https://open.spotify.com/album/3m9px47UtNbRzmhWJ3HVNN" },
      { name: "Apple Music", url: "https://music.apple.com/us/album/ad-libitum/1719972120" },
      { name: "Youtube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_kNuTn2OJA-nd2hHEG0CYs81zQKENCnk5k" },
    ],
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
    links: [
      { name: "Spotify", url: "https://open.spotify.com/album/3BhN2YGYjnWhtRIBOL3a5M" },
      { name: "Apple Music", url: "https://music.apple.com/us/album/fish-out-of-water/1719966320" },
      { name: "Youtube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_kCaPjkYcj6r9qVgq8zBtlZi_61-WyUh6I" },
    ],
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
