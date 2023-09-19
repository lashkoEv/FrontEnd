import { Customer } from "../components/Customer/Customer.js";
import { getCorrectString } from "./getCorrectString.js";

export function initCustomer() {
  const fullName = getCorrectString("Enter full name:");
  const login = getCorrectString("Enter login:");
  const password = getCorrectString("Enter password:");

  return new Customer(fullName, login, password);
}
