"use strict";

// let hasDriversLicence = false;

// const testPass = true;

// if (testPass) hasDriversLicence = true;

// if (hasDriversLicence) console.log("I can drive");

// const interface = "audio";
// const private = "audio";

// FUNCTIONS -----------------------------------------

// function logger() {
//   console.log("I'm Sagar");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// //FUNCTION DECLARATION

// const age1 = calcAge1(2000);

// function calcAge1(birthYear) {
//   return 2050 - birthYear;
// }

// FUNCTION EXPRESSION--------------------------------------

// const calcAge2 = function (birthYear) {
//   return 2050 - birthYear;
// };

// const age2 = calcAge2(2007);
// console.log(age2);

// ARROW FUNCTION

// const calcAge3 = (birthYear) => 2050 - birthYear;

// const age3 = calcAge3(2000);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   return ` ${firstName} retires in ${retirement} years`;
// };

// console.log(yearUntilRetirement(2000, "sagar"));
// console.log(yearUntilRetirement(2001, "suraj"));

//FUNTION CALLING OTHER FUNCTIONS

// const cutPieces = function (fruit) {
//   return fruit * 4;
// };

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutPieces(apples);
//   const orangePieces = cutPieces(oranges);

//   const juice = `juice with ${applePieces} apples and ${orangePieces} oranges.`;

//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcage = function (birthYear) {
//   return 2023 - birthYear;
// };

// const yearUntilRetirement = function (birthYear, firstName) {
//   const age = calcage(birthYear);

//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} already retired`);
//     return -1;
//   }
// };

// console.log(yearUntilRetirement(2000, "sagar"));

// ARRAYS ---------------------------------------------------

// const friends = ["sagar", "suraj", "madhu", "shiva"];

// console.log(friends[1]);
// console.log(friends);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "sakura";
// console.log(friends[2]);
// // friends = ['yes','no'];

// const firstName = "Sagar";
// const sagar = ["Hi", firstName, 2023 - 2000, "nice friends", friends];

// console.log(sagar);
// console.log(sagar.length);

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const years = [2000, 2001, 2007, 1982];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);

const friends = ["sagar", "suraj", "madhu", "shiva"];

// ADD ELEMENTS
const newLength = friends.push("Gani");
console.log(friends);
console.log(newLength);

friends.unshift("Samurai");
console.log(friends);

// REMOVE ELEMENTS
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

friends.push(23);
console.log(friends.indexOf("sagar"));
console.log(friends.indexOf("mom"));
console.log(friends.includes("sagar"));
console.log(friends.includes("mom"));
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("suraj")) {
  console.log("your friend suraj is there");
}
