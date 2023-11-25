import { Button, CheckBox, Input, Option, Select } from ".";
import { Component } from "../core";

export class ModalWindow {
  private component: Component;

  constructor(applyEvents: {}) {
    const nameInput = new Input({
      attrs: { placeholder: "Name" },
    }).getComponent();

    const ageInput = new Input({
      attrs: { placeholder: "Age" },
    }).getComponent();

    const maleOption = new Option("Male", "Male").getComponent();
    const femaleOption = new Option("Female", "Female").getComponent();
    const genderSelect = new Select({
      children: [maleOption, femaleOption],
    }).getComponent();

    const readyCheckBox = new CheckBox({}).getComponent();
    
    const applyButton = new Button({
      textContent: "Apply",
      events: applyEvents,
    }).getComponent();

    this.component = new Component({
      tagName: "div",
      className: "modal",
      children: [nameInput, ageInput, genderSelect, readyCheckBox, applyButton],
    });
  }

  getComponent(): Component {
    return this.component;
  }
}
