import { AdvancedComponent } from "../../core";

export class Form {
  #form;
  #nameInput;
  #surnameInput;
  #noGenderRadio;
  #maleRadio;
  #femaleRadio;
  #button;

  constructor() {
    this.#nameInput = new AdvancedComponent({
      tagName: "input",
      className: "name",
      placeholder: "Name",
    });

    this.#surnameInput = new AdvancedComponent({
      tagName: "input",
      className: "surname",
      placeholder: "Surname",
    });

    this.#noGenderRadio = new AdvancedComponent({
      tagName: "input",
      className: "radio",
      type: "radio",
      checked: "checked",
      name: "gender",
      id: "noGender",
      value: "None",
    });

    this.#maleRadio = new AdvancedComponent({
      tagName: "input",
      className: "radio",
      type: "radio",
      name: "gender",
      id: "maleGender",
      value: "Male",
    });

    this.#femaleRadio = new AdvancedComponent({
      tagName: "input",
      className: "radio",
      type: "radio",
      name: "gender",
      id: "femaleGender",
      value: "Female",
    });

    this.#button = new AdvancedComponent({
      tagName: "button",
      className: "button",
      textContent: "Save",
    });

    const noGenderLabel = new AdvancedComponent({
      tagName: "label",
      className: "label",
      children: [this.#noGenderRadio],
      textContent: "None",
      for: "noGender",
    });

    const maleLabel = new AdvancedComponent({
      tagName: "label",
      className: "label",
      children: [this.#maleRadio],
      textContent: "Male",
      for: "maleGender",
    });

    const femaleLabel = new AdvancedComponent({
      tagName: "label",
      className: "label",
      children: [this.#femaleRadio],
      textContent: "Female",
      for: "femaleGender",
    });

    const genderFieldset = new AdvancedComponent({
      tagName: "fieldset",
      className: "gender",
      children: [noGenderLabel, maleLabel, femaleLabel],
    });

    this.#form = new AdvancedComponent({
      tagName: "form",
      className: "form",
      children: [
        this.#nameInput,
        this.#surnameInput,
        genderFieldset,
        this.#button,
      ],
    });
  }

  get form() {
    return this.#form;
  }

  get nameInput() {
    return this.#nameInput;
  }

  get surnameInput() {
    return this.#surnameInput;
  }

  get noGenderRadio() {
    return this.#noGenderRadio;
  }

  get maleRadio() {
    return this.#maleRadio;
  }

  get femaleRadio() {
    return this.#femaleRadio;
  }

  get button() {
    return this.#button;
  }
}
