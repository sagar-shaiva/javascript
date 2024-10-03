'use strict';

// scoping in practice--------------------------

// function calcAge(birthYear) {
//   const age = 2024 - birthYear;
//   console.log(firstName);

//   function printAge() {
//     let output = `${firstName} you are ${age},born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;

//       //creating new varialble with same name as outer scope's variable
//       const firstName = 'S Sagar';
//       output = 'New Output!';
//       //reassigning outer scope variable
//       const str = `oh,and you're a millenial,${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2,2));
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Sagar';
// calcAge(1996);
/*
// Hoisting--------------------------

//variables
console.log(me);
// console.log(job);
// console.log(year);
var me = 'Sagar';
let job = 'Software Engineer';
const year = 2000;

// functions
console.log(addDecl(1, 2));
// console.log(addExpr(1, 2));
// console.log(addArrow(1, 2));
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => {
  return a + b;
};

//example
if (!numProducts) {
  deleteShoppingCart();
}
var numProducts = 10;
function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

// This keyword---------------
/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
};

calcAge(2000);

const calcAgeArrow = birthYear => {
  console.log(2024 - birthYear);
  console.log(this);
};

calcAgeArrow(2000);

const sagar = {
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },
};

sagar.calcAge();

const madhu = {
  year: 2007,
};

madhu.calcAge = sagar.calcAge;
madhu.calcAge();

const f = sagar.calcAge;

f();
*/

/*

//regular vs arrow function
var firstName = 'S';
const sagar = {
  firstName: 'Sagar',
  year: 2000,
  calcAge: function () {
    // console.log(this);
    console.log(2024 - this.year);

    //solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: function () {
    console.log(this);
    console.log(`hey ${this.firstName}`);
  },
};

sagar.greet();

sagar.calcAge();

//argument keyword
const addExpr = function (a, b) {
  console.log(arguments);

  return a + b;
};

addExpr(2, 2);
addExpr(2, 2, 4, 8);

var addArrow = (a, b) => {
  console.log(arguments);
  a + b;
};

// addArrow(2, 3, 4); not exists multiple parameter in arrow function
*/
/*
//primitive vs objects (reference)

let age = 24;
let oldAge = age;
age = 25;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Sagar',
  age: 24,
};

const friend = me;

friend.age = 23;

console.log('Friend', friend);
console.log('me', me);


//primitive types
let lastName = 'S';
let oldLastName = lastName;
lastName = 'ShivakumaraSwamy';
console.log(lastName, oldLastName);

//reference types
const sagar = {
  firstName: 'S',
  lastName: 'sagar',
  age: 24,
};

const singleSagar = sagar;
singleSagar.firstName = 'Shivakumaraswamy';

console.log('before sagar', sagar);
console.log('Single  sagar', singleSagar);

// copying objects

const sagar2 = {
  firstName: 'S',
  lastName: 'sagar',
  age: 24,
  family: ['Madhu', 'Nandini'],
};

const singleSagarCopy = Object.assign({}, sagar2);
singleSagarCopy.firstName = 'ShivakumaraSwamy2';

singleSagarCopy.family.push('ShivakumaraSwamy');
console.log('before Sagar2', sagar2);
console.log('after SingleSagarCopy', singleSagarCopy);
*/
