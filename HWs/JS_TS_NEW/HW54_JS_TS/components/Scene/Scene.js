import { Component, append } from "../../core";
import { Block } from "../";

export class Scene {
  #component;
  #matrix;

  constructor(colors) {
    this.#matrix = [];

    this.#component = new Component({
      tagName: "div",
      className: "scene",
    });

    this.#createBlocks(colors);
    this.#addBlocksToTheScene();
  }

  #createBlocks(colors) {
    let color = 0;

    for (let i = 0; i < 4; i++) {
      const row = [];

      for (let i = 0; i < 4; i++) {
        row.push(new Block(colors[color]));
        color++;
      }

      this.#matrix.push(row);
    }
  }

  #addBlocksToTheScene() {
    for (let i = 0; i < this.#matrix.length; i++) {
      for (let j = 0; j < this.#matrix[i].length; j++) {
        append(this.#component, this.#matrix[i][j].component);
      }
    }
  }

  get component() {
    return this.#component;
  }

  get matrix() {
    return this.#matrix;
  }
}
