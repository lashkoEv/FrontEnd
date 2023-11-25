import { Component } from "../core";
import { IComponentInput } from "../interfaces";

export class Button {
  private component: Component;

  constructor({
    className,
    children,
    textContent,
    events,
    attrs,
  }: IComponentInput) {
    let buttonClassName = "button";

    if (className) buttonClassName += ` ${className}`;

    this.component = new Component({
      tagName: "button",
      className: buttonClassName,
      children,
      textContent,
      events,
      attrs,
    });
  }

  getComponent(): Component {
    return this.component;
  }
}
