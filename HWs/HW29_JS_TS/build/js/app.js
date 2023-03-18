import { getCorrectNumber } from "./getCorrectNumber.js";
import UserController from "./Controller/UserController.js";

function app() {
  const userController = new UserController();

  let isRunning = true;

  while (isRunning) {
    const menuItem = getCorrectNumber(
      `Hello!
       1. Sign up
       2. Sign in
       3. View all users list
       4. Change user data
       5. Exit`
    );

    switch (menuItem) {
      case 1:
        userController.signUp();
        break;

      case 2:
        userController.signIn();
        break;

      case 3:
        userController.viewAllUsers();
        break;

      case 4:
        userController.changeUserData();
        break;

      case 5:
        isRunning = false;
        break;

      default:
        alert("Incorrect! Try again!");
    }
  }
}

app();
