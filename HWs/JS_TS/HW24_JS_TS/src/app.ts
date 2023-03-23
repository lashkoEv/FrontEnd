type expression = {
  firstOperand: number;
  operation: string;
  secondOperand: number;
};

function addition(firstOperand: number, secondOperand: number): number {
  return firstOperand + secondOperand;
}

function subtraction(firstOperand: number, secondOperand: number): number {
  return firstOperand - secondOperand;
}

function multiplication(firstOperand: number, secondOperand: number): number {
  return firstOperand * secondOperand;
}

function division(firstOperand: number, secondOperand: number): number {
  return firstOperand / secondOperand;
}

function parseExpression(expressionString: string): expression | undefined {
  const expressionArray = expressionString.split(" ");

  if (expressionArray.length === 3) {
    return {
      firstOperand: +expressionArray[0],
      operation: expressionArray[1],
      secondOperand: +expressionArray[2],
    };
  }
}

function getResult(inputExp: string): number | string | undefined {
  try {
    const parsedExp: expression = parseExpression(inputExp);

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
  } catch (e: any) {
    alert("Incorrect expression!");
    return "";
  }
}

function initElements(): void {
  const input = document.querySelector(".input") as HTMLInputElement;
  const numbers = document.querySelectorAll(".number");
  const operations = document.querySelectorAll(".operation");
  const calculateButton = document.querySelector(".calculate");
  const clearButton = document.querySelector(".clear");

  numbers.forEach((number) => {
    number.addEventListener("click", () => (input.value += number.innerHTML));
  });

  operations.forEach((operation) => {
    operation.addEventListener(
      "click",
      () => (input.value += ` ${operation.innerHTML} `)
    );
  });

  calculateButton?.addEventListener(
    "click",
    () => (input.value = `${getResult(input.value)}`)
  );

  clearButton?.addEventListener("click", () => (input.value = ""));
}

initElements();
