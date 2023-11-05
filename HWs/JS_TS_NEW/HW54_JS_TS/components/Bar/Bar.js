import { Component } from "../../core";

export class Bar {
  #innerComponent;
  #outerComponent;
  #width;

  constructor() {
    this.#width = 0;

    this.#innerComponent = new Component({
      tagName: "div",
      className: "bar",
    });

    this.#outerComponent = new Component({
      tagName: "div",
      className: "bar-wrapper",
      children: [this.#innerComponent],
    });
  }

  get innerComponent() {
    return this.#innerComponent;
  }

  get outerComponent() {
    return this.#outerComponent;
  }

  set width(width) {
    this.#width += width;

    if (this.#width === 99) {
      this.#width = 100;
    }

    this.#innerComponent.style.width = `${this.#width}%`;
    this.#innerComponent.textContent = `${this.#width} %`;
  }
}
