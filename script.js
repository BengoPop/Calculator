let numbersContainer = document.querySelector(".numberButtons")

function createNumberedButton(number) {
  let numberButton = document.createElement('button');
  numberButton.innerText = number;
  numberButton.addEventListener("click", (e) => display.textContent += numberButton.textContent);
  numberButton.type = "button";
  numbersContainer.append(numberButton);
}
for (let i = 0; i < 10; i++) {
  createNumberedButton(i);
}

const display = document.querySelector(".display");

