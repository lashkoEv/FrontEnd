export interface IProduct {
  getId(): number;
  getTitle(): string;
  getDescription(): string;
  getPrice(): string;
  getImageUrl(): string;

  setTitle(title: string): void;
  setDescription(description: string): void;
  setPrice(price: string): void;
  setImageUrl(imageUrl: string): void;
}
