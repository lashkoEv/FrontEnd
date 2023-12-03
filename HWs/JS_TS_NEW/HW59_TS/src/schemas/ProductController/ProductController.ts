import { Product, ProductRepository } from "..";
import { getProducts } from "../../utils";

export class ProductController {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();

    this.init();
  }

  private init() {
    this.productRepository.addMany(getProducts());
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
}
