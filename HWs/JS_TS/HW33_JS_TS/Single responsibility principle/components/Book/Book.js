export class Book {
  #title;
  #author;
  #publisher;
  #price;

  constructor(title, author, publisher, price) {
    this.#title = title;
    this.#author = author;
    this.#publisher = publisher;
    this.#price = price;
  }

  get title() {
    return this.#title;
  }

  set title(title) {
    this.#title = title;
  }
  get author() {
    return this.#author;
  }

  set author(author) {
    this.#author = author;
  }

  get publisher() {
    return this.#publisher;
  }

  set publisher(publisher) {
    this.#publisher = publisher;
  }

  get price() {
    return this.#price;
  }

  set price(price) {
    this.#price = price;
  }
}
