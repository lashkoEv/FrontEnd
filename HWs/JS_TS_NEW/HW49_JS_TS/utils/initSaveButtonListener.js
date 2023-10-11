import { Human } from "../schemas";

export const initSaveButtonListener = (humanInfo, form) => {
  form.button.onclick = (e) => {
    e.preventDefault();

    const isValid =
      form.nameInput.value.trim().length > 0 &&
      form.surnameInput.value.trim().length > 0;

    if (!isValid) {
      alert("The form is not completely filled out!");
      return;
    }

    const human = createHuman(form);
    printHuman(humanInfo, human);
  };
};

const getGender = () => {
  const genders = document.querySelectorAll("input[name='gender']");

  for (let genderEl of genders) {
    if (genderEl.checked) {
      return genderEl.value;
    }
  }
};

const createHuman = (form) => {
  return new Human({
    name: form.nameInput.value,
    surname: form.surnameInput.value,
    gender: getGender(),
  });
};

const printHuman = (humanInfo, human) => {
  humanInfo.nameElement.textContent = human.name;
  humanInfo.surnameElement.textContent = human.surname;
  humanInfo.genderElement.textContent = human.gender;
};
