# JavaScript Basics + the DOM

A 90-minute, hands-on lesson for beginners. You'll warm up with core JavaScript, learn how JavaScript "talks to" a web page through the DOM, and finish by building a working to-do list app.

## What you need

- A web browser (Chrome or Firefox recommended)
- A code editor (VS Code recommended)
- Optional: the **Live Server** extension for VS Code, so the page refreshes every time you save

No installs, frameworks, or build tools. Just HTML, CSS, and JavaScript.

## Getting started

```bash
git clone <this-repo-url>
cd js-dom-lesson
```

Open any `index.html` file in your browser (double-click it, or right-click → "Open with Live Server").

To see `console.log` output, open your browser's DevTools:

- **Mac:** `Cmd + Option + J`
- **Windows:** `Ctrl + Shift + J`

## Branches

| Branch     | What's in it |
|------------|--------------|
| `main`     | The **starter** code. Follow the `TODO` comments and fill in the blanks. |
| `solution` | The **finished** code. Peek here if you're stuck — but try first! |

Switch branches with:

```bash
git switch solution   # see the finished version
git switch main       # back to the starter
```

> Tip: if you've made changes on `main`, commit or stash them before switching (`git stash`).

## The lesson

| Folder | Topic | Time |
|--------|-------|------|
| `01-warmup/` | Variables, functions, arrays, conditionals (in the console) | ~15 min |
| `02-dom-playground/` | Selecting elements, changing text & styles, click events | ~30 min |
| `03-todo-app/` | Build a to-do list: create, complete, and delete items | ~35 min |

Each folder has an `index.html`, a `script.js` with `TODO` comments, and (where needed) a `style.css`. You only need to edit `script.js`.

## Cheat sheet

```js
// Find ONE element (uses CSS selector syntax)
const title = document.querySelector("#title");   // by id
const btn = document.querySelector(".btn");       // by class

// Change what it says
title.textContent = "Hello!";

// Change how it looks
title.style.color = "tomato";
title.classList.add("highlight");
title.classList.toggle("done");

// React to the user
btn.addEventListener("click", function () {
  console.log("clicked!");
});

// Make a brand-new element and put it on the page
const li = document.createElement("li");
li.textContent = "New item";
document.querySelector("#list").appendChild(li);
```

## Stretch goals (if you finish early)

1. Press **Enter** to add a to-do (not just clicking the button).
2. Add a "Clear completed" button.
3. Save your to-dos with `localStorage` so they survive a page refresh.
4. Show a friendly message when the list is empty.
