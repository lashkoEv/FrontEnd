"use strict";

class Hero {
  constructor(fullName, login, password, image, positionX, positionY) {
    this.image = image;
    this.fullName = fullName;
    this.login = login;
    this.password = password;
    this.positionX = positionX;
    this.positionY = positionY;
  }

  signUp() {
    console.log(`Signed up: ${this.login}`);
  }

  static goUp() {
    this.positionX += 1;
  }

  static goDown() {
    this.positionX -= 1;
  }

  static turnRight() {
    this.positionY += 1;
  }

  static turnLeft() {
    this.positionY -= 1;
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

const wizard = new Wizard("John", "john12234", "2323443", 50, 50);

console.log(wizard);

wizard.signUp();
wizard.attack();

const app = document.getElementById("app");

let img = document.createElement("img");
img.src = "https://www.pngall.com/wp-content/uploads/2016/06/Wizard.png";


app.appendChild(img);
