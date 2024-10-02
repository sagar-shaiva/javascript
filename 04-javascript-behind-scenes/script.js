'use strict';

function calcAge(birthYear) {
  const age = 2024 - birthYear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName} you are ${age},born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      //creating new varialble with same name as outer scope's variable
      const firstName = 'S Sagar';
      output = 'New Output!';
      //reassigning outer scope variable
      const str = `oh,and you're a millenial,${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2,2));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Sagar';
calcAge(1996);
