import { Component } from "../../core";

export class Block {
  #color;
  #component;

  constructor(color) {
    this.#color = color;

    this.#component = new Component({
      tagName: "button",
      className: "block",
    });

    this.#color = color;

    this.#changeColor();
  }

  get component() {
    return this.#component;
  }

  get color() {
    return this.#color;
  }

  set color(color) {
    this.#color = color;

    this.#changeColor();
  }

  #changeColor() {
    let colorClassName;

    switch (this.#color) {
      case 0: {
        colorClassName = "empty";
        break;
      }
      case 1: {
        colorClassName = "red";
        break;
      }
      case 2: {
        colorClassName = "blue";
        break;
      }
      case 3: {
        colorClassName = "yellow";
        break;
      }
      case 4: {
        colorClassName = "green";
        break;
      }
    }

    this.#component.className = `block ${colorClassName}`;
  }
}
