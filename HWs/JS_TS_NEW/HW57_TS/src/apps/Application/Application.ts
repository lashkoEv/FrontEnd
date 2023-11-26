import { ModalWindow } from "../../components";
import { append, render } from "../../core";

export class Application {
  private app: HTMLElement | null;
  private modalWindow: ModalWindow;
  private interval: number | null;

  constructor() {
    this.interval = null;

    this.app = document.getElementById("app");

    this.modalWindow = new ModalWindow(
      {
        click: () => {
          this.modalWindow.getTimer().reset();
          this.run();
        },
      },
      {
        click: () => {
          alert("Goodbye!");
          window.close();
        },
      }
    );
  }

  run() {
    setTimeout(() => this.showModalWindow(), 10000);
  }

  private showModalWindow() {
    if (this.app) render(this.app, this.modalWindow.getComponent());

    if (this.interval) clearInterval(this.interval);

    this.interval = setInterval(() => {
      const count = this.modalWindow.getTimer().decreaseTime();

      if (count < 0) {
        alert("R U here?");
        this.modalWindow.getTimer().reset();
      }
    }, 1000);
  }
}
