import { Component } from "../../core";
import { getHuman, increaseAge } from "../../store";
import { Button } from "../Button/Button";

export class AgeButtons {
  #element;

  constructor() {
    const monthButton = new Button({
      textContent: "Live a month",
      events: {
        click: () => {
            console.log(getHuman());
          increaseAge(0.08);
        },
      },
    });

    const yearButton = new Button({
      textContent: "Live a year",
      events: {
        click: () => {
            console.log(getHuman());
          increaseAge(1);
        },
      },
    });

    this.#element = new Component({
      tagName: "div",
      className: "info",
      children: [monthButton, yearButton],
    });
  }

  get element() {
    return this.#element;
  }
}
