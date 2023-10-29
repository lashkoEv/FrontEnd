import { Component } from "../core";

export class Input extends Component {
  constructor({ tagName, className, children, events, textContent, ...attrs }) {
    super({ tagName, className, children, events, textContent, ...attrs });
    this.setTagName("input");
    this.setClassName("input");
  }
}
