// Challenge 1

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMARK = massMark / (heightMark * heightMark);
const BMIJOHN = massJohn / (heightJohn * heightJohn);

console.log(BMIMARK);
console.log(BMIJOHN);

console.log(BMIMARK > BMIJOHN);
