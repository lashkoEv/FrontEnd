import { Button, Input } from "..";
import { Component } from "../../core";
import { IComponent } from "../../interfaces";

export class ModalWindow implements IComponent {
  private component: Component;

  private titleInput: Input;
  private descriptionInput: Input;
  private priceInput: Input;
  private urlInput: Input;
  private applyBtn: Button;

  constructor(applyEvents: {}) {
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

    this.priceInput = new Input({
      attrs: {
        placeholder: "Price",
      },
    });

    this.urlInput = new Input({
      attrs: {
        placeholder: "Image URL",
      },
    });

    this.applyBtn = new Button({
      textContent: "Apply",
      events: applyEvents,
    });

    this.component = new Component({
      className: "modal hide",
      children: [
        this.getTitleInput(),
        this.getDescriptionInput(),
        this.getPriceInput(),
        this.getUrlInput(),
        this.getApplyBtn(),
      ],
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }

  changeVisibility() {
    this.getComponent().classList.toggle("hide");
  }

  getTitleInput(): HTMLElement {
    return this.titleInput.getComponent();
  }

  getDescriptionInput(): HTMLElement {
    return this.descriptionInput.getComponent();
  }

  getPriceInput(): HTMLElement {
    return this.priceInput.getComponent();
  }

  getUrlInput(): HTMLElement {
    return this.urlInput.getComponent();
  }

  getApplyBtn(): HTMLElement {
    return this.applyBtn.getComponent();
  }
}
