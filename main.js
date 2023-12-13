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

let firstNumber = 0;

let secondNumber = 0;

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
btns.forEach((button) => {
  button.addEventListener('click', () => {
    let evaluate = Number(button.value);
    if(typeof(Number(button.value)) === "number") {
      firstNumber += button.value;
    }
    if(button.value == ("+"||"-"||"x"||"÷")) {
      operator = button.value;
    };

    secondNumber += button.value;
  })
})