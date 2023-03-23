"use strict";

// * Task 1

let firstName, lastName, address, yearOfBirth;

do {
  firstName = prompt("What's your name?");
} while (firstName === "");

do {
  lastName = prompt("What's your surname?");
} while (lastName === "");

do {
  address = prompt("What's your address?");
} while (address === "");

const currentYear = new Date().getFullYear();

do {
  yearOfBirth = +prompt("What year were you born in?");
} while (isNaN(yearOfBirth) || yearOfBirth <= 0 || yearOfBirth > currentYear);

const age = currentYear - yearOfBirth;

// * Task 2

const greeting = `Hello, ${firstName} ${lastName}, you live in ${address} and you are ${age} years old. Nice to meet you!`;
alert(greeting);

// * Task 3

let isIncorrectMood = true;

while (isIncorrectMood) {
  const mood = prompt("What's your mood?");

  switch (mood) {
    case "ok":
      alert("All right, it's great.");
      isIncorrectMood = false;
      break;

    case "fine":
      alert("It's great.");
      isIncorrectMood = false;
      break;

    case "bad":
      alert("You are so moody today.");
      isIncorrectMood = false;
      break;

    default:
      alert("There is something incorrect, try again!");
  }
}

// * Task 4

let isIncorrectAmount = true;

while (isIncorrectAmount) {
  const amount = +prompt("How much money do you have?");

  if (isNaN(amount) || amount < 300) {
    alert("There is something incorrect, try again!");
  } else {
    isIncorrectAmount = false;
    
    if (amount >= 300 && amount < 500) {
      alert("I'll take a bit.");
    } else if (amount >= 500 && amount < 1000) {
      alert("I'll take some :)");
    } else {
      alert("I'll take a half of it ;)");
    }
  }
}
