'use strict'

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
/*
//while loop
const populations = [10, 1441, 332, 83];

const percentages3 = [];
const percentageOfWorld1 = function (population) {
  return (population / 790) * 100;
};

let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}

console.log(percentages3);
*/

//Detructuring arrays
const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];
///////////////////////////////////////
/*
const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);
const [, , thirdBook] = books;
console.log(thirdBook);

const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

console.log(fiveStarRatings, oneStarRatings, threeStarRatings);
*/

//destructuring objects
/*
const { title, author, ISBN } = books[0];
console.log(title, author, ISBN);

const { keywords: tags } = books[0];

console.log(tags);

const { language, programmingLanguage = 'unknown' } = books[6];
console.log(language, programmingLanguage);

let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookTitle, bookAuthor);

// const { rating: bookRating } = books[0].thirdParty.goodreads;
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
console.log(bookRating);

const printBookInfo = function ({ title, author, year = 'unknown' }) {
  console.log(`${title} by ${author} ${year}`);
};

printBookInfo({ title: 'Sagar', author: 'Sagar', year: 2024 });
*/

//spread operator
/*
const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);
const spellWord = function (word) {
  console.log(...word);
};

spellWord('Sagar');
*/

//rest pattern and parameters
/*
const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, rest);

const { publisher: bookPublisher, ...restOfTheBooks } = books[1];
console.log(bookPublisher, restOfTheBooks);

const printBookAuthorsCount = function (title, ...authors) {
  console.log(`The book ${title} has ${authors.length} authors`);
};

printBookAuthorsCount('"Sagar The Legend"', 'Sagar', 'Suraj', 'Others');
*/

//short circuiting
/*
function hasExamplesInJava(book) {
  console.log(book.programmingLanguage === 'Java' || 'no data available');
}

hasExamplesInJava(books[1]);

for (let i = 0; i < books.length; i++) {
  books[i].onlineContent &&
    console.log(`"${books[i].title}" provides online content`);
}
*/

//nullish coalescing operator
/*
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ??
    console.log(
      `"${books[i].title} provides no data about its online content"`
    );
}
*/

//logical assignment operator
/*
for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
}

for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
}
  */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//challenge 2 DS
/*
//1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}
//2.
const odds = Object.values(game.odds);
let average = 0;

for (const odd of odds) {
  average += odd;
}

average /= odds.length;
console.log(average);

//3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`odd of ${teamStr} ${odd}`);
}
*/
//challenge1
/*
const [players1, players2] = game.players;

console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(draw, team1, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// printGoals('Davies', 'Muller');
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/

//for-of loop
/*
let pageSum = 0;
for (const item of books) {
  pageSum += item.pages;
}

console.log(pageSum);

const allAuthors = [];
for (const book of books) {
  if (typeof book.author === 'string') {
    allAuthors.push(book.author);
  } else {
    for (const author of book.author) {
      allAuthors.push(author);
    }
  }
}

console.log(allAuthors);

for (const [i, el] of allAuthors.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/
//enhanced object literals
/*
const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

// Do the rest
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};

const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
};

console.log(newBook2);
*/

//optional chaining
/*
function getFirstKeyword(book) {
  return book.keywords?.[0];
}

getFirstKeyword(books[0]);
*/

//looping objects
/*
const entries = [];

for (const key of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([key]);
}
console.log(entries);

for (const [index, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries[index].push(value);
}

const entries2 = Object.entries(books[0].thirdParty.goodreads);
console.log(entries2);
*/
//Sets
/*
const allKeywords = [];
for (const book of books) {
  allKeywords.push(...book.keywords);
}

const uniqueKeywords = new Set(allKeywords);
console.log(uniqueKeywords);
uniqueKeywords.add('coding');
uniqueKeywords.add('science');
console.log(uniqueKeywords);
uniqueKeywords.delete('business');
console.log(uniqueKeywords);

const uniqueKeywordsArray = [...uniqueKeywords];
console.log(uniqueKeywordsArray);
uniqueKeywords.clear();
console.log(uniqueKeywords);
*/

//maps
/*
const bookMap = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);

bookMap.set('pages', 464);
console.log(bookMap);

console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);

console.log(bookMap.size);

if (bookMap.has('author')) {
  console.log('The author of the book is known');
}
*/

//maps iteration
/*
const firstBookMap = new Map(Object.entries(books[0]));

for (const [key, value] of firstBookMap) {
  if (typeof value === 'number') {
    console.log(key);
  }
}
*/

//coding challenge 3
/*
Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no 
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
*/
/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

//1.
const events = [...[new Set(gameEvents.values())]];
//2.
gameEvents.delete(64);

//3.
console.log(`An event happened,every ${90 / gameEvents.size} minutes`);
const time = [...gameEvents.keys()].pop();

console.log(time);
console.log(
  `An event happened,on everage,every ${time / gameEvents.size} minutes`
);

//4.

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'half' : 'Second';

  console.log(`[${half} half] ${min}: ${event}`);
}
*/

//strings part-1
/*
console.log(
  books[0].ISBN['6'],
  books[0].ISBN['4'],
  books[0].ISBN['9'],
  books[0].ISBN[8]
);
const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';
console.log(quote.indexOf('chess'));
console.log(quote.slice(quote.lastIndexOf(' ') + 1));

function isContributor(author) {
  return author.lastIndexOf('(Contributor)') !== -1;
}

console.log(isContributor('Julie Sussman (Contributor)'));
*/
//strings part-2
/*
function normalizeAuthorName(author) {
  author = author.trim();
  const firstName = author.slice(0, author.indexOf(' '));

  let lastName = '';
  if (author.indexOf(' ') === author.lastIndexOf(' ')) {
    lastName = author.slice(author.indexOf(' ') + 1, author.length);
  } else {
    lastName = author.slice(author.indexOf(' ') + 1, author.lastIndexOf(' '));
  }

  const capitalizedFirstName =
    firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  const capitalizedLastName =
    lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

  return capitalizedFirstName + ' ' + capitalizedLastName;
}

const newBookTitle = books[1].title.replace('Programs', 'Software');
function logBookTheme(title) {
  title = title.toLowerCase();

  if (title.startsWith('computer')) {
    console.log('This book is about computers');
  } else if (title.includes('algorithms') && title.includes('structures')) {
    console.log('This book is about algorithms and data structures');
  } else if ((title.endsWith('system') || title.endsWith('systems')) && !title.includes('operating')) {
    console.log('This book is about some systems, but definitely not about operating systems');
  }
}
  */

//strings part-3
/*
const bookCategories =
  'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
function logBookCategories(str) {
  const categories = str.split(';');

  for (let category of categories) {
    console.log(category);
  }
}
logBookCategories(bookCategories);

function getKeywordsAsString(books) {
  const keywords = [];

  for (const book of books) {
    keywords.push(...book.keywords);
  }

  const uniqueKeywords = [...new Set(keywords)];
  return uniqueKeywords.join(';');
}
console.log(getKeywordsAsString(books));

const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];
function logBookChapters(chapters) {
  for (const [chapter, pages] of chapters) {
    console.log(chapter.padEnd(20, '_') + ' ' + pages);
  }
}
logBookChapters(bookChapters);
*/

// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!*/
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20, ' ')}${'✅'.repeat(i + 1)}`);
  }
});
*/

/*
Object Oriented Programming (OOP) 
Coding Challenge #1
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 
'speed' property. The 'speed' property is the current speed of the car in 
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10, 
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log 
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and 
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h

*/
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
const bmw = new Car('BMW', 180);
const mercedes = new Car('Mercedes', 180);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();
*/

/*
Coding Challenge #2
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide 
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but 
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h
*/
/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const ford = new CarCl('ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
*/

//challenege 3

// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism �
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

//link prototypes

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed}km/h ,with a charge of ${this.charge}`
  );
};
const tesla = new EV('Tesla', 120, 23);

tesla.chargeBattery(90);
tesla.brake();
tesla.accelerate();
*/

// Coding Challenge #4
// Your tasks:
// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// child class of the 'CarCl' class
// 2. Make the 'charge' property private
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl'
// class. Then experiment with chaining!
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed}km/h ,with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('rivian', 120, 23);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
*/
//Coding challenge-1 Working with Arrays
/*
Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
about their dog's age, and stored the data into an array (one array for each). For 
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years 
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have 
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat 
ages from that copied array (because it's a bad practice to mutate function 
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 
�
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   dogs.forEach((dog, i) => {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult,and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy🐶`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

//challenege 2
/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert 
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is 
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as 
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know 
from other challenges how we calculate averages �)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/
/*
const calcAverageHumanAge = function(ages){
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);  
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return average;
}  

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

*/

//challenege 3
/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time 
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]

*/

/*
const calcAverageHumanAge = ages=>ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4)).filter(age=> age>=18).reduce((acc,age,_,arr) =>acc+age/arr.length,0 );
  

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

*/

// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

/*
const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];


//1.
const huskyWeight = breeds.find(breed=>breed.breed==='Husky').averageWeight;
console.log(huskyWeight);

//2.
const dogBothActivities = breeds.find(breed=>breed.activities.includes('fetch') &&  breed.activities.includes('running')).breed;
console.log(dogBothActivities);

//3.

// const allActivities = breeds.map(breed=>breed.activities).flat();
const allActivities = breeds.flatMap(breed=>breed.activities);
console.log(allActivities);

//4.

const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);

//5.

const swimmingAdjacent = [...new Set(breeds.filter(breed=>breed.activities.includes('swimming')).flatMap(breed=>breed.activities).filter(activity=>activity!=='swimming'))];
console.log(swimmingAdjacent);

//6.

console.log(breeds.every(breed=>breed.averageWeight>10));

//7.
console.log(breeds.some(breed=>breed.activities.length>=3));

//bonus

const fetchWeights = breeds.filter(breed=>breed.activities.includes('fetch')).map(breed=>breed.averageWeight);
const heaviestFetchBreed = Math.max(...fetchWeights);

console.log(fetchWeights);
console.log(heaviestFetchBreed);
*/

//challenge 5---------------------------------

// Coding Challenge #4
// Julia and Kate are still studying dogs, and this time they are studying if dogs are 
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the 
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10% 
// above and 10% below the recommended portion (see hint).
// Your tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate 
// the recommended food portion and add it to the object as a new property. Do 
// not create a new array, simply loop over the array. Forumla: 
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of 
// food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too 
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in 
// the owners array, and so this one is a bit tricky (on purpose) �
// 3. Create an array containing all owners of dogs who eat too much 
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little 
// ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and 
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat 
// too little!"
// 5. Log to the console whether there is any dog eating exactly the amount of food 
// that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an okay amount of food 
// (just true or false)
// 7. Create an array containing the dogs that are eating an okay amount of food (try 
// to reuse the condition used in 6.)
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food 
// portion in an ascending order (keep in mind that the portions are inside the 
// array's objects �)
// The Complete JavaScript Course 26
// Hints:
// § Use many different tools to solve these challenges, you can use the summary 
// lecture to choose between them �
// § Being within a range 10% above and below the recommended portion means: 
// current > (recommended * 0.90) && current < (recommended * 
// 1.10). Basically, the current portion should be between 90% and 110% of the 
// recommended portion

// Test data:
 const dogs = [
 { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
 { weight: 8, curFood: 200, owners: ['Matilda'] },
 { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
 {weight:18,curFood:244,owners:['Joe']},
 { weight: 32, curFood: 340, owners: ['Michael'] },
 ];

 //1.
 dogs.forEach(dog=> (dog.recFood=Math.floor(dog.weight**0.75*28)));
 console.log(dogs);


//2.

const dogSarah = dogs.find(dog=>dog.owners.includes('Sarah'));
console.log(`Sarah's dog eats too ${dogSarah.curFood > dogSarah.recFood ?'much':'little'}`);

//3.

const ownersEatTooMuch = dogs.filter(dog=>dog.curFood > dog.recFood).flatMap(dog=>dog.owners);
const ownersEatTooLittle = dogs.filter(dog=>dog.curFood < dog.recFood).flatMap(dog=>dog.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

//4.

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs are eating too much`);

console.log(`${ownersEatTooLittle.join(' and ')}'s dogs are eating too little`);

//5.

console.log(dogs.some(dog=>dog.curFood==dog.recFood));

//6.

const checkEatingOkay = dog =>dog.curFood<dog.recFood*1.1 && dog.curFood >dog.recFood *0.9;

console.log(dogs.every(checkEatingOkay));

//7.

const dogsGroupedByPortion = Object.groupBy(dogs,dog=>{
  if(dog.curFood>dog.recFood){
    return 'too-much';
  }else if(dog.curFood<dog.recFood){
    return 'too-little';
  }else{
    return 'exact';
  }
});

console.log(dogsGroupedByPortion);

//9.

const dogsGroupedByOwners = Object.groupBy(dogs,dog=>`${dog.owners.length}-owners`);

console.log(dogsGroupedByOwners);

//10.

const dogsSorted = dogs.toSorted((a,b)=>a.recFood-b.recFood);
console.log(dogsSorted);