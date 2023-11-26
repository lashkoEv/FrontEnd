import { Button, Timer } from "..";
import { Component } from "../../core";

export class ModalWindow {
  private component: Component;
  private timer: Timer;
  private stayBtn: Button;
  private leaveBtn: Button;

  constructor(stayEvents: {}, leaveEvents: {}) {
    this.timer = new Timer();

    this.stayBtn = new Button({
      textContent: "Stay",
      events: stayEvents,
    });

    this.leaveBtn = new Button({
      textContent: "Leave",
      events: leaveEvents,
    });

    this.component = new Component({
      className: "modal",
      children: [
        this.timer.getComponent(),
        this.stayBtn.getComponent(),
        this.leaveBtn.getComponent(),
      ],
    });
  }

  getComponent() {
    return this.component.getComponent();
  }

  getTimer() {
    return this.timer;
  }
}
