"use strict";

/*
//activating strict mode

let hasDriversLicense = false;
const passTest = true;

if (passTest === true) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio";
// const private = 234;
// const if = 22;
*/

//Functions

function logger() {
  console.log("Hello my name is Sagar");
}

logger();
logger();
logger();

function fruitProcessor(apple, orange) {
  console.log(apple, orange);

  const juice = `Juice with ${apple} apples and ${orange} oranges.`;

  return juice;
}

const appleJuice = fruitProcessor(3, 5);

console.log(appleJuice);
console.log(fruitProcessor(2, 3));

const appleOrangeJuice = fruitProcessor(2, 6);

console.log(appleOrangeJuice);

const num = Number("24");
