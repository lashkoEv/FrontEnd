export class Product {
  constructor(label, description, price) {
    this.label = label;
    this.price = price;
    this.description = description;
  }

  representation() {
    return `[${this.label}] : ${this.description} => ${this.price}`;
  }
}
