import { Component } from "../../core";

export class Spinner {
  #component;

  constructor() {
    this.#component = new Component({
      tagName: "div",
      className: "spinner",
    });
  }

  get component() {
    return this.#component;
  }
}
