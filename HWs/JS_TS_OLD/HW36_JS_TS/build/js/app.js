"use strict";

let nextKey;
let currentKey;
let oldNote;

const addButtonEventListener = () => {
  const currentNote = notebook.value;

  if (currentNote.length > 0) {
    localStorage.setItem(nextKey, currentNote);
    notebook.value = "";
    increaseNotesCount();
    addNote(currentNote);
  }
};

const getKeyOfElement = (text) => {
  let key = -1;

  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.getItem(localStorage.key(i)) === text) {
      key = localStorage.key(i);
    }
  }

  return key;
};

const deleteButtonListener = (event) => {
  const text = event.currentTarget.parentElement.previousSibling.textContent;

  const key = getKeyOfElement(text);

  localStorage.removeItem(key);
  event.currentTarget.parentElement.parentElement.remove();
};

const editButtonListener = (event) => {
  const text = event.currentTarget.parentElement.previousSibling.textContent;

  notebook.value = text;
  oldNote = text;
  currentKey = getKeyOfElement(notebook.value);

  addButton.classList.add("hidden");
  doneButton.classList.remove("hidden");
};

const doneButtonListener = () => {
  localStorage.setItem(currentKey, notebook.value);

  const noteElement = getNoteElement(oldNote);
  noteElement.textContent = notebook.value;

  notebook.value = "";

  addButton.classList.remove("hidden");
  doneButton.classList.add("hidden");
};

const getNoteElement = (text) => {
  const notesText = document.getElementsByClassName("note__text");

  for (let i = 0; i < notesText.length; i++) {
    if (notesText[i].textContent === text) {
      return notesText[i];
    }
  }
};

const increaseNotesCount = () => {
  nextKey++;

  localStorage.setItem("nextKey", nextKey);
};

const loadExistingNotes = () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (key !== "nextKey") {
      addNote(localStorage.getItem(key));
    }
  }
};

const createElement = (tag, classes, parent) => {
  const element = document.createElement(tag);

  classes.forEach((item) => {
    element.classList.add(item);
  });

  parent.append(element);

  return element;
};

const addNote = (note) => {
  const noteDiv = createElement("div", ["note"], notes);

  const noteText = createElement("p", ["note__text"], noteDiv);
  noteText.textContent = note;

  const noteFooter = createElement("div", ["note__footer"], noteDiv);

  const editButton = createElement("button", ["button", "edit"], noteFooter);
  createElement("i", ["fa-solid", "fa-pen", "icon"], editButton);
  editButton.addEventListener("click", editButtonListener);

  const deleteButton = createElement(
    "button",
    ["button", "delete"],
    noteFooter
  );
  createElement("i", ["fa-solid", "fa-minus", "icon"], deleteButton);
  deleteButton.addEventListener("click", deleteButtonListener);
};

const loadNextKey = () => {
  if (localStorage.getItem("nextKey")) {
    nextKey = +localStorage.getItem("nextKey");
  } else {
    nextKey = 0;
    localStorage.setItem("nextKey", nextKey);
  }
};

const app = () => {
  loadNextKey();

  addButton.addEventListener("click", addButtonEventListener);
  doneButton.addEventListener("click", doneButtonListener);

  loadExistingNotes();
};

app();
