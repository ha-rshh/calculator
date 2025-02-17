const display = document.getElementById("display-box");
const buttons = [...document.getElementsByClassName("btn")];
const symbols = [...document.getElementsByClassName("symbol")];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    display.innerText += button.innerText;
  });
});

symbols.forEach((symbol) => {
  symbol.addEventListener("click", () => {
    let displaySymbol = document.createElement("span");
    displaySymbol = symbol.innerText;
    display.innerText = displaySymbol
  });
});
