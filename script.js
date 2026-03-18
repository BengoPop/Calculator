const display = document.querySelector(".display");

let numbersContainer = document.querySelector(".numberButtons")


function createNumberedButton(number) {
  let numberButton = document.createElement('button');
  numberButton.innerText = number;
  numberButton.addEventListener("click", (e) => {
    display.textContent += numberButton.textContent
  });

  numberButton.type = "button";
  numbersContainer.append(numberButton);
}
for (let i = 0; i < 10; i++) {
  createNumberedButton(i);
}

const multiplyButton = document.querySelector("#multiply")
const divideButton = document.querySelector("#divide")
const subtractButton = document.querySelector("#subtract")

const addButton = document.querySelector("#add")
addButton.addEventListener("click", (e) => {
  num1 = parseFloat(display.textContent)
  display.textContent = 0;
  operator = addButton.textContent;
});

function add(num1, num2) {
  let total = num1 + num2;
  display.textContent = total;
}
const calculateButton = document.querySelector("#calculate")
calculateButton.addEventListener("click", (e) => {
  operate(operator, num1, parseFloat(display.textContent))
})
let num1, num2, operator;



function operate(operator, num1, num2) {
  if (operator === "+") {
    add(num1, num2);
  } else if (operator === "-") {
    subtract(num1, num2)
  } else if (operator === "*") {
    multiply(num1, num2)
  } else {
    divide(num1, num2)
  }
}
