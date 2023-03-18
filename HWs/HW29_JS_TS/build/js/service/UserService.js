import User from "../model/User.js";

export default class UserService {
  #users;

  constructor() {
    this.#users = [];
  }

  add(newUser) {
    this.#users.push(newUser);
    return this.findByEmail(newUser.email);
  }

  findByEmail(email) {
    return this.#users.find((user) => user.email === email);
  }

  findByEmailAndPassword(email, password) {
    return this.#users.find(
      (user) => user.email === email && user.password === password
    );
  }

  getAll() {
    return this.#users;
  }

  printAll() {
    console.log("-----------------------------");
    console.log("[USERS COUNT]", this.#users.length);

    this.#users.forEach((user) => this.printOne(user));

    console.table(this.#users);
  }

  printOne(user) {
    console.log("-----------------------------");
    console.log("[FIRST NAME]", user.firstName);
    console.log("[LAST NAME]", user.lastName);
    console.log("[AGE]", user.age);
    console.log("[EMAIL]", user.email);
    console.log("[PASSWORD]", user.password);
  }
}
