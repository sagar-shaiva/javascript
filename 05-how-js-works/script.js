'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age},born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'suraj';
      output = 'New Output';

      const str = `oh ,and you're a millenial,${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      //   const output = 'New Output';
    }

    console.log(millenial);
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'sagar';
calcAge(1995);

// console.log(age);
// printAge();
