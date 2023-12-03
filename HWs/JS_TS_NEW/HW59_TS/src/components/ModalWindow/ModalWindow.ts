import { Button, Input } from "..";
import { Component } from "../../core";
import { IComponent, IWindow } from "../../interfaces";

export class ModalWindow implements IComponent, IWindow {
  private component: Component;

  private titleInput: Input;
  private descriptionInput: Input;
  private priceInput: Input;
  private urlInput: Input;
  private applyBtn: Button;
  private deleteBtn: Button;
  private addBtn: Button;

  constructor(applyEvents: {}, deleteEvents: {}, addEvents: {}) {
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

    this.deleteBtn = new Button({
      textContent: "Delete",
      events: deleteEvents,
    });

    this.addBtn = new Button({
      textContent: "Add new",
      events: addEvents,
    });

    this.component = new Component({
      className: "modal hide",
      children: [
        this.getTitleInput(),
        this.getDescriptionInput(),
        this.getPriceInput(),
        this.getUrlInput(),
        this.getApplyBtn(),
        this.getDeleteBtn(),
        this.getAddBtn(),
      ],
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }

  changeVisibility(): void {
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

  getDeleteBtn(): HTMLElement {
    return this.deleteBtn.getComponent();
  }

  getAddBtn(): HTMLElement {
    return this.addBtn.getComponent();
  }
}
