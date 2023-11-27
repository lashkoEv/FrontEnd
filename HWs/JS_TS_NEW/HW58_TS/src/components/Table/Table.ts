import { Component, append } from "../../core";
import { IComponent } from "../../interfaces";
import { Row } from "../";

export class Table implements IComponent {
  private component: Component;

  constructor() {
    this.component = new Component({
      className: "table",
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }

  addRow(row: Row) {
    append(this.getComponent(), row.getComponent());
  }
}
