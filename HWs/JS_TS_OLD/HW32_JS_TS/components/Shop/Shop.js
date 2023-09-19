import { products } from "../../model/products.js";
import { Product } from "../Product/Product.js";

export class Shop {
  #products;

  constructor() {
    this.#products = this.#parseProducts(products);
  }

  #parseProducts(products) {
    return products.map(function (product) {
      return new Product(
        product.label,
        product.description,
        product.price + 20,
        product.category
      );
    });
  }

  getAll() {
    return this.#products;
  }

  getProductsByCategories() {
    const categories = this.#products.map((product) => {
      return product.category;
    });

    const categoriesSet = [...new Set(categories)];

    const categoryFromUser = this.#getCategory(categoriesSet);

    return this.#products.filter(
      (product) => product.category === categoryFromUser
    );
  }

  #getCategory(categoriesSet) {
    const categoriesString = categoriesSet
      .map((el, i) => `${i + 1}) ${el}`)
      .join("\n");

    const chosenCategory = prompt(categoriesString);

    return categoriesSet[+chosenCategory - 1];
  }

  buyProduct(productName, customer) {
    console.log("[BEFORE]", customer.money);

    try {
      const productsIndex = this.#products.findIndex(
        (product) => product.label.toLowerCase() === productName.toLowerCase()
      );

      customer.buy(this.#products[productsIndex].price);
    } catch {
      console.error("Incorrect product's name!");
    }

    console.log("[AFTER]", customer.money);
  }
}
