/*
 *   The Message class is a default class with a showMessage method.
 *   The ConsoleMessage class overrides the showMessage method and prints a message to the console.
 *   The AlertMessage class overrides the showMessage method and displays the message via an alert.
 */

import { Message } from "./components/Message/Message.js";
import { AlertMessage } from "./components/AlertMessage/AlertMessage.js";
import { ConsoleMessage } from "./components/ConsoleMessage/ConsoleMessage.js";

const app = () => {
  const defaultMessage = new Message("This is a default message!");
  defaultMessage.showMessage();

  const alertMessage = new AlertMessage("This is an alert message!");
  alertMessage.showMessage();

  const consoleMessage = new ConsoleMessage("This is a console message!");
  consoleMessage.showMessage();
};

app();
