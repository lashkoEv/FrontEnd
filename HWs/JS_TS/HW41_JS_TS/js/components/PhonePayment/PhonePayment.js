import { Payment } from "../Payment/Payment.js";

// Derived class
export class PhonePayment extends Payment {
  #readNFCData = () => {
    console.log("NFC data has been read!");
  };

  // Overridden method
  doTransaction = (money) => {
    this.#readNFCData();

    console.log(`Phone payment, money: ${money}$`);
  };
}
