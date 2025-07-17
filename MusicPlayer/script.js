const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");

let currentInput = "";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const val = btn.dataset.value;
    if (val) {
      if (display.textContent === "0" || display.textContent === "Error") {
        display.textContent = val;
      } else {
        display.textContent += val;
      }
      currentInput += val;
    }
  });
});

equalsBtn.addEventListener("click", () => {
  try {
    const result = eval(currentInput.replace("×", "*").replace("÷", "/"));
    display.textContent = result;
    currentInput = result.toString();
  } catch {
    display.textContent = "Error";
    currentInput = "";
  }
});

clearBtn.addEventListener("click", () => {
  display.textContent = "0";
  currentInput = "";
});

document.addEventListener("keydown", (e) => {
  if (/[0-9+\-*/.]/.test(e.key)) {
    display.textContent += e.key;
    currentInput += e.key;
  } else if (e.key === "Enter") {
    equalsBtn.click();
  } else if (e.key === "Backspace") {
    display.textContent = display.textContent.slice(0, -1);
    currentInput = currentInput.slice(0, -1);
  } else if (e.key.toLowerCase() === "c") {
    clearBtn.click();
  }
});
