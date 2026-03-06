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
    title: "Wandering Through the Medina of Fes",
    destination: "Fes, Morocco",
    country: "Morocco",
    date: "2025-11-12",
    excerpt:
      "Down alleys too narrow for the sun, past tanneries stained copper and saffron, the ancient medina unfolds like a dream you're afraid to wake from.",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
    tag: "Africa",
    slug: "#",
  },
  {
    title: "A Week on the Amalfi Coast",
    destination: "Positano, Italy",
    country: "Italy",
    date: "2025-09-03",
    excerpt:
      "Cliffside lemons, salt-bleached terraces, and the kind of blue that makes you forget everything you were worried about.",
    image:
      "https://images.unsplash.com/photo-1533606688076-b6683a5f59f1?w=800&q=80",
    tag: "Europe",
    slug: "#",
  },
  {
    title: "Slow Travel Through the Mekong Delta",
    destination: "Can Tho, Vietnam",
    country: "Vietnam",
    date: "2025-07-18",
    excerpt:
      "Wooden boats laden with dragon fruit, river mist at dawn, and a bowl of bun rieu so good I ordered it three mornings in a row.",
    image:
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
    tag: "Southeast Asia",
    slug: "#",
  },
  {
    title: "Chasing the Northern Lights in Tromsø",
    destination: "Tromsø, Norway",
    country: "Norway",
    date: "2025-02-22",
    excerpt:
      "We stood on a frozen lake at midnight, necks craned toward a sky that suddenly forgot to be dark. Nothing prepares you for your first aurora.",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    tag: "Scandinavia",
    slug: "#",
  },
  {
    title: "Lost (and Found) in Oaxaca",
    destination: "Oaxaca City, Mexico",
    country: "Mexico",
    date: "2024-12-08",
    excerpt:
      "Market stalls heaped with chiles and chocolate, mezcal served in a clay cup by a woman who has been doing this for forty years. I took no notes. I just lived it.",
    image:
      "https://images.unsplash.com/photo-1605217613423-0aea4fb32906?w=800&q=80",
    tag: "Latin America",
    slug: "#",
  },
  {
    title: "The Long Road to Ladakh",
    destination: "Leh, India",
    country: "India",
    date: "2024-08-30",
    excerpt:
      "Two days by bus on roads carved into the side of the Himalayas. By the time I arrived in Leh, gasping in the thin air, I understood why people call this the roof of the world.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    tag: "South Asia",
    slug: "#",
  },
];
