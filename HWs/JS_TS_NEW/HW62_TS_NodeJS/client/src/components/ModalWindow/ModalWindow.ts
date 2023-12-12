import { Button, Input } from "..";
import { Component } from "../../core";
import { IComponent, IWindow } from "../../interfaces";

export class ModalWindow implements IComponent, IWindow {
  private component: Component;

  private titleInput: Input;
  private textInput: Input;
  private authorInput: Input;
  private sendButton: Button;

  constructor(sendEvents: {}) {
    this.titleInput = new Input({
      attrs: {
        placeholder: "Title",
      },
    });

    this.textInput = new Input({
      attrs: {
        placeholder: "Text",
      },
    });

    this.authorInput = new Input({
      attrs: {
        placeholder: "Author",
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
        this.getTextInput(),
        this.getAuthorInput(),
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

  getTextInput() {
    return this.textInput.getComponent();
  }

  getAuthorInput() {
    return this.authorInput.getComponent();
  }

  getSendButton() {
    return this.sendButton.getComponent();
  }

  reset() {
    this.getTitleInput().value = "";
    this.getTextInput().value = "";
    this.getAuthorInput().value = "";
  }

  getValues() {
    return {
      title: this.getTitleInput().value,
      text: this.getTextInput().value,
      author: this.getAuthorInput().value,
    };
  }
}
