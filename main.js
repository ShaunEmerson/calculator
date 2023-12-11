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
  }else if(op == "-") {
      return subtract(number1, number2);
  }else if(op == "x") {
    return multiply(number1, number2);
  }else if(op == "÷") {
    return divide(number1, number2);
  }else {
    return "Something went wrong";
  }

}