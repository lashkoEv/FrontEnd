import { User } from "../User/User.js";

export class Customer extends User {
  #money;

  constructor(firstName, lastName, login, password, money = 100) {
    super(firstName, lastName, login, password);
    this.#money = money;
  }

  get money() {
    return this.#money;
  }

  buy(price) {
    if (this.#money < price) {
      console.error("Not enough money!");
      return false;
    }

    this.#money -= price;
    return true;
  }
}
