import { ProductRepository } from "../../schemas";
import { jsonProducts } from "../../store";
import { parseProducts } from "../../utils";

export class ConsoleShop {
  #isWorking;
  #menuItem;
  #productRepository;

  constructor() {
    const products = parseProducts(jsonProducts);
    this.#productRepository = new ProductRepository(products);

    this.#isWorking = true;
    this.#menuItem = 0;

    this.#getMenu();
  }

  #getMenu() {
    while (this.#isWorking) {
      this.#menuItem = prompt(
        `Welcome to the Shop!\n1) View products\n2) Set filters\n3) Sort products\n4) Exit`
      );

      if(!this.#menuItem) {
        return;  
      }

      this.#menuItem = this.#menuItem.trim();
      
      this.#transit();
    }
  }

  #transit() {
    switch (this.#menuItem) {
      case "1": {
        this.#viewProducts();
        break;
      }
      case "2": {
        break;
      }
      case "3": {
        break;
      }
      case "4": {
        this.#isWorking = false;
        break;
      }
    }
  }

  #viewProducts() {
    console.table(this.#productRepository.getAll());
  }
}
