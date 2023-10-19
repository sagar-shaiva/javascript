'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //order delivery
  orderDelivery: function ({
    starterIndex = 0,
    mainIndex,
    address,
    time = '9:00',
  }) {
    console.log(
      `order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients, otherIngredients);
  },
};

/////////////////////////////////////////////////////////

//short circuiting
console.log('----or-------------');
console.log(3 || 'SAGAR');
console.log('' || 'SAGAR');
console.log(true || 'SAGAR');
console.log(undefined || null);
console.log(undefined || null || 0 || 'hello' || 23 || '');

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('------------and-------------');

console.log(0 && 'sagar');
console.log(9 && 'sagar');

console.log('hello' && 23 && null && 'sagar');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

///////////////////////////////////////////////////////
//rest pattern -----------------------
//destructuring
/*
const arr = [1, 2, 3, ...[4, 5]];
console.log(arr);

const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

const [pizza, , risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherfood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) fucntions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(2, 3, 4, 5, 6, 7);
add(2, 3, 4, 5, 6, 7, 8, 9, 10);

const x = [1, 2, 3];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');

restaurant.orderPizza('mushroom');
*/
/////////////////////////////////////////////////////
/*
// spread operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array

const mainMenuCOpy = [...restaurant.mainMenu];

// join 2 array

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//iterables are arrays , strings,maps,sets, not objects

const str = 'sagar';
const letters = [...str, ' ', 's.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} lol`);

//order pasta

const ingredients = [
  prompt("let's make pasta! ingredient 1?"),
  prompt("let's make pasta! ingredient 2?"),
  prompt("let's make pasta! ingredient 3?"),
];

console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

restaurant.orderPasta(...ingredients);

// objects

const newRestaurant = { ...restaurant, founder: 'sagar', foundedIn: 2000 };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'sagar hotel';
console.log(restaurant.name);
console.log(restaurantCopy.name);

*/
/*

restaurant.orderDelivery({
  time: '12:00',
  address: '22',
  starterIndex: 2,
  mainIndex: 2,
});

restaurant.orderDelivery({
  address: '22',
  mainIndex: 2,
});

const { name, openingHours, categories } = restaurant;

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//nested objects

// const { fri } = openingHours;
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

*/

///////////////////////////////////////////////
//destructuring arrays
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main.secondary);

// // let [d, e] = ['sagar', 'madhu'];
// // console.log(d);
// // console.log(e);
// // [d, e] = [e, d];
// // console.log(d, e);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //nested destructuring
// const nested = [2, 4, [5, 6]];

// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // default values

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
