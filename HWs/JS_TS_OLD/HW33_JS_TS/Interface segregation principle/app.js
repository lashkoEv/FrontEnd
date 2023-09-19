/*
 *   Payment - improvised interface with doTransaction method.
 *   The CreditCardPayment and PhonePayment classes "implement" the interface.
 */

import { CreditCardPayment } from "./CreditCardPayment/CreditCardPayment.js";
import { PhonePayment } from "./PhonePayment/PhonePayment.js";

const app = () => {
  const creditCardPayment = new CreditCardPayment();
  creditCardPayment.doTransaction(200);

  const phonePayment = new PhonePayment();
  phonePayment.doTransaction(500);
};

app();
