const display = document.getElementById("display-box");
const buttons = [...document.getElementsByClassName("btn")];
const symbols = [...document.getElementsByClassName("symbol")];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    display.innerText += button.innerText;
  });
});

const answer = document.getElementById("equal");
// function calculate
let total = "";
answer.addEventListener("click", () => {
  total = eval(display.innerText);
  console.log(total);
  display.innerText = total;

});

// function backspace
const backspace = document.getElementById("backspace");
backspace.addEventListener("click", (e) => {
  //   console.log("press hora");
    
    console.log(newArr)
    newArr.pop()
    display.innerText = total
});
