import { Component } from "../../core";
import { IComponent, IHtmlData } from "../../interfaces";

export class Select implements IComponent {
  private component: Component;

  constructor({ className, children, events }: IHtmlData) {
    className = className ? `select ${className}` : "select";

    this.component = new Component({
      tagName: "select",
      className,
      children,
      events,
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }
}
