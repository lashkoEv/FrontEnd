import { Info } from "..";
import { AdvancedComponent, render } from "../../core";

export class InfoBox {
  #wrapper;

  constructor() {
    this.#wrapper = new AdvancedComponent({
      tagName: "div",
      className: "info-wrapper",
      children: [
        new AdvancedComponent({
          tagName: "h3",
          textContent:
            "To obtain data, click on the appropriate button in the top menu.",
        }),
      ],
    });
  }

  set info(infoRows) {
    const infos = [];

    if (infoRows.length > 0) {
      for (const row of infoRows) {
        infos.push(new Info(row).infoElement);
      }
    } else {
      infos.push(
        new AdvancedComponent({
          tagName: "h3",
          textContent:
            "To obtain data, click on the appropriate button in the top menu.",
        })
      );
    }

    render(this.#wrapper, infos);
  }

  get wrapper() {
    return this.#wrapper;
  }
}
