let incrementField = document.getElementById("increment");
let addButton = document.getElementById("add");
let subtractButton = document.getElementById("subtract");
let resetButton = document.getElementById("reset");
let currValueHolder = document.getElementById("number");
let incrementNumber = 1;

incrementField.addEventListener("change", function (e) {
  incrementNumber = parseInt(e.target.value);
});

addButton.addEventListener("click", function (e) {
  let total = parseInt(currValueHolder.innerText) + incrementNumber;

  currValueHolder.innerText = total;
});

subtractButton.addEventListener("click", function (e) {
  let total = parseInt(currValueHolder.innerText) - incrementNumber;
  console.log(total, total < 0);
  if (total < 0) {
    total = 0;
  }

  currValueHolder.innerText = total;
});

resetButton.addEventListener("click", function (e) {
  currValueHolder.innerText = 0;
});
