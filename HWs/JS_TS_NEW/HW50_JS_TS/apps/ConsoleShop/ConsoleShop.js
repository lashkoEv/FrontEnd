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
  catManMenuRequest,
} from "../../store";

//  снятие фильтров

//  снятие сортировки

//  вернуться в меню с меню фильтров

//  Добавить логи "Установлен фильтр .... "

// * Категории:
// *     Пользователь может выбрать один !!!или несколько!!! пунктов, написанных слитно
// *     Все, кроме

// * Производитель:
// *     Пользователь может выбрать один !!!или несколько!!! пунктов, написанных слитно
// *     Все, кроме

//  Дата
//      только год и месяц

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
          this.#printFiltersInfo();
        },
      },
      {
        item: "3",
        callback: () => {
          const item = this.#enterItem(criterionRequest);

          this.#transit(this.#getTransitionsCriterion(), item);

          if (item !== "5") {
            this.#setItem(directionRequest, this.#getTransitionsDirection());
          }

          this.#printSortingInfo();
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

  #getTransitionsCategoryMenu() {
    return [
      {
        item: "1",
        callback: () => {
          this.#categoryFilter = "+ ";
        },
      },
      {
        item: "2",
        callback: () => {
          this.#categoryFilter = "- ";
        },
      },
    ];
  }

  #getTransitionsManufacturerMenu() {
    return [
      {
        item: "1",
        callback: () => {
          this.#manufacturerFilter = "+ ";
        },
      },
      {
        item: "2",
        callback: () => {
          this.#manufacturerFilter = "- ";
        },
      },
    ];
  }

  #getTransitionsFilter() {
    return [
      {
        item: "1",
        callback: () => {
          this.#setItem(catManMenuRequest, this.#getTransitionsCategoryMenu());

          this.#categoryFilter += this.#enterItem(categoryRequest)
            .split("")
            .join(" ");
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
        item: "3",
        callback: () => {
          this.#setItem(
            catManMenuRequest,
            this.#getTransitionsManufacturerMenu()
          );

          this.#manufacturerFilter += this.#enterItem(manufacturerRequest)
            .split("")
            .join(" ");
        },
      },
      {
        item: "4",
        callback: () => {
          const minDate = this.#enterItem(minDateRequest).split(".");
          const maxDate = this.#enterItem(maxDateRequest).split(".");

          this.#minDateFilter = new Date(minDate[1], minDate[0]);
          this.#maxDateFilter = new Date(maxDate[1], maxDate[0]);
        },
      },
      {
        item: "5",
        callback: () => {
          this.#categoryFilter = null;
          this.#minPriceFilter = null;
          this.#maxPriceFilter = null;
          this.#manufacturerFilter = null;
          this.#minDateFilter = null;
          this.#maxDateFilter = null;
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
      {
        item: "5",
        callback: () => {
          this.#sortColumn = null;
          this.#isDesc = null;
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

  #printSortingInfo() {
    console.log(
      `Sort by: ${this.#sortColumn} ${this.#isDesc ? "Desc" : "Asc"}`
    );
  }

  #printFiltersInfo() {
    console.log(`Category filters: ${this.#categoryFilter || "(No filter)"}`);
    console.log(
      `Price filters: from ${this.#minPriceFilter || "(No filter)"} to ${
        this.#maxPriceFilter || "(No filter)"
      }`
    );
    console.log(
      `Manufacturers filters: ${this.#manufacturerFilter || "(No filter)"}`
    );
    console.log(
      `Date filters: from ${
        this.#minDateFilter.toLocaleString("uk-UA") || "(No filter)"
      } to ${this.#maxDateFilter.toLocaleString("uk-UA") || "(No filter)"}`
    );
  }
}
