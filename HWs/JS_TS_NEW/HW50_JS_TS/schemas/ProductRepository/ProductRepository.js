import { isEmptyArray, isNull } from "../../utils";

export class ProductRepository {
  #products;

  constructor(products) {
    if (!isEmptyArray(products)) {
      this.#products = products;
    } else {
      this.#products = [];
    }
  }

  getProducts(
    categoryFilter,
    minPriceFilter,
    maxPriceFilter,
    manufacturerFilter,
    minDateFilter,
    maxDateFilter,
    sortColumn,
    isDesc
  ) {
    let products = this.#products;

    products = this.#filterByCategory(products, categoryFilter);
    products = this.#filterByPrice(products, minPriceFilter, maxPriceFilter);
    products = this.#filterByManufacturer(products, manufacturerFilter);
    products = this.#filterByDate(products, minDateFilter, maxDateFilter);

    this.#sort(products, sortColumn, isDesc);

    return {
      products: this.#getProductsDTO(products),
      count: this.#getCount(products),
      totalPrice: this.#getTotalPrice(products),
      averagePrice: this.#getAveragePrice(products),
    };
  }

  #getProductsDTO(products) {
    return products.map((product) => product.DTO);
  }

  #getCount(products) {
    return products.length;
  }

  #getTotalPrice(products) {
    return products.reduce((sum, current) => sum + current.price, 0);
  }

  #getAveragePrice(products) {
    return this.#getTotalPrice(products) / this.#getCount(products) || 0;
  }

  #filterByCategory(products, categoryFilter) {
    if (isNull(categoryFilter)) {
      return products;
    }

    const isOnly = categoryFilter[0] === "+";

    return products.filter((product) => {
      if (categoryFilter.includes(product.category)) {
        if (isOnly) return product;
      } else {
        if (!isOnly) return product;
      }
    });
  }

  #filterByPrice(products, minPriceFilter, maxPriceFilter) {
    if (isNull(minPriceFilter) && isNull(maxPriceFilter)) {
      return products;
    }

    return products.filter((product) => {
      const condition =
        (product.price >= minPriceFilter && product.price <= maxPriceFilter) ||
        (product.price >= maxPriceFilter && product.price <= minPriceFilter);

      if (condition) {
        return product;
      }
    });
  }

  #filterByManufacturer(products, manufacturerFilter) {
    if (isNull(manufacturerFilter)) {
      return products;
    }

    const isOnly = manufacturerFilter[0] === "+";

    return products.filter((product) => {
      if (manufacturerFilter.includes(product.manufacturer)) {
        if (isOnly) return product;
      } else {
        if (!isOnly) return product;
      }
    });
  }

  #filterByDate(products, minDateFilter, maxDateFilter) {
    if (isNull(minDateFilter) && isNull(maxDateFilter)) {
      return products;
    }

    return products.filter((product) => {
      const condition =
        (product.createdAt >= minDateFilter &&
          product.createdAt <= maxDateFilter) ||
        (product.createdAt <= minDateFilter &&
          product.createdAt >= maxDateFilter);

      if (condition) {
        return product;
      }
    });
  }

  #sort(products, sortColumn, isDesc) {
    if (isNull(sortColumn) && isNull(isDesc)) {
      return;
    }

    products.sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) {
        return isDesc ? 1 : -1;
      }

      if (a[sortColumn] > b[sortColumn]) {
        return isDesc ? -1 : 1;
      }

      return 0;
    });
  }
}
