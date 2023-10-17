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
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'sagar';
// let job = 'engineer';
// const year = 2000;

// //functions

// console.log(addDecl(1, 2));
// console.log(addExpr(1, 2));
// console.log(addArrow(1, 2));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// // example
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// var x = 1;
// var y = 2;
// const z = 3;

// this keyword

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2023 - birthYear);
//   console.log(this);
// };

// calcAge(2000);

// const calcAgeArrow = birthYear => {
//   console.log(2023 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(2000);

// const sagar = {
//   year: 2000,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.year);
//   },
// };

// sagar.calcAge();

// const suraj = {
//   year: 2001,
// };

// suraj.calcAge = sagar.calcAge;
// suraj.calcAge();

// const f = sagar.calcAge;
// f();

// regular vs arrow function

// var firstaName = 'sagar';

// const sagar = {
//   firstaName: 'sagar',
//   year: 2000,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2023 - this.year);

//     //solution 1

//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     //   //   console.log(this.year >= 1981 && this.year <= 1996);
//     // };
//     // isMillenial();

//     //solution 2

//     const isMillenial = () => {
//       console.log(this.year >= 1981 && this.year <= 1996);
//       //   console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => console.log(`hey ${this.firstaName}`),
// };

// sagar.calcAge();
// sagar.greet();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 3);
// addExpr(2, 3, 5, 7, 9);

// const addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 8, 5);

// primitives vs objects

let age = 22;
let oldAge = age;
age = 23;
console.log(age);
console.log(oldAge);

const me = {
  name: 'sagar',
  age: 23,
};

const friend = me;

friend.age = 22;
console.log('Me', me);
console.log('friend', friend);

let lastName = 'Sagar';
let oldLastName = lastName;
lastName = 'Sagari';
console.log(oldLastName, lastName);
2;

const jessica = {
  FirstName: 'Jessica',
  lastName: 'Williams',
  age: 23,
};

const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';

console.log('before marraige', jessica);
console.log('after marraige', marriedJessica);

const jessica2 = {
  FirstName: 'Jessica',
  lastName: 'Williams',
  age: 23,
  family: ['madhu', 'shiva', 'nandini'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

console.log('before marraige', jessica2);
console.log('after marraige', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('before marraige', jessica2);
console.log('after marraige', jessicaCopy);
