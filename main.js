// --- DOM: Document Object Model (how you use JS to modify a website) ---
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count++;
  countEl.textContent = count;
  console.log(count)
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  count = 0; 
  countEl.textContent = 0;
  console.log(count)
}

