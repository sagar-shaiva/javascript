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
