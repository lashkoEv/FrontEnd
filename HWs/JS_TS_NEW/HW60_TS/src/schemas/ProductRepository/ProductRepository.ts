import { Product } from "..";
import { IRepository } from "../../interfaces";

export class ProductRepository implements IRepository<Product> {
  private products: Product[];

  constructor() {
    this.products = [];
  }

  save(products: Product[] | null): void {
    if (products) {
      products.forEach((product) => {
        localStorage.setItem(product.getId(), JSON.stringify(product));
      });
    }

    this.products.forEach((product) => {
      localStorage.setItem(product.getId(), JSON.stringify(product));
    });
  }

  load(): void {
    for (const key in localStorage) {
      if (key.includes("product")) {
        const product = JSON.parse(localStorage.getItem(key));

        this.add(
          new Product(
            product.id,
            product.title,
            product.description,
            product.price,
            product.imageUrl
          )
        );
      }
    }
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

  delete(product: Product) {
    this.products.splice(this.products.indexOf(product), 1);
  }

  getLast() {
    return this.products[this.products.length - 1];
  }

  getFromPage(page: number, amount: number): Product[] {
    const start = (page - 1) * amount;
    let end = page * amount;

    if (end > this.products.length - 1) end = this.products.length;

    const fromPage = this.products.slice(start, end);

    if (fromPage.length === 0) {
      return this.getFromPage(page - 1, amount);
    }

    return fromPage;
  }
}
