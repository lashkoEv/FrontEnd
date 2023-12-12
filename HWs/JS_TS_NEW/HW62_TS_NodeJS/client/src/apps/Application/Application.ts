import { Card, CardsWrapper, Header, ModalWindow } from "../../components";
import { append } from "../../core";

export class Application {
  private app: HTMLElement;

  private modalWindow: ModalWindow;
  private header: Header;
  private cards: CardsWrapper;

  private currentId: number;

  constructor() {
    this.app = document.getElementById("app");

    this.modalWindow = new ModalWindow(this.getSendEvents());

    this.header = new Header(this.getAddEvents());

    this.cards = new CardsWrapper();

    this.currentId = 1;
  }

  getSendEvents() {
    return {
      click: async () => {
        const postData = this.modalWindow.getValues();

        await this.sendPostToTheSever(
          this.currentId,
          postData.title,
          postData.text,
          postData.author
        );

        this.currentId++;

        this.modalWindow.changeVisibility();

        this.getCards();
      },
    };
  }

  async getCards() {
    const data = await this.getPostsFromServer();

    this.createCards(data);
  }

  createCards(dataFromServer: []) {
    const cards: Card[] = [];

    dataFromServer.forEach((data) => {
      const card = JSON.parse(data);

      cards.push(new Card(card.title, card.text, card.author));
    });

    this.cards.setCards(cards);
  }

  async sendPostToTheSever(
    id: number,
    title: string,
    text: string,
    author: string
  ) {
    await fetch("http://localhost:3000/posts", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        id,
        title,
        text,
        author,
      }),
    });
  }

  async getPostsFromServer() {
    const response = await fetch("http://localhost:3000/posts");

    const parsedData = await response.json();

    return parsedData;
  }

  getAddEvents() {
    return {
      click: () => {
        this.modalWindow.reset();
        this.modalWindow.changeVisibility();
      },
    };
  }

  async run() {
    append(this.app, this.header.getComponent());
    append(this.app, this.cards.getComponent());
    append(this.app, this.modalWindow.getComponent());
    this.getCards();
  }
}
