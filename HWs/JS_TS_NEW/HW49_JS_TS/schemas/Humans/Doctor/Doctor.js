import { Human } from "../..";

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
}
