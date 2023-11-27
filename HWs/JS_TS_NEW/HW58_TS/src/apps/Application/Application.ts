import { ConverterWindow, Table, Row } from "../../components";
import { append } from "../../core";

export class Application {
  private app: HTMLElement;
  private converterWindow: ConverterWindow;
  private table: Table;

  constructor(currencies: string[]) {
    this.app = document.getElementById("app");

    this.converterWindow = new ConverterWindow(currencies, {
      click: async () => {
        const parsedData = await this.convert();

        await this.printResult(currencies, parsedData.rates);
      },
    });

    this.table = new Table();

    this.loadTable(currencies);
  }

  private async convert() {
    const response = await fetch(
      `https://api.frankfurter.app/latest?amount=${
        this.converterWindow.getInput().value
      }&from=${this.converterWindow.getFromSelect().value}`
    );

    const parsedData = await response.json();

    return parsedData;
  }

  private async printResult(currencies: string[], rates: {}) {
    const value = rates[this.converterWindow.getToSelect().value] || "-";

    this.converterWindow.getResult().value = value;

    for (let i = 0; i < this.table.getComponent().children.length; i++) {
      this.table.getComponent().children[i].children[1].textContent =
        rates[currencies[i]] || "-";
    }
  }

  private loadTable(currencies: string[]) {
    currencies.forEach((currency) => {
      this.table.addRow(new Row(currency, "-"));
    });
  }

  run() {
    append(this.app, this.converterWindow.getComponent());
    append(this.app, this.table.getComponent());
  }
}
