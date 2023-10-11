import { AdvancedComponent, Component } from "../../core";

export class HumanInfo {
  #humanInfoElement;
  #nameElement;
  #surnameElement;
  #genderElement;

  constructor() {
    const humanImg = new AdvancedComponent({
      tagName: "img",
      className: "image",
      src: "/images/user4.png",
    });

    this.#nameElement = new Component({
      tagName: "div",
      className: "column",
    });

    this.#surnameElement = new Component({
      tagName: "div",
      className: "column",
    });

    this.#genderElement = new Component({
      tagName: "div",
      className: "column",
    });

    const nameRow = new Component({
      tagName: "div",
      className: "row",
      children: [
        new AdvancedComponent({
          tagName: "div",
          className: "column",
          textContent: "Name:",
        }),
        this.#nameElement,
      ],
    });

    const surnameRow = new Component({
      tagName: "div",
      className: "row",
      children: [
        new AdvancedComponent({
          tagName: "div",
          className: "column",
          textContent: "Surname:",
        }),
        this.#surnameElement,
      ],
    });

    const genderRow = new Component({
      tagName: "div",
      className: "row",
      children: [
        new AdvancedComponent({
          tagName: "div",
          className: "column",
          textContent: "Gender:",
        }),
        this.#genderElement,
      ],
    });

    this.#humanInfoElement = new Component({
      tagName: "div",
      className: "info",
      children: [humanImg, nameRow, surnameRow, genderRow],
    });
  }

  get humanInfoElement() {
    return this.#humanInfoElement;
  }

  get nameElement() {
    return this.#nameElement;
  }

  get surnameElement() {
    return this.#surnameElement;
  }

  get genderElement() {
    return this.#genderElement;
  }
}
