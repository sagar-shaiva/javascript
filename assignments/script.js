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
