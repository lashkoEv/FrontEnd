import { Customer } from "./components/Customer/Customer.js";
import { Shop } from "./components/Shop/Shop.js";
import { getCorrectString } from "./utils/getCorrectString.js";

class App {
  #shop;
  #user;

  constructor() {
    this.#shop = new Shop();
    this.#user = this.#getCustomer();
  }

  #getCustomer() {
    const firstName = getCorrectString("Enter first name: ");
    const lastName = getCorrectString("Enter last name: ");
    const login = getCorrectString("Enter login: ");
    const password = getCorrectString("Enter password: ");

    return new Customer(firstName, lastName, login, password);
  }

  run() {
    let isRunning = true;

    while (isRunning) {
      const userChoose = prompt("a) Shop\nb) Show Profile\nq) Quit");

      switch (userChoose.toLowerCase()) {
        case "a":
          this.#getShopMenu();
          break;

        case "b":
          console.table(this.#user);
          break;

        case "q":
          isRunning = false;
          break;

        default:
          break;
      }
    }
  }

  #getShopMenu() {
    let isContinue = true;

    while (isContinue) {
      const userChoose = prompt(
        "a) Get all products\nb) Get products by categories\nc) Buy product\nq) Quit"
      );

      switch (userChoose.toLowerCase()) {
        case "a":
          console.table(this.#shop.getAll());
          break;

        case "b":
          console.table(this.#shop.getProductsByCategories());
          break;

        case "c":
          console.table(
            this.#shop.buyProduct(prompt("Enter products name:"), this.#user)
          );
          break;

        case "q":
          return;

        default:
          break;
      }
    }
  }
}

const app = new App();
app.run();
