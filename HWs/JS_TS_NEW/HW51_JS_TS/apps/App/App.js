import { Component, append } from "../../core";
import { getButtons, infoBox } from "../../store";

export class App {
  #nav;
  #buttons;
  #infoBox;

  constructor() {
    this.#buttons = getButtons();
    this.#infoBox = infoBox;

    this.#nav = new Component({
      tagName: "nav",
      className: "nav",
      children: this.#buttons,
    });
  }

  load() {
    append(app, this.#nav);
    append(app, this.#infoBox.wrapper);
  }
}
