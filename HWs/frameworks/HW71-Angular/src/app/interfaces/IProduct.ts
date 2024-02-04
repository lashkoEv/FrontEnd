import { Category } from '../enums/Category';

export interface IProduct {
  getId(): number;
  getTitle(): string;
  getDescription(): string;
  getPrice(): string;
  getImgUrl(): string;
  getCategory(): Category;
}
