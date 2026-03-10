export interface BlogPost {
  title: string;
  destination: string;
  country: string;
  date: string;
  excerpt: string;
  image: string;
  tag: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Italy in 7 Days: Ruins, Renaissance, & Lemons",
    destination: "Rome, Florence & Sorrento, Italy",
    country: "Italy",
    date: "2026-03-03",
    excerpt:
      "A 7-day Italy itinerary covering Rome's ancient ruins, Florence's Renaissance art, and Sorrento's lemon groves — what to see, eat, and never miss.",
    image:
      "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&q=80",
    tag: "Europe",
    slug: "/blog/italy-7-day-itinerary-rome-florence-sorrento",
  },
];
