const display = document.getElementById("result");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

/* Keyboard Support (ADVANCE FEATURE) */
document.addEventListener("keydown", function (event) {
  if (
    (event.key >= 0 && event.key <= 9) ||
    ["+", "-", "*", "/", ".", "%"].includes(event.key)
  ) {
    appendValue(event.key);
  }

  if (event.key === "Enter") {
    calculate();
  }

  if (event.key === "Backspace") {
    deleteLast();
  }

  if (event.key === "Escape") {
    clearDisplay();
  }
});
