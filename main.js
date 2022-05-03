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


// ----------------------------- Practice part 1 --------------------------------
let firstName = "Haya";
let lastName = "Barakat";

let fullName = firstName + " " + lastName;
console.log(fullName);

let name = "Linda";
let greeting = "Hi there";
function myGreeting() {
  console.log(greeting + ", " + name + "!")
}
myGreeting()

let myPoints = 3;

function add3Points() {
  myPoints += 3;
}

function remove1Point() {
  myPoints --
}
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

console.log(myPoints)