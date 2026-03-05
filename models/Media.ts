export interface MediaModel {
  id: string;
  url: string;
  type: "image" | "video";
  altText?: string;
}
