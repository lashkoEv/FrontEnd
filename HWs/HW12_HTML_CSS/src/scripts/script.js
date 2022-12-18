const modal = document.getElementById("modal");
const background = document.getElementById("background");

// * BTN
const navLink = document.getElementById("nav-link");
const close = document.getElementById("close");

navLink.addEventListener("click", (e) => {
  modal.style.display = "flex";
  modal.style.visibility = "visible";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
  modal.style.visibility = "hidden";
});