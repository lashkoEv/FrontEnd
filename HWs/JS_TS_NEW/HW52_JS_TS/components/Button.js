import { Component } from "../core";

export class Button extends Component {
  constructor({ tagName, className, children, events, textContent, ...attrs }) {
    super({ tagName, className, children, events, textContent, ...attrs });
    this.setTagName("button");
    this.setClassName("btn");
  }
}
