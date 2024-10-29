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
