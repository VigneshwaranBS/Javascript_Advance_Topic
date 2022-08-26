console.log("Javascript advanced topic");

// console.log(window);

// Functions;
function addnum(num1, num2) {
  console.log(num1 + num2);
}

addnum(26, 8);

const a = add(5, 5);

function add(add1, add2) {
  return add1 * add2;
}

console.log(a);

function greet(greeting = "hello", name) {
  if (!name) {
    console.log(greeting + name);
    return greeting + name;
  } else {
    // console.log(`${greeting} ${name}`);
    return `${greeting} ${name}`;
  }
}
greet("");
console.log(greet);

//Arrow functions
//without parameters

const aa = () => {
  console.log("Arrow Function");
};
aa();

const aaa = (Number) => {
  console.log(Number);
};
aaa(2656);

//with multi parameter

const b = (a, b, c) => {
  console.log(a + b + c);
};
b(5, 45, 52);

//with default

const bb = (a, b = 22) => {
  console.log(a * b);
};
bb(3);

const greet1 = (greeting = "hello", name = "there") => `${greeting} ${name}`;
console.log(greet1("hi"));

// OOPS concepts
// Constructor

function person(firstname, lastname, dob) {
  //   // Set objetc
  this.firstname = firstname;
  this.lastname = lastname;
  this.dob = new Date(dob);
  //   // return firstname, lastname, dob;
  this.getbirthyear = function() {
    return this.dob.getFullYear();
  };
  this.getfullname = function() {
    return `${this.firstname} ${this.lastname}`;
  };
}
// firstname("vicky");
// lastname("vignesh");
// dob("20*08-2002");

//class
class person3 {
  constructor(firstname, lastname, dob) {
    // Set object
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
  }
  getbirthyear() {
    return this.dob.getFullYear;
  }
  getfullname() {
    return `${this.firstname} ${this.lastname}`;
  }
}

//instantiate object
const person1 = new person("ram", "vignesh", "20-8-2002");
const person2 = new person("ram", "vicky", "20-8-2002");

console.log(person1.dob.getFullYear, person2.lastname);

console.log(person1.getfullname());
console.log(person1);
