import { AdvancedComponent } from "../../core";
import { Row } from "..";

export class Info {
  #rows;
  #infoElement;

  constructor(infoRows) {
    this.#rows = [];

    for (const row in infoRows) {
      this.#rows.push(new Row(row, infoRows[row]).rowElement);
    }

    this.#infoElement = new AdvancedComponent({
      tagName: "div",
      className: "info",
      children: this.#rows,
    });
  }

  get infoElement() {
    return this.#infoElement;
  }
}
