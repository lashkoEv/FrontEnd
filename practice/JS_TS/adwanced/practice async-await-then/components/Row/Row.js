import { AdvancedComponent } from "../../core";

export class Row {
  #rowElement;
  #keyElement;
  #valueElement;

  constructor(key, value) {
    this.#keyElement = new AdvancedComponent({
      tagName: "div",
      className: "column",
      textContent: key,
    });

    this.#valueElement = new AdvancedComponent({
      tagName: "div",
      className: "column",
      textContent: value,
    });

    this.#rowElement = new AdvancedComponent({
      tagName: "div",
      className: "row",
      children: [this.#keyElement, this.#valueElement],
    });
  }

  get rowElement() {
    return this.#rowElement;
  }

  get keyElement() {
    return this.#keyElement;
  }

  get valueElement() {
    return this.#valueElement;
  }
}
