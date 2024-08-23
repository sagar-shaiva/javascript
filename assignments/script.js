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
