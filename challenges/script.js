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

const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const scoreDolphins = function (score1, score2, score3) {
  const avg = calcAverage(score1, score2, score3);
  return avg;
};
const scoreKoalas = function (score1, score2, score3) {
  const avg = calcAverage(score1, score2, score3);
  return avg;
};

let avgDolphins = scoreDolphins(44, 23, 71);
let avgKoalas = scoreKoalas(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win`);
  } else {
    console.log("no team wins");
  }
};

//test 2 ------

avgDolphins = scoreDolphins(85, 54, 41);
avgKoalas = scoreKoalas(23, 34, 27);
console.log(avgDolphins, avgKoalas);

checkWinner(avgDolphins, avgKoalas);
