// =============================================
// 03 · To-Do App — SOLUTION
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
// ---------------------------------------------

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = input.value.trim();

  if (text === "") {
    return;
  }

  addTodo(text);

  input.value = "";
  input.focus();
});


// ---------------------------------------------
// STEP 3: Build a new to-do and put it on the page
// ---------------------------------------------

function addTodo(text) {
  const li = document.createElement("li");
  li.classList.add("todo-item");

  const span = document.createElement("span");
  span.classList.add("todo-text");
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "🗑️";

  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  // ---- STEP 4: Make it interactive ----

  span.addEventListener("click", function () {
    li.classList.toggle("done");
    updateCount();
  });

  deleteBtn.addEventListener("click", function () {
    li.remove();
    updateCount();
  });

  updateCount();
}


// ---------------------------------------------
// STEP 5: Show how many tasks are left
// ---------------------------------------------

function updateCount() {
  const remaining = document.querySelectorAll(".todo-item:not(.done)").length;

  if (remaining === 1) {
    countText.textContent = "1 task left";
  } else {
    countText.textContent = remaining + " tasks left";
  }
}
