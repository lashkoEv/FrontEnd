export class BookService {
  #books;

  constructor() {
    this.#books = [];
  }

  save(book) {
    if (this.#books.push(book)) return true;

    return false;
  }

  findByTitle(title) {
    return this.#books.find((book) => book.title === title);
  }

  setPrice(title, price) {
    return this.#books.find((book) => {
      if (book.title === title) {
        book.price = price;
      }
    });
  }

  delete(title) {
    this.#books = this.#books.filter((book) => book.title !== title);
  }

  getAll() {
    return this.#books;
  }
}
