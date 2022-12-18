var size = document.getElementById("size");
var sizeValue = document.getElementById("size-value");

sizeValue.innerHTML = size.value;

size.oninput = function () {
  sizeValue.innerHTML = this.value;
};
