"use strict";

// let hasDriversLicence = false;

// const testPass = true;

// if (testPass) hasDriversLicence = true;

// if (hasDriversLicence) console.log("I can drive");

// const interface = "audio";
// const private = "audio";

// FUNCTIONS ------------------

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

// FUNCTION EXPRESSION

const calcAge2 = function (birthYear) {
  return 2050 - birthYear;
};

const age2 = calcAge2(2007);
console.log(age2);

// ARROW FUNCTION

const calcAge3 = (birthYear) => 2050 - birthYear;

const age3 = calcAge3(2000);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return ` ${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement(2000, "sagar"));
console.log(yearUntilRetirement(2001, "suraj"));
