const display = document.querySelector(".display");
let numbersContainer = document.querySelector(".numberButtons")
function createNumberedButton(number) {
  let numberButton = document.createElement('button');
  numberButton.innerText = number;
  numberButton.addEventListener("click", (e) => {
    if (display.textContent === "0" || shouldResetDisplay) {
      display.textContent = numberButton.textContent
      shouldResetDisplay = false;
    } else {

      display.textContent += numberButton.textContent
    }
  });
  numberButton.type = "button";
  numbersContainer.append(numberButton);
}
for (let i = 0; i < 10; i++) {
  createNumberedButton(i);
}


let num1 = 0;
let num2 = 0;
let operator;
let shouldResetDisplay = false;


const addButton = document.querySelector("#add")

addButton.addEventListener("click", (e) => {
  if (!operator) {
    num1 = parseFloat(display.textContent);
    operator = addButton.textContent;
  } else {
    num2 = parseFloat(display.textContent);
    operate(operator, num1, num2);
    operator = addButton.textContent;
    num1 = parseFloat(display.textContent);
  }
  shouldResetDisplay = true;

});

function add(num1, num2) {
  return num1 + num2;
}

const clearButton = document.querySelector("#clear")
clearButton.addEventListener("click", (e) => {
  num1 = 0; num2 = 0; operator = undefined; display.textContent = 0;
})

const calculateButton = document.querySelector("#calculate")
calculateButton.addEventListener("click", (e) => {
  operate(operator, num1, parseFloat(display.textContent));
  shouldResetDisplay = true
  operator = undefined;
})



function operate(operator, num1, num2) {
  if (operator === "+") {
    result = add(num1, num2);
  } else if (operator === "-") {
    subtract(num1, num2)
  } else if (operator === "*") {
    multiply(num1, num2)
  } else {
    divide(num1, num2)
  }
  display.textContent = result;
}
