import { ProductRepository } from "../../schemas";
import { parseProducts } from "../../utils";
import {
  jsonProducts,
  categoryRequest,
  criterionRequest,
  directionRequest,
  mainMenuRequest,
  categories,
  minPriceRequest,
  maxPriceRequest,
  minDateRequest,
  maxDateRequest,
  manufacturerRequest,
  manufacturers,
  filterRequest,
} from "../../store";

export class ConsoleShop {
  #isWorking;
  #productRepository;
  #categoryFilter;
  #minPriceFilter;
  #maxPriceFilter;
  #manufacturerFilter;
  #minDateFilter;
  #maxDateFilter;
  #sortColumn;
  #isDesc;

  constructor() {
    const products = parseProducts(jsonProducts);
    this.#productRepository = new ProductRepository(products);

    this.#isWorking = true;

    this.#categoryFilter = null;
    this.#minPriceFilter = null;
    this.#maxPriceFilter = null;
    this.#manufacturerFilter = null;
    this.#minDateFilter = null;
    this.#maxDateFilter = null;

    this.#sortColumn = null;
    this.#isDesc = null;

    this.#getMenu();
  }

  #enterItem(request) {
    const item = prompt(request);

    if (!item) {
      return;
    }

    return item.trim();
  }

  #transit(transitions, item) {
    transitions.forEach((element) => {
      if (element.item === item) {
        element.callback();
      }
    });
  }

  #setItem(request, transitions) {
    const item = this.#enterItem(request);

    this.#transit(transitions, item);
  }

  #getTransitionsMainMenu() {
    return [
      {
        item: "1",
        callback: () => {
          this.#viewProducts();
        },
      },
      {
        item: "2",
        callback: () => {
          this.#setItem(filterRequest, this.#getTransitionsFilter());
        },
      },
      {
        item: "3",
        callback: () => {
          this.#setItem(criterionRequest, this.#getTransitionsCriterion());

          this.#setItem(directionRequest, this.#getTransitionsDirection());
        },
      },
      {
        item: "4",
        callback: () => {
          this.#isWorking = false;
        },
      },
    ];
  }

  #getTransitionsFilter() {
    return [
      {
        item: "1",
        callback: () => {
          const categoryItem = +this.#enterItem(categoryRequest);

          if (categoryItem > 0 && categoryItem <= categories.length) {
            this.#categoryFilter = categories[categoryItem - 1];
          }
        },
      },
      {
        item: "2",
        callback: () => {
          this.#minPriceFilter = +this.#enterItem(minPriceRequest);
          this.#maxPriceFilter = +this.#enterItem(maxPriceRequest);
        },
      },
      {
        item: "4",
        callback: () => {
          this.#minDateFilter = new Date(this.#enterItem(minDateRequest));
          this.#maxDateFilter = new Date(this.#enterItem(maxDateRequest));
        },
      },
      {
        item: "3",
        callback: () => {
          const manufacturerItem = +this.#enterItem(manufacturerRequest);

          if (
            manufacturerItem > 0 &&
            manufacturerItem <= manufacturers.length
          ) {
            this.#manufacturerFilter = manufacturers[manufacturerItem - 1];
          }
        },
      },
    ];
  }

  #getTransitionsCriterion() {
    return [
      {
        item: "1",
        callback: () => {
          this.#sortColumn = "Category";
        },
      },
      {
        item: "2",
        callback: () => {
          this.#sortColumn = "Price";
        },
      },
      {
        item: "3",
        callback: () => {
          this.#sortColumn = "Manufacturer";
        },
      },
      {
        item: "4",
        callback: () => {
          this.#sortColumn = "Date";
        },
      },
    ];
  }

  #getTransitionsDirection() {
    return [
      {
        item: "1",
        callback: () => {
          this.#isDesc = false;
        },
      },
      {
        item: "2",
        callback: () => {
          this.#isDesc = true;
        },
      },
    ];
  }

  #getMenu() {
    while (this.#isWorking) {
      this.#setItem(mainMenuRequest, this.#getTransitionsMainMenu());
    }
  }

  #viewProducts() {
    const result = this.#productRepository.getProducts(
      this.#categoryFilter,
      this.#minPriceFilter,
      this.#maxPriceFilter,
      this.#manufacturerFilter,
      this.#minDateFilter,
      this.#maxDateFilter,
      this.#sortColumn,
      this.#isDesc
    );

    console.table(result.products);
    console.log(`Count: ${result.count}`);
    console.log(`Total price: ${result.totalPrice}`);
    console.log(`Average price: ${result.averagePrice.toFixed(2)}`);
  }
}
