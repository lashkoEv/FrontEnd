"use strict";
/*
 * Task 1
 */
// used getCorrectNumber to avoid casting null to 0 when entering an empty string, don't know how to do it properly
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
getStatus();
/*
 * Task 2
 */
function getSymbol() {
    let keyNumber;
    do {
        keyNumber = getCorrectNumber("Enter a number from 0 to 9");
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
getSymbol();
/*
 * Task 3
 */
