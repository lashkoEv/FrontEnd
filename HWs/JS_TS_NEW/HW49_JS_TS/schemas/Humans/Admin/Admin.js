import { Human } from "../..";

// SRP (single reason for change)
// OCP (extending the parent class)
// LSP (substitutable for parent)
// ISP (there are no jobs in the Human class; not all heirs work)
export class Admin extends Human {
  constructor({ name, surname, age, gender, salary = 399, balance, rel }) {
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

  manageDepartment() {
    console.log("Manage department...");
  }

  fillOutTheReports() {
    console.log("Fill out the reports...");
  }
}
