const add = function (num1, num2) {
  return num1 + num2;
}

const subtract = function (num1, num2) {
  return num1 - num2;
}

const multiply = function (num1, num2) {
  return num1 * num2;
}

const divide = function (num1, num2) {
  return num1 / num2;
}

let firstNumber = "";

let secondNumber = "";

let operator = "";

const operate = function (number1, op, number2) {
  if(op == "+") {
      return add(number1, number2);
  } else if(op == "-") {
      return subtract(number1, number2);
  } else if(op == "x") {
      return multiply(number1, number2);
  } else if(op == "÷") {
      return divide(number1, number2);
  } else {
      return "Something went wrong";
  }
}

const btns = document.querySelectorAll('button');
const display = document.getElementById('display');

btns.forEach((button) => {
  button.addEventListener('click', () => {
    display.style.background = "green";
    if(operator !== "") {
      secondNumber += button.value;
      display.textContent += button.value;
    }
    if(button.id !== "add" && button.id !== "subtract" && button.id !== "divide" && button.id !== "multiply" && operator == "") {
      firstNumber += button.value;
      display.textContent += button.value;
    }
    if(button.value == "+"||button.value == "-"||button.value == "x"||button.value == "÷") {
      if (operator == "") {
        operator = button.value;
        display.textContent += button.value;
      }
    }
    if(button.id == "clear") {
      display.textContent = "";
      display.style.background = "rgb(137, 134, 126)";
      firstNumber = "";
      secondNumber = "";
      operator = "";
    }
  })
})