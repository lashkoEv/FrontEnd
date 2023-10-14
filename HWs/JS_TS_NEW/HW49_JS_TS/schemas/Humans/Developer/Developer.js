import { Human } from "../..";

// SRP (single reason for change)
// OCP (extending the parent class)
// LSP (substitutable for parent)
// ISP (there are no jobs in the Human class; not all heirs work)
export class Developer extends Human {
  constructor({ name, surname, age, gender, salary = 499, balance, rel }) {
    super({
      name,
      surname,
      age,
      gender,
      salary,
      balance,
      rel,
    });
  }

  writeCode() {
    console.log("Write code...");
  }

  conductCodeReview() {
    console.log("Conduct CR...");
  }
}
