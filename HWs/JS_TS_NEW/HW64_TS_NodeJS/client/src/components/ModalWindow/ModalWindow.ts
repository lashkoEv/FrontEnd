import { Button, Input } from "..";
import { Component } from "../../core";
import { IComponent, IWindow } from "../../interfaces";

export class ModalWindow implements IComponent, IWindow {
  private component: Component;

  private titleInput: Input;
  private descriptionInput: Input;
  private newPriceInput: Input;
  private oldPriceInput: Input;
  private sendButton: Button;

  constructor(sendEvents: {}) {
    this.titleInput = new Input({
      attrs: {
        placeholder: "Title",
      },
    });

    this.descriptionInput = new Input({
      attrs: {
        placeholder: "Description",
      },
    });

    this.newPriceInput = new Input({
      attrs: {
        type: "number",
        placeholder: "New price",
      },
    });

    this.oldPriceInput = new Input({
      attrs: {
        type: "number",
        placeholder: "Old price",
        value: "-1",
      },
    });

    this.sendButton = new Button({
      textContent: "Send",
      events: sendEvents,
    });

    this.component = new Component({
      className: "modal hide",
      children: [
        this.getTitleInput(),
        this.getDescriptionInput(),
        this.getNewPriceInput(),
        this.getOldPriceInput(),
        this.getSendButton(),
      ],
    });
  }

  changeVisibility(): void {
    this.getComponent().classList.toggle("hide");
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }

  getTitleInput() {
    return this.titleInput.getComponent();
  }

  getDescriptionInput() {
    return this.descriptionInput.getComponent();
  }

  getNewPriceInput() {
    return this.newPriceInput.getComponent();
  }

  getOldPriceInput() {
    return this.oldPriceInput.getComponent();
  }

  getSendButton() {
    return this.sendButton.getComponent();
  }

  reset() {
    this.getTitleInput().value = "";
    this.getDescriptionInput().value = "";
    this.getNewPriceInput().value = "0";
    this.getOldPriceInput().value = "-1";
  }

  getValues() {
    return {
      title: this.getTitleInput().value,
      description: this.getDescriptionInput().value,
      newPrice: +this.getNewPriceInput().value,
      oldPrice: +this.getOldPriceInput().value,
    };
  }
}
