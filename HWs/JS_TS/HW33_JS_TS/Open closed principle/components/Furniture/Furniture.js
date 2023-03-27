export class Furniture {
  #title;
  #material;
  #price;

  constructor(title, material, price) {
    this.#title = title;
    this.#material = material;
    this.#price = price;
  }

  get title() {
    return this.#title;
  }

  set title(title) {
    this.#title = title;
  }

  get material() {
    return this.#material;
  }

  set material(material) {
    this.#material = material;
  }

  get price() {
    return this.#price;
  }

  set price(price) {
    this.#price = price;
  }
}
