import { Component, render } from "../../core";
import { getButtons } from "../../store";

export class Header {
  #navElement;
  #component;

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
  }

  async setButtons() {
    const buttons = await getButtons();
    render(this.#navElement, buttons);
  }

  get component() {
    return this.#component;
  }
}
