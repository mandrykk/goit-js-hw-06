const counterValue = document.querySelector("#value");
const buttons = document.querySelectorAll("#counter button");

const decrementBtn = buttons[0];
const incrementBtn = buttons[1];

let calcValue = 0;

decrementBtn.addEventListener("click", () => {
  calcValue -= 1;
  counterValue.innerHTML = calcValue;
});

incrementBtn.addEventListener("click", () => {
  calcValue += 1;
  counterValue.innerHTML = calcValue;
});