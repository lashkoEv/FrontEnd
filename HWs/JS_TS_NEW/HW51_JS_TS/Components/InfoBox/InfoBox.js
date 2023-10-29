import { Info } from "..";
import { AdvancedComponent, render } from "../../core";

export class InfoBox {
  #wrapper;

  constructor() {
    this.#wrapper = new AdvancedComponent({
      tagName: "div",
      className: "info-wrapper",
    });
  }

  set info(infoRows) {
    const infos = [];

    for (const row of infoRows) {
      infos.push(new Info(row).infoElement);
    }

    render(this.#wrapper, infos);
  }

  get wrapper() {
    return this.#wrapper;
  }
}
