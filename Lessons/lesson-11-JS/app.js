"use strict";

class Hero {
  fullName;
  login;
  password;

  constructor(fullName, login, password) {
    this.fullName = fullName;
    this.login = login;
    this.password = password;
  }

  signUp() {
    console.log(`Signed up: ${this.login}`);
  }
}

class Wizard extends Hero {
  constructor(fullName, login, password) {
    super(fullName, login, password);
  }

  attack() {
    console.log("There was an attack!");
  }
}

const wizard = new Wizard("John", "john12234", "2323443");

console.log(wizard);

wizard.signUp();
wizard.attack();
