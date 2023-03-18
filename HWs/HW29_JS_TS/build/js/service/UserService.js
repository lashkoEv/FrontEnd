import User from "../model/User.js";

export default class UserService {
  #users;

  constructor() {
    this.#users = [];
  }
}
