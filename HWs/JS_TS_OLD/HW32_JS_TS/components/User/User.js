export class User {
  #firstName;
  #lastName;
  #login;
  #password;

  constructor(firstName, lastName, login, password) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#login = login;
    this.#password = password;
  }

  get firstName() {
    return this.#firstName;
  }

  set firstName(firstName) {
    this.#firstName = firstName;
  }

  get lastName() {
    return this.#lastName;
  }

  set lastName(lastName) {
    this.#lastName = lastName;
  }

  get login() {
    return this.#login;
  }

  set login(login) {
    this.#login = login;
  }

  get password() {
    return this.#password;
  }

  set password(password) {
    this.#password = password;
  }
}
