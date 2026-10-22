// =============================================
// 02 · DOM Playground
// The DOM is the browser's "live map" of your HTML.
// JavaScript can FIND things on the map, CHANGE them,
// and LISTEN for things the user does.
// =============================================

// ---------------------------------------------
// STEP 0: Find elements on the page
// document.querySelector("css-selector") returns the FIRST match.
// "#something" finds by id, ".something" finds by class.
// ---------------------------------------------

const title = document.querySelector("#title");
console.log(title); // 👀 Try it! Hover the logged element in the console.

// TODO: Grab the <p id="message"> element and store it in a const called `message`.


// ---------------------------------------------
// A · CHANGE THE TEXT
// element.textContent = "new words" replaces what an element says.
// ---------------------------------------------

const changeTextBtn = document.querySelector("#change-text-btn");

// TODO: When changeTextBtn is clicked, change message's text to
// "JavaScript was here! ✨"
// Hint:
// changeTextBtn.addEventListener("click", function () {
//   ...your code here...
// });



// ---------------------------------------------
// B · CHANGE THE STYLE
// element.style.someProperty = "value" changes one CSS property.
// element.classList.toggle("name") adds a class if it's missing,
// removes it if it's there. (Like a light switch!)
// ---------------------------------------------

const colorBox = document.querySelector("#color-box");
const colorBtn = document.querySelector("#color-btn");
const themeBtn = document.querySelector("#theme-btn");

const colors = ["#f472b6", "#60a5fa", "#34d399", "#fbbf24", "#a78bfa"];

// TODO: When colorBtn is clicked, set colorBox's background color
// to a RANDOM color from the `colors` array.
// Hint: Math.floor(Math.random() * colors.length) gives a random index.
// Hint: colorBox.style.backgroundColor = ...


// TODO: When themeBtn is clicked, toggle the class "dark" on document.body.



// ---------------------------------------------
// C · CLICK COUNTER
// Combine everything: a variable that changes + updating the page.
// ---------------------------------------------

const countDisplay = document.querySelector("#count");
const plusBtn = document.querySelector("#plus-btn");
const minusBtn = document.querySelector("#minus-btn");
const resetBtn = document.querySelector("#reset-btn");

let count = 0;

// TODO: Write a function called `updateDisplay` that sets
// countDisplay's textContent to the current `count`.


// TODO: When plusBtn is clicked: add 1 to count, then call updateDisplay().


// TODO: When minusBtn is clicked: subtract 1 from count, then call updateDisplay().


// TODO: When resetBtn is clicked: set count back to 0, then call updateDisplay().


// BONUS: Make the number turn red when count is below 0.
// Hint: inside updateDisplay, use an if/else and countDisplay.style.color
