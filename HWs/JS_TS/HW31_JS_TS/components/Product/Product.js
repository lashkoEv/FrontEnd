export class Product {
    #label;
    #price;

    constructor(label, price) {
        this.#label = label;
        this.#price - price;
    }

    get label() {
        return this.#label;
    }

    set label(label) {
        this.#label = label;
    }

    get price() {
        return this.#price;
    }

    set price(price) {
        this.#price = price;
    }
}