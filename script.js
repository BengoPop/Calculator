let lastInputCalculate = false;

const display = document.querySelector(".display");
let numbersContainer = document.querySelector(".numberButtons")
function createNumberedButton(number) {
  let numberButton = document.createElement('button');
  numberButton.innerText = number;
  numberButton.addEventListener("click", (e) => {
    lastInputCalculate = false;
    if (display.textContent === "0" || shouldResetDisplay) {
      display.textContent = numberButton.textContent
      shouldResetDisplay = false;
      operatorLastPressed = false;
    } else {

      display.textContent += numberButton.textContent;
      operatorLastPressed = false;
    }
  });
  numberButton.type = "button";
  numbersContainer.append(numberButton);
}
for (let i = 0; i < 10; i++) {
  createNumberedButton(i);
}


let num1;
let num2 = 0;
let operator;
//idea if operator last pressed is true, then the operations buttons don't do anything
let operatorLastPressed = true;
//TODO make it so hitting the operator twice does not eevaluate anything

const addButton = document.querySelector("#add")

addButton.addEventListener("click", (e) => {
  lastInputCalculate = false;
  if (!operator) {
    num1 = parseFloat(display.textContent);
    operator = addButton.textContent;
    operatorLastPressed = true;

  }
  else if (!operatorLastPressed) {
    {
      operate(operator, num1, parseFloat(display.textContent));
      num1 = parseFloat(display.textContent);
      operator = addButton.textContent;

      operatorLastPressed = true;

    }
  }
  shouldResetDisplay = true;

});

function add(num1, num2) {
  return num1 + num2;
}

const subtractButton = document.querySelector("#subtract");

subtractButton.addEventListener("click", (e) => {
  lastInputCalculate = false;
  if (!operator) {
    num1 = parseFloat(display.textContent);
    operator = subtractButton.textContent;
    operatorLastPressed = true;
  } else if (!operatorLastPressed) {
    operate(operator, num1, parseFloat(display.textContent));
    num1 = parseFloat(display.textContent);
    operator = subtractButton.textContent;
    operatorLastPressed = true;
  }
  shouldResetDisplay = true;

})

function subtract(num1, num2) {
  return num1 - num2;
}

const multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener("click", (e) => {
  lastInputCalculate = false;
  if (!operator) {
    num1 = parseFloat(display.textContent);
    operator = multiplyButton.textContent;
    operatorLastPressed = true;
  } else if (!operatorLastPressed) {
    operate(operator, num1, parseFloat(display.textContent));
    num1 = parseFloat(display.textContent);
    operator = multiplyButton.textContent;
    operatorLastPressed = true;
  }
  shouldResetDisplay = true;

})

function multiply(num1, num2) {
  return num1 * num2;
}

const divideButton = document.querySelector("#divide");
divideButton.addEventListener("click", (e) => {
  lastInputCalculate = false;
  if (!operator) {
    num1 = parseFloat(display.textContent);
    operator = divideButton.textContent;
    operatorLastPressed = true;
  } else if (!operatorLastPressed) {
    operate(operator, num1, parseFloat(display.textContent));
    num1 = parseFloat(display.textContent);
    operator = divideButton.textContent;
    operatorLastPressed = true;
  }
  shouldResetDisplay = true;

})
function divide(num1, num2) {
  if (num2 === 0) {

  } else {
    return num1 / num2;
  }
}



const clearButton = document.querySelector("#clear")
clearButton.addEventListener("click", (e) => {
  lastInputCalculate = false;
  num1 = 0; num2 = 0; operator = undefined; display.textContent = 0;
})
const calculateButton = document.querySelector("#calculate")
calculateButton.addEventListener("click", (e) => {
  if (lastInputCalculate || !num1) {
  } else {
    operate(operator, num1, parseFloat(display.textContent));
    shouldResetDisplay = true
    operator = undefined;

  }
})



function operate(operator, num1, num2) {
  lastInputCalculate = true;
  if (operator === "+") {
    result = add(num1, num2);
  } else if (operator === "-") {
    result = subtract(num1, num2)
  } else if (operator === "*") {
    result = multiply(num1, num2)
  } else {
    if (num2 === 0) {
      result = "divide by zero error"
    } else {
      result = Math.round(divide(num1, num2) * Math.pow(10, 10)) / Math.pow(10, 10);
    }
  }
  display.textContent = result;
}
