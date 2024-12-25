'use strict';

/*
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

//proptotypal inheritance on builtin objects
console.log(sagar.__proto__.__proto__);
const arr = [1, 2, 2, 3, 4, 5, 5];
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
*/

//ES6 classes

class Personcl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2025 - this.birthYear);
  }
  get age() {
    return 2025 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes('')) this._fullName = name;
    else alert('Not full name');
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('hey im static');
    console.log(this);
  }
}
const sagar = new Personcl('sagar', 2000);

sagar.calcAge();

Personcl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

sagar.greet();

Personcl.hey();

const PersonProto = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
console.log(steven);
steven.firstName = 'steven';
steven.birthYear = 2000;

const sarah = Object.create(PersonProto);

sarah.init('sarah', 2003);
sarah.calcAge();
