const pById = document.getElementById("text");

console.log("[ELEMENT BY ID]", pById);

const pByClassName = document.getElementsByClassName("text")[0];

console.log("[ELEMENT BY CLASS]", pByClassName);

console.log("[PREV SIBLING]", pByClassName.previousElementSibling);

console.log("NEXT SIBLING]", pById.nextElementSibling);

pByClassName.textContent = "New text";

pById.addEventListener("click", (el) => {
  console.log(`${el.pageX} x ${el.pageY}`);
});
