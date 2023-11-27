import { ConverterWindow, Table, Row } from "../../components";
import { append } from "../../core";

export class Application {
  private app: HTMLElement;
  private converterWindow: ConverterWindow;
  private table: Table;

  private isClicked: boolean;
  private attempts: number;

  constructor(currencies: string[]) {
    this.isClicked = false;
    this.attempts = 0;

    this.app = document.getElementById("app");

    this.converterWindow = new ConverterWindow(
      currencies,
      this.getApplyEvents(currencies),
      this.getFromSelectEvents(),
      this.getToSelectEvents(),
      this.getInputEvents(currencies)
    );

    this.table = new Table();

    this.loadTable(currencies);
  }

  private getApplyEvents(currencies: string[]) {
    return {
      click: async () => {
        this.isClicked = true;
        this.convert(currencies);
      },
    };
  }

  private getFromSelectEvents() {
    return {
      change: () => {
        const value = this.converterWindow.getFromSelect().value;

        const children = this.converterWindow.getToSelect().children;

        for (const child of children) {
          if (child.value === value) {
            child.classList.add("hidden");
          } else {
            child.classList.remove("hidden");
          }
        }
      },
    };
  }

  private getToSelectEvents() {
    return {
      change: () => {
        const value = this.converterWindow.getToSelect().value;

        const children = this.converterWindow.getFromSelect().children;

        for (const child of children) {
          if (child.value === value) {
            child.classList.add("hidden");
          } else {
            child.classList.remove("hidden");
          }
        }
      },
    };
  }

  private getInputEvents(currencies: string[]) {
    return {
      change: async () => {
        if (this.isClicked) {
          await this.convert(currencies);
        }
      },
    };
  }

  private async convert(currencies: string[]) {
    const parsedData = await this.getData();

    await this.printResult(currencies, parsedData.rates);

    this.attempts++;

    this.checkAttempts();
  }

  private async getData() {
    const response = await fetch(
      `https://api.frankfurter.app/latest?amount=${
        this.converterWindow.getInput().value || "1"
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

  private checkAttempts() {
    if (this.attempts > 3) {
      alert(
        "You've used up all your free attempts! For further work, pay $1000 to the card 3445 6478 7643 7467! The application will be closed!"
      );

      window.close();
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
