import {
  AuthorizationWindow,
  Button,
  Card,
  CardsWrapper,
  Header,
  ModalWindow,
} from "../../components";
import { Component, append, render } from "../../core";
import { authData, productData } from "../../types";

export class Application {
  private app: HTMLElement;

  private modalWindow: ModalWindow;
  private authorizationWindow: AuthorizationWindow;
  private header: Header;
  private cards: CardsWrapper;

  private currentPage: number;
  private paginationWrapper: HTMLElement;

  constructor() {
    this.app = document.getElementById("app");

    this.authorizationWindow = new AuthorizationWindow(this.getAuthEvents());

    this.header = new Header(
      this.getAddEvents(),
      this.getSelectValues(),
      this.getSelectEvents()
    );

    this.modalWindow = new ModalWindow(this.getSendEvents());

    this.cards = new CardsWrapper();

    this.currentPage = 1;

    this.paginationWrapper = new Component({
      className: "pagination",
    }).getComponent();
  }

  private getSelectValues() {
    return ["3", "6", "9"];
  }

  private getAuthEvents() {
    return {
      click: async () => {
        const data = this.authorizationWindow.getValues();

        const isValid = (await this.authorize(data)) && this.validate(data);

        if (isValid) {
          this.authorizationWindow.changeVisibility();
          this.header.show();

          this.getPagination();
        } else {
          this.authorizationWindow.error();
        }
      },
    };
  }

  private validate(data: authData) {
    return (
      /\w{3,}/g.test(data.login) &&
      /[a-zA-Z]/g.test(data.password) &&
      /[\d]/g.test(data.password)
    );
  }

  private async authorize(data: authData) {
    const response = await fetch("http://localhost:3000/authorization", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        login: data.login,
        password: data.password,
      }),
    });

    const parsedData = await response.json();

    return parsedData.isValid;
  }

  private getAddEvents() {
    return {
      click: () => {
        this.modalWindow.reset();
        this.modalWindow.changeVisibility();
      },
    };
  }

  private getSelectEvents() {
    return {
      change: async () => {
        this.getPagination();
      },
    };
  }

  private async getPagination() {
    const products = await this.getCards();

    const amount = this.header.getSelectValue();

    const count = Math.ceil(products.length / amount);

    const buttons = [];

    for (let i = 1; i <= count; i++) {
      buttons.push(
        new Button({
          textContent: i.toString(),
          events: {
            click: () => {
              this.currentPage = i;

              this.cards.setCards(
                this.sliceCards(products, this.currentPage, amount)
              );

              buttons.forEach((btn) => {
                if (+btn.textContent === this.currentPage) {
                  btn.className = "button active";
                } else {
                  btn.className = "button";
                }
              });
            },
          },
        }).getComponent()
      );
    }

    buttons[0].click();

    render(this.paginationWrapper, buttons);
  }

  private sliceCards(cards: Card[], page: number, amount: number): Card[] {
    const start = (page - 1) * amount;
    let end = page * amount;

    if (end > cards.length - 1) end = cards.length;

    const fromPage = cards.slice(start, end);

    if (fromPage.length === 0) {
      return this.sliceCards(cards, page - 1, amount);
    }

    return fromPage;
  }

  private async getCards() {
    const data = await this.getProductsFromServer();

    return this.createCards(data);
  }

  private async getProductsFromServer() {
    const response = await fetch("http://localhost:3000/products");

    const parsedData = await response.json();

    return parsedData;
  }

  private createCards(data: productData[]) {
    const cards = data.map(
      (item) =>
        new Card(item.title, item.description, item.newPrice, item.oldPrice)
    );

    return cards;
  }

  private getSendEvents() {
    return {
      click: async () => {
        const data = this.modalWindow.getValues();

        await this.sendProductToTheSever(data);

        this.modalWindow.changeVisibility();

        this.getPagination();
      },
    };
  }

  private async sendProductToTheSever(data: productData) {
    await fetch("http://localhost:3000/products", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async run() {
    append(this.app, [
      this.header.getComponent(),
      this.cards.getComponent(),
      this.paginationWrapper,
      this.modalWindow.getComponent(),
      this.authorizationWindow.getComponent(),
    ]);

    await fetch("http://localhost:3000/authorization/init");
  }
}
