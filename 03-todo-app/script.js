// =============================================
// 03 · To-Do App
// Put it all together: find elements, listen for events,
// CREATE new elements, and update the page.
// =============================================

// ---------------------------------------------
// STEP 1: Grab the elements we need
// ---------------------------------------------

const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const countText = document.querySelector("#todo-count");


// ---------------------------------------------
// STEP 2: Listen for the form being submitted
// A form "submits" when you click its button OR press Enter.
// By default the page reloads — event.preventDefault() stops that.
// ---------------------------------------------

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // TODO: Get what the user typed. Hint: input.value
  // .trim() removes extra spaces from the start and end.
  const text = "";

  // TODO: If text is empty, stop here (don't add a blank to-do).
  // Hint: if (text === "") { return; }


  // TODO: Call addTodo(text)


  // TODO: Clear the input box so it's ready for the next one.
  // Hint: set input.value to an empty string

});


// ---------------------------------------------
// STEP 3: Build a new to-do and put it on the page
// We want each to-do to look like this in the HTML:
//
//   <li class="todo-item">
//     <span class="todo-text">Buy milk</span>
//     <button class="delete-btn">🗑️</button>
//   </li>
// ---------------------------------------------

function addTodo(text) {
  // TODO: Create an <li> and give it the class "todo-item"
  // Hint: document.createElement("li") and li.classList.add(...)


  // TODO: Create a <span>, give it the class "todo-text",
  // and set its textContent to `text`


  // TODO: Create a <button>, give it the class "delete-btn",
  // and set its textContent to "🗑️"


  // TODO: Put the span and button INSIDE the li,
  // then put the li inside the list.
  // Hint: parent.appendChild(child)


  // ---- STEP 4: Make it interactive ----

  // TODO: When the span is clicked, toggle the class "done" on the li.
  // Then call updateCount().


  // TODO: When the delete button is clicked, remove the li.
  // Hint: li.remove()
  // Then call updateCount().


  updateCount();
}


// ---------------------------------------------
// STEP 5: Show how many tasks are left
// ---------------------------------------------

function updateCount() {
  // TODO: Count the to-dos that are NOT done.
  // Hint: document.querySelectorAll(".todo-item:not(.done)").length
  const remaining = 0;

  // TODO: Update countText. Bonus: say "1 task left" (not "1 tasks left").
  countText.textContent = remaining + " tasks left";
}


// ---------------------------------------------
// STRETCH GOALS (see README.md)
// 1. Add a "Clear completed" button
// 2. Show a message when the list is empty
// 3. Save to-dos in localStorage so they survive a refresh
// ---------------------------------------------
