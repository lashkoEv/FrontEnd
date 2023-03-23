export class Product {
  #label;
  #price;
  #description;
  #category;

  constructor(label, description, price, category) {
    this.#label = label;
    this.#price = price;
    this.#description = description;
    this.#category = category;
  }

  get label() {
    return this.#label;
  }

  set label(label) {
    this.#label = label;
  }

  get price() {
    return this.#price;
  }

  set price(price) {
    this.#price = price;
  }

  get description() {
    return this.#description;
  }

  set description(description) {
    this.#description = description;
  }

  get category() {
    return this.#category;
  }

  set category(category) {
    this.#category = category;
  }

  toString() {
    return `(${this.#category})\t\t[${this.#label}] : ${this.#description} => ${
      this.#price
    }`;
  }
}
