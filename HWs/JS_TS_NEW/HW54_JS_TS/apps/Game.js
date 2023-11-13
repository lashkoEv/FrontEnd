import { Bar, Scene } from "../components";
import { render } from "../core";
import { generateColors } from "../utils";

export class Game {
  #bar;
  #scene;
  #level;

  constructor() {
    this.#level = 1;

    this.#bar = new Bar();

    this.#scene = new Scene(generateColors());

    render(app, [this.#bar.outerComponent, this.#scene.component]);

    this.#setBlocksListeners();
  }

  #setBlocksListeners() {
    this.#scene.matrix[0][0].component.focus();

    for (let i = 0; i < this.#scene.matrix.length; i++) {
      for (let j = 0; j < this.#scene.matrix[i].length; j++) {
        this.#scene.matrix[i][j].component.addEventListener("click", () => {
          this.#changeColor(i, j);
        });

        this.#scene.matrix[i][j].component.addEventListener("keydown", (e) => {
          this.#checkKey(e.key, i, j);
        });
      }
    }
  }

  #checkKey(key, i, j) {
    switch (key) {
      case "ArrowUp": {
        this.#changeFocusUp(i, j);
        break;
      }
      case "ArrowDown": {
        this.#changeFocusDown(i, j);
        break;
      }
      case "ArrowLeft": {
        this.#changeFocusLeft(i, j);
        break;
      }
      case "ArrowRight": {
        this.#changeFocusRight(i, j);
        break;
      }
      case "Enter": {
        this.#changeColor(i, j);
        break;
      }
    }
  }

  #changeFocusUp(i, j) {
    if (i - 1 >= 0) {
      this.#scene.matrix[i - 1][j].component.focus();
    }
  }

  #changeFocusDown(i, j) {
    if (i + 1 < 4) {
      this.#scene.matrix[i + 1][j].component.focus();
    }
  }

  #changeFocusLeft(i, j) {
    if (j - 1 >= 0) {
      this.#scene.matrix[i][j - 1].component.focus();
    }
  }

  #changeFocusRight(i, j) {
    if (j + 1 < 4) {
      this.#scene.matrix[i][j + 1].component.focus();
    }
  }

  #changeColor(i, j) {
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

    this.#checkLevels();
  }

  #swap(row1, col1, row2, col2) {
    const tmp = this.#scene.matrix[row1][col1].color;

    this.#scene.matrix[row1][col1].color = this.#scene.matrix[row2][col2].color;

    this.#scene.matrix[row2][col2].color = tmp;
  }

  #checkLevels() {
    if (this.#level === 1 && this.#checkFirstLevel()) {
      this.#increaseLevel();
    }

    if (this.#level === 2 && this.#checkSecondLevel()) {
      this.#increaseLevel();
    }

    if (this.#level === 3 && this.#checkThirdLevel()) {
      this.#increaseLevel();

      setTimeout(() => {
        this.#win();
      }, 1000);
    }
  }

  #increaseLevel() {
    this.#bar.width = 33;

    this.#level++;

    if (this.#level === 4) {
      this.#level = 1;
    }
  }

  #win() {
    const msg = "Congratulations! You win! Want to start the game again?";
    
    const isContinue = confirm(msg);

    if (isContinue) {
      this.#bar = new Bar();

      this.#scene = new Scene(generateColors());

      render(app, [this.#bar.outerComponent, this.#scene.component]);

      this.#setBlocksListeners();
    } else {
      window.close();
    }
  }

  #checkFirstLevel() {
    for (let element of this.#scene.matrix) {
      if (element[0].color !== 3) {
        return false;
      }
    }

    return this.#checkLastCell();
  }

  #checkSecondLevel() {
    for (let element of this.#scene.matrix[0]) {
      if (element.color !== 2) {
        return false;
      }
    }

    return this.#checkLastCell();
  }

  #checkThirdLevel() {
    for (let i = 0; i < this.#scene.matrix.length; i++) {
      const isCorrect =
        this.#scene.matrix[i][this.#scene.matrix.length - i - 1].color !== 1;

      if (isCorrect) {
        return false;
      }
    }

    return this.#checkLastCell();
  }

  #checkLastCell() {
    const isCorrect =
      this.#scene.matrix[this.#scene.matrix.length - 1][
        this.#scene.matrix.length - 1
      ].color === 0;

    return isCorrect;
  }
}
