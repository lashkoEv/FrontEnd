class Post {
  #id;
  #title;
  #text;
  #author;

  constructor(id, title, text, author) {
    this.#id = id;
    this.#title = title;
    this.#text = text;
    this.#author = author;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  set title(title) {
    this.#title = title;
  }

  get text() {
    return this.#text;
  }

  set text(text) {
    this.#text = text;
  }

  get author() {
    return this.#author;
  }

  set author(author) {
    this.#author = author;
  }

  toObject() {
    return {
      id: this.#id,
      title: this.#title,
      text: this.#text,
      author: this.#author,
    };
  }
}

module.exports = Post;
