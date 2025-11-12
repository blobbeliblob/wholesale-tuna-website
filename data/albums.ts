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
};

export const albums: Album[] = [
  {
    slug: "all-hail-the-king",
    title: "All Hail The King",
    year: 2025,
    cover: "/albums/all_hail_the_king.png",
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
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
    ],
  },
  {
    slug: "the-pizza-connection",
    title: "The Pizza Connection",
    year: 2023,
    cover: "/albums/the_pizza_connection.jpg",
    tracks: [
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
    ],
  },
  {
    slug: "polarized-mood",
    title: "Polarized Mood",
    year: 2023,
    cover: "/albums/polarized_mood.jpg",
    tracks: [
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
    ],
  },
  {
    slug: "entry-level-escapism",
    title: "Entry Level Escapism",
    year: 2022,
    cover: "/albums/entry_level_escapism.png",
    tracks: [
      { id: "", title: "" },
      { id: "", title: "" },
    ],
  },
  {
    slug: "birds",
    title: "Birds",
    year: 2022,
    cover: "/albums/birds.png",
    tracks: [
      { id: "", title: "" },
      { id: "", title: "" },
    ],
  },
  {
    slug: "necromancer",
    title: "Necromancer",
    year: 2021,
    cover: "/albums/necromancer.png",
    tracks: [
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
    ],
  },
  {
    slug: "drowning-man",
    title: "Drowning Man",
    year: 2021,
    cover: "/albums/drowning_man.png",
    tracks: [
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
    ],
  },
  {
    slug: "the-dark-side-of-the-prune",
    title: "The Dark Side of the Prune",
    year: 2021,
    cover: "/albums/dark_side_of_the_prune.png",
    tracks: [
      { id: "", title: "" },
      { id: "", title: "" },
    ],
  },
  {
    slug: "drifters",
    title: "Drifters",
    year: 2021,
    cover: "/albums/drifters.png",
    tracks: [
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
    ],
  },
  {
    slug: "ad-libitum",
    title: "Ad Libitum",
    year: 2021,
    cover: "/albums/ad_libitum.png",
    tracks: [
      { id: "", title: "" },
    ],
  },
  {
    slug: "fish-out-of-water",
    title: "Fish Out Of Water",
    year: 2020,
    cover: "/albums/fish_out_of_water.png",
    tracks: [
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
      { id: "", title: "" },
    ],
  },
];

export function getAlbumBySlug(slug: string) {
  return albums.find((a) => a.slug === slug) ?? null;
}

export function getAllSlugs() {
  return albums.map((a) => a.slug);
}
