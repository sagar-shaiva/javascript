//importing value
console.log('Importing values');
// import shoppingCart, { addToCart,shippingCost,totalPrice as price , tq } from './shoppingCart.js';
// addToCart('cake',2);
// console.log(price,tq);
// console.log(shippingCost);

import * as shoppingCart from './shoppingCart.js';

shoppingCart.addToCart('Ice cream',4);
console.log(shoppingCart.totalPrice);

// import add ,{addToCart,totalPrice as price , tq} from '/shoppingCart.js';

// console.log(price);

import add,{cart} from './shoppingCart.js';

add('fruits',2);
add('bread',3);
add('jam',6);
console.log(cart);
cart.forEach(a=>{
    console.log(a);
})

