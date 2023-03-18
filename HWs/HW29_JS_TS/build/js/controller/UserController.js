import UserService from "../service/UserService.js";
import User from "../model/User.js";
import { getCorrectNumber, getCorrectString } from "../correctInput.js";

export default class UserController {
  #userService;
  #currentUser;

  constructor() {
    this.#userService = new UserService();
    this.#currentUser = null;
  }

  signUp() {
    const user = this.#getUserFromData();

    if (!this.#userService.findByEmail(user.email)) {
      this.#currentUser = this.#userService.add(user);

      console.log(
        `Successfully added new user: ${this.#currentUser.firstName} ${
          this.#currentUser.lastName
        }!`
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

      this.#currentUser = user;
      this.#userService.printOne(this.#currentUser);

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
    if (this.#currentUser) {
      let isContinue = true;

      while (isContinue) {
        isContinue = this.#getEditMenu();

        this.#userService.printOne(this.#currentUser);
      }
    } else {
      console.error("Error! Please register or log in first!");
    }
  }

  #getUserFromData() {
    const firstName = getCorrectString("Enter first name:");
    const lastName = getCorrectString("Enter last name:");
    const age = getCorrectNumber("Enter age:");
    const email = getCorrectString("Enter email:");
    const password = getCorrectString("Enter password:");

    return new User(firstName, lastName, age, email, password);
  }

  #getEditMenu() {
    const item = getCorrectNumber(
        `         Select a field to edit:
         1. First name
         2. Last name
         3. Age
         4. Email
         5. Password
         6. OK`
      );

      switch (item) {
        case 1:
          this.#changeFirstName();
          break;

        case 2:
          this.#changeLastName();
          break;

        case 3:
          this.#changeAge();
          break;

        case 4:
          this.#changeEmail();
          break;

        case 5:
          this.#changePassword();
          break;

        case 6:
          alert("Well done!");
          return false;

        default:
          alert("Incorrect! Try again!");
      }

      return true;
  }

  #changeFirstName() {
    const firstName = getCorrectString("Enter new first name:");

    this.#currentUser = this.#userService.setFirstName(
      this.#currentUser,
      firstName
    );
  }

  #changeLastName() {
    const lastName = getCorrectString("Enter new last name:");

    this.#currentUser = this.#userService.setLastName(
      this.#currentUser,
      lastName
    );
  }

  #changeAge() {
    const age = getCorrectNumber("Enter new age:");

    this.#currentUser = this.#userService.setAge(this.#currentUser, age);
  }

  #changeEmail() {
    const email = getCorrectString("Enter new email:");

    if (!this.#userService.findByEmail(email)) {
      this.#currentUser = this.#userService.setEmail(this.#currentUser, email);
    } else {
      console.error("Error! This email already exists!");
    }
  }

  #changePassword() {
    const oldPassword = getCorrectString("Enter old password:");

    if (
      this.#userService.findByEmailAndPassword(
        this.#currentUser.email,
        oldPassword
      )
    ) {
      const newPassword = getCorrectString("Enter new password:");

      this.#currentUser = this.#userService.setPassword(
        this.#currentUser,
        newPassword
      );
    } else {
      console.error("Error! Incorrect password!");
    }
  }
}
