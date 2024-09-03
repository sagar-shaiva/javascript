/*
//values and variables
const country = "India";
const continent = "Asia";
let population = 140;

console.log(country);
console.log(continent);
console.log(population);

//Data types

const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof population);
console.log(typeof country);

//let, const and var
language = "Kannada";
// isIsland = true;

//Basic Operators
population /= 2;
population++;
console.log(population > 6);
console.log(population < 33);

const description =
  country +
  " is in " +
  continent +
  " and its " +
  population +
  " million people speaks " +
  language;
console.log(description);

//if-else statements
population = 140;
if (population > 33) {
  console.log(`${country} population is above average`);
} else {
  console.log(
    `${country} population is ${33 - population} million below average`
  );
}
*/

/*
// equatlity operators

const numNeighbours = Number(
  prompt("How many neighbour countries does your contry have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
*/
/*
//Switch statement

const language = "english";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
    */

/*
//condtitional ternary operator

const country = "India";
const population = 140;

console.log(
  `${country} population is ${population > 33 ? "above" : "below"} average`
);
*/

/*
//Functions

function describeCountry(country, population, capitalCity) {
  const test = `${country} has ${population} million population and its capacity is ${capitalCity}`;
  return test;
}

const test1 = describeCountry("India", 140, "NewDelhi");
const test2 = describeCountry("USA", 40, "California");
const test3 = describeCountry("China", 130, "hong-Kong");

console.log(test1);
console.log(test2);
console.log(test3);

*/

/*

//Function declarations and expressions

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const indiaPop = percentageOfWorld1(1140);
const chinaPop = percentageOfWorld1(1130);
const usaPop = percentageOfWorld1(140);

console.log(indiaPop);
console.log(chinaPop);
console.log(usaPop);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const indiaPop1 = percentageOfWorld2(1140);
const chinaPop1 = percentageOfWorld2(1130);
const usaPop1 = percentageOfWorld2(140);

console.log(indiaPop1);
console.log(chinaPop1);
console.log(usaPop1);

*/
/*
//Arrow functions

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const indiaPop2 = percentageOfWorld3(1140);
const chinaPop2 = percentageOfWorld3(1130);
const usaPop2 = percentageOfWorld3(140);

console.log(indiaPop2);
console.log(chinaPop2);
console.log(usaPop2);
*/

/*
//funtion calling other functions

const percentageOfWorld1 = function (population) {
  return (population / 790) * 100;
};
const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world`;

  console.log(description);
};

describePopulation("India", 144);
describePopulation("China", 130);
describePopulation("USA", 130);

//Introduction to Arrays

const population = [140, 130, 40, 35];
console.log(population.length === 4);
const percentage = [
  percentageOfWorld1(population[0]),
  percentageOfWorld1(population[1]),
  percentageOfWorld1(population[2]),
  percentageOfWorld1(population[3]),
];

console.log(percentage);
*/

/*
//Basic array methods
const neighbours = ["Pakisthan", "China", "bangladesh", "Srilanka"];

neighbours.push("Utopia");
neighbours.pop();

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central european country :D");
}

neighbours[neighbours.indexOf("China")] = "Replulic of China";

console.log(neighbours);
*/
/*
//Introduction to objects

const myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Kannada",
  population: "6",
  neighbours: ["Andra", "Telangana", "Tamil Nadu", "Maharashtra", "Kerala"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;

    // Even simpler version (see why this works...)
    // this.isIsland = !Boolean(this.neighbours.length);
  },
};
myCountry.describe();
myCountry.checkIsland();

console.log(myCountry);
*/
/*
//iteration for loop
for (let vote = 1; vote <= 50; vote++) {
  console.log(`Voter number ${vote} is currently voting`);
}
*/
/*
//looping arrays
const populations = [10, 1441, 332, 83];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
}

console.log(percentages2);
*/
/*
//looping backwards

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(`Neighbours: ${listOfNeighbours[i][y]}`);
  }
}
*/
