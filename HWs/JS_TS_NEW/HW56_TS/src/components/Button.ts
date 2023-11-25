import { Component } from "../core";
import { childrenType } from "../types";

export class Button {
  private component: Component;

  constructor(
    className?: string,
    children?: childrenType,
    textContent?: string,
    events?: {},
    attrs?: {}
  ) {
    let buttonClassName = "button";

    if(className) buttonClassName += ` ${className}`;

    this.component = new Component(
      "button",
      buttonClassName,
      children,
      textContent,
      events,
      attrs
    );
  }

  getComponent() : Component {
    return this.component;
  }
}
