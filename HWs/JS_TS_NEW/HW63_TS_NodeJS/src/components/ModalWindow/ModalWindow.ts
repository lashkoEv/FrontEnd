import { Button, Input } from "..";
import { Component } from "../../core";
import { IComponent, IWindow } from "../../interfaces";

import "./ModalWindow.css";

export class ModalWindow implements IComponent, IWindow {
  private component: Component;

  private titleInput: Input;
  private okButton: Button;

  constructor(editEvents: {}) {
    this.titleInput = new Input({
      attrs: {
        placeholder: "Title",
      },
    });

    this.okButton = new Button({
      textContent: "OK",
      events: editEvents,
    });

    this.component = new Component({
      className: "modal hide",
      children: [this.getInput(), this.getButton()],
    });
  }

  changeVisibility(): void {
    this.getComponent().classList.toggle("hide");
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }

  getInput() {
    return this.titleInput.getComponent();
  }

  getButton() {
    return this.okButton.getComponent();
  }

  show(title: string) {
    this.changeVisibility();

    this.getInput().value = title;
  }

  getValue() {
    return this.getInput().value;
  }
}
