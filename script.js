// const calculator = document.querySelectorAll('calculator');
// const keys = document.querySelectorAll('.keys');
const operators = document.querySelectorAll(".calculator-operators *");
const numbers = document.querySelectorAll('.calculator-numbers *'); // * targets everything inside 
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');
const clear = document.querySelector(".all-clear");
const seven = document.getElementById("number7");
const display = document.getElementsByClassName("calculator-screen")[0];
const thirdButton = document.getElementsByTagName("button")[2];
let firstNum = "";
let secondNum = "";
let operator = "";

for (let i = 0; i < operators.length; i++) {
  const operatorElement = operators[i];
  operatorElement.addEventListener('click', opEvent => { // once clicked, run opEvent function 
   
    // console.log('frank',event.target.value);
  })
}
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  element.addEventListener('click', event => {
    if (display.value === '0' || display.value=== '' || display.value ==="/" || display.value ==="*" || display.value ==="+" || display.value ==="-"){
      display.value = event.target.value;
    } 
    else{
      display.value += event.target.value; 
    } 
    console.log(event.target.value);
  }) 
}

for (let index = 0; index < operators.length; index++) {
  const element = operators[index];
  element.addEventListener('click', event => {
      firstNum = display.value;
      operator = event.target.innerHTML;
      display.value = event.target.innerHTML;
  
  }) 
}



// numbers.forEach(number => {
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
const calculate = (n1, operator, n2) => {

  let result = "";
  if (operator === '*'){
    result = n1 * n2;
  }else if (operator === '+'){
    result = n1 + n2;
  }else if (operator === '-'){
    result = n1 - n2;
  }else if (operator === "/"){
    result = n1 / n2;
  }
  return result 
}





clear.addEventListener('click', clearEvent =>{
display.value = "0";
})
decimal.addEventListener('click', () => {
  return display.value.match(".");
});
equals.addEventListener("click", e => {
  secondNum = display.value;
  number1 = parseFloat(firstNum);
  number2 = parseFloat(secondNum);

  calculate(number1, operator, number2);
  display.value = calculate(number1, operator, number2);
  console.log(calculate);
})


// the first button clicked on will be stored in a variable once an operator is clicked/
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
