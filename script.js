//button to change to theme
const themeChange = document.querySelector(".changeTheme");
const body = document.body;

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

//decimal variable
let decimal = document.querySelector(".decimal");
console.log(decimal);

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

//number two
let number2 = "";

//operator
let operator = null;

//display zero for the beginning of the calculator
currentNumber.textContent = 0;

previousNumber.textContent = "";

//change theme
themeChange.addEventListener("click", function () {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

window.onload = () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark-theme") {
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
  }
};

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
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "÷":
      return divide(num1, num2);
  }
}
console.log(operate(1, 2));

//populate the display
num.forEach((number) => {
  number.addEventListener("click", function () {
    storedNumber += number.value;
    currentNumber.textContent = storedNumber;
    console.log(storedNumber);
  });
});

op.forEach((op) => {
  op.addEventListener("click", function () {
    operator = op.textContent.trim();
    console.log(operator);

    number1 = storedNumber;
    storedNumber = "";
    previousNumber.textContent = number1 + " " + operator;
    currentNumber.textContent = "";
  });
});

equals.addEventListener("click", function () {
  number2 = storedNumber;

  if (operator === "÷" && parseFloat(number2) === 0) {
    currentNumber.textContent = "Error";
    previousNumber.textContent = "";
    return;
  }

  result = operate(parseFloat(number1), parseFloat(number2), operator);
  currentNumber.textContent = result;
  previousNumber.textContent = number1 + " " + operator + " " + number2 + " =";
  storedNumber = result.toString();
  number1 = result;
  currentNumber.textContent = storedNumber;
});

clear.addEventListener("click", function () {
  currentNumber.textContent = 0;

  previousNumber.textContent = "";

  storedNumber = "";

  number1 = "";

  number2 = "";

  operator = null;
});

decimal.addEventListener("click", function () {
  if (!storedNumber.includes(".")) {
    storedNumber += ".";
    currentNumber.textContent = storedNumber;
  }
});
