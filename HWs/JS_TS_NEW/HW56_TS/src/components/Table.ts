import { Component, append } from "../core";
import { Row } from "./Row";

export class Table {
  private component: Component;

  constructor() {
    const name = new Component({
      tagName: "div",
      textContent: "Name",
    });

    const age = new Component({
      tagName: "div",
      textContent: "Age",
    });

    const gender = new Component({
      tagName: "div",
      textContent: "Gender",
    });

    const ready = new Component({
      tagName: "div",
      textContent: "Ready",
    });

    const toRemove = new Component({
      tagName: "div",
      textContent: "To remove",
    });

    const header = new Component({
      tagName: "div",
      className: "tableHead",
      children: [name, age, gender, ready, toRemove],
    });

    this.component = new Component({
      tagName: "div",
      className: "table",
      children: [header],
    });
  }

  getComponent(): Component {
    return this.component;
  }

  addRow(row: Row) {
    append(this.component.toHtml(), row.getComponent().toHtml());
  }
}
