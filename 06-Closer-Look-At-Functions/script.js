'use strict';

//deafault parameters
/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
createBooking('LH123', undefined, 5);
*/

//passsing arguments primitive vs referece
/*
const flight = 'LM234';
const sagar = {
  name: 'Sagar',
  passport: 24813746372,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'S ' + passenger.name;
  if (passenger.passport === 24813746372) {
    alert('Checked In');
  } else {
    alert('Wrong Passport');
  }
};

// checkIn(flight, sagar);
// console.log(flight);
// console.log(sagar);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(sagar);
checkIn(flight, sagar);
*/

//Function accepting callback functions
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher Order Function
const transformer = function (str, fn) {
  console.log(`Original String:${str} `);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name} `);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

//js uses callback all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['sagar', 'suraj', 'madhu'].forEach(high5);
*/

//funtion returning function
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Sagar');
greeterHey('Sagara');
greet('Hey')('Sagar');
greetArr('Hey')('Sagar');
*/

//Call and apply method
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Sagar');
lufthansa.book(635, 'Madhu');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
//does not work
// book(23,'sagar');

//call method
book.call(eurowings, 23, 'Sagar');
console.log(eurowings);
book.call(lufthansa, 23, 'Sagar');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 29, 'Sagara');

//apply method
const flightData = [123, 'Sagar S'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//Bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(12, 'Sagari');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Madhu');
bookEW23('Appaji');
bookEW23('Amma');

//with event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT =value => value + value*0.23

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
*/
//closer look at functions challenge-1
/*
A Closer Look at Functions
Coding Challenge #1
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an 
array with the number of replies for each option. This data is stored in the starter 
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The 
method does 2 things:
1.1. Display a prompt window for the user to input the number of the 
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For 
example, if the option is 3, increase the value at position 3 of the array by 
1. Make sure to check if the input is a number and if the number makes 
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The 
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using 
console.log(). This should be the default option. If type is 'string', display a 
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test 
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll 
object! So what should the this keyword look like in this situation?
*/
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(write option number)`
      )
    );
    console.log(answer);
    //register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [1, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 2, 1] });
*/

//immediatly invoked fucntions IIFE
/*
const runOnce = function () {
  console.log('This will never run again');
};

(function () {
  console.log('This will never run again');
  const isPrivate = 24;
})();
// console.log(isPrivate);
(() => console.log('This will never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 42;
}
// console.log(isPrivate);
console.log(notPrivate);
*/

//Closers

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
