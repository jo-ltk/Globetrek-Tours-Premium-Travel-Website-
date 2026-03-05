export interface PackageModel {
  id: string;
  title: string;
  slug: string;
  summary: string;
  price: number;
  locale: "en" | "de";
}
