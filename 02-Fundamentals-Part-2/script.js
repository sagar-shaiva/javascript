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

/*
//Basic array methods
const friends = ["Suraj", "Aishwarya", "Rajesh", "Yashwanth"];
const newLength = friends.push("Swaroop");
console.log(newLength);
console.log(friends);

friends.unshift("SuperMan");
console.log(friends);

//remove elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

friends.push(22);
console.log(friends.indexOf("Suraj"));
console.log(friends.indexOf("Bob"));
console.log(friends.includes("Aishwarya"));
console.log(friends.includes("Bob"));
console.log(friends.includes(22));

if (friends.includes("Suraj")) {
  console.log("You have a friend called Suraj");
}
*/

/*
//Introduction to objects

const sagar = {
  firstName: "Sagar",
  lastName: "S",
  age: 2024 - 2000,
  job: "Coder",
  friends: ["Suraj", "Rashmi", "Aishwarya", "Tejaswini"],
};
*/
/*
//dot vs bracket notation

const sagar = {
  firstName: "Sagar",
  lastName: "S",
  age: 2024 - 2000,
  job: "Coder",
  friends: ["Suraj", "Rashmi", "Aishwarya", "Tejaswini"],
};

console.log(sagar);

console.log(sagar.firstName);
console.log(sagar["lastName"]);

const nameKey = "Name";

console.log(sagar["first" + nameKey]);
console.log(sagar["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName,lastName,age,job and friends"
);

if (sagar[interestedIn]) {
  console.log(sagar[interestedIn]);
} else {
  console.log(
    "Wrong request  Choose between firstName,lastName,age,job and friends"
  );
}

sagar.location = "Mysore";
sagar["twitter"] = "@imsagarshaiva";
console.log(sagar);

//challenge

console.log(
  `${sagar.firstName} has ${sagar.friends.length} friends, and his bestfriend is called ${sagar.friends[0]}`
);
*/
/*
//object methods
const sagar = {
  firstName: "Sagar",
  lastName: "S",
  birthYear: 2000,
  job: "Coder",
  friends: ["Suraj", "Rashmi", "Aishwarya", "Tejaswini"],
  hasDriversLicense: true,
  // calcAge: function (birthYear) {
  //   return 2024 - birthYear;
  // },
  calcAge: function () {
    // console.log(this);
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(sagar.calcAge());
console.log(sagar.age);
// console.log(sagar["calcAge"](2000));

//challenge
console.log(sagar.getSummary());
*/
/*
//Iteration

for (let rep = 1; rep <= 10; rep++) {
  console.log(`I'm sagar , i go from ${rep}`);
}
  */
/*
//looping arrays,breaking and continuing

const sagar = [
  "Sagar",
  "S",
  2024 - 2000,
  "Coder",
  ["Suraj", "Rashmi", "Aishwarya", "Tejaswini"],
];

const types = [];
for (let i = 0; i < sagar.length; i++) {
  console.log(sagar[i], typeof sagar[i]);
  //filling types of array
  // types[i] = typeof sagar[i];
  types.push(typeof sagar[i]);
}
console.log(types);

const years = [1996, 1998, 2000, 2001, 2007];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
}

console.log(ages);

//continue and break

console.log("------only strings-------");
for (let i = 0; i < sagar.length; i++) {
  if (typeof sagar[i] !== "string") continue;

  console.log(sagar[i], typeof sagar[i]);
}

console.log("------only number-------");
for (let i = 0; i < sagar.length; i++) {
  if (typeof sagar[i] == "number") break;

  console.log(sagar[i], typeof sagar[i]);
}
*/

/*

//looping backwards and loops in loops

const sagar = [
  "Sagar",
  "S",
  2024 - 2000,
  "Coder",
  ["Suraj", "Rashmi", "Aishwarya", "Tejaswini"],
  true,
];

for (let i = sagar.length - 1; i >= 0; i--) {
  console.log(sagar[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---------------starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Execise ${exercise}:lifting weight repition ${rep}`);
  }
}
*/

//while loop
let rep = 1;

while (rep <= 10) {
  console.log(`While: lifting weight repition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
