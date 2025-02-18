// selecting numbers and operations using query selector all
const numbersBtn = document.querySelectorAll(".number");
const operationsBtn = document.querySelectorAll(".operation");

// selecting other buttons using query selector
const allClearBtn = document.querySelector(".all-clear");
const deleteBtn = document.querySelector(".delete");
const equalsBtn = document.querySelector(".equals");
const previousOperandTextElement = document.getElementById("previous-operand");
const currentOperandTextElement = document.getElementById("current-operand");
const themeToggleBtn = document.querySelector(".theme-toggle");

let currentOperand = "";
let previousOperand = "";
let operation = "";

function clear() {
  currentOperand = "";
  previousOperand = "";
  operation = undefined;
}

numbersBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
   
});
