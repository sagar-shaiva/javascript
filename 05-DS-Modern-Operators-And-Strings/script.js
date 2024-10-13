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
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `order received to ${this.starterMenu[starterIndex]} and at ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`
    );
  },
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
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
//the for-of loop
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/
//logical assignment operators
/*
const rest1 = {
  name: 'Chapri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Pizza',
  owner: 'Sagar',
};

//or assignmnet operator

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests||=10;
// rest2.numGuests||=10;

//nullish assignment operator (null or undefined)

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
// rest1.owner = rest1.owner && '<anonymous>';
// rest2.owner = rest2.owner && '<anonymous>';
rest1.owner &&= '<anonymous>';
rest2.owner &&= '<anonymous>';
console.log(rest1);
console.log(rest2);
*/
//nullish : null and undefined (not 0 and '')
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestsCorrect = restaurant.numGuests ?? 10;

console.log(guestsCorrect);
*/
//short circuiting operator

/*
console.log('----------------or-----------');

console.log(3 || 'Sagar');
console.log('' || 'Sagar');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || null || 0 || 'Hello' || 24);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---------------and-----------');

console.log(0 && 'sagar');
console.log(9 && 'sagar');
console.log('Hello' && 24 && null && 'Sagar');

if (restaurant.orderPizza) {
  restaurant.orderPizza('Capsicum', 'Paneer');
}
restaurant.orderPizza && restaurant.orderPizza('Mushroom', 'Corn');
*/
//rest pattern and parameter
/*
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];

console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

//objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

//function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(1, 2);
add(1, 2, 3);
add(1, 2, 3, 4);
add(1, 2, 3, 4, 5);

const x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/
//destructuring Objects///////////////////////////////
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Shivashakthi',
  maxIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  starterIndex: 1,
  address: 'Mysore',
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//renaming object property names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//default values

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating the variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;

console.log(o, c);

//destructuring arrays///////////////////////////////

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(1, 2);
// console.log(starter, mainCourse);

// //nested destructuring
// const nested = [1, 3, [4, 5]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
*/

//spread operator
/*
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1]];

console.log(badNewArray);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];

console.log(newMenu);
const mainMenuCopy = [...restaurant.mainMenu];
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log(menu);

const str = 'Sagar';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);

const ingredients = [
  prompt("let's make Pasta! Ingredients 1?"),
  prompt('Ingredeint 2?'),
  prompt('prompt 3?'),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

//objects
const newRestaurant = { foundedIn: 2024, ...restaurant, founder: 'Sagar' };

console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Sagar Foods';
console.log(restaurantCopy);
console.log(restaurant);
*/
