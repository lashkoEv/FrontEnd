export class Product {
  #id;
  #label;
  #price;
  #amount;

  constructor(id, label, price, amount = 5) {
    this.#id = id;
    this.#label = label;
    this.#price = price;
    this.#amount = amount;
  }

  get id() {
    return this.#id;
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

  get amount() {
    return this.#amount;
  }

  subtractAmount(amount) {
    this.#amount -= amount;
  }
}
