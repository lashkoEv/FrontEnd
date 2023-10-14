import { Human } from "../..";

// SRP (single reason for change)
// OCP (extending the parent class)
// LSP (substitutable for parent)
// ISP (there are no jobs in the Human class; not all heirs work)
export class Clerk extends Human {
  constructor({ name, surname, age, gender, salary = 299, balance, rel }) {
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

  writeReport() {
    console.log("Write report...");
  }

  checkDocuments() {
    console.log("Check documents...");
  }
}
