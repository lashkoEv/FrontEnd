import { Category } from './../enums/Category';
import { IProduct } from '../interfaces/IProduct';

export class Product implements IProduct {
  constructor(
    private id: number,
    private title: string,
    private description: string,
    private price: number,
    private imgUrl: string,
    private category: Category
  ) {}

  getId(): number {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
  }

  getPrice(): string {
    return this.price.toFixed(2);
  }

  getImgUrl(): string {
    return this.imgUrl;
  }

  getCategory(): Category {
    return this.category;
  }
}
