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
