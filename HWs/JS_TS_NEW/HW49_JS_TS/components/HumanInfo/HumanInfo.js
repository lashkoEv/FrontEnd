import { AdvancedComponent, Component } from "../../core";

export class HumanInfo {
  #humanInfoElement;
  #imageElement;
  #nameElement;
  #surnameElement;
  #genderElement;
  #ageElement;

  constructor() {
    this.#imageElement = new AdvancedComponent({
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

    this.#ageElement = new Component({
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

    const ageRow = new Component({
      tagName: "div",
      className: "row",
      children: [
        new AdvancedComponent({
          tagName: "div",
          className: "column",
          textContent: "Age:",
        }),
        this.#ageElement,
      ],
    });

    this.#humanInfoElement = new Component({
      tagName: "div",
      className: "info",
      children: [this.#imageElement, nameRow, surnameRow, genderRow, ageRow],
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

  get ageElement() {
    return this.#ageElement;
  }

  get imageElement() {
    return this.#imageElement;
  }
}
