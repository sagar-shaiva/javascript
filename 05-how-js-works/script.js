'use strict';

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age},born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'suraj';
//       output = 'New Output';

//       const str = `oh ,and you're a millenial,${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       //   const output = 'New Output';
//     }

//     console.log(millenial);
//     console.log(output);
//   }

//   printAge();
//   return age;
// }

// const firstName = 'sagar';
// calcAge(1995);

// console.log(age);
// printAge();

// hoisting and tdz------------------
console.log(me);
// console.log(job);
// console.log(year);

var me = 'sagar';
let job = 'engineer';
const year = 2000;

//functions

console.log(addDecl(1, 2));
console.log(addExpr(1, 2));
console.log(addArrow(1, 2));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
var y = 2;
const z = 3;
