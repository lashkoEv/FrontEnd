"use strict";
function getCorrectNumber(question) {
    let isCorrect = false;
    while (!isCorrect) {
        let answer = prompt(question);
        let isCorrectNumber = answer && !isNaN(+answer);
        if (isCorrectNumber) {
            return +answer;
        }
    }
}
function addition(firstOperand, secondOperand) {
    return firstOperand + secondOperand;
}
function subtraction(firstOperand, secondOperand) {
    return firstOperand - secondOperand;
}
function multiplication(firstOperand, secondOperand) {
    return firstOperand * secondOperand;
}
function division(firstOperand, secondOperand) {
    return firstOperand / secondOperand;
}
function getExpression() {
    const firstOperand = getCorrectNumber("Enter a first operand:");
    let operation;
    do {
        operation = getCorrectNumber(`Enter operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division`);
    } while (operation < 1 || operation > 4);
    const secondOperand = getCorrectNumber("Enter a second operand:");
    return {
        firstOperand: firstOperand,
        operation: operation,
        secondOperand: secondOperand,
    };
}
function checkOperation() {
    const expression = getExpression();
    switch (expression.operation) {
        case 1:
            return addition(expression.firstOperand, expression.secondOperand);
        case 1:
            return subtraction(expression.firstOperand, expression.secondOperand);
        case 1:
            return multiplication(expression.firstOperand, expression.secondOperand);
        case 1:
            return division(expression.firstOperand, expression.secondOperand);
    }
}
function app() {
    let isContinue = true;
    while (isContinue) {
        alert(`Result: ${checkOperation()}`);
        isContinue = prompt("Enter 'y' to continue:") === "y";
    }
}
app();
