const getCurrentDateTime = () => {
  const currentDateTime = new Date();

  return `${currentDateTime.toLocaleDateString("uk-UA")} 
    ${currentDateTime.toLocaleTimeString("uk-UA")}`;
};

const getNote = (idx, target) => {
  const currentDateTime = getCurrentDateTime();

  const note = `\n${idx}. ${target.textContent} at ${currentDateTime}`;

  return note;
};

export const closure = () => {
  let idx = 1;
  const textArray = ["History:"];

  return (target) => {
    if (target.className === "block") {
      const note = getNote(idx, target);

      textArray.push(note);

      const history = document.getElementsByClassName("history");

      history[0].textContent = textArray.join("\n");

      idx++;
    }
  };
};
