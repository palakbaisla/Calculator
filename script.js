const display = document.getElementById("display");
const buttonGrid = document.querySelector(".button-grid");

// Button rendering with logic
const buttons = [
  'AC', '%', 'x²', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '='
];

buttons.forEach(function(btnValue) {
  const btn = document.createElement("button");
  btn.innerText = btnValue;

  // Styling for operators
  if (['/', '*', '-', '+', '%', 'x²'].includes(btnValue)) {
    btn.classList.add("operator");
  } else if (btnValue === '=') {
    btn.classList.add("equal");
  }

  // button functionality
  btn.addEventListener("click", function() {
    handleInput(btnValue);
  });

  buttonGrid.appendChild(btn);
});

let currentInput = "";

// Logic for button inputs
function handleInput(value) {
  if (value === 'AC') {
    currentInput = "";
    display.innerText = "0";

  } else if (value === '=') {
    try {
      // Evaluating the input expression
      const result = eval(currentInput);
      display.innerText = result;
      currentInput = result.toString();
    } catch {
      display.innerText = "Error";
      currentInput = "";
    }

  } else if (value === 'x²') {
    try {
      const squared = Math.pow(eval(currentInput), 2);
      display.innerText = squared;
      currentInput = squared.toString();
    } catch {
      display.innerText = "Error";
      currentInput = "";
    }

  } else {
    currentInput += value;
    display.innerText = currentInput;
  }
}
