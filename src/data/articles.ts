export interface Article {
  title: string;
  publication: string;
  description: string;
  url: string;
  tag: string;
}

export const articles: Article[] = [
  {
    title: "The Last Train Through Patagonia",
    publication: "Condé Nast Traveler",
    description:
      "A haunting journey through one of the world's most remote rail corridors, where Patagonian wind shakes the carriages and nothing arrives on schedule.",
    url: "https://www.cntraveler.com/travel",
    tag: "Rail Travel",
  },
  {
    title: "Why Slow Travel Is the Only Way to Travel",
    publication: "Vogue",
    description:
      "A manifesto for spending weeks instead of days in a single place — and what you discover when you finally stop rushing.",
    url: "https://www.vogue.com/travel",
    tag: "Philosophy",
  },
  {
    title: "The Hidden Villages of the Albanian Riviera",
    publication: "Lonely Planet",
    description:
      "Before the crowds arrived, there was Himara. A look at Europe's last undiscovered coastline and the communities keeping it that way.",
    url: "https://www.lonelyplanet.com/articles",
    tag: "Europe",
  },
  {
    title: "Eating Your Way Through Okinawa",
    publication: "Bon Appétit",
    description:
      "The Japanese island that thinks differently about food, time, and the art of living to one hundred.",
    url: "https://www.bonappetit.com/travel",
    tag: "Food & Culture",
  },
  {
    title: "A Pilgrim's Notes on the Camino de Santiago",
    publication: "The Guardian",
    description:
      "Eight hundred kilometres, one pair of boots, and more blisters than expected. What it actually feels like to walk across Spain.",
    url: "https://www.theguardian.com/travel",
    tag: "Pilgrimage",
  },
  {
    title: "Crossing the Karakoram Highway",
    publication: "National Geographic",
    description:
      "The world's highest paved international road connects Pakistan and China across some of the most dramatic terrain on the planet.",
    url: "https://www.nationalgeographic.com/travel",
    tag: "Adventure",
  },
];
