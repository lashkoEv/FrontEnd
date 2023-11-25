import { Component } from "../core";
import { IComponentInput } from "../interfaces";

export class Select {
  private component: Component;

  constructor({ className, children, events }: IComponentInput) {
    let selectClassName = "select";

    if (className) selectClassName += ` ${className}`;

    this.component = new Component({
      tagName: "select",
      className: selectClassName,
      children: children,
      events: events,
    });
  }

  getComponent(): Component {
    return this.component;
  }
}
