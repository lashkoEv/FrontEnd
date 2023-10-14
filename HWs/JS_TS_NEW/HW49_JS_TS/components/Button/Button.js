import { AdvancedComponent } from "../../core";

export class Button extends AdvancedComponent {
  constructor({ textContent, events }) {
    super({ tagName: "button", className: "button", textContent, events });
  }
}
