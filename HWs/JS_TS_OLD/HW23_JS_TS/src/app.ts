function getCorrectNumber(question: string): number {
  let isCorrect: boolean = false;

  while (!isCorrect) {
    let answer: string | null = prompt(question);

    let isCorrectNumber = answer && !isNaN(+answer) && +answer > 0;

    if (isCorrectNumber) {
      return +answer;
    }
  }
}

/*
 * Task 5
 */

function getNumberString(): string {
  let answer: number;

  do {
    answer = getCorrectNumber("Enter a five-digit number:");
  } while (answer.toString().length != 5);

  return answer.toString();
}

function checkPalindrome(): void {
  const answer: string = getNumberString();

  const firstPart: string = answer.slice(0, 2);
  const lastPart: string = answer.slice(-2).split("").reverse().join("");

  if (firstPart === lastPart) {
    alert("It's a palindrome.");
  } else {
    alert("It's not a palindrome.");
  }
}

checkPalindrome();

/*
 * Task 7
 */

function getDiscountedAmount(amount: number, discount: number): string {
  return (amount - (amount * discount) / 100).toFixed(2);
}

function checkDiscount(): void {
  const purchaseAmount: number = getCorrectNumber("Enter purchase amount:");

  const isThreePercent: boolean =
    purchaseAmount >= 200 && purchaseAmount <= 300;
  const isFivePercent: boolean = purchaseAmount > 300 && purchaseAmount <= 500;
  const isSevenPercent: boolean = purchaseAmount > 500;

  if (isThreePercent) {
    alert(`Discounted amount is ${getDiscountedAmount(purchaseAmount, 3)}$.`);
  } else if (isFivePercent) {
    alert(`Discounted amount is ${getDiscountedAmount(purchaseAmount, 5)}$.`);
  } else if (isSevenPercent) {
    alert(`Discounted amount is ${getDiscountedAmount(purchaseAmount, 7)}$.`);
  } else {
    alert("Discount doesn't apply.");
  }
}

checkDiscount();

/*
 * Task 8
 */

// The radius of the inscribed circle is half the side of the square.

function checkInscribedCircle(): void {
  const circleLength: number = getCorrectNumber("Enter a circle length:");
  const perimeter: number = getCorrectNumber("Enter the square's perimeter:");

  const radius: number = (circleLength / 2) * Math.PI;
  const halfSide: number = perimeter / 8;

  if (radius <= halfSide) {
    alert("The circle will fit in the square.");
  } else {
    alert("The circle won't fit in the square.");
  }
}

checkInscribedCircle();

/*
 * Task 9
 */

function getAnswer(question: string): number {
  let answer: number;

  do {
    answer = getCorrectNumber(question);
  } while (answer < 1 || answer > 3);

  return answer;
}

function checkAnswer(question: string, correctAnswer: number): number {
  const userAnswer: number = getAnswer(question);

  const isCorrect: boolean = userAnswer === correctAnswer;

  if (isCorrect) {
    return 2;
  } else {
    return 0;
  }
}

function getQuiz(): void {
  const firstQuestion: string = `When is the Constitution Day of Ukraine celebrated?\n1. June 28\n2. August 23\n3. August 24`;
  const secondQuestion: string = `When is the National Flag Day of Ukraine celebrated?\n1. June 28\n2. August 23\n3. August 24`;
  const thirdQuestion: string = `When is the Independence Day of Ukraine celebrated?\n1. June 28\n2. August 23\n3. August 24`;

  const firstCorrectAnswer: number = 1;
  const secondCorrectAnswer: number = 2;
  const thirdCorrectAnswer: number = 3;

  let grade: number = 0;

  grade += checkAnswer(firstQuestion, firstCorrectAnswer);
  grade += checkAnswer(secondQuestion, secondCorrectAnswer);
  grade += checkAnswer(thirdQuestion, thirdCorrectAnswer);

  alert(`Congratulations! Your grade is ${grade}.`);
}

getQuiz();

/*
 * Task 10
 */

type customDate = {
  day: number;
  month: number;
  year: number;
};

function getCorrectDay(month: number, year: number): number {
  let day: number;

  const isFebruary: boolean = month === 2;
  const isLeapYear: boolean =
    year % 400 === 0 || (year % 4 === 0 && year % 100 != 0);
  const isContainsThirtyOneDays =
    (month % 2 !== 0 && month <= 7) || (month % 2 === 0 && month > 7);
  const isContainsThirtyDays =
    (month % 2 !== 0 && month > 7) || (month % 2 === 0 && month <= 7);

  if (isFebruary) {
    if (isLeapYear) {
      do {
        day = getCorrectNumber("Enter a day");
      } while (day < 1 || day > 29);
    } else {
      do {
        day = getCorrectNumber("Enter a day");
      } while (day < 1 || day > 28);
    }
  } else if (isContainsThirtyOneDays) {
    do {
      day = getCorrectNumber("Enter a day");
    } while (day < 1 || day > 31);
  } else if (isContainsThirtyDays) {
    do {
      day = getCorrectNumber("Enter a day");
    } while (day < 1 || day > 30);
  }

  return day;
}

function getCorrectMonth(): number {
  let month: number;

  do {
    month = getCorrectNumber("Enter a month:");
  } while (month < 1 || month > 12);

  return month;
}

function getDateToString(date: customDate): string {
  let dateString: string = "";

  if (date.day < 10) {
    dateString += "0";
  }
  dateString += date.day + ".";

  if (date.month < 10) {
    dateString += "0";
  }
  dateString += date.month + "." + date.year;

  return dateString;
}

function getUserDate(): customDate {
  const year: number = getCorrectNumber("Enter a year:");
  const month: number = getCorrectMonth();
  const day: number = getCorrectDay(month, year);

  const userDate: customDate = {
    day: day,
    month: month,
    year: year,
  };

  return userDate;
}

function getNextDate(userDate: customDate): customDate {
  let nextDate: customDate = {
    day: userDate.day,
    month: userDate.month,
    year: userDate.year,
  };

  const isLastDayAtYear: boolean = userDate.month === 12 && userDate.day === 31;

  const isFebruary: boolean = userDate.month === 2;
  const isLeapYear: boolean =
    userDate.year % 400 === 0 ||
    (userDate.year % 4 === 0 && userDate.year % 100 !== 0);
  const isLastDayAtFebruaryLeapYear = userDate.day === 29;
  const isLastDayAtFebruaryNotLeapYear = userDate.day === 28;

  const isThirtyOneDaysMonth =
    (userDate.month % 2 !== 0 && userDate.month <= 7) ||
    (userDate.month % 2 === 0 && userDate.month > 7);
  const isLastDayInThirtyOneDaysMonth = userDate.day === 31;

  const isThirtyDaysMonth =
    (userDate.month % 2 !== 0 && userDate.month > 7) ||
    (userDate.month % 2 === 0 && userDate.month <= 7);
  const isLastDayInThirtyDaysMonth = userDate.day === 30;

  if (isLastDayAtYear) {
    nextDate.day = 1;
    nextDate.month = 1;
    nextDate.year++;
  } else if (isFebruary) {
    if (isLeapYear) {
      if (isLastDayAtFebruaryLeapYear) {
        nextDate.day = 1;
        nextDate.month++;
      } else {
        nextDate.day++;
      }
    } else {
      if (isLastDayAtFebruaryNotLeapYear) {
        nextDate.day = 1;
        nextDate.month++;
      } else {
        nextDate.day++;
      }
    }
  } else if (isThirtyOneDaysMonth) {
    if (isLastDayInThirtyOneDaysMonth) {
      nextDate.day = 1;
      nextDate.month++;
    } else {
      nextDate.day++;
    }
  } else if (isThirtyDaysMonth) {
    if (isLastDayInThirtyDaysMonth) {
      nextDate.day = 1;
      nextDate.month++;
    } else {
      nextDate.day++;
    }
  }

  return nextDate;
}

function checkNextDate(): void {
  const userDate = getUserDate();
  const nextDate = getNextDate(userDate);

  console.log("[USER DATE]", `${getDateToString(userDate)}`);
  console.log("[NEXT DATE]", `${getDateToString(nextDate)}`);

  alert(`Next day: ${getDateToString(nextDate)}!`);
}

checkNextDate();
