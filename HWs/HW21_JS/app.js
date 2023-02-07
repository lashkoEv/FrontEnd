/*
 * Task 1
 */

function getOddNumbersUsingFor(lowerBound, upperBound) {
  for (let i = lowerBound; i <= upperBound; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

console.log("Odd numbers from 0 to 20 (for):");
getOddNumbersUsingFor(0, 20);

/*
 * Task 2
 */

function getOddNumbersUsingWhile(lowerBound, upperBound) {
  let i = lowerBound;

  while (i <= upperBound) {
    if (i % 2 === 1) {
      console.log(i);
    }

    i++;
  }
}

console.log("Odd numbers from 0 to 20 (while):");
getOddNumbersUsingWhile(0, 20);

/*
 * Task 3
 */

function checkAge() {
  let age;

  do {
    age = +prompt("How old are you?");

    if (isNaN(age) || age <= 0) {
      alert("Incorrect, try again!");
    } else if (age <= 18) {
      alert("You're still a child.");
    } else {
      alert("Go get a job!");
    }
  } while (isNaN(age) || age <= 18);
}

checkAge();

/*
 * Task 4
 */

function getPrimeNumbers(lowerBound, upperBound) {
  for (let i = lowerBound; i <= upperBound; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime && i > 0) {
      console.log(i);
    }
  }
}

console.log("Prime numbers from 2 to 10:");
getPrimeNumbers(2, 10);

/*
 * Task 5
 */

function getCorrectNumber() {
  let number;

  do {
    number = +prompt("Enter a number.");
  } while (isNaN(number) || number < 0);

  return number;
}

function getFactorialUsingFor(number) {
  var result = 1;

  for (let i = number; i > 0; i--) {
    result *= i;
  }

  return result;
}

function getFactorialUsingRecursion(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * getFactorialUsingRecursion(number - 1);
  }
}

let number = getCorrectNumber();
console.log(`Factorial ${number} (for): ${getFactorialUsingFor(number)}`);
console.log(
  `Factorial ${number} (recursion): ${getFactorialUsingRecursion(number)}`
);
