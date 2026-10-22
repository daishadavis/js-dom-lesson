// =============================================
// 02 · DOM Playground — SOLUTION
// =============================================

// ---------------------------------------------
// STEP 0: Find elements on the page
// ---------------------------------------------

const title = document.querySelector("#title");
console.log(title);

const message = document.querySelector("#message");


// ---------------------------------------------
// A · CHANGE THE TEXT
// ---------------------------------------------

const changeTextBtn = document.querySelector("#change-text-btn");

changeTextBtn.addEventListener("click", function () {
  message.textContent = "JavaScript was here! ✨";
});


// ---------------------------------------------
// B · CHANGE THE STYLE
// ---------------------------------------------

const colorBox = document.querySelector("#color-box");
const colorBtn = document.querySelector("#color-btn");
const themeBtn = document.querySelector("#theme-btn");

const colors = ["#f472b6", "#60a5fa", "#34d399", "#fbbf24", "#a78bfa"];

colorBtn.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * colors.length);
  colorBox.style.backgroundColor = colors[randomIndex];
});

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});


// ---------------------------------------------
// C · CLICK COUNTER
// ---------------------------------------------

const countDisplay = document.querySelector("#count");
const plusBtn = document.querySelector("#plus-btn");
const minusBtn = document.querySelector("#minus-btn");
const resetBtn = document.querySelector("#reset-btn");

let count = 0;

function updateDisplay() {
  countDisplay.textContent = count;

  // BONUS: red when negative
  if (count < 0) {
    countDisplay.style.color = "#dc2626";
  } else {
    countDisplay.style.color = "";
  }
}

plusBtn.addEventListener("click", function () {
  count = count + 1;
  updateDisplay();
});

minusBtn.addEventListener("click", function () {
  count = count - 1;
  updateDisplay();
});

resetBtn.addEventListener("click", function () {
  count = 0;
  updateDisplay();
});
