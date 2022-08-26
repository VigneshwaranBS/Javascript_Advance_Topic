console.log("Hello");
console.log(window);

//Element selectors

//single selector
console.log(document.getElementById("my-form"));

console.log(document.querySelector(".container"));

//multiple selector
console.log(document.querySelector(".item"));
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName(".item"));

const items = document.querySelectorAll(".item");
items.forEach((item) => console.log(item));

//Manipulating DOM
const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = "HELLO"; // first element
ul.children[1].innerHTML = "vicky"; //indexing
ul.lastElementChild.innerHTML = "<h1>Hello World</h1>"; //last element

const btn = document.querySelector(".btn");
btn.style.background = "red";

//events

//mouse events

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById("my-form").style.background = "red";
  document.querySelector("body").classList.add("bg-dark");
  isLong.lastElementChild.innerHTML = "<h2>Hello World</h2>";
});

//keyboard event
const nameinput = document.querySelector("#name");
nameinput.addEventListener("input", (e) => {
  document.querySelector(".container").append(nameinput.value);
});
