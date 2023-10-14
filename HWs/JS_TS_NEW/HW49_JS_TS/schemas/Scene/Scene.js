import { Form, HumanInfo } from "../../components";
import { AgeButtons } from "../../components/AgeButtons/AgeButtons";
import { append, render } from "../../core";
import { setRoundedClassToImg } from "../../utils";
import { Human } from "../Humans/Human/Human";

export class Scene {
  #form;
  #humanInfo;
  #ageButtons;
  #human;
  #monthListener;
  #yearListener;

  constructor() {
    this.#human = new Human({});
    this.#humanInfo = null;
    this.#ageButtons = null;

    this.#form = new Form();
    render(app, this.#form.form);
    this.#initSaveButtonListener();
  }

  #initSaveButtonListener() {
    this.#form.button.onclick = (e) => {
      e.preventDefault();

      const isValid =
        this.#form.nameInput.value.trim().length > 0 &&
        this.#form.surnameInput.value.trim().length > 0;

      if (!isValid) {
        alert("The form is not completely filled out!");
        return;
      }

      this.#setHumanScreen();
    };
  }

  #setHumanScreen() {
    this.#updateHumanInfo();

    this.#humanInfo = new HumanInfo();
    setRoundedClassToImg(this.#humanInfo.imageElement);
    render(app, this.#humanInfo.humanInfoElement);

    this.#initAgeButtons();

    this.#printHuman();
  }

  #initAgeButtons() {
    this.#ageButtons = new AgeButtons();

    this.#monthListener = this.#monthEvent.bind(this);
    this.#yearListener = this.#yearEvent.bind(this);

    this.#ageButtons.monthButton.addEventListener("click", this.#monthListener);
    this.#ageButtons.yearButton.addEventListener("click", this.#yearListener);

    append(app, this.#ageButtons.element);
  }

  #updateHumanInfo() {
    this.#human.name = this.#form.nameInput.value;
    this.#human.surname = this.#form.surnameInput.value;
    this.#human.gender = this.#getGender();
  }

  #getGender() {
    if (this.#form.noGenderRadio.checked) return "None";
    if (this.#form.maleRadio.checked) return "Male";
    if (this.#form.femaleRadio.checked) return "Female";
  }

  #printHuman() {
    this.#humanInfo.nameElement.textContent = this.#human.name;
    this.#humanInfo.surnameElement.textContent = this.#human.surname;
    this.#humanInfo.genderElement.textContent = this.#human.gender;
    this.#humanInfo.ageElement.textContent = this.#human.age;
  }

  #monthEvent() {
    this.#human.age = +(this.#human.age + 0.0833).toFixed(2);
    this.#checkAge();
  }

  #yearEvent() {
    this.#human.age = +(this.#human.age + 1).toFixed(2);
    this.#checkAge();
  }

  #checkAge() {
    this.#humanInfo.ageElement.textContent = this.#human.age;
    if (this.#human.age >= 65) {
      this.#ageButtons.monthButton.removeEventListener(
        "click",
        this.#monthListener
      );
      this.#ageButtons.yearButton.removeEventListener(
        "click",
        this.#yearListener
      );
    }
  }
}
