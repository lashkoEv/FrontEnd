import {
  Human,
  Developer,
  Admin,
  Clerk,
  Doctor,
  Driver,
  Unemployed,
  Wealth,
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
import { append, prepend, render } from "./core";

import "./style/style.css";
import { Scene } from "./schemas/Scene/Scene";



// const form = new Form();

// render(app, form.form);

// initSaveButtonListener(form);

const scene = new Scene();