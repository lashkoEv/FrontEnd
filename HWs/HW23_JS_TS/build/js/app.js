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
 * Task 5 Запросіть у користувача п’ятирозрядне число і визначте, чи є воно паліндромом.
 */
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
checkInscribedCircle();
/*
 * Task 9 Задайте користувачеві 3 питання, у кожному питанні по 3 варіанти відповіді. За кожну правильну відповідь нараховується 2 бали. Після запитань виведіть користувачеві кількість набраних балів.
 */
/*
 * Task 9 Запросіть дату (день, місяць, рік) і виведіть наступну дату. Врахуйте можливість переходу на наступний місяць, рік, а також високосний рік.
 */
