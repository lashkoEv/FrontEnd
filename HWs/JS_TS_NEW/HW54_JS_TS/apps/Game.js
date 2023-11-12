import { Bar, Scene } from "../components";
import { render } from "../core";
import { generateColors } from "../utils";

export class Game {
  #bar;
  #scene;

  constructor() {
    this.#bar = new Bar();

    this.#scene = new Scene(generateColors());

    render(app, [this.#bar.outerComponent, this.#scene.component]);

    console.log(this.#scene.matrix);
    this.#setBlocksListeners();
  }

  #setBlocksListeners() {
    for (let i = 0; i < this.#scene.matrix.length; i++) {
      for (let j = 0; j < this.#scene.matrix[i].length; j++) {
        this.#scene.matrix[i][j].component.addEventListener("click", () => {
          if (this.#scene.matrix[i][j].color === 0) {
            return;
          }

          if (i - 1 >= 0) {
            if (this.#scene.matrix[i - 1][j].color === 0) {
              this.#swap(i, j, i - 1, j);
            }
          }

          if (i + 1 < 4) {
            if (this.#scene.matrix[i + 1][j].color === 0) {
              this.#swap(i, j, i + 1, j);
            }
          }

          if (j - 1 >= 0) {
            if (this.#scene.matrix[i][j - 1].color === 0) {
              this.#swap(i, j, i, j - 1);
            }
          }

          if (j + 1 < 4) {
            if (this.#scene.matrix[i][j + 1].color === 0) {
              this.#swap(i, j, i, j + 1);
            }
          }
        });
      }
    }
  }

  #swap(row1, col1, row2, col2) {
    const tmp = this.#scene.matrix[row1][col1].color;

    this.#scene.matrix[row1][col1].color = this.#scene.matrix[row2][col2].color;

    this.#scene.matrix[row2][col2].color = tmp;
  }
}
