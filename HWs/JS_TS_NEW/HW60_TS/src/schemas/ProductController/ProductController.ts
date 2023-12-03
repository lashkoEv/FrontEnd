import { Product, ProductRepository } from "..";
import { getProducts } from "../../utils";

export class ProductController {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();

    this.init();
  }

  private init() {
    this.productRepository.save(getProducts());
    this.productRepository.load();
  }

  getAll() {
    return this.productRepository.getAll();
  }

  update(
    product: Product,
    title: string,
    description: string,
    price: string,
    url: string
  ) {
    this.productRepository.update(product, title, description, price, url);
  }

  delete(product: Product) {
    this.productRepository.delete(product);
  }

  add(title: string, description: string, price: string, url: string) {
    this.productRepository.add(
      new Product(
        this.productRepository.getLast().getId() + 1,
        title,
        description,
        price,
        url
      )
    );
  }

  getFromPage(page: number, amount: number) {
    return this.productRepository.getFromPage(page, amount);
  }
}
