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
