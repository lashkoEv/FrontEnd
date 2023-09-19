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

  setFirstName(currentUser, newFirstName) {
    this.#users.find((user) => {
      if (currentUser.email === user.email) {
        user.firstName = newFirstName;
      }
    });

    return this.findByEmail(currentUser.email);
  }

  setLastName(currentUser, newLastName) {
    this.#users.find((user) => {
      if (currentUser.email === user.email) {
        user.lastName = newLastName;
      }
    });

    return this.findByEmail(currentUser.email);
  }

  setAge(currentUser, newAge) {
    this.#users.find((user) => {
      if (currentUser.email === user.email) {
        user.age = newAge;
      }
    });

    return this.findByEmail(currentUser.email);
  }

  setEmail(currentUser, newEmail) {
    this.#users.find((user) => {
      if (currentUser.email === user.email) {
        user.email = newEmail;
      }
    });

    return this.findByEmail(newEmail);
  }

  setPassword(currentUser, newPassword) {
    this.#users.find((user) => {
      if (currentUser.email === user.email) {
        user.password = newPassword;
      }
    });

    return this.findByEmail(currentUser.email);
  }
}
