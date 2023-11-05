import { Component, append, render } from "../../core";
import { Button } from "../Button/Button";

export class Header {
  #navElement;
  #component;
  #buttons;

  constructor() {
    this.#navElement = new Component({
      tagName: "nav",
      className: "nav",
    });

    this.#component = new Component({
      tagName: "header",
      className: "header",
      children: [this.#navElement],
    });

    this.#buttons = null;
  }

  setButtons(keys) {
    this.#buttons = [];

    for (const key of keys) {
      const btn = new Button(key);
      this.#buttons.push(btn);
      append(this.#navElement, btn.component);
    }
  }

  get component() {
    return this.#component;
  }

  get buttons() {
    return this.#buttons;
  }
}
