// =============================================
// 01 · JavaScript Warm-up — SOLUTION
// Open the browser console to see your output!
// =============================================

console.log("Warm-up loaded! 👋");

// ---------------------------------------------
// 1. VARIABLES
// ---------------------------------------------

const myName = "Daisha";
let snacksEaten = 0;

snacksEaten = snacksEaten + 1;
console.log("Snacks eaten:", snacksEaten); // 1


// ---------------------------------------------
// 2. FUNCTIONS
// ---------------------------------------------

function greet(name) {
  return `Hi, ${name}!`;
}

console.log(greet(myName)); // "Hi, Daisha!"


// ---------------------------------------------
// 3. CONDITIONALS
// ---------------------------------------------

const temperature = 72;

if (temperature > 80) {
  console.log("It's hot! 🥵");
} else if (temperature > 60) {
  console.log("Nice out! 😎");
} else {
  console.log("Grab a jacket 🧥");
}


// ---------------------------------------------
// 4. ARRAYS
// ---------------------------------------------

const favoriteFoods = ["pizza", "tacos", "sushi"];

console.log(favoriteFoods[0]); // "pizza"

favoriteFoods.push("ramen");
console.log(favoriteFoods); // ["pizza", "tacos", "sushi", "ramen"]

console.log(favoriteFoods.length); // 4


// ---------------------------------------------
// 5. LOOPS (bonus!)
// ---------------------------------------------

favoriteFoods.forEach(function (food) {
  console.log(`I love ${food}!`);
});
