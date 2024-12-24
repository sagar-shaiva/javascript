'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const sagar = new Person('sagar', 2000);
console.log(sagar);
console.log(sagar instanceof Person);

//Prototypes (only one copy)

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

sagar.calcAge(2000);
console.log(Person.prototype.isPrototypeOf(sagar));

Person.prototype.species = 'Homo Sapiens';
console.log(sagar.species);

console.log(sagar.hasOwnProperty('species'));
console.log(sagar.hasOwnProperty('firstName'));
