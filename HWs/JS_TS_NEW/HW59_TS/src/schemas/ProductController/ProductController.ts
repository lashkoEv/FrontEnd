import { ProductRepository } from "..";
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

  public getAll() {
    return this.productRepository.getAll();
  }
}
