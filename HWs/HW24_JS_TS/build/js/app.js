"use strict";
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
function parseExpression(expressionString) {
    const expressionArray = expressionString.split(" ");
    if (expressionArray.length === 3) {
        return {
            firstOperand: +expressionArray[0],
            operation: expressionArray[1],
            secondOperand: +expressionArray[2],
        };
    }
}
function getResult(inputExp) {
    try {
        const parsedExp = parseExpression(inputExp);
        switch (parsedExp.operation) {
            case "+":
                return addition(parsedExp.firstOperand, parsedExp.secondOperand);
            case "-":
                return subtraction(parsedExp.firstOperand, parsedExp.secondOperand);
            case "*":
                return multiplication(parsedExp.firstOperand, parsedExp.secondOperand);
            case "/":
                return division(parsedExp.firstOperand, parsedExp.secondOperand);
        }
    }
    catch (e) {
        alert("Incorrect expression!");
        return "";
    }
}
function initElements() {
    const input = document.querySelector(".input");
    const numbers = document.querySelectorAll(".number");
    const operations = document.querySelectorAll(".operation");
    const calculateButton = document.querySelector(".calculate");
    const clearButton = document.querySelector(".clear");
    numbers.forEach((number) => {
        number.addEventListener("click", () => (input.value += number.innerHTML));
    });
    operations.forEach((operation) => {
        operation.addEventListener("click", () => (input.value += ` ${operation.innerHTML} `));
    });
    calculateButton === null || calculateButton === void 0 ? void 0 : calculateButton.addEventListener("click", () => (input.value = `${getResult(input.value)}`));
    clearButton === null || clearButton === void 0 ? void 0 : clearButton.addEventListener("click", () => (input.value = ""));
}
initElements();
