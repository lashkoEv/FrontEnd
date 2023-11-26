import { Header, ModalWindow, Row, Table } from "../components";

export class Application {
  private app: HTMLElement | null;
  private header: Header;
  private table: Table;
  private modalWindow: ModalWindow;

  constructor() {
    this.app = document.getElementById("app");

    this.table = new Table();

    this.modalWindow = new ModalWindow({
      click: () => {
        const name = this.modalWindow.getName();
        const age = this.modalWindow.getAge();
        const gender = this.modalWindow.getGender();
        const ready = this.modalWindow.getReady() ? "+" : "-";

        this.table.addRow(new Row(name, age, gender, ready));

        this.modalWindow.changeVisibility();
      },
    });

    this.header = new Header(
      {
        click: () => {
          this.modalWindow.changeVisibility();
        },
      },
      {
        click: () => {
          const length = this.table.getComponent().getChildren()?.length;

          for (let i = 1; i < length; i++) {
            const item = this.table.getComponent().getChildren()[i];

            if (item.getChildren()[4].toHtml().checked) {
              item.toHtml().remove();
            }
          }
        },
      }
    );
  }

  run() {
    this.app?.append(this.header.getComponent().toHtml());
    this.app?.append(this.modalWindow.getComponent().toHtml());
    this.app?.append(this.table.getComponent().toHtml());
  }
}
