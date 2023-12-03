import { IProduct } from "../../interfaces";

export class Product implements IProduct {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private price: string,
    private imageUrl: string
  ) {}

  getId(): string {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
  }

  getPrice(): string {
    return this.price;
  }

  getImageUrl(): string {
    return this.imageUrl;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  setPrice(price: string): void {
    this.price = price;
  }

  setImageUrl(imageUrl: string): void {
    this.imageUrl = imageUrl;
  }
}
