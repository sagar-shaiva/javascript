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

// const friends = ["sagar", "suraj", "madhu", "shiva"];

// ADD ELEMENTS
// const newLength = friends.push("Gani");
// console.log(friends);
// console.log(newLength);

// friends.unshift("Samurai");
// console.log(friends);

// // REMOVE ELEMENTS
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// friends.push(23);
// console.log(friends.indexOf("sagar"));
// console.log(friends.indexOf("mom"));
// console.log(friends.includes("sagar"));
// console.log(friends.includes("mom"));
// console.log(friends.includes("23"));
// console.log(friends.includes(23));

// if (friends.includes("suraj")) {
//   console.log("your friend suraj is there");
// }

// OBJECTS

// const sagarArrays = ["s", "sagar", 2023 - 2000, "engineer", ["suraj", "madhu"]];

// const sagar = {
//   firstName: "s",
//   lastName: "sagar",
//   age: 2023 - 2000,
//   job: "engineer",
//   friends: ["suraj", "madhu"],
// };

// const sagar = {
//   firstName: "s",
//   lastName: "sagar",
//   age: 2023 - 2000,
//   job: "engineer",
//   friends: ["suraj", "madhu"],
// };

// console.log(sagar);
// console.log(sagar.firstName);
// console.log(sagar["lastName"]);

// const nameKey = "Name";
// console.log(sagar["first" + nameKey]);
// console.log(sagar["last" + nameKey]);

// const interestedIn = prompt(
//   "what do you want to know about jonas? choose between firstName,lastName,age,job and friends"
// );

// console.log(sagar[interestedIn]);

// if (sagar[interestedIn]) {
//   console.log(sagar[interestedIn]);
// } else {
//   console.log(
//     "wrong request choose between firstName,lastName,age,job and friends"
//   );
// }

// sagar.location = "Mysore";
// sagar["twitter"] = "@imsagarshaiva";
// console.log(sagar);

// console.log(
//   `${sagar.lastName} has ${sagar.friends.length} friends, and his best friend is called ${sagar.friends[0]}`
// );

// challenge

// const sagar = {
//   firstName: "s",
//   lastName: "sagar",
//   birthYear: 2000,
//   job: "engineer",
//   friends: ["suraj", "madhu"],
//   hasDrivingLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2023 - birthYear;
//   // },
//   // calcAge: function () {
//   //   return 2023 - this.birthYear;
//   // },
//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.lastName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDrivingLicense ? "a" : "no"} driver's license`;
//   },
// };

// console.log(sagar.calcAge());
// console.log(sagar["getSummary"]());

// FOR LOOP ------------------------------------------

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Repitition ${rep}`);
// }

// const sagar = [
//   "sagar",
//   "S",
//   2023 - 2000,
//   "Engineer",
//   ["suraj", "madhu", "shiva"],
//   true,
// ];

// const types = [];

// for (let i = 0; i < sagar.length; i++) {
//   //reading array
//   console.log(sagar[i], typeof sagar[i]);
//   //filling types of array
//   // types[i] = typeof sagar[i];
//   types.push(typeof sagar[i]);
// }

// console.log(types);

// const years = [1991, 2000, 2007, 2001];

// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2023 - years[i]);
// }
// console.log(ages);

// // continue and break
// console.log("--------ONLY STRINGS-------");
// for (let i = 0; i < sagar.length; i++) {
//   if (typeof sagar[i] !== "string") continue;
//   console.log(sagar[i], typeof sagar[i]);
// }

// console.log("--------Break with number-------");
// for (let i = 0; i < sagar.length; i++) {
//   if (typeof sagar[i] === "number") break;
//   console.log(sagar[i], typeof sagar[i]);
// }

const sagar = [
  "sagar",
  "S",
  2023 - 2000,
  "Engineer",
  ["suraj", "madhu", "shiva"],
];

for (let i = sagar.length - 1; i >= 0; i--) {
  console.log(sagar[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----------starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️`);
  }
}

let rep = 1;

while (rep <= 10) {
  console.log(`while: Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`loop is about to end ...`);
  }
}
