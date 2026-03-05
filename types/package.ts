export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  note: string;
  duration: string;
  location: string;
  price: number;
  locale: "en" | "de";
  category: "all" | "accessible";
  accessible: boolean;
  heroImage: string;
  gallery: string[];
  badges: string[];
}
