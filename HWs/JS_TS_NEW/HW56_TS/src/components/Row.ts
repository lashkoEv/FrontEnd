import { CheckBox } from ".";
import { Component } from "../core";

export class Row {
  private component: Component;
  private nameComponent: Component;
  private ageComponent: Component;
  private genderComponent: Component;
  private readyComponent: Component;
  private toRemoveCheckBox: CheckBox;

  constructor(name: string, age: string, gender: string, ready: string) {
    this.nameComponent = new Component({
      tagName: "div",
      textContent: name,
    });

    this.ageComponent = new Component({
      tagName: "div",
      textContent: age,
    });

    this.genderComponent = new Component({
      tagName: "div",
      textContent: gender,
    });

    this.readyComponent = new Component({
      tagName: "div",
      textContent: ready,
    });

    this.toRemoveCheckBox = new CheckBox({});

    this.component = new Component({
      tagName: "div",
      className: "row",
      children: [
        this.nameComponent,
        this.ageComponent,
        this.genderComponent,
        this.readyComponent,
        this.toRemoveCheckBox.getComponent(),
      ],
    });
  }

  getComponent(): Component {
    return this.component;
  }

  getNameComponent(): Component {
    return this.nameComponent;
  }

  getAgeComponent(): Component {
    return this.ageComponent;
  }

  getGenderComponent(): Component {
    return this.genderComponent;
  }

  getReadyComponent(): Component {
    return this.readyComponent;
  }

  getToRemoveComponent(): CheckBox {
    return this.toRemoveCheckBox;
  }
}
