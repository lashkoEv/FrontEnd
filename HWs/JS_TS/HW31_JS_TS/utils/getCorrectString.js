export function getCorrectString(question) {
  let isCorrect = false;

  while (!isCorrect) {
    let answer = prompt(question);

    if (answer?.length > 0) {
      return answer;
    }
  }
}
