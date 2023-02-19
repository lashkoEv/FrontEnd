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
checkDiscount();
/*
 * Task 8 Запросіть у користувача довжину кола та периметр квадрата. Визначте чи може таке коло поміститися у зазначений квадрат.
 */
/*
 * Task 9 Задайте користувачеві 3 питання, у кожному питанні по 3 варіанти відповіді. За кожну правильну відповідь нараховується 2 бали. Після запитань виведіть користувачеві кількість набраних балів.
 */
/*
 * Task 9 Запросіть дату (день, місяць, рік) і виведіть наступну дату. Врахуйте можливість переходу на наступний місяць, рік, а також високосний рік.
 */
