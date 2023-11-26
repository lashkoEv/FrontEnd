import { Button, CheckBox, Input, Option, Select } from ".";
import { Component } from "../core";

export class ModalWindow {
  private component: Component;

  private nameInput: Input;
  private ageInput: Input;
  private genderSelect: Select;
  private readyCheckBox: CheckBox;
  private applyButton: Button;

  constructor(applyEvents: {}) {
    this.nameInput = new Input({
      attrs: { placeholder: "Name" },
    });

    this.ageInput = new Input({
      attrs: { placeholder: "Age", type: "number" },
    });

    const maleOption = new Option("Male", "Male").getComponent();
    const femaleOption = new Option("Female", "Female").getComponent();
    this.genderSelect = new Select({
      children: [maleOption, femaleOption],
    });

    this.readyCheckBox = new CheckBox({});

    this.applyButton = new Button({
      textContent: "Apply",
      events: applyEvents,
    });

    this.component = new Component({
      tagName: "div",
      className: "modal",
      children: [
        this.nameInput.getComponent(),
        this.ageInput.getComponent(),
        this.genderSelect.getComponent(),
        this.readyCheckBox.getComponent(),
        this.applyButton.getComponent(),
      ],
    });

    this.changeVisibility();
  }

  getComponent(): Component {
    return this.component;
  }

  getName() {
    return this.nameInput.getComponent().toHtml().value;
  }

  getAge() {
    return this.ageInput.getComponent().toHtml().value;
  }

  getGender() {
    return this.genderSelect.getComponent().toHtml().value;
  }

  getReady() {
    return this.readyCheckBox.getComponent().toHtml().checked;
  }

  changeVisibility() {
    this.component.toHtml().classList.toggle("hide");
  }
}
