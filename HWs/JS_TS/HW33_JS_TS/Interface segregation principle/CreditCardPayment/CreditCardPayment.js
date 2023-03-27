import { Payment } from "../Payment/Payment.js";

export class CreditCardPayment extends Payment {
  doTransaction(money) {
    console.log(
      `The transaction is carried out using a credit card payment! Money: ${money}`
    );
  }
}
