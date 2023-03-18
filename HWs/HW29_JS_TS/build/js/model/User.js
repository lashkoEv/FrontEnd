export default class User {
  #firstName;
  #lastName;
  #age;
  #email;
  #password;

  constructor(firstName, lastName, age, email, password) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
    this.#email = email;
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

  get age() {
    return this.#age;
  }

  set age(age) {
    this.#age = age;
  }

  get email() {
    return this.#email;
  }

  set email(email) {
    this.#email = email;
  }

  get password() {
    return this.#password;
  }

  set password(password) {
    this.#password = password;
  }
}
