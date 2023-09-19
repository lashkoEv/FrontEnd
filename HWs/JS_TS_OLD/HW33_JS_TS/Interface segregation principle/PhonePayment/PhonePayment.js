import { Payment } from "../Payment/Payment.js";

export class PhonePayment extends Payment {
  doTransaction(money) {
    console.log(
      `The transaction is carried out using a phone payment! Money: ${money}`
    );
  }
}
