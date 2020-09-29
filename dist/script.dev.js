"use strict";

// const calculator = document.querySelectorAll('calculator');
// const keys = document.querySelectorAll('.keys');
var operators = document.querySelectorAll(".calculator-operators *");
var numbers = document.querySelectorAll('.calculator-numbers *'); // * targets everything inside 

var equals = document.querySelector('.equals');
var decimal = document.querySelector('.decimal');
var clear = document.querySelector(".all-clear");
var seven = document.getElementById("number7");
var display = document.getElementsByClassName("calculator-screen")[0];
var thirdButton = document.getElementsByTagName("button")[2];
var firstNum = "";
var secondNum = "";
var operator = "";

for (var i = 0; i < operators.length; i++) {
  var operatorElement = operators[i];
  operatorElement.addEventListener('click', function (opEvent) {// once clicked, run opEvent function 
    // console.log('frank',event.target.value);
  });
}

for (var index = 0; index < numbers.length; index++) {
  var element = numbers[index];
  element.addEventListener('click', function (event) {
    if (display.value === '0' || display.value === '' || display.value === "/" || display.value === "*" || display.value === "+" || display.value === "-") {
      display.value = event.target.value;
    } else {
      display.value += event.target.value;
    }

    console.log(event.target.value);
  });
}

for (var _index = 0; _index < operators.length; _index++) {
  var _element = operators[_index];

  _element.addEventListener('click', function (event) {
    firstNum = display.value;
    operator = event.target.innerHTML;
    display.value = event.target.innerHTML;
  });
} // numbers.forEach(number => {
//   number.addEventListener("click", event => {
//     if (operator === ""){
//       firstNum += event.target.innerHTML;
//       console.log(firstNum)
//     }else {
//       secondNum += event.target.innerHTML;
//       console.log(secondNum)
//     }
//   });
// });
// operators.forEach(op => {
//   op.addEventListener("click", e => {
//       operator = e.target.innerText;
//       console.log(operator)
//       // If equals operator, perform operation
//   });
// });


var calculate = function calculate(n1, operator, n2) {
  var result = "";

  if (operator === '*') {
    result = n1 * n2;
  } else if (operator === '+') {
    result = n1 + n2;
  } else if (operator === '-') {
    result = n1 - n2;
  } else if (operator === "/") {
    result = n1 / n2;
  }

  return result;
};

clear.addEventListener('click', function (clearEvent) {
  display.value = "0";
});
decimal.addEventListener('click', function () {
  return display.value.match(".");
});
equals.addEventListener("click", function (e) {
  secondNum = display.value;
  number1 = parseFloat(firstNum);
  number2 = parseFloat(secondNum);
  calculate(number1, operator, number2);
  display.value = calculate(number1, operator, number2);
  console.log(calculate);
}); // the first button clicked on will be stored in a variable once an operator is clicked/
// the first number will then be calulated with the operator and the second number clickde
// clear screen on click of button, if 0
// if number on sreen is not 0, add additional button value
// when operator is clicked, store display value in variable
// set display value to ""
// once operator has been click, store operator.value in variable
//
// if operator is clicked, remove previous button values and set blank screen
// on clear screen add values when buttons are clicked
// if number already on screen add additional numbers on click
// if = pushed display