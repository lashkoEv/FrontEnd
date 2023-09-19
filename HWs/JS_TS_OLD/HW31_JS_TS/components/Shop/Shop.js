import { initCustomer } from "../../utils/initCustomer.js";
import { initWarehouse } from "../../utils/initWarehouse.js";
import { getCorrectNumber } from "../../utils/getCorrectNumber.js";

export class Shop {
  #warehouse;
  #customer;

  constructor() {
    this.#warehouse = initWarehouse();
    this.#customer = initCustomer();
  }

  getAllProducts() {
    console.table(this.#warehouse.getAll());
  }

  getProfile() {
    console.table(this.#customer);
  }

  buyProduct() {
    this.getAllProducts();

    const productID = getCorrectNumber("Enter product id: ");

    console.log("[OLD WALLET]", this.#customer.wallet);

    this.#warehouse.buyProduct(productID, this.#customer);

    console.log("[NEW WALLET]", this.#customer.wallet);

    this.getProfile();
  }
}
