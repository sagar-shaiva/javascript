"use strict";
// Challenge 1

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMARK = massMark / (heightMark * heightMark);
// const BMIJOHN = massJohn / (heightJohn * heightJohn);

// console.log(BMIMARK);
// console.log(BMIJOHN);

// console.log(BMIMARK > BMIJOHN);

// Challenge 2

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
// } else {
//   console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
// }

// CHALLENGE 3

// const scoreDolphins = (96+108+89)/3;
// const scoreKoalas = (88+91+110)/3;

// if(scoreDolphins>scoreKoalas){
//     console.log("Dolphins win the trophy");
// }else if(scoreKoalas == scoreDolphins){
//     console.log("Both win the trophy");
// }else{
//     console.log("Koalas win the trophy");
// }

// BONUS 1
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;

// if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreKoalas >= 100 && scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the trophy");
// } else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log("both win trophy");
// }

// CHALLENGE 4 ---------------

// const bill = 275;

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(
//   `The bill was ${bill} , the tip was ${tip}, and the total value ${bill + tip}`
// );

// JavaScript Fundamentals – Part 2-------------------------------------

// CODING EXERCISE 5---------------------------------

// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };

// const scoreDolphins = function (score1, score2, score3) {
//   const avg = calcAverage(score1, score2, score3);
//   return avg;
// };
// const scoreKoalas = function (score1, score2, score3) {
//   const avg = calcAverage(score1, score2, score3);
//   return avg;
// };

// let avgDolphins = scoreDolphins(44, 23, 71);
// let avgKoalas = scoreKoalas(65, 54, 49);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins win`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas win`);
//   } else {
//     console.log("no team wins");
//   }
// };

// //test 2 ------

// avgDolphins = scoreDolphins(85, 54, 41);
// avgKoalas = scoreKoalas(23, 34, 27);
// console.log(avgDolphins, avgKoalas);

// checkWinner(avgDolphins, avgKoalas);

// CODING EXERCISE 6---------------------------------

// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };

// const bills = [125, 555, 44];

// const tips = [
//   calcTip(bills[0]),
//   calcTip(bills[1]),
//   calcTip(bills[bills.length - 1]),
// ];

// const totals = [
//   bills[0] + tips[0],
//   bills[1] + tips[1],
//   bills[bills.length - 1] + tips[tips.length - 1],
// ];

// console.log(tips);
// console.log(totals);

// CODING EXERCISE 7---------------------------------

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// john.calcBMI();
// mark.calcBMI();
// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
//   );
// }

// console.log(mark);
// console.log(john);

// CODING EXERCISE 8---------------------------------

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
