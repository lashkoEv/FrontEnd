import { User } from "../User/User.js";

export class Customer extends User {
  #wallet;

  constructor(fullName, login, password, wallet = 500) {
    super(fullName, login, password);
    this.#wallet = wallet;
  }

  get wallet() {
    return this.#wallet;
  }

  buyProduct(price) {
    if (this.#wallet < price) {
      console.error("Not enough money!");
      return false;
    }

    this.#wallet -= price;
    return true;
  }
}
