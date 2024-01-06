import { Component } from "../../core";
import { IComponent } from "../../interfaces";

export class Select implements IComponent {
  private component: Component;

  constructor(values: string[], selectEvents: {}) {
    const options = values.map((value) =>
      new Component({
        tagName: "option",
        textContent: value,
        attrs: {
          value: value,
        },
      }).getComponent()
    );

    this.component = new Component({
      tagName: "select",
      className: "select",
      children: options,
      events: selectEvents,
    });
  }
  getComponent(): HTMLElement {
    return this.component.getComponent();
  }
}
