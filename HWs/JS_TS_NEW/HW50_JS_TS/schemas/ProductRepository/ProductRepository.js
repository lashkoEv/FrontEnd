import { isEmptyArray } from "../../utils";

export class ProductRepository {
  #products;

  constructor(products) {
    if (!isEmptyArray(products)) {
      this.#products = products;
    } else {
      this.#products = [];
    }
  }

  getAll() {
    return this.#products;
  }
}
