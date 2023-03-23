"use strict";

// ! Task 1-2

const greeting = "Hello";
const firstName = "John";
const lastName = "Doe";
const age = "45";
const country = "USA";

const sentences = `${greeting}! My name is ${firstName} ${lastName}. I am ${age} y.o.. I am living in ${country}.`;
alert(sentences);

// or

const sentencesWithConcatenation =
  greeting +
  "! My name is " +
  firstName +
  " " +
  lastName +
  ". I am " +
  age +
  " y.o.. I am living in " +
  country +
  ".";
alert(sentencesWithConcatenation);

// or

const greetingFullSentence = "Hello! ";
const nameFullSentence = "My name is John Doe. ";
const ageFullSentence = "I am 45 y.o.. ";
const countryFullSentence = "I am living in USA. ";
const goodbyeFullSentence = "Goodbye.";

const text = greetingFullSentence + nameFullSentence + ageFullSentence + countryFullSentence + goodbyeFullSentence;
alert(text);

// ! Task 3

// var is a deprecated keyword for declaring a mutable variable without block scope. var is re-declarable.

// let is a keyword for declaring a mutable variable with block scope. Cannot be re-declared.

// const is a keyword to declare an immutable variable.

// ! Task 4

let language = "ukrainian";
language = "english";
language = "polish";
language = "italian";
language = "spanish";
language = "french";

// ! Task 5

/*
JavaScript is a high-level, non-compiled, not a strongly typed object-oriented programming language, a scripting language.
More commonly used on the client side for page interactivity, but can also be used on the server side.
Most commonly used in web applications that run in browsers, but can be used on any device with a JavaScript engine, such as V8.
*/
