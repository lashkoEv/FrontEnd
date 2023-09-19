export class Warehouse {
  #products;

  constructor() {
    this.#products = [];
  }

  addProduct(product) {
    this.#products.push(product);
  }

  findById(id) {
    return this.#products.find((product) => product.id === id);
  }

  getAll() {
    return this.#products;
  }

  buyProduct(id, customer) {
    try {
      if (customer.buyProduct(this.findById(id).price)) {
        this.#products.find((product) => {
          if (product.id === id) {
            product.subtractAmount(1);
          }
        });
      }
    } catch (e) {
      console.error("Incorrect product ID!");
    }

    this.#checkAmount();
  }

  #checkAmount() {
    this.#products = this.#products.filter((product) => product.amount > 0);
  }
}
