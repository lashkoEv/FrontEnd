import { IComponent } from "../../interfaces";
import { Button, Input, Select, Option } from "../";
import { Component } from "../../core";

export class ConverterWindow implements IComponent {
  private component: Component;
  private input: Input;
  private result: Input;
  private fromSelect: Select;
  private toSelect: Select;
  private applyBtn: Button;

  constructor(
    currencies: string[],
    applyEvents: {},
    fromSelectEvents: {},
    toSelectEvents: {},
    inputEvents: {}
  ) {
    this.input = new Input({
      attrs: {
        placeholder: "Amount",
        type: "number",
        value: 1,
      },
      events: inputEvents,
    });

    this.result = new Input({
      attrs: {
        placeholder: "Result",
        disabled: true,
      },
    });

    let optionsFrom: HTMLElement[] = [];
    let optionsTo: HTMLElement[] = [];

    currencies.forEach((currency) => {
      optionsFrom.push(
        new Option({
          textContent: currency,
          attrs: { value: currency },
        }).getComponent()
      );
      optionsTo.push(
        new Option({
          textContent: currency,
          attrs: { value: currency },
        }).getComponent()
      );
    });

    this.fromSelect = new Select({
      children: optionsFrom,
      events: fromSelectEvents,
    });

    this.toSelect = new Select({
      children: optionsTo,
      events: toSelectEvents,
    });

    this.toSelect.getComponent().value = optionsTo[1].value;
    optionsTo[0].classList.add("hidden");

    this.applyBtn = new Button({ textContent: "Apply", events: applyEvents });

    this.component = new Component({
      className: "converter",
      children: [
        this.getInput(),
        this.getFromSelect(),
        this.getToSelect(),
        this.getApplyButton(),
        this.result.getComponent(),
      ],
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }

  getInput() {
    return this.input.getComponent();
  }

  getResult() {
    return this.result.getComponent();
  }

  getFromSelect() {
    return this.fromSelect.getComponent();
  }

  getToSelect() {
    return this.toSelect.getComponent();
  }

  getApplyButton() {
    return this.applyBtn.getComponent();
  }
}
