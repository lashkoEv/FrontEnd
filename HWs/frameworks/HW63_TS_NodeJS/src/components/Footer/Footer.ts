import { Button, Input } from "..";
import { Component } from "../../core";
import { IComponent } from "../../interfaces";

import "./Footer.css";

export class Footer implements IComponent {
  private component: Component;

  private input: Input;
  private button: Button;

  constructor(addEvents: {}) {
    this.input = new Input({
      attrs: {
        placeholder: "Enter a task...",
      },
    });

    this.button = new Button({
      events: addEvents,
      textContent: "Add",
    });

    this.component = new Component({
      tagName: "footer",
      className: "footer",
      children: [this.getInput(), this.getButton()],
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }

  getInput() {
    return this.input.getComponent();
  }

  getButton() {
    return this.button.getComponent();
  }
}
