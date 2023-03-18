import UserService from "../service/UserService.js";

export default class UserController {
  #userService;

  constructor() {
    this.#userService = new UserService();
  }

  signUp() {
    console.log("signUp");
  }

  signIn() {
    console.log("signIn");
  }

  viewAllUsers() {
    console.log("viewAllUsers");
  }

  changeUserData() {
    console.log("changeUserData");
  }
}
