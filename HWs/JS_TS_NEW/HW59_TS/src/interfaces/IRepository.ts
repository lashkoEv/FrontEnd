import { Product } from "../schemas";

export interface IRepository<T> {
  getAll(): T[];

  add(item: T): void;
  addMany(items: T[]): void;

  update(
    product: Product,
    title: string,
    description: string,
    price: string,
    url: string
  ): void;
}
