import { Human } from "../..";

// SRP (single reason for change)
// OCP (extending the parent class)
// LSP (substitutable for parent)
// ISP (there are no jobs in the Human class; not all heirs work)
export class Unemployed extends Human {
  constructor({ name, surname, age, gender, salary = 100, balance, rel }) {
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
}
