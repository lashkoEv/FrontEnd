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
      if (element[0] === item) {
        element[1]();
      }
    });
  }

  #setItem(request, transitions) {
    const item = this.#enterItem(request);

    this.#transit(transitions, item);
  }

  #parseFilter(filter, dataArray) {
    filter = filter.split("");

    for (let i = 1; i < filter.length; i++) {
      filter[i] = dataArray[filter[i]];
    }

    return filter;
  }

  #getTransitionsMainMenu() {
    return [
      ["1", this.#viewProductsCallback],
      ["2", this.#filtersCallback],
      ["3", this.#sortingCallback],
      ["4", () => (this.#isWorking = false)],
    ];
  }

  #getTransitionsCategoryMenu() {
    return [
      ["1", () => (this.#categoryFilter = "+")],
      ["2", () => (this.#categoryFilter = "-")],
    ];
  }

  #getTransitionsManufacturerMenu() {
    return [
      ["1", () => (this.#manufacturerFilter = "+")],
      ["2", () => (this.#manufacturerFilter = "-")],
    ];
  }

  #getTransitionsFilter() {
    return [
      ["1", this.#categoryFilterCallback],
      ["2", this.#priceFilterCallback],
      ["3", this.#manufacturerFilterCallback],
      ["4", this.#dateFilterCallback],
      ["5", this.#removeFiltersCallback],
    ];
  }

  #getTransitionsCriterion() {
    return [
      ["1", () => (this.#sortColumn = "category")],
      ["2", () => (this.#sortColumn = "price")],
      ["3", () => (this.#sortColumn = "manufacturer")],
      ["4", () => (this.#sortColumn = "createdAt")],
      ["5", () => this.#removeSortingOptionsCallback],
    ];
  }

  #getTransitionsDirection() {
    return [
      ["1", () => (this.#isDesc = false)],
      ["2", () => (this.#isDesc = true)],
    ];
  }

  #getMenu() {
    while (this.#isWorking) {
      this.#setItem(mainMenuRequest, this.#getTransitionsMainMenu());
    }
  }

  #viewProductsCallback = () => {
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
    console.log(`Total price: ${result.totalPrice.toFixed(2)}`);
    console.log(`Average price: ${result.averagePrice.toFixed(2)}`);
  };

  #sortingCallback = () => {
    const item = this.#enterItem(criterionRequest);

    this.#transit(this.#getTransitionsCriterion(), item);

    if (item !== "5") {
      this.#setItem(directionRequest, this.#getTransitionsDirection());
    }

    this.#printSortingInfo();
  };

  #filtersCallback = () => {
    this.#setItem(filterRequest, this.#getTransitionsFilter());
    this.#printFiltersInfo();
  };

  #categoryFilterCallback = () => {
    this.#setItem(catManMenuRequest, this.#getTransitionsCategoryMenu());

    this.#categoryFilter += this.#enterItem(categoryRequest);

    this.#categoryFilter = this.#parseFilter(this.#categoryFilter, categories);
  };

  #priceFilterCallback = () => {
    this.#minPriceFilter = +this.#enterItem(minPriceRequest);
    this.#maxPriceFilter = +this.#enterItem(maxPriceRequest);
  };

  #manufacturerFilterCallback = () => {
    this.#setItem(catManMenuRequest, this.#getTransitionsManufacturerMenu());

    this.#manufacturerFilter += this.#enterItem(manufacturerRequest);

    this.#manufacturerFilter = this.#parseFilter(
      this.#manufacturerFilter,
      manufacturers
    );
  };

  #dateFilterCallback = () => {
    const minDate = this.#enterItem(minDateRequest).split(".");
    const maxDate = this.#enterItem(maxDateRequest).split(".");

    this.#minDateFilter = new Date(minDate[1], minDate[0]);
    this.#maxDateFilter = new Date(maxDate[1], maxDate[0]);
  };

  #removeFiltersCallback = () => {
    this.#categoryFilter = null;
    this.#minPriceFilter = null;
    this.#maxPriceFilter = null;
    this.#manufacturerFilter = null;
    this.#minDateFilter = null;
    this.#maxDateFilter = null;
  };

  #removeSortingOptionsCallback = () => {
    this.#sortColumn = null;
    this.#isDesc = null;
  };

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
        this.#minDateFilter
          ? this.#minDateFilter.toLocaleString("uk-UA")
          : "(No filter)"
      } to ${
        this.#maxDateFilter
          ? this.#maxDateFilter.toLocaleString("uk-UA")
          : "(No filter)"
      }`
    );
  }
}
