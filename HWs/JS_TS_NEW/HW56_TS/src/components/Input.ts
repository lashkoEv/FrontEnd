import { Component } from "../core";
import { IComponentInput } from "../interfaces";

export class Input {
  private component: Component;

  constructor({ className, events, attrs }: IComponentInput) {
    let inputClassName = "input";

    if (className) inputClassName += ` ${className}`;

    this.component = new Component({
      tagName: "input",
      className: inputClassName,
      events,
      attrs,
    });
  }

  getComponent(): Component {
    return this.component;
  }
}
