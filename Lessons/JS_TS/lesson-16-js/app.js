class User {
  #login;
  #password;

  constructor(login, password) {
    this.#login = login;
    this.#password = password;
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

class Admin extends User {
  #isAdmin;

  constructor(login, password) {
    super(login, password);
    this.#isAdmin = true;
  }

  get isAdmin() {
    return this.#isAdmin;
  }
}

class UsersDB {
  #users;

  constructor() {
    this.#users = [];
  }

  add(user) {
    this.#users.push(user);
  }

  findByLogin(login) {
    return this.#users.find((user) => user.login === login);
  }

  findByLoginAndPassword(login, password) {
    return this.#users.find(
      (user) => user.login === login && user.password === password
    );
  }
}

class App {
  #usersDB;
  #isEntered;

  constructor() {
    this.#usersDB = new UsersDB();
    this.#isEntered = false;
  }

  registration() {
    const userData = this.#getUserData();
    const isAdmin = confirm("Is Admin?");

    if (!this.#usersDB.findByLogin(userData.login)) {
      if (isAdmin) {
        this.#usersDB.add(new Admin(userData.login, userData.password));
      } else {
        this.#usersDB.add(new User(userData.login, userData.password));
      }

      this.#isEntered = true;
    }
  }

  authorization() {
    const userData = this.#getUserData();

    if (
      this.#usersDB.findByLoginAndPassword(userData.login, userData.password)
    ) {
      console.log("User signed up!");

      this.#isEntered = true;
    } else {
      console.log("Incorrect data!");
    }
  }

  #getUserData() {
    const login = prompt("Enter login:");
    const password = prompt("Enter password:");

    return { login, password };
  }
}
