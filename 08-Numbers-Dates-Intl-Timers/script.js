'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2025-06-15T23:36:17.929Z',
    '2025-06-10T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2025-06-10T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const combinedMovsDates =acc.movements.map((mov,i)=>({
    movement: mov,
    movementDate:acc.movementsDates.at(i),
  }));
if(sort) combinedMovsDates.sort((a,b)=>a.movement - b.movement);
  // const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  combinedMovsDates.forEach(function (obj, i) {
    const {movement,movementDate} = obj;
    const type = movement > 0 ? 'deposit' : 'withdrawal';

const date = new Date(movementDate);
const displayDate = formatMovementDate(date,acc.locale);
const formattedMov = formatCur(movement,acc.locale,acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

//fake always logged in 

currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity=100;





btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // create current date and time
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2,0);
    const month = `${now.getMonth()+1}`.padStart(2,0);
    const year = now.getFullYear();
    const hour = `${now.getFullYear()}`.padStart(2,0);
    const min = `${now.getMinutes()}`.padStart(2,0);
    labelDate.textContent= `${day}/${month}/${year},${hour}:${min}`;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    //Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  //bug in video:
  // displayMovements(currentAccount.movements, !sorted);
  // sorted = !sorted;
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
console.log(23===23.0);

console.log(0.1+0.2);
console.log(0.1+0.2===0.3);

//conversion
console.log(Number('23'));
console.log(+'23');

//parsing

console.log(Number.parseInt('30px',10));
console.log(Number.parseInt('   30px    ',10));
console.log(Number.parseInt('   e30px    ',10));
console.log(Number.parseFloat('3.0rem'));
console.log(Number.parseFloat('3.0rem'));


//check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));

//checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20px'));
console.log(Number.isFinite(23/0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23.1));
console.log(Number.isInteger(23/0));
*/

//math and rounding 
/*
console.log(Math.sqrt(25));
console.log(25** (1/2));
console.log(8**(1/3));


console.log(Math.max(5,1,2,34,));
console.log(Math.max(5,1,2,'24',34,));
console.log(Math.max(5,1,2,'24PX',34,));
console.log(Math.min(5,1,2,7,8,34,));

console.log(Math.PI * Number.parseFloat('10px')**2);

console.log(Math.trunc(Math.random()*6)+1);

const randomInt = (min,max)=> {
  Math.trunc(Math.random() *(max-min)+1)+min;
}

  console.log(randomInt(10,20)); 
  console.log(randomInt(0,3));


  //rounding intergers

  console.log(Math.trunc(23.3));

  console.log(Math.round(23.9));
  console.log(Math.round(23.3));
  console.log(Math.ceil(23.9));
  console.log(Math.ceil(23.3));

  console.log(Math.floor(23.9));
  console.log(Math.floor('23.3'));

  console.log(Math.trunc(-23.3));
  console.log(Math.floor(-23.3));

//rounding decimals

console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.744).toFixed(2));
console.log(+(2.345).toFixed(2));

*/

//The remainder operator
/*
console.log(5%2);
console.log(5/2);

console.log(8%3);
console.log(8/3);

const isEven= n=>n%2===0;
console.log(isEven(2));
console.log(isEven(23));
console.log(isEven(2468));

labelBalance.addEventListener('click',function(){[...document.querySelectorAll('.movements__row')].forEach(function(row,i){
 //2 4 6 8
  if(i%2===0) row.style.backgroundColor='orangred';
//0 3 6 9
  if(i%3===0) row.style.backgroundColor='blue';
})

});
*/

//numeric seperators
/*
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const PI= 3.14_14;
console.log(PI);

console.log(Number('23_000'));
console.log(parseInt('230_000'));
*/

//bigint
/*
console.log(2**53-1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2**53+2);
console.log(2**53+1);
console.log(2**53+4);

console.log(45671548317456871465734323n);
console.log(BigInt('45671548317456871465734323'));
console.log(100000n*100n);
console.log(17632861n*78216784687478619n);

const huge = 13719918818732687n;
const num = 23;
console.log(huge*BigInt(num));

//exceptions
console.log(20n>15);
console.log(20n===20);
console.log(typeof 20n);
console.log(20n=='20');
console.log(huge+' is really big number!');

//divisions

console.log(11n/3n);
console.log(10/3);
*/

//dates and time

//create a date
/*
const now = new Date();
console.log(now);

console.log(new Date('Aug 28 2025 11:11:11'));
console.log(new Date('December 21,2070'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2026,4,21,11,11,11));
console.log(2026,10,31);

console.log(new Date(0));
console.log(new Date(3*24*60*60*1000));

*/
//working with dates
/*
const future = new Date(2026,4,21,11,11,11);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDay());
console.log(future.getDate());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(1779342071000));

console.log(Date.now());

future.setFullYear(2050);
console.log(future);
*/

const future  = new Date(2026,3,21,15,11);
console.log(+future);
const calcDaysPassed = (date1,date2)=> Math.abs(date2-date1)/(1000*60*60*24);

const days1 = calcDaysPassed(new Date(2000,3,21),new Date(2007,2,29));

console.log(days1);