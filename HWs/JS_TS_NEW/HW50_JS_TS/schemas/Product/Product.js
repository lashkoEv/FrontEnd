export class Product {
  #category;
  #price;
  #manufacturer;
  #createdAt;

  constructor({ category, price, manufacturer, createdAt }) {
    this.#category = category || "";
    this.#price = price || 0;
    this.#manufacturer = manufacturer || "";
    this.#createdAt = new Date(createdAt).toLocaleString("uk-UA");
  }

  get category() {
    return this.#category;
  }

  set category(category) {
    this.#category = category || "";
  }

  get price() {
    return this.#price;
  }

  set price(price) {
    this.#price = price || 0;
  }

  get manufacturer() {
    return this.#manufacturer;
  }

  set manufacturer(manufacturer) {
    this.#manufacturer = manufacturer || "";
  }

  get createdAt() {
    return this.#createdAt.toLocaleString("uk-UA");
  }

  set createdAt(createdAt) {
    if (typeof createdAt === Date) {
      this.#createdAt = createdAt.toLocaleString("uk-UA");
    } else {
      this.#createdAt = new Date(createdAt).toLocaleString("uk-UA");
    }
  }
}
