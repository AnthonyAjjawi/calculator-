//previous number variable
let previousNumber = document.querySelector(".previous__result");
console.log(previousNumber);

//current number variable
let currentNumber = document.querySelector(".current__result");
console.log(currentNumber);

//operator variable
let op = [...document.querySelectorAll(".op")];
console.log(op);

//number variable
let num = [...document.querySelectorAll(".num")];
console.log(num);

//clear variable
let clear = document.querySelector(".clear");

//equal variable
let equals = document.querySelector(".equal");

//stored number
let storedNumber = "";

//result
let result = "";

//number one
let number1 = "";

//operator
let operator = null;

//display zero for the beginning of the calculator
currentNumber.textContent = 0;

previousNumber.textContent = "";

//function to divide
function divide(num1, num2) {
  return num1 / num2;
}


//function to multiply
function multiply(num1, num2) {
  return num1 * num2;
}


//function to add
function add(num1, num2) {
  return num1 + num2;
}


//function to subtract
function subtract(num1, num2) {
  return num1 - num2;
}


function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "÷":
      return divide(num1, num2);
      break;
  }
}
console.log(operate(1, 2));

//populate the display
num.forEach(number => {
  number.addEventListener("click", function(){
    storedNumber += number.value;
    currentNumber.textContent = storedNumber;
    storedNumber = "";
  })
})

