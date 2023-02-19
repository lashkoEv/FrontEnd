"use strict";
function getCorrectNumber(question) {
    let isCorrect = false;
    while (!isCorrect) {
        let answer = prompt(question);
        let isCorrectNumber = answer && !isNaN(+answer) && +answer > 0;
        if (isCorrectNumber) {
            return +answer;
        }
    }
}
/*
 * Task 5
 */
function getNumber() {
    let answer;
    do {
        answer = getCorrectNumber("Enter a five-digit number:");
    } while (answer.toString().length != 5);
    return answer.toString();
}
function checkPalindrome() {
    const answer = getNumber();
    const firstPart = answer.slice(0, 2);
    const lastPart = answer.slice(-2).split("").reverse().join("");
    if (firstPart === lastPart) {
        alert("It's a palindrome.");
    }
    else {
        alert("It's not a palindrome.");
    }
}
//checkPalindrome();
/*
 * Task 7
 */
function getDiscountedAmount(amount, discount) {
    return (amount - (amount * discount) / 100).toFixed(2);
}
function checkDiscount() {
    const purchaseAmount = getCorrectNumber("Enter purchase amount:");
    const isThreePercent = purchaseAmount >= 200 && purchaseAmount <= 300;
    const isFivePercent = purchaseAmount > 300 && purchaseAmount <= 500;
    const isSevenPercent = purchaseAmount > 500;
    if (isThreePercent) {
        alert(`Discounted amount is ${getDiscountedAmount(purchaseAmount, 3)}$.`);
    }
    else if (isFivePercent) {
        alert(`Discounted amount is ${getDiscountedAmount(purchaseAmount, 5)}$.`);
    }
    else if (isSevenPercent) {
        alert(`Discounted amount is ${getDiscountedAmount(purchaseAmount, 7)}$.`);
    }
    else {
        alert("Discount doesn't apply.");
    }
}
//checkDiscount();
/*
 * Task 8
 */
// The radius of the inscribed circle is half the side of the square.
function checkInscribedCircle() {
    const circleLength = getCorrectNumber("Enter a circle length:");
    const perimeter = getCorrectNumber("Enter the square's perimeter:");
    const radius = (circleLength / 2) * Math.PI;
    const halfSide = perimeter / 8;
    if (radius <= halfSide) {
        alert("The circle will fit in the square.");
    }
    else {
        alert("The circle won't fit in the square.");
    }
}
//checkInscribedCircle();
/*
 * Task 9
 */
function getAnswer(question) {
    let answer;
    do {
        answer = getCorrectNumber(question);
    } while (answer < 1 || answer > 3);
    return answer;
}
function checkAnswer(question, correctAnswer) {
    const userAnswer = getAnswer(question);
    const isCorrect = userAnswer === correctAnswer;
    if (isCorrect) {
        return 2;
    }
    else {
        return 0;
    }
}
function getQuiz() {
    const firstQuestion = `When is the Constitution Day of Ukraine celebrated?\nJune 28\nAugust 23\nAugust 24`;
    const secondQuestion = `When is the National Flag Day of Ukraine celebrated?\nJune 28\nAugust 23\nAugust 24`;
    const thirdQuestion = `When is the Independence Day of Ukraine celebrated?\nJune 28\nAugust 23\nAugust 24`;
    const firstCorrectAnswer = 1;
    const secondCorrectAnswer = 2;
    const thirdCorrectAnswer = 3;
    let grade = 0;
    grade += checkAnswer(firstQuestion, firstCorrectAnswer);
    grade += checkAnswer(secondQuestion, secondCorrectAnswer);
    grade += checkAnswer(thirdQuestion, thirdCorrectAnswer);
    alert(`Congratulations! Your grade is ${grade}.`);
}
//getQuiz();
/*
 * Task 10 Запросіть дату (день, місяць, рік) і виведіть наступну дату. Врахуйте можливість переходу на наступний місяць, рік, а також високосний рік.
 */
