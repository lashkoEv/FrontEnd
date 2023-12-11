import { Field } from "..";
import { Component, append } from "../../core";
import { IComponent } from "../../interfaces";
import { getFields } from "../../utils";

export class Board implements IComponent {
  private component: Component;

  private fields: Field[];

  constructor() {
    this.fields = getFields();

    this.component = new Component({
      className: "board",
    });

    this.fields.forEach((field) => {
      append(this.getComponent(), field.getComponent());
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }
}
