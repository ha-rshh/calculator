// selecting numbers and operations using query selector all
const numbersBtn = document.querySelectorAll(".number");
const operationsBtn = document.querySelectorAll(".operation");

// selecting other buttons using query selector
const allClearBtn = document.querySelector(".all-clear");
const deleteBtn = document.querySelector(".delete");
const equalsBtn = document.querySelector(".equals");
const previousOperandTextElement = document.querySelector("previous-operand");
const currentOperandTextElement = document.querySelector("current-operand");
const themeToggleBtn = document.querySelector(".theme-toggle");

/*
 * clear()             -> Clears the input
 * delete()            -> deletes the currentOperand's last charachter
 * appendNumber()      -> add whatever is sent as input (lookout for '.')
 * chooseOperation()   -> updates the operation and sets the current operand. If the operand is same as the previous on then we compute the value
 * compute()           -> computes the value based on the operation
 * getDisplayNumber()  -> returns the number to be displayed
 * updateDisplay()     -> will use the getDisplayNumber() function and update the DOM
 */

let currentOperand = "",
  previousOperand = "",
  operation = "";

function clear() {
  currentOperand = "";
  previousOperand = "";
  operation = "";
}

function deleteChar() {
    currentOperand = currentOperand.toString().slice(0, -1)
}
