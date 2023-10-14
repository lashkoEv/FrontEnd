import { HumanInfo } from "../components";
import { AgeButtons } from "../components/AgeButtons/AgeButtons";
import { append, render } from "../core";
import { Human } from "../schemas";
import { setHuman } from "../store/currentHuman";

export const initSaveButtonListener = (form) => {
  form.button.onclick = (e) => {
    e.preventDefault();

    const isValid =
      form.nameInput.value.trim().length > 0 &&
      form.surnameInput.value.trim().length > 0;

    if (!isValid) {
      alert("The form is not completely filled out!");
      return;
    }

    getHumanScreen(form);
  };
};

const getHumanScreen = (form) => {
  const humanInfo = new HumanInfo();

  render(app, humanInfo.humanInfoElement);

  const human = createHuman(form);

  printHuman(humanInfo, human);

  setHuman(human);

  const ageButtons = new AgeButtons();

  append(app, ageButtons.element);
};

const getGender = (form) => {
  if (form.noGenderRadio.checked) return "None";
  if (form.maleRadio.checked) return "Male";
  if (form.femaleRadio.checked) return "Female";
};

const createHuman = (form) => {
  return new Human({
    name: form.nameInput.value,
    surname: form.surnameInput.value,
    gender: getGender(form),
  });
};

const printHuman = (humanInfo, human) => {
  humanInfo.nameElement.textContent = human.name;
  humanInfo.surnameElement.textContent = human.surname;
  humanInfo.genderElement.textContent = human.gender;
};
