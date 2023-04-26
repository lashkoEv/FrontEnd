import { Payment } from "../Payment/Payment.js";

// Derived class
export class CreditCardPayment extends Payment {
  #readCardData = () => {
    console.log("Card data has been read!");
  };

  // Overridden method
  doTransaction = (money) => {
    this.#readCardData();

    console.log(`Credit card payment, money: ${money}$`);
  };
}
