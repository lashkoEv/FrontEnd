import { Component } from "../core";
import { IComponentInput } from "../interfaces";

export class CheckBox {
  private component: Component;

  constructor({ className, events }: IComponentInput) {
    let checkBoxClassName = "checkBox";

    if (className) checkBoxClassName += ` ${className}`;

    this.component = new Component({
      tagName: "input",
      className: checkBoxClassName,
      events,
      attrs: { type: "checkbox" },
    });
  }

  getComponent(): Component {
    return this.component;
  }
}
