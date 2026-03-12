export interface Article {
  title: string;
  publication: string;
  description: string;
  url: string;
  tag: string;
}

export const articles: Article[] = [
  {
    title: "How to Travel the World: The Ultimate Guide for First-Time Global Explorers",
    publication: "Tripways",
    description:
      "Traveling the world is a dream many people hold, but turning that dream into reality takes more than wishing. A practical guide to making it happen.",
    url: "https://tripways.com/how-to-travel-the-world",
    tag: "Planning",
  },
  {
    title: "Affordable Wellness Vacations",
    publication: "The New York Times",
    description:
      "Restorative travel doesn't have to break the bank. A guide to wellness getaways that prioritise rest, nature, and recovery without the luxury price tag.",
    url: "https://www.nytimes.com/2026/03/10/travel/affordable-wellness-vacations.html",
    tag: "Wellness",
  },
  {
    title: "Travel News, Guides & Reviews",
    publication: "The Guardian",
    description:
      "The latest travel news and reviews on UK and world holidays, travel guides to global destinations, city breaks, hotels and restaurants.",
    url: "https://www.theguardian.com/uk/travel",
    tag: "News",
  },
];
