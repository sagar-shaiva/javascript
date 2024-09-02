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

/*
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

*/

/*
//Function declaration
function calcAge1(birthYear) {
  return 2024 - birthYear;
}

const age1 = calcAge1(2000);
console.log(age1);

// Fucntion expressions

const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const age2 = calcAge2(2000);
console.log(age1, age2);

*/

/*
// Arrow Functions

const calcAge3 = (birthYear) => 2024 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years `;
};

console.log(yearsUntilRetirement(2000, "Sagar"));
console.log(yearsUntilRetirement(2001, "Suraj"));
*/

/*
// funtions calling other functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;

  return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
//reviewing functions

const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} already retired🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(2000, "Sagar"));
console.log(yearsUntilRetirement(2001, "Suraj"));
console.log(yearsUntilRetirement(1959, "Unknown"));
*/

/*
//Arrays

const friends = ["suraj", "Aishwarya", "Rajesh", "Yashwanth"];

console.log(friends);

const y = new Array(1996, 1998, 2000, 2001);

console.log(y[0]);
console.log(y[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Pramod";
console.log(friends);

const firstName = "Sagar";
const sagar = [firstName, "S", 2024 - 2000, "Coder"];
console.log(sagar);
console.log(sagar.length);

//exercise

const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const years = [1996, 1998, 2000, 2001];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);
*/
