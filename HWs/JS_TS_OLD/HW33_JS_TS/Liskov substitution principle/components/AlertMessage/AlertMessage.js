import { Message } from "../Message/Message.js";

export class AlertMessage extends Message {
  constructor(value) {
    super(value);
  }

  showMessage() {
    alert(this.value);
  }
}
