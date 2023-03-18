import UserService from "../service/UserService.js";
import User from "../model/User.js";
import { getCorrectNumber, getCorrectString } from "../correctInput.js";

export default class UserController {
  #userService;

  constructor() {
    this.#userService = new UserService();
  }

  signUp() {
    const firstName = getCorrectString("Enter first name:");
    const lastName = getCorrectString("Enter last name:");
    const age = getCorrectNumber("Enter age:");
    const email = getCorrectString("Enter email:");
    const password = getCorrectString("Enter password:");

    if (!this.#userService.findByEmail(email)) {
      const newUser = this.#userService.add(
        new User(firstName, lastName, age, email, password)
      );

      console.log(
        `Successfully added new user: ${newUser.firstName} ${newUser.lastName}!`
      );

      return true;
    } else {
      console.error("A user with this email address already exists!");

      return false;
    }
  }

  signIn() {
    const email = getCorrectString("Enter email:");
    const password = getCorrectString("Enter password:");

    const user = this.#userService.findByEmailAndPassword(email, password);

    if (user) {
      console.log("Successfully authorized!");

      this.#userService.printOne(user);

      return true;
    } else {
      console.error("Authorization Error! There is no user with such data!");

      return false;
    }
  }

  viewAllUsers() {
    this.#userService.printAll();
  }

  changeUserData() {
    console.log("changeUserData");
  }
}
