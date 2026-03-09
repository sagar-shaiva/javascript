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

//top -level await 

// console.log('start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = res.json();
// console.log(data);
// console.log('something');

const getLastPost = async function (){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {title:data.at(-1).title,text:data.at(-1).body};
};

const lastPost = getLastPost();
console.log(lastPost);

//not very clean
lastPost.then(last=>console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);