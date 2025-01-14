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
/*
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
*/

//Inheriatance between classes  constructor functions
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);

  this.course = course;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const sagar = new Student('sagar', 2000, 'M.tech');
sagar.introduce();
sagar.calcAge();
console.log(sagar instanceof Student);
console.log(sagar instanceof Person);
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

//Inheritance ES6 classes
/*
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

class StudentCl extends Personcl {
  constructor(fullName, birthYear, course) {
    //Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${2025 - this.birthYear} old but i feel like ${
        2025 - this.birthYear + 10
      }`
    );
  }
}

const sagar = new StudentCl('S Sagar', 2000, 'M.tech');
sagar.introduce();
sagar.calcAge();
*/

//Inheritance Object.create
/*
const PersonProto = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const sagar = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const jay = Object.create(StudentProto);
jay.init('Sagar', 2000, 'M.tech');

jay.introduce();
jay.calcAge();
*/

//Another class

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved');
    }
  }
}

const acc1 = new Account('Sagar', 'INR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1, approveLoan(1000);
console.log(acc1);
