function getCorrectNumber(question: string) {
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
 * Task 5 Запросіть у користувача п’ятирозрядне число і визначте, чи є воно паліндромом.
 */

/*
 * Task 7
 */

function getDiscountedAmount(amount: number, discount: number) {
  return (amount - (amount * discount) / 100).toFixed(2);
}

function checkDiscount() {
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

//checkDiscount();

/*
 * Task 8
 */

// The radius of the inscribed circle is half the side of the square.

function checkInscribedCircle() {
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

//checkInscribedCircle();

/*
 * Task 9
 */

function getAnswer(question: string) {
  let answer: number;

  do {
    answer = getCorrectNumber(question);
  } while (answer < 1 || answer > 3);

  return answer;
}

function checkAnswer(question: string, correctAnswer: number) {
  const userAnswer: number = getAnswer(question);

  const isCorrect: boolean = userAnswer === correctAnswer;

  if (isCorrect) {
    return 2;
  } else {
    return 0;
  }
}

function getQuiz() {
  const firstQuestion: string = `When is the Constitution Day of Ukraine celebrated?\nJune 28\nAugust 23\nAugust 24`;
  const secondQuestion: string = `When is the National Flag Day of Ukraine celebrated?\nJune 28\nAugust 23\nAugust 24`;
  const thirdQuestion: string = `When is the Independence Day of Ukraine celebrated?\nJune 28\nAugust 23\nAugust 24`;

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
 * Task 10 Запросіть дату (день, місяць, рік) і виведіть наступну дату. Врахуйте можливість переходу на наступний місяць, рік, а також високосний рік.
 */
