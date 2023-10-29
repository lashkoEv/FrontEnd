import { Component } from "../core";

export class Main extends Component {
  constructor({ tagName, className, children, events, textContent, ...attrs }) {
    super({ tagName, className, children, events, textContent, ...attrs });
    this.setTagName("main");
    this.setClassName("main");
  }
}
