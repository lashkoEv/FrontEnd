import { CreditCardPayment } from "./components/CreditCardPayment/CreditCardPayment.js";
import { Payment } from "./components/Payment/Payment.js";
import { PhonePayment } from "./components/PhonePayment/PhonePayment.js";

/*
 * There is a base class Payment, it contains the doTransaction method.

 * There are also two derived classes: CreditCardPayment and PhonePayment.
 * They override the doTransaction method.
 * 
 * There is a pay function that takes an object of the class for payment and money.
 * We can pass both the base class object and the derived class object to the 
 * pay function, this will not lead to an error.
 * 
 * Thus, in any function where the base class is used, we can substitute its 
 * derived class instead of the base class and this will not lead to an error.
 */

const pay = (payment, money) => {
  payment.doTransaction(money);
};

const app = () => {
  // Using the base class
  console.log("Simple payment:");

  const payment = new Payment();
  pay(payment, 200);

  // Using the derived class in the same way as the base class
  console.log("Credit card payment:");

  const creditCardPayment = new CreditCardPayment();
  pay(creditCardPayment, 200);

  // Using the derived class in the same way as the base class
  console.log("Phone payment:");

  const phonePayment = new PhonePayment();
  pay(phonePayment, 200);
};

app();
