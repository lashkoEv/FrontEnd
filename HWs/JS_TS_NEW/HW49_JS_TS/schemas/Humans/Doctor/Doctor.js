import { Human } from "../..";

// SRP (single reason for change)
// OCP (extending the parent class)
// LSP (substitutable for parent)
// ISP (there are no jobs in the Human class; not all heirs work)
export class Doctor extends Human {
  constructor({ name, surname, age, gender, salary = 899, balance, rel }) {
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

  giveConsultation() {
    console.log("Give consultation...");
  }

  prescribeTreatment() {
    console.log("Prescribe treatment...");
  }
}
