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
let equal = document.querySelector(".equal");



//stored number 
let storedNumber = " ";

//result 
let result = " ";

//number one
let number1 = "";

//number two
let number2 = null;

//operator 
let operator = null;












//function to divide 
function divide(num1, num2) {
    return num1 / num2;
}
console.log(add(1, 2));

//function to multiply
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(add(1, 2));

//function to add
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 2));


//function to subtract
function subtract(num1, num2) {
    return num1 - num2;
}
console.log(add(1, 2));

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
function populate() {
    num.forEach(number  => {
        number.addEventListener("click", function() {
            storedNumber = number.value;
            console.log(storedNumber);
            currentNumber.textContent = storedNumber;
        })
    })
}
console.log(populate());