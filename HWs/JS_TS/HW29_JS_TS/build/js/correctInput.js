export function getCorrectNumber(question) {
  let isCorrect = false;

  while (!isCorrect) {
    let answer = prompt(question);

    let isCorrectNumber = answer && !isNaN(+answer) && +answer > 0;

    if (isCorrectNumber) {
      return +answer;
    }
  }
}

export function getCorrectString(question) {
  let isCorrect = false;

  while (!isCorrect) {
    let answer = prompt(question);

    if (answer?.length > 0) {
      return answer;
    }
  }
}
