import { Furniture } from "../Furniture/Furniture.js";

export class Table extends Furniture {
  #height;
  #width;
  #shape;

  constructor(title, material, price, height, width, shape) {
    super(title, material, price);
    this.#height = height;
    this.#width = width;
    this.#shape = shape;
  }

  get height() {
    return this.#height;
  }

  set height(height) {
    this.#height = height;
  }

  get width() {
    return this.#width;
  }

  set width(width) {
    this.#width = width;
  }

  get shape() {
    return this.#shape;
  }

  set shape(shape) {
    this.#shape = shape;
  }

  getSizeString() {
    return `${this.#height} x ${this.#width}`;
  }
}
