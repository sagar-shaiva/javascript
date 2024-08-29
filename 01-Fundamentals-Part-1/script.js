/*
let js = "amazing";
console.log(24 + 4 + 21);

console.log("sagar");
console.log(24);
//variable and name convention
let firstName = "Sagar";
console.log(firstName);
let $function = 27;

let person = "sagar";
let PI = 3.1315;

let myFirstJob = "Programmer";
let mycurrentJob = "Coder";

console.log(myFirstJob);
*/

//data types

/*let javascdriptIsFun = true;
console.log(javascdriptIsFun);

// console.log(typeof true);
// console.log(typeof "sagar");
// console.log(typeof 24);
console.log(typeof javascdriptIsFun);

javascdriptIsFun = "Yes!";

console.log(typeof javascdriptIsFun);

let age;

console.log(age);
console.log(typeof age);

age = 24;
console.log(typeof age);

console.log(typeof null);

*/

/*
//let ,const ,var

let age = 23;
age = 24;

const birthYear = 2000;
//birthYear = 2000;

// const job;

var job = "programmer";

job = "teacher";
*/

/*
// Basic operators

//Math operators
const now = 2024;
const sagarAge = now - 2000;
const madhuAge = now - 2007;

console.log(sagarAge, madhuAge);

console.log(sagarAge * 2, madhuAge * 2, 2 ** 3, 2 / 2);

const firstName = "Sagar";
const lastName = "S";
console.log(firstName + " " + lastName);

//assignment operarors

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;

console.log(x);

//comparison operators
console.log(sagarAge > madhuAge); // > ,<,>=,<=
console.log(madhuAge >= 18);

const isFullAge = madhuAge >= 18;

console.log(now - 2000 > now - 2007);
*/

/*
//operator precedence

const now = 2024;
const sagarAge = now - 2000;
const madhuAge = now - 2007;

console.log(now - 2000 > now - 2007);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (sagarAge + madhuAge) / 2;
console.log(sagarAge, madhuAge, averageAge);
*/

//if else statement

/*
const age = 15;

if (age >= 18) {
  console.log("Sagar can start driving license🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sagar is too young. Wait another ${yearsLeft} Years :)`);
}

const birthYear = 2000;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

/*
//Type Conversion

const inputYear = "2000";
console.log(Number(inputYear, inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion

console.log("I'm" + 23 + "years old");
console.log("I'm" + 23 + "years old");
console.log("23" - "10" + 3);
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);
console.log("123" < 57);
*/
/*
//truthy and falsy value

// 5 falsy value 0,',undefined,null,NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Sagar"));
console.log(Boolean(""));
console.log(Boolean({}));

const money = 100;

if (money) {
  console.log("Don't spend it all");
} else {
  console.log("you should get a job");
}

// let height;
let height = 5.8;

if (height) {
  console.log("height is defined");
} else {
  console.log("Height is undefined");
}
*/
/*
//Equality Operators

const age = "18";

if (age === 18) console.log("You just became an adult (strict)");

if (age == 18) console.log("You just became an adult (loose)");

const favourite = Number(prompt('what"s your favourite number'));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("cool! 23 is an amazing number");
} else if (favourite === 9) {
  console.log("9 is a very good number");
} else if (favourite === 2) {
  console.log("2 is a fine good number");
} else {
  console.log("number is not 2,23 or 9");
}

if (favourite !== 23) console.log("why not 23");
*/
/*
//Logical operator

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sagar is able to drive");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision) {
  console.log("Sagar is able to drive");
} else {
  console.log("Someone else should drive...");
}
*/

/*
//Switch statement

const day = "thursday";

switch (day) {
  case "monday":
    console.log("Plan my course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Do all dare tasks");
    break;
  case "wednesday":
  case "thursday":
    console.log("Busy day");
    break;
  case "friday":
    console.log("relax day");
    break;
  case "saturday":
  case "sunday":
    console.log("Weekend Funday");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Plan my course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Do all dare tasks");
} else if (day === "wednesday" || day === "thursday") {
  console.log("busy day");
} else if (day === "friday") {
  console.log("relax day");
} else if (day === "saturday" || day === "sunday") {
  console.log("Weekend Fun day");
}

*/
/*
//conditional operator(ternary)
const age = 24;
// age >= 18
//   ? console.log("I like to drink Wine🍷")
//   : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(` i like to drink ${age >= 18 ? "wine" : "water"}`);
*/
