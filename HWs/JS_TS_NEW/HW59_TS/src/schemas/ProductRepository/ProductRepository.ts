import { Product } from "..";
import { IRepository } from "../../interfaces";

export class ProductRepository implements IRepository<Product> {
  private products: Product[];

  constructor() {
    this.products = [];
  }

  getAll(): Product[] {
    return this.products;
  }

  add(product: Product): void {
    this.products.push(product);
  }

  addMany(products: Product[]): void {
    products.forEach((product) => this.products.push(product));
  }

  update(
    product: Product,
    title: string,
    description: string,
    price: string,
    url: string
  ) {
    const toUpdate = this.products.find((p) => p.getId() === product.getId());

    toUpdate?.setTitle(title);
    toUpdate?.setDescription(description);
    toUpdate?.setPrice(price);
    toUpdate?.setImageUrl(url);
  }
}
