//   - модуль рисования плиток

export const drawEmployees = (data, surnames) => {
  const app = document.getElementById("app");

  const informationSection = getInformationSection(surnames);
  app.append(informationSection);

  const employeesSection = getEmployeesSection(data);
  app.append(employeesSection);
};

const getEmployeesSection = (data) => {
  const employeesSection = createElement("section", ["employees"], "");

  data.forEach((employee) => {
    const employeeTag = getEmployeeTag(employee);
    employeesSection.append(employeeTag);
  });

  return employeesSection;
};

const getEmployeeTag = (employee) => {
  const employeeTag = createElement("div", ["employee"], "");

  if (employee.dismiss) {
    employeeTag.classList.add("red");
  }

  const img = createElement("img", ["img"], "");
  img.src = "./public/images/user.png";
  employeeTag.append(img);

  const nameField = getFieldTag("Name", employee.name, employee.isName);
  employeeTag.append(nameField);

  const salaryField = getFieldTag("Salary", employee.salary, employee.isSalary);
  employeeTag.append(salaryField);

  const petsField = getFieldTag(
    "Pets",
    employee.pets.join(", "),
    employee.isPet
  );
  employeeTag.append(petsField);

  return employeeTag;
};

const getFieldTag = (key, value, isRed) => {
  const fieldTag = createElement("div", ["field"], "");

  const keyTag = createElement("div", ["key"], key);
  fieldTag.append(keyTag);

  const valueTag = createElement("div", ["value"], value);

  if (isRed) {
    valueTag.classList.add("red");
  }

  fieldTag.append(valueTag);

  return fieldTag;
};

const getInformationSection = (surnames) => {
  const infoSection = createElement("section", ["information"], "");

  const title = createElement(
    "h1",
    ["title"],
    "Criteria for dismissal of employees:"
  );
  infoSection.append(title);

  const criteria = createElement("div", ["criteria"], "");
  infoSection.append(criteria);

  const textFirst = `The employee has one of the surnames: ${
    surnames.size > 0
      ? [...surnames].join(", ")
      : "no special surnames for dismissal"
  }.`;

  const criterionFirst = getCriterionTag(1, textFirst);
  criteria.append(criterionFirst);

  const criterionSecond = getCriterionTag(2, "An employee has a hamster.");
  criteria.append(criterionSecond);

  const criterionThird = getCriterionTag(
    3,
    "An employee's salary is in pounds or euros."
  );
  criteria.append(criterionThird);

  return infoSection;
};

const getCriterionTag = (number, text) => {
  const criterion = createElement("div", ["criterion"], "");

  const dot = createElement("div", ["dot"], number);
  criterion.append(dot);

  const textCriterion = createElement("h3", [], text);
  criterion.append(textCriterion);

  return criterion;
};

const createElement = (tag, classes, textContent) => {
  const element = document.createElement(tag);

  classes.forEach((item) => {
    element.classList.add(item);
  });

  element.textContent = textContent;

  return element;
};
