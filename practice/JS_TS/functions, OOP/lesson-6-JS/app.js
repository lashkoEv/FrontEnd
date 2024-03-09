// TODO : looks as a function
// TODO : name.length > 5
// TODO : name contains "a"
// TODO : name NOT an empty string / not a number / not null|undefined

// TODO : surname NOT an empty string / not a number / not null|undefined
// TODO : surname contains "a"
// TODO : surname doesn't contain "- , _ , = , ! , ?"
// TODO : surname.length > 3 && < 10

// TODO : age === number
// TODO : age NOT < 0 and NOT > 100
// TODO : age is exist

// 1. Greeting
// 2. Register
// 3. { name : ... , age : ... , surname : ...}

function app() {
  alert("Hello!");

  const firstName = getFirstName();
  const lastName = getLastName();
  const age = getAge();

  const human = {
    firstName: firstName,
    age: age,
    lastName: lastName,
  };

  console.table(human);
}

function getFirstName() {
  let isNotCorrect = true;

  while (isNotCorrect) {
    const firstName = prompt("What is your name?").trim();

    const isCorrectLength = firstName.length > 5;
    const isContainsLetter = firstName.includes("a");
    const isNotANumber = /^[a-zA-Z]+$/.test(firstName);

    const isValidFirstName =
      isCorrectLength && isContainsLetter && isNotANumber;

    if (isValidFirstName) {
      return firstName;
    }
  }
}

function getLastName() {
  let isNotCorrect = true;

  while (isNotCorrect) {
    const lastName = prompt("What is your surname?").trim();

    const isCorrectLength = lastName.length > 3 && lastName.length < 10;
    const isContainsLetter = lastName.includes("a");
    const isNotContainsSymbols = /^[a-zA-Z]+$/.test(lastName);

    const isValidLastName =
      isCorrectLength && isContainsLetter && isNotContainsSymbols;

    if (isValidLastName) {
      return lastName;
    }
  }
}

function getAge() {
  let isNotCorrect = true;

  while (isNotCorrect) {
    const age = +prompt("How old are you?");

    const isCorrectRange = age > 0 && age < 100;
    const isANumber = /^[0-9]+$/.test(age);

    const isValidAge = isCorrectRange && isANumber;

    if (isValidAge) {
      return age;
    }
  }
}

app();
