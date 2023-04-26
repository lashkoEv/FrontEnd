// Base class
export class Payment {
  // A method that will be overridden by derived classes
  doTransaction = (money) => {
    console.log(`Simple payment, money: ${money}$`);
  };
}
