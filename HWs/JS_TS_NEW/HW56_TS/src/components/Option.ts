import { Component } from "../core";

export class Option {
  private component: Component;

  constructor(value: string, textContent: string) {
    this.component = new Component({
      tagName: "option",
      textContent: textContent,
      attrs: { value: value },
    });
  }

  getComponent(): Component {
    return this.component;
  }
}
