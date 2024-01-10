import { Button, Input } from "..";
import { Component } from "../../core";
import { IComponent, IWindow } from "../../interfaces";

export class AuthorizationWindow implements IComponent, IWindow {
  private component: Component;
  private loginInput: Input;
  private passwordInput: Input;
  private sendBtn: Button;

  constructor(sendEvents: {}) {
    this.loginInput = new Input({
      attrs: {
        placeholder: "Login",
      },
    });

    this.passwordInput = new Input({
      attrs: {
        placeholder: "Password",
        type: "password",
      },
    });

    this.sendBtn = new Button({ textContent: "Send", events: sendEvents });

    this.component = new Component({
      className: "modal",
      children: [
        this.getLoginInput(),
        this.getPasswordInput(),
        this.getSendBtn(),
      ],
    });
  }

  changeVisibility(): void {
    this.getComponent().classList.toggle("hide");
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }

  getLoginInput() {
    return this.loginInput.getComponent();
  }

  getPasswordInput() {
    return this.passwordInput.getComponent();
  }

  getSendBtn() {
    return this.sendBtn.getComponent();
  }

  success() {
    this.getLoginInput().className = "input success";
    this.getPasswordInput().className = "input success";
  }

  error() {
    this.getLoginInput().classList.add("error");
    this.getPasswordInput().classList.add("error");
  }

  reset() {
    this.getLoginInput().value = "";
    this.getPasswordInput().value = "";

    this.getLoginInput().className = "input";
    this.getPasswordInput().className = "input";
  }
}
