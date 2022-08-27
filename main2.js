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
// ul.firstElementChild.textContent = "HELLO"; // first element
// ul.children[1].innerHTML = "vicky"; //indexing
// ul.lastElementChild.innerHTML = "<h1>Hello World</h1>"; //last element

// const btn = document.querySelector(".btn");
// btn.style.background = "red";

//events

//mouse events

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e.target.className);
//   document.getElementById("my-form").style.background = "red";
//   document.querySelector("body").classList.add("bg-dark");
//   ul.lastElementChild.innerHTML = "<h2>Hello World</h2>";
// });

//keyboard event
const nameinput = document.querySelector("#name");
nameinput.addEventListener("input", (e) => {
  document.querySelector(".container").append(nameinput.value);
});

// USER FROM SCRIPT
// Put DOM elements into variables
const myform = document.querySelector("#my-form");
const nameinput1 = document.querySelector("#name");
const emailinput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const uselist = document.querySelector("#users");

//Listen for form submit
myform.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameinput1.value === " " || emailinput.value === " ") {
    // alert("Enter all fields");
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    //remove error message for 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    //create new users
    const li = document.createElement("li");

    //add text to input values
    li.appendChild(
      document.createTextNode(`${nameinput1.value}: ${emailinput.value}`)
    );

    //add to list
    uselist.append(li);

    //clear fields after adding
    nameinput1.value = "";
    emailinput.value = "";
  }
}
