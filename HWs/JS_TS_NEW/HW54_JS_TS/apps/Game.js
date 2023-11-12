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
  }

  
}
