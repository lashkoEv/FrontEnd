import {
  Human,
  Developer,
  Admin,
  Clerk,
  Doctor,
  Driver,
  Unemployed,
  Position,
  Over,
  Medium,
  Under,
  Car,
  House,
  City,
  Education,
  BachelorsEducation,
  MastersEducation,
  DoctoralEducation,
} from "./schemas";
import { Form, HumanInfo } from "./components";
import { append, prepend } from "./core";
import { initSaveButtonListener } from "./utils";

import "./style/style.css";

console.log(new Human({}));
console.log(new Developer({}));
console.log(new Admin({}));
console.log(new Clerk({}));
console.log(new Doctor({}));
console.log(new Driver({}));
console.log(new Unemployed({}));
console.log(new Position());
console.log(new Over());
console.log(new Medium());
console.log(new Under());
console.log(new Car({}));
console.log(new House({}));
console.log(new City({}));
console.log(new Education({}));
console.log(new BachelorsEducation({}));
console.log(new MastersEducation({}));
console.log(new DoctoralEducation({}));

const humanInfo = new HumanInfo();

prepend(app, humanInfo.humanInfoElement);

const form = new Form();

append(app, form.form);

initSaveButtonListener(humanInfo, form);
