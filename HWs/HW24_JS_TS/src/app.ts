type expression = {
  firstOperand: number;
  operation: number;
  secondOperand: number;
};

function getCorrectNumber(question: string): number {
  let isCorrect: boolean = false;

  while (!isCorrect) {
    let answer: string | null = prompt(question);

    let isCorrectNumber = answer && !isNaN(+answer);

    if (isCorrectNumber) {
      return +answer;
    }
  }
}

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

function getExpression(): expression {
  const firstOperand: number = getCorrectNumber("Enter a first operand:");

  let operation: number;

  do {
    operation = getCorrectNumber(
      `Enter operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division`
    );
  } while (operation < 1 || operation > 4);

  const secondOperand: number = getCorrectNumber("Enter a second operand:");

  return {
    firstOperand: firstOperand,
    operation: operation,
    secondOperand: secondOperand,
  };
}

function checkOperation() {
  const expression: expression = getExpression();

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

function app(): void {
  let isContinue = true;

  while (isContinue) {
    alert(`Result: ${checkOperation()}`);

    isContinue = prompt("Enter 'y' to continue:") === "y";
  }
}

app();
