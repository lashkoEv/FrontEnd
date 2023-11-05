import { AdvancedComponent } from "../../core";

export class Button {
  #isActive;
  #component;
  #key;

  constructor(key) {
    this.#key = key || "";

    this.#isActive = false;

    this.#component = new AdvancedComponent({
      tagName: "button",
      className: "button",
      id: this.#key,
      textContent: this.#key[0].toUpperCase() + this.#key.slice(1),
    });
  }

  get component() {
    return this.#component;
  }

  get key() {
    return this.#key;
  }

  get isActive() {
    return this.#isActive;
  }

  set isActive(isActive) {
    this.#isActive = isActive;
  }
}
