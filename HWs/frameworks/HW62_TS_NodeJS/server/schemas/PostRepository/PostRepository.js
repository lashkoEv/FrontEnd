class PostRepository {
  #posts;

  constructor() {
    this.#posts = [];
  }

  getAll() {
    return this.#posts;
  }

  add(post) {
    this.#posts.push(post);
  }
}

module.exports = PostRepository;