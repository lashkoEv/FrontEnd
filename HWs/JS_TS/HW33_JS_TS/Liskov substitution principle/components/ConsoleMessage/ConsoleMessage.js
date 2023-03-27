import { Message } from "../Message/Message.js";

export class ConsoleMessage extends Message {
  constructor(value) {
    super(value);
  }

  showMessage() {
    console.log(this.value);
  }
}
