"use strict";

// users = []
// 1) Registration y/n
// 2) user = {
//  name , age , role
// }
// 3) age => num
// 4) name => str

// 5) Return date when user was born
// 6) Return amount of letter in the name
// 7) Return name in upperCase , lowerCase , slice median of name (here must be 3 letter). Ex : Kirill => iri

let users = [];

function getAge() {
  let isCorrect = false;

  while (!isCorrect) {
    let age = prompt("How old are you?");
    let isCorrectAge = age && !isNaN(+age) && +age > 0;

    if (isCorrectAge) {
      return +age;
    }
  }
}

function getRole() {
  if (prompt("You are admin? (y - yes, smth else - user):").trim() === "y") {
    return "admin";
  } else {
    return "user";
  }
}

function getYearOfBirth(age) {
  return 2023 - age;
}

function getNameLength(name) {
  return name.length;
}

function getNameUpperCase(name) {
  return name.toUpperCase();
}

function getNameLowerCase(name) {
  return name.toLowerCase();
}

function getNameMedian(name) {
  const length = getNameLength(name) / 2;
  return name.slice(length - 2, length + 1);
}

function getAnalytics(user) {
  console.log(["YEAR OF BIRTH"], getYearOfBirth(user.age));
  console.log(["LENGTH OF NAME"], getNameLength(user.fullName));
  console.log(["UPPERCASE NAME"], getNameUpperCase(user.fullName));
  console.log(["LOWERCASE NAME"], getNameLowerCase(user.fullName));
  console.log(["NAME MEDIAN"], getNameMedian(user.fullName));
}

function getNewUser() {
  const fullName = prompt("Enter your full name:").trim();
  const age = getAge();
  const role = getRole();

  return {
    fullName: fullName,
    age: age,
    role: role,
  };
}

function app() {
  if (prompt("Are you going to register? y/n").trim() === "y") {
    const newUser = getNewUser();
    console.log(newUser);
    users.push(newUser);

    getAnalytics(newUser);
  } else {
    alert("Goodbye!");
  }
}

app();
