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

  #getCount(products) {
    return products.length;
  }

  #getTotalPrice(products) {
    return products.reduce((sum, current) => sum + current.price, 0);
  }

  #getAveragePrice(products) {
    return this.#getTotalPrice(products) / this.#getCount(products);
  }

  getProducts(
    categoryFilter,
    minPriceFilter,
    maxPriceFilter,
    manufacturerFilter,
    minDateFilter,
    maxDateFilter,
    sortColumn,
    isDesc
  ) {
    return {
      products: this.#products,
      count: this.#getCount(this.#products),
      totalPrice: this.#getTotalPrice(this.#products),
      averagePrice: this.#getAveragePrice(this.#products),
    };
  }
}
