// Challenge 1

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMARK = massMark / (heightMark * heightMark);
// const BMIJOHN = massJohn / (heightJohn * heightJohn);

// console.log(BMIMARK);
// console.log(BMIJOHN);

// console.log(BMIMARK > BMIJOHN);

// Challenge 2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else {
  console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
}
