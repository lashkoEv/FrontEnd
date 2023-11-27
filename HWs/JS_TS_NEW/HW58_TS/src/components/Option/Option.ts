import { Component } from "../../core";
import { IComponent, IHtmlData } from "../../interfaces";

export class Option implements IComponent {
  private component: Component;

  constructor({ className, textContent, events, attrs }: IHtmlData) {
    className = className ? `option ${className}` : "option";

    this.component = new Component({
      tagName: "option",
      className,
      textContent,
      events,
      attrs
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }
}
