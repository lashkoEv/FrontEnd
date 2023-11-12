import { Component, append } from "../../core";
import { Block } from "../";

export class Scene {
  #component;
  #blocks;
  #matrix;

  constructor(colors) {
    this.#blocks = [];
    this.#matrix = [];

    this.#component = new Component({
      tagName: "div",
      className: "scene",
    });

    this.#createBlocks(colors);
    this.#addBlocksToTheScene();
    this.#toMatrix();
  }

  #createBlocks(colors) {
    colors.forEach((color) => this.#blocks.push(new Block(color)));
  }

  #addBlocksToTheScene() {
    this.#blocks.forEach((block) => append(this.#component, block.component));
  }

  #toMatrix() {
    for (let i = 0; i < this.#blocks.length; i += 4) {
      this.#matrix.push(this.#blocks.slice(i, i + 4));
    }
  }

  get component() {
    return this.#component;
  }

  get blocks() {
    return this.#blocks;
  }

  get matrix() {
    return this.#matrix;
  }
}
