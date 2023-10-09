import { Human } from "../..";

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
}
