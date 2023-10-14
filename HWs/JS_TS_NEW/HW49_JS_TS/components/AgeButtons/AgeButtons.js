import { Component } from "../../core";
import { Button } from "../Button/Button";

export class AgeButtons {
  #element;
  #monthButton;
  #yearButton;

  constructor() {
    this.#monthButton = new Button({
      textContent: "Live a month",
    });

    this.#yearButton = new Button({
      textContent: "Live a year",
    });

    this.#element = new Component({
      tagName: "div",
      className: "info",
      children: [this.#monthButton, this.#yearButton],
    });
  }

  get element() {
    return this.#element;
  }

  get monthButton() {
    return this.#monthButton;
  }

  get yearButton() {
    return this.#yearButton;
  }
}
