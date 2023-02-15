"use strict";
/*
 * Task 1
 */
// ! used getCorrectNumber to avoid casting null to 0 when entering an empty string, don't know how to do it properly
function getCorrectNumber(question) {
    let userResponse = prompt(question);
    if ((userResponse === null || userResponse === void 0 ? void 0 : userResponse.length) > 0 && !isNaN(+userResponse)) {
        return +userResponse;
    }
    else {
        return -1;
    }
}
function getStatus() {
    let age;
    do {
        age = getCorrectNumber("How old are you?");
    } while (age < 0);
    if (age <= 12) {
        alert("You are a child!");
    }
    else if (age > 12 && age <= 18) {
        alert("You are a teenager!");
    }
    else if (age > 18 && age <= 60) {
        alert("You are an adult!");
    }
    else {
        alert("You are a pensioner!");
    }
}
// getStatus();
/*
 * Task 2
 */
function getSymbol() {
    let keyNumber;
    do {
        keyNumber = getCorrectNumber("Enter a number from 0 to 9:");
    } while (keyNumber < 0 || keyNumber > 9);
    switch (keyNumber) {
        case 0:
            alert("Symbol: )");
            break;
        case 1:
            alert("Symbol: !");
            break;
        case 2:
            alert('Symbols: @ and "');
            break;
        case 3:
            alert("Symbols: # and №");
            break;
        case 4:
            alert("Symbols: $ and ;");
            break;
        case 5:
            alert("Symbol: %");
            break;
        case 6:
            alert("Symbols: ^ and :");
            break;
        case 7:
            alert("Symbols: & and ?");
            break;
        case 8:
            alert("Symbol: *");
            break;
        case 9:
            alert("Symbol: (");
            break;
    }
}
// getSymbol();
/*
 * Task 3
 */
function getThreeDigitNumber() {
    let threeDigitNumber;
    do {
        threeDigitNumber = getCorrectNumber("Enter a three digit number:");
    } while (threeDigitNumber < 100 || threeDigitNumber > 999);
    return threeDigitNumber;
}
function checkIdenticalDigits() {
    const threeDigitNumber = getThreeDigitNumber();
    const stringFromNumber = threeDigitNumber.toString();
    let isIdenticalDigits = false;
    for (let i = 0; i < stringFromNumber.length; i++) {
        for (let j = 0; j < stringFromNumber.length; j++) {
            if (stringFromNumber[i] === stringFromNumber[j] && i != j) {
                isIdenticalDigits = true;
            }
        }
    }
    if (isIdenticalDigits) {
        alert("The number contains the identical digits.");
    }
    else {
        alert("There are no identical digits in the number.");
    }
}
checkIdenticalDigits();
/*
 * Task 4
 */
function checkLeapYear() {
    let year;
    do {
        year = getCorrectNumber("Enter a year:");
    } while (year < 0);
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)) {
        alert("This year is a leap year.");
    }
    else {
        alert("This year is not a leap year.");
    }
}
//checkLeapYear();
/*
 * Task 6
 */
function convert(usd, exchangeRate) {
    const result = usd * exchangeRate;
    return result.toFixed(2);
}
function getCurrencyNumber() {
    let currencyNumber;
    do {
        currencyNumber = getCorrectNumber("Enter the number of the currency:\n1. Convert to UAN\n2. Convert to EUR\n3. Convert to AZN");
    } while (currencyNumber < 1 || currencyNumber > 3);
    return currencyNumber;
}
function getAmountOfMoney() {
    let amount;
    do {
        amount = getCorrectNumber("Enter the amount to convert:");
    } while (amount <= 0);
    return amount;
}
function getConvertedCurrency() {
    const exchangeRateUAN = 36.81;
    const exchangeRateEUR = 0.93;
    const exchangeRateAZN = 1.7;
    const currencyNumber = getCurrencyNumber();
    const amount = getAmountOfMoney();
    switch (currencyNumber) {
        case 1:
            alert(`${amount} USD is ${convert(amount, exchangeRateUAN)} UAN`);
            break;
        case 2:
            alert(`${amount} USD is ${convert(amount, exchangeRateEUR)} EUR`);
            break;
        case 3:
            alert(`${amount} USD is ${convert(amount, exchangeRateAZN)} AZN`);
            break;
    }
}
// getConvertedCurrency();
