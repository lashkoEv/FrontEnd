import { Footer, Header, Main, ModalWindow, Task } from "../../components";
import { render } from "../../core";

export class Application {
  private app: HTMLElement;

  private header: Header;
  private main: Main;
  private footer: Footer;
  private modal: ModalWindow;

  private currentTask: Task | null;

  constructor() {
    this.app = document.getElementById("app");

    this.header = new Header();
    this.main = new Main();
    this.footer = new Footer(this.getAddEvents());
    this.modal = new ModalWindow(this.getEditEvents());

    this.currentTask = null;
  }

  getEditEvents() {
    return {
      click: () => {
        if (this.currentTask) {
          this.currentTask.setTitle(this.modal.getValue());

          this.modal.changeVisibility();
        }
      },
    };
  }

  createTask(title: string) {
    const task = new Task(
      title,
      {
        click: () => {
          task.getComponent().remove();
        },
      },
      {
        click: () => {
          this.currentTask = task;
          this.modal.show(title);
        },
      },
      {
        click: () => {
          task.getComponent().remove();
        },
      }
    );

    return task;
  }

  getAddEvents() {
    return {
      click: () => {
        const title = this.footer.getInput().value;

        if (title.length > 0) {
          const task = this.createTask(title);

          this.main.add(task.getComponent());

          this.footer.getInput().value = "";
        }
      },
    };
  }

  run() {
    render(this.app, [
      this.header.getComponent(),
      this.main.getComponent(),
      this.footer.getComponent(),
      this.modal.getComponent(),
    ]);
  }
}
