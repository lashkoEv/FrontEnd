import { getCorrectNumber } from "./correctInput.js";
import UserController from "./Controller/UserController.js";

function app() {
  const userController = new UserController();

  let isRunning = true;

  while (isRunning) {
    const menuItem = getCorrectNumber(
      `         Hello!
       1. Sign up
       2. Sign in
       3. View all users list
       4. Change user data
       5. Exit`
    );

    switch (menuItem) {
      case 1:
        userController.signUp();
        isRunning = checkContinue();
        break;

      case 2:
        userController.signIn();
        isRunning = checkContinue();
        break;

      case 3:
        userController.viewAllUsers();
        isRunning = checkContinue();
        break;

      case 4:
        userController.changeUserData();
        isRunning = checkContinue();
        break;

      case 5:
        alert("Goodbye!");
        isRunning = false;
        break;

      default:
        alert("Incorrect! Try again!");
    }
  }
}

function checkContinue() {
  const isContinue = confirm("Continue?");

  if (!isContinue) {
    alert("Goodbye!");
  }

  return isContinue;
}

app();
