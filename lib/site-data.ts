import type { TourPackage } from "@/types/package";

interface FaqItem {
  question: string;
  answer: string;
}

export const tours: TourPackage[] = [
  {
    id: "1",
    slug: "athens-top-sights",
    title: "Athens: Top Sights",
    description: "Explore Athens' ancient landmarks and vibrant city center.",
    longDescription:
      "On a private excursion with your family, your friends, or even the company that you will be especially proud to share, you will see the most important sights of the Greek capital. Your way will lead from the Acropolis to hidden urban viewpoints, with time for stories, photos, and an unhurried rhythm that keeps the day refined.",
    note:
      "In case your requested pickup is from Piraeus Port, kindly send us the name of your ship and exact desired pickup time after your booking.",
    duration: "5-6 hours",
    location: "Athens",
    price: 270,
    locale: "en",
    accessible: true,
    category: "accessible",
    heroImage:
      "https://images.pexels.com/photos/18910728/pexels-photo-18910728.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/32218625/pexels-photo-32218625.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3224227/pexels-photo-3224227.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/14349175/pexels-photo-14349175.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/34686184/pexels-photo-34686184.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    badges: ["5-6 hours", "Wheelchair Accessible"],
  },
  {
    id: "2",
    slug: "meteora-thermopylae",
    title: "Meteora & Thermopylae",
    description: "Discover breathtaking monasteries and ancient rock formations.",
    longDescription:
      "A dramatic route through central Greece with panoramic cliffside monasteries, carefully paced stops, and seamless transport for travelers who want the landscape to feel cinematic rather than rushed.",
    note: "This tour can be customized with an earlier sunrise departure on request.",
    duration: "4-6 hours",
    location: "Meteora",
    price: 320,
    locale: "en",
    accessible: false,
    category: "all",
    heroImage:
      "https://images.pexels.com/photos/29459095/pexels-photo-29459095.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/29459088/pexels-photo-29459088.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/14436576/pexels-photo-14436576.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/12175552/pexels-photo-12175552.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/29459095/pexels-photo-29459095.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    badges: ["4-6 hours"],
  },
  {
    id: "3",
    slug: "corinthos-canal-argolis",
    title: "Corinthos Canal & Argolis",
    description: "Travel back in time on this day tour to the Corinth Canal from Athens.",
    longDescription:
      "A route designed around classic Peloponnese highlights, balancing iconic sights with quiet photo stops and a calm premium pace.",
    note: "Departure timing can be adjusted for cruise arrivals or private transfer connections.",
    duration: "11 hours",
    location: "Argolis",
    price: 310,
    locale: "en",
    accessible: true,
    category: "accessible",
    heroImage:
      "https://images.pexels.com/photos/3224227/pexels-photo-3224227.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/34686184/pexels-photo-34686184.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/14349175/pexels-photo-14349175.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3224227/pexels-photo-3224227.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/18910728/pexels-photo-18910728.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    badges: ["11 hours", "Wheelchair Accessible"],
  },
  {
    id: "4",
    slug: "mycenae-nafplion-epidaurus",
    title: "Mycenae, Nafplion & Epidaurus",
    description: "Discover ancient cities and a charming medieval city.",
    longDescription:
      "A polished full-day itinerary blending archaeology, coastal elegance, and comfortable private transportation between the major sites.",
    note: "Ideal for travelers who prefer a balanced mix of heritage sites and scenic town time.",
    duration: "10 hours",
    location: "Nafplion",
    price: 330,
    locale: "en",
    accessible: false,
    category: "all",
    heroImage:
      "https://images.pexels.com/photos/32218625/pexels-photo-32218625.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/32218625/pexels-photo-32218625.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/34686184/pexels-photo-34686184.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/14349175/pexels-photo-14349175.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/18910728/pexels-photo-18910728.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    badges: ["10 hours"],
  },
  {
    id: "5",
    slug: "olympia-corinth-canal-peristeria",
    title: "Olympia, Corinth Canal & Peristeria",
    description: "Visit the birthplace of the Olympic Games in a refined day journey.",
    longDescription:
      "Combines major mainland landmarks with polished logistics and thoughtful timing, avoiding the feel of a crowded group itinerary.",
    note: "Private departures available seven days per week.",
    duration: "8-9 hours",
    location: "Olympia",
    price: 340,
    locale: "en",
    accessible: false,
    category: "all",
    heroImage:
      "https://images.pexels.com/photos/34686184/pexels-photo-34686184.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/34686184/pexels-photo-34686184.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/14349175/pexels-photo-14349175.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3224227/pexels-photo-3224227.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/32218625/pexels-photo-32218625.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    badges: ["8-9 hours"],
  },
  {
    id: "6",
    slug: "delphi-navel-of-earth",
    title: "Delphi, the navel of the Earth",
    description: "Discover the oracle of the earth and the sacred hills of Delphi.",
    longDescription:
      "A premium private route to Delphi with tailored pacing, scenic mountain viewpoints, and a calmer alternative to crowded bus circuits.",
    note: "Can be paired with an extended Arachova stop for lunch and shopping.",
    duration: "5-6 hours",
    location: "Delphi",
    price: 290,
    locale: "en",
    accessible: true,
    category: "accessible",
    heroImage:
      "https://images.pexels.com/photos/14349175/pexels-photo-14349175.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/14349175/pexels-photo-14349175.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/34686184/pexels-photo-34686184.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/18910728/pexels-photo-18910728.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3224227/pexels-photo-3224227.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    badges: ["5-6 hours", "Wheelchair Accessible"],
  },
  {
    id: "7",
    slug: "wine-olive-oil-cheese",
    title: "Wine, Olive Oil & Cheese",
    description: "Enjoy the authentic flavors of Greece with curated tastings.",
    longDescription:
      "Built for travelers who want regional flavor, softer pacing, and a polished food-led experience with transport handled end-to-end.",
    note: "Vegetarian and low-intensity tasting options are available on request.",
    duration: "11 hours",
    location: "Attica",
    price: 240,
    locale: "en",
    accessible: false,
    category: "all",
    heroImage:
      "https://images.pexels.com/photos/32218625/pexels-photo-32218625.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/32218625/pexels-photo-32218625.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/18910728/pexels-photo-18910728.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/14349175/pexels-photo-14349175.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/34686184/pexels-photo-34686184.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    badges: ["11 hours"],
  },
  {
    id: "8",
    slug: "sounion-vouliagmeni-lake",
    title: "Sounion & Vouliagmeni Lake",
    description: "Take a trip to the Athens Riviera and visit breathtaking coastal scenery.",
    longDescription:
      "A slower luxury coastal day with elegant timing, blue-water viewpoints, and a scenic finish at Cape Sounion.",
    note: "Sunset departures are recommended for this route.",
    duration: "8-10 hours",
    location: "Athens Riviera",
    price: 260,
    locale: "en",
    accessible: true,
    category: "accessible",
    heroImage:
      "https://images.pexels.com/photos/32218625/pexels-photo-32218625.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/32218625/pexels-photo-32218625.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/32218625/pexels-photo-32218625.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/18910728/pexels-photo-18910728.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/14349175/pexels-photo-14349175.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    badges: ["8-10 hours", "Wheelchair Accessible"],
  },
];

export const vehicles = [
  {
    type: "Car",
    capacity: "3 people",
    image:
      "https://images.pexels.com/photos/33475308/pexels-photo-33475308.jpeg?auto=compress&cs=tinysrgb&w=1200",
    rates: [
      ["Airport - Athens", "45 EUR"],
      ["Port - Athens", "35 EUR"],
      ["Airport - Port", "60 EUR"],
    ],
  },
  {
    type: "Van",
    capacity: "7 people",
    image:
      "https://images.pexels.com/photos/33602221/pexels-photo-33602221.jpeg?auto=compress&cs=tinysrgb&w=1200",
    rates: [
      ["Airport - Athens", "45 EUR"],
      ["Port - Athens", "35 EUR"],
      ["Airport - Port", "60 EUR"],
    ],
  },
  {
    type: "Minibus",
    capacity: "12 people",
    image:
      "https://images.pexels.com/photos/5463066/pexels-photo-5463066.jpeg?auto=compress&cs=tinysrgb&w=1200",
    rates: [
      ["Airport - Athens", "45 EUR"],
      ["Port - Athens", "35 EUR"],
      ["Airport - Port", "60 EUR"],
    ],
  },
];

export const testimonials = [
  {
    name: "Alice",
    route: "Athens Tour",
    quote:
      "We loved our trip. Hiring Mercedes was a blessing because of the day of intense walking and road logistics. Our guide felt discreet, premium, and deeply informed.",
  },
  {
    name: "Kerry",
    route: "Accessible Tour Athens",
    quote:
      "My tour guide, Marios, was fantastic. He was very kind, thoughtful, and attentive to what I needed. It was the easiest and most beautiful way to experience Athens.",
  },
  {
    name: "Suzy Russell",
    route: "Olympia Full Day",
    quote:
      "Alex was very personable and great guide. He kept the itinerary engaging while everything from timing to comfort felt carefully managed for us.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "What types of transport do you offer for the tours?",
    answer:
      "Private sedans, Mercedes vans, and minibuses depending on group size, accessibility needs, and the level of comfort requested.",
  },
  {
    question: "Are the tours accessible for people with special needs?",
    answer:
      "Selected routes are wheelchair-accessible and can be adjusted for mobility requirements. We confirm route suitability before booking.",
  },
  {
    question: "Can I customize my tour?",
    answer:
      "Yes. Most private departures can be tailored around pickup time, route emphasis, scenic stops, and pace preferences.",
  },
  {
    question: "How to book a tour?",
    answer:
      "Choose your preferred route, open the detail page, and use the booking CTA. Final itinerary details are confirmed directly after your request.",
  },
  {
    question: "Will there be a guide during the tour?",
    answer:
      "Yes, guided and driver-led experiences are both available. The exact format depends on the route and the level of service selected.",
  },
];

export function getTourBySlug(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}
