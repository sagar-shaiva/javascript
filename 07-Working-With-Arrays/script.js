'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type:'premium'
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type:'standard'

};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type:'premium'

};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type:'basic'

};

const accounts = [account1, account2, account3, account4];

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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function (movements,sort=false) {
  containerMovements.innerHTML = '';
  const movs= sort? movements.slice().sort((a,b)=>a-b):movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};


//computing usernames
const createUserNames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserNames(accounts);
//max value --
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const EurToUsd =1.1;
const calcDisplaySummary = function (acc) { 
const incomes = acc.movements.filter(mov=> mov>0).reduce((acc,mov)=>acc+mov,0);
labelSumIn.textContent = incomes;
const out = acc.movements.filter(mov=> mov<0).reduce((acc,mov)=>acc+mov,0);
labelSumOut.textContent = `${Math.abs(out)}`;
const interest = acc.movements.filter(mov=> mov>0).map(deposit=>(deposit*acc.interestRate)/100).filter(int=> int>=1).reduce((acc,int)=>acc+int,0);
labelSumInterest.textContent = interest;


}

const updateUI= function(acc){
  //display movements
displayMovements(acc.movements);

//display balances

calcDisplayBalance(acc);

// display summary

calcDisplaySummary(acc);
}
//Event handlers
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  inputLoginPin.blur(); 

  currentAccount = accounts.find(acc =>acc.username ===inputLoginUsername.value);
  if(currentAccount?.pin === Number(inputLoginPin.value)){
    labelWelcome.textContent= `Welcome back, ${currentAccount.owner.split(' ')[0]}`;

    containerApp.style.opacity =100;

    //clear input login and pin values
    inputLoginPin.value = inputLoginUsername.value ='';

updateUI(currentAccount);




  }

  //display ui and message

})


//implementing transfer

btnTransfer.addEventListener('click',function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc=>acc.username ==inputTransferTo.value);
  console.log(amount,receiverAcc);
  if(amount>0 && receiverAcc && currentAccount.balance>=amount && inputTransferTo.value !==currentAccount.username){
currentAccount.movements.push(-amount);
receiverAcc.movements.push(amount);
updateUI(currentAccount);

  }

})

// findindex method

btnClose.addEventListener('click',function(e){
  e.preventDefault();

  if(inputCloseUsername.value ===currentAccount.username && Number(inputClosePin.value) ===currentAccount.pin){
    const index = accounts.findIndex(acc => acc.username ===currentAccount.username);
    console.log(index);

    accounts.splice(index,1);

    containerApp.style.opacity=0;
    inputCloseUsername.value = inputClosePin.value='';
  }
})

//findlast and findlastindex
console.log(movements);

const lastWithdrawal = movements.findLast(mov =>mov<0);
console.log(lastWithdrawal);


const latestLargeMoventIndex = movements.findLastIndex(mov => Math.abs(mov)>2000);
console.log(latestLargeMoventIndex);
console.log(`Your latest large movement was ${movements.length - latestLargeMoventIndex} movements ago`);


//some and every
btnLoan.addEventListener('click',function(e){
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount>0 && currentAccount.movements.some(mov=>mov>=amount*0.1)){
    currentAccount.movements.push(amount);
updateUI(currentAccount);

  }
  inputLoanAmount.value='';
})

//sorting arrays

let sorted = false;

btnSort.addEventListener('click',function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements,!sorted);
  sorted=!sorted;
})


//SOME:condition
/*
console.log(movements.some(mov=>mov===-130));

//every 

console.log(movements.every(mov=>mov>0));

console.log(account4.movements.every(mov=>mov>0));
//separate call back
const deposit = mov =>mov>0;

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

//flat and flatMap
/*
const arr = [1,2,3,[4,5],6,7];
const arr2 = [[[1,2,3],4],5,6,7];

console.log(arr.flat());
console.log(arr.flat(2));

const overalBalance= accounts.map(acc=> acc.movements).flat().reduce((acc,mov)=>acc+mov,0);
console.log(overalBalance);

//flatMap

const overalBalance2 = accounts.flatMap(acc=>acc.movements).reduce((acc,mov)=>acc+mov,0);
console.log(overalBalance2);
*/

//max values
/*
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);
console.log(max);
*/
//Filter method
/*
const deposits = movements.filter(function (mov) {
  return mov > 0;
});

const withdrawals = movements.filter(mov => mov < 0);
console.log(deposits);
console.log(withdrawals);
*/
//Reduce method--------------------------------
/*
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);
*/
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
//Map array method------------------
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const EurToUsd = 1.1;

const movementsUsd = movements.map(mov => mov * EurToUsd);
console.log(movements);
console.log(movementsUsd);

const movementsDescriptions = movements.map((mov, i) => {
  console.log(
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
  );
});
console.log(movementsDescriptions);
*/
//New at Method
/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log('sagar'.at(0));
console.log('sagar'.at(-1));
*/
//Simple Array Methods
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

//slice Method
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//Splice (Mutates Array)

// console.log(arr.splice(2)); //deletes all elements
arr.splice(-1); //deletes last element
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//Reverse (mutates arrays)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'j'];

console.log(arr2.reverse()); //reverse method mutates arrays
console.log(arr2);

//concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//join
console.log(letters.join('-'));
*/

//forEach Method
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
}

console.log(`----------------------forEach---------------------`);

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}You withdrew ${Math.abs(mov)}`);
  }
});
*/

//forEach on maps and sets
/*
//mop
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

//set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'INR', 'EUR', 'EUR']);

console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value} : ${value}`);
});
*/

//Magic of Chaining Methods
/*
const EurToUsds = 1.1;

const  totalDepositsUsd = movements.filter(mov=> mov>0).map(mov=> mov*EurToUsds).reduce((acc,mov)=>acc+mov,0);
console.log(totalDepositsUsd);
*/

//The find method
/*
const firstWithdrawal = movements.find(mov=> mov<0);
const account = accounts.find(acc=> acc.owner ==="Jessica Davis");
console.log(account);
console.log(firstWithdrawal);
*/

/*
//Sorting arrays

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

console.log(owners.sort());
console.log(owners);

//Ascending

// movements.sort((a,b)=>{
//   if(a>b) return 1;
//   if(a<b) return -1;
// })

// console.log(movements);

movements.sort((a,b)=>a-b);
console.log(movements);

//Descending

// movements.sort((a,b)=>{
//   if(a>b) return -1;
//   if(a<b) return 1;
// })

// console.log(movements);

movements.sort((a,b)=>b-a);
console.log(movements);

*/


//grouping arrays
/*
const groupByMovements = Object.groupBy(movements,movement=>movement>0 ? 'deposits':'withdrawals');
console.log(groupByMovements);

const groupByActivity = Object.groupBy(accounts,account=>{
  const movementCount = account.movements.length;

  if(movementCount>=8) return 'very active';
  if(movementCount>=4) return 'active';
  if(movementCount<8) return 'moderate';
  return 'inactive';
})

console.log(groupByActivity);

// const groupedAccounts = Object.groupBy(accounts,account=> account.type);
const groupedAccounts = Object.groupBy(accounts,({type})=>type);

console.log(groupedAccounts);
*/

//Creating and filling arrays
/*
const arr = [0,1,2,3,4,5,6,7,8,9];
console.log(new Array(2,4,6,8,10,12,14));

//empty array + fill method


const x = new Array(7);
console.log(x);

x.fill(1,3,6);
x.fill(1);
console.log(x);

arr.fill(21,3,7);
console.log(arr);

//Array from
const y = Array.from({length:7},()=>1);
console.log(y);
const z = Array.from({length:7},(_,i)=>i+1);
console.log(z);

labelBalance.addEventListener('click',function(){
const movementsUI = Array.from(document.querySelectorAll('.movements__value'),el => Number(el.textContent.replace('€','')));
console.log(movementsUI);
const movementsUI2 = [...document.querySelectorAll('.movements__value')];
console.log(movementsUI2);
});
*/

// Non-Destructive Alternatives: toReversed, toSorted, toSpliced, with
/*
console.log(movements);
const reversedMov = movements.toReversed();
console.log(reversedMov);
console.log(movements);

// movements[1]=2000;

const newMovements = movements.with(1,2000);
console.log(newMovements);

console.log(movements);
*/

//1.

const depositsSum = accounts.flatMap(accounts=> account1.movements).filter(mov=> mov>0).reduce((sum,cur)=>sum+cur,0);
console.log(depositsSum);

//2.

// const numDeposits1000 = accounts.flatMap(acc=>acc.movements).filter(mov=>mov>=1000).length;
// console.log(numDeposits1000);

const numDeposits1000 = accounts.flatMap(acc=>acc.movements).reduce((count,cur)=> (cur>=1000?++count:count),0);
console.log(numDeposits1000);

//prefixed ++ operator

let a = 10;
console.log(a++);
console.log(a);

//3.

const {deposits,withdrawals} = accounts.flatMap(account => account.movements).reduce((sums,cur)=> {

  // cur >0?(sums.deposits+=cur):(sums.withdrawals+=cur);
  sums[cur>0?'deposits':'withdrawals']+=cur;
  return sums;
},{deposits:0,withdrawals:0});
console.log(deposits,withdrawals);

//4.

const convertTitleCase =function(title){
  const capitalize = str=>str[0].toUpperCase()+ str.slice(1);
  const exceptions = ['a','and','the','an','but','or','in','with'];

  const titleCase= title.toLowerCase().split(' ').map(word=>exceptions.includes(word)?word:capitalize(word)).join(' ');

  return capitalize(titleCase);
}


console.log(convertTitleCase('this Is an ancient Good boy'));
console.log(convertTitleCase('sagar and Madhu are brothers'));
console.log(convertTitleCase('Suraj and Sagar are Best friends'));
console.log(convertTitleCase('WE are king of all the times'));