import { Button } from "..";
import { Component } from "../../core";
import { IComponent } from "../../interfaces";

import "./Task.css";

export class Task implements IComponent {
  private component: Component;

  private title: Component;
  private doneBtn: Button;
  private editBtn: Button;
  private deleteBtn: Button;

  constructor(title: string, doneEvents: {}, editEvents: {}, deleteEvents: {}) {
    this.title = new Component({
      className: "title",
      textContent: title,
    });

    this.doneBtn = new Button({
      textContent: "Done",
      events: doneEvents,
    });

    this.editBtn = new Button({
      textContent: "Edit",
      events: editEvents,
    });

    this.deleteBtn = new Button({
      textContent: "Delete",
      events: deleteEvents,
    });

    this.component = new Component({
      className: "task",
      children: [
        this.getTitleDiv(),
        this.getDoneBtn(),
        this.getEditBtn(),
        this.getDeleteBtn(),
      ],
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }

  getTitleDiv() {
    return this.title.getComponent();
  }

  getDoneBtn() {
    return this.doneBtn.getComponent();
  }

  getEditBtn() {
    return this.editBtn.getComponent();
  }

  getDeleteBtn() {
    return this.deleteBtn.getComponent();
  }

  getTitle() {
    return this.getTitleDiv().textContent;
  }

  setTitle(title: string) {
    this.getTitleDiv().textContent = title;
  }
}
