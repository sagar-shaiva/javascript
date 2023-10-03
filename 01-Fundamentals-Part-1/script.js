/*
let js = "amazing";
console.log(1 + 22 + 24);

console.log("sagar");
console.log(23);

let firstName = "Sagar";
console.log(firstName);

let person = "sagar";
let PI = 3.1415;

let myFirstJob = "engineer";
let currentJob = "Product Support Engineer (Slack)";
console.log(myFirstJob);
*/

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof javascriptIsFun);
// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof "sagar");

// javascriptIsFun = "yes!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 2000;
// console.log(typeof year);

// console.log(typeof null);

// const birthYear = 2000;

// var job = "teacher";
// job = "coder";

// const now = 2023;
// const ageSagar = now - 2000;
// const ageMadhu = now - 2007;
// console.log(ageSagar);
// console.log(ageSagar * 2, ageMadhu / 2, 2 ** 3);

// const firstName = "S";
// const lastName = "Sagar";
// console.log(firstName + " " + lastName);
// let x = 10 + 5; //15
// x += 10; //x=x+10 = 25
// x *= 2;
// x++;
// x--;
// console.log(x);

// comparison operator

// console.log(ageSagar > ageMadhu);
// console.log(ageMadhu >= 18);

// const isFullage = ageMadhu >= 18;
// console.log(isFullage);

// console.log(now - 2000 > now - 2007);

// const averageAge = (ageSagar + ageMadhu) / 2;
// console.log(ageSagar, ageMadhu, averageAge);

// const firstName = "Sagar";
// const job = "engineer";
// const birthYear = 2000;
// const year = 2023;
// const sagar =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(sagar);

// const newSagar = `I'm ${firstName}, a ${year - birthYear} years old ${job} !`;
// console.log(newSagar);

// console.log(
//   "im super\n\
// and fine\n\
// perfect"
// );

// console.log(`I'm Sagar
// and im
// engineer`);

// const age = 15;

// if (age >= 18) {
//   console.log("Can have driving license");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`too young. wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2000;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

//type conversion
// const inputYear = "2000";
// console.log(inputYear + 23);
// console.log(Number(inputYear) + 23);
// console.log(String(23));
// console.log(Number("sagar"));

// //type coercion
// console.log("im " + 23 + " years old");
// console.log("12" + 3);
// console.log("12" - "2" - "5");
// console.log("12" - "2");
// console.log("12" / "2");

// let n = "10";
// n = n - 1;
// console.log(n);

// 5 FALSY VALUES
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean({}));
// console.log(Boolean("sagar"));

// const age = "18";

// if (age === 18) console.log("you just became an adult :D strict");
// if (age == 18) console.log("you just became an adult :D loose");

// const favourite = Number(prompt("what is your favourite number?"));
// console.log(typeof favourite);

// if (favourite === 9) {
//   console.log("lucky number :)");
// } else if (favourite === 2) {
//   console.log("great number");
// } else if (favourite === 5) {
//   console.log("nice one");
// } else {
//   console.log("your cool number is not 2 and 9");
// }

// if (favourite !== 9) {
//   console.log("why not 9?");
// }

// logical operator

// const hasDriverLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision) {
//   console.log("able to drive");
// } else {
//   console.log("someone else should drive");
// }

// const isTired = false; //C

// if (hasDriverLicense && hasGoodVision && !isTired) {
//   console.log("drive crazy");
// } else {
//   console.log("no drive");
// }

// switch statement-----------------

// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("work started");
//     console.log("Kick start");
//     break;
//   case "tuesday":
//     console.log("continue working");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("keep on learning and coding");
//     break;
//   case "friday":
//     console.log("chill out");
//     break;
//   case "saturday":
//     console.log("attend M.tech classes");
//     break;
//   case "sunday":
//     console.log("Take rest and enjoy");
//     break;
//   default:
//     console.log("Not in a earth day");
// }

// // conditional ternery operator

// const age = 23;

// // age >= 18 ? console.log("ok boy") : console.log("not ok boy");

// const drink = age >= 18 ? "wine🍷" : "water💧";

// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine 🍷";
// } else {
//   drink2 = "water 💧";
// }

// console.log(drink2);

// console.log(`i like to drink ${age >= 18 ? "wine🍷" : "water 💧"}`);
