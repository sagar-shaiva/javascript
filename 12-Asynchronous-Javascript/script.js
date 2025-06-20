'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
//our first ajax call:XMLHttpRequest
const renderCountry=function(data,className =''){
     const html= `  <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>`;
        countriesContainer.insertAdjacentHTML('beforeend',html);
        countriesContainer.style.opacity = 1;
};
/*
const getCountryAndNeighbour= function(country){
const request = new XMLHttpRequest();

request.open('GET',`https://countries-api-836d.onrender.com/countries/name/${country}`);
request.send();

const renderCountry=function(data,className =''){
     const html= `  <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>`;
        countriesContainer.insertAdjacentHTML('beforeend',html);
        countriesContainer.style.opacity = 1;
};

request.addEventListener('load',function(){
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //render country
    renderCountry(data);

    //get neighbour country
    const [neighbour] =data.borders;

    if(!neighbour) return;

    //ajax call country 2 
    const request2 = new XMLHttpRequest();
    request2.open('GET',`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`);
request2.send();

request2.addEventListener('load',function(){
    const data2= JSON.parse(this.responseText);
    console.log(data2);

    renderCountry(data2,'neighbour');
})

})
};
getCountryAndNeighbour('usa');
*/

const request = fetch("https://restcountries.com/v2/name/portugal");
// console.log(request);

const renderError = function(msg){
  countriesContainer.insertAdjacentText('beforeend',msg);
  // countriesContainer.style.opacity= 1;
}

const getJson = function(url,errorMsg = 'Something went wrong'){
  return fetch(url).then(response=>{
    if(!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};
// const getCountryData = function(country){

//   //country 1
//     fetch(`https://restcountries.com/v2/name/${country}`).then(response=>{
      
//       console.log(response);
      
//       if(!response.ok){
//         throw new Error(`Country not found (${response.status})`);
//       }
//       return response.json();
//     }).then(data=>{
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if(!neighbour) return;
//       //country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    
//     }).then(response =>response.json()).then(data=>renderCountry(data,'neighbour')).catch(err=>{console.error(`${err}🔥🔥🔥`);
//   renderError(`Something went wrong 😒😒 ${err.message} Try again!`)

// }).finally(()=>{
//   countriesContainer.style.opacity= 1;
  
// })
// };

const getCountryData = function(country){

  //country 1
  getJson(`https://restcountries.com/v2/name/${country}`,'Country not found')
  .then(data=>{
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if(!neighbour) throw new Error('No neighbour found!');
      //country 2
      return getJson(`https://restcountries.com/v2/alpha/${neighbour}`,
        'Country not found');
    
    }).then(data=>renderCountry(data,'neighbour')).catch(err=>{console.error(`${err}🔥🔥🔥`);
  renderError(`Something went wrong 😒😒 ${err.message} Try again!`)

}).finally(()=>{
  countriesContainer.style.opacity= 1;
  
})
};

btn.addEventListener('click',function(){
    getCountryData('portugal');
  
})

/*
Coding Challenge #1
In this challenge you will build a function 'whereAmI' which renders a country 
only based on GPS coordinates. For that, you will use a second API to geocode 
coordinates. So in this challenge, you’ll use an API on your own for the first time �
Your tasks:
PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat') 
and a longitude value ('lng') (these are GPS coordinates, examples are in test 
data below).
2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means 
to convert coordinates to a meaningful location, like a city and country name. 
Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call 
will be done to a URL with this format: 
https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and 
promises to get the data. Do not use the 'getJSON' function we created, that 
is cheating �
3. Once you have the data, take a look at it in the console to see all the attributes 
that you received about the provided location. Then, using this data, log a 
message like this to the console: “You are in Berlin, Germany”
4. Chain a .catch method to the end of the promise chain and log errors to the 
console
5. This API allows you to make only 3 requests per second. If you reload fast, you 
will get this error with code 403. This is an error with the request. Remember, 
fetch() does not reject the promise in this case. So create an error to reject 
the promise yourself, with a meaningful error message
PART 2
6. Now it's time to use the received data to render a country. So take the relevant 
attribute from the geocoding API result, and plug it into the countries API that 
we have been using.
7. Render the country and catch any errors, just like we have done in the last 
lecture (you can even copy this code, no need to type the same code)
The Complete JavaScript Course 31
Test data:
§ Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
§ Coordinates 2: 19.037, 72.873
§ Coordinates 3: -33.933, 18.474
*/
/*
const whereAmI = function(lat,lng){
  fetch(`https://us1.api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
  .then(res=>{
    if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`)
   return  res.json();

  })
  .then(data=>{
    console.log(data);
    console.log(`You are in ${data.city},${data.countryName}`);
    return fetch(`https://restcountries.com/v2/name/${data.countryName}`)
  })
  .then(response=>{
    if(!response.ok) throw new Error(`Country not found (${response.status})`);


    return response.json();
  }).then(data=>renderCountry(data[0])).catch(err=> console.error(`${err.message} 🔥🔥`));
};
whereAmI(52.508,13.381);

*/
//event loop in practice
/*
console.log('Test start');
setTimeout(() => {
  console.log('0 sec timer');
}, 0);
 
Promise.resolve('Resolved promise 1').then(res=>console.log(res));
Promise.resolve('Resolved promise 2').then(res=>{
  for(let i=0;i<10000000;i++){

  }
  console.log(res);
})
console.log('Test end');
*/

//building a simple promise
/*
 const lotteryPromise  = new Promise(function(resolve,reject){
console.log('Lotery draw is happenig 🏆');
setTimeout(() => {
  if(Math.random() >=0.5){
  resolve('You win 💰')
}else{
  reject(new Error('You lost your money 💩'));
}
}, 2000);
 });

 lotteryPromise.then(res=>console.log(res)).catch(err=>console.log(err));

 //promisifying setTimneout

 const wait = function(seconds){
  return new Promise(function(resolve){
setTimeout(resolve,seconds*1000);
  });
 };

 wait(1).then(()=>{
  console.log('1 second passed');
  return wait(1);
 }).then(()=>{
  console.log('2 second passed');
  return wait(1);
 }).then(()=>{
  console.log('3 second passed');
  return wait(1);
 }).then(()=>console.log('4 second passed'));


Promise.resolve('abc').then(x=>console.log(x));
Promise.reject(new Error('Problem!')).catch(x=>console.error(x));
*/

//promisifying the geolocation API
/*

const getPosition = function(){
  return new Promise(function(resolve,reject){
// navigator.geolocation.getCurrentPosition(
//   position=>resolve(position),
//   err=>reject(err));
navigator.geolocation.getCurrentPosition(resolve,reject);

  })
};

// getPosition().then(pos=>console.log(pos));

const whereAmI = function(){
  getPosition().then(pos=>{
    const {latitude:lat,longitude:lng}= pos.coords;
  return fetch(`https://us1.api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
  })
  .then(res=>{
    if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`)
   return  res.json();

  })
  .then(data=>{
    console.log(data);
    console.log(`You are in ${data.city},${data.countryName}`);
    return fetch(`https://restcountries.com/v2/name/${data.countryName}`)
  })
  .then(response=>{
    if(!response.ok) throw new Error(`Country not found (${response.status})`);


    return response.json();
  }).then(data=>renderCountry(data[0])).catch(err=> console.error(`${err.message} 🔥🔥`));
};

btn.addEventListener('click',whereAmI)
*/
/////////////////////////////////////////////
// Coding Challenge #2
/*
For this challenge you will actually have to watch the video! Then, build the image 
loading functionality that I just showed you on the screen.
Your tasks:
Tasks are not super-descriptive this time, so that you can figure out some stuff by 
yourself. Pretend you're working on your own �
PART 1
1. Create a function 'createImage' which receives 'imgPath' as an input. 
This function returns a promise which creates a new image (use 
document.createElement('img')) and sets the .src attribute to the 
provided image path
2. When the image is done loading, append it to the DOM element with the 
'images' class, and resolve the promise. The fulfilled value should be the 
image element itself. In case there is an error loading the image (listen for 
the'error' event), reject the promise
3. If this part is too tricky for you, just watch the first part of the solution
PART 2
4. Consume the promise using .then and also add an error handler
5. After the image has loaded, pause execution for 2 seconds using the 'wait'
function we created earlier
6. After the 2 seconds have passed, hide the current image (set display CSS 
property to 'none'), and load a second image (Hint: Use the image element 
returned by the 'createImage' promise to hide the current image. You will 
need a global variable for that �)
7. After the second image has loaded, pause execution for 2 seconds again
8. After the 2 seconds have passed, hide the current image
Test data: Images in the img folder. Test the error handler by passing a wrong 
image path. Set the network speed to “Fast 3G” in the dev tools Network tab, 
otherwise images load too fast
*/
/*
const wait = function(seconds){
  return new Promise(function(resolve){
setTimeout(resolve,seconds*1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImg = function(imgpath){
  return new Promise(function(resolve,reject){
    const img = document.createElement('img');
    img.src=imgpath;
    img.addEventListener('load',function(){
      imgContainer.append(img);
      resolve(img);
    })

    img.addEventListener('error',function(){
      reject(new Error('Image not found'));
    })
  })
}


let currentImg;

createImg('img/img-1.jpg').then(img=>{
  currentImg=img;
console.log('image 1 loaded');
return wait(2)

}).then(()=>{
currentImg.style.display='none';
return createImg('img/img-2.jpg')
}).then(img=>{
  currentImg=img;
  console.log('Image 2 loaded');
  return wait(2);
}).then(()=>{
  currentImg.style.display='none';
}).catch(err=>console.error(err));
*/

//consuming promises with async/await
/*
const getPosition = function(){
  return new Promise(function(resolve,reject){
navigator.geolocation.getCurrentPosition(resolve,reject);

  })
};
const whereAmI = async function () {
  try{
    const pos= await getPosition();
  const {latitude:lat,longitude:lng}= pos.coords;
  const resGeo = await fetch(`https://us1.api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
  if(!resGeo.ok) throw new Error('Problem getting location data')
  
  const dataGeo =await  resGeo.json();
  // console.log(dataGeo);
  const res=await fetch(`https://restcountries.com/v2/name/${dataGeo.countryName}`)
  if(!res.ok) throw new Error('Problem getting country')
  const data= await res.json();
  // console.log(data);
  renderCountry(data[1]);
  return `You are in ${dataGeo.city}, ${dataGeo.countryName}`
  }
  catch(err){
  console.error(err);
  renderError(`something went wrong 😒 ${err.message}`)
  throw err;
}
}



console.log('1: will get location');

// const city = whereAmI();
// console.log(city);

// whereAmI()
// .then(city=>console.log(`2:${city}`))
// .catch(err=>console.error(`2:${err.message} 🔥`)).finally(()=>console.log('3:Finished getting location'))

(async function(){
try{
  const city= await whereAmI();
  console.log(`2:${city}`);
}catch{
console.error(`2:${err.message} 🔥`)

}
console.log('3:Finished getting location');
})();
*/
//running promises in parallel
/*
const getThreeCountries = async function(c1,c2,c3) {
  try{
    const data = await Promise.all([getJson(`https://restcountries.com/v2/name/${c1}`),
      getJson(`https://restcountries.com/v2/name/${c2}`),
      getJson(`https://restcountries.com/v2/name/${c3}`)]);
    console.log(data.map(d=>d[0].capital));
  }
  catch(err){
console.error(err);
  }
  
}

getThreeCountries('portugal','china','russia');
*/

//other promises combinators
/*
;(async function(){
const res = await Promise.race([getJson(`https://restcountries.com/v2/name/italy`),
      getJson(`https://restcountries.com/v2/name/russia`),
      getJson(`https://restcountries.com/v2/name/mexico`)]);
      console.log(res[0]);
})();

const timeout = function(sec){
  return new Promise(function(_,reject){
    setTimeout(function(){
      reject(new Error('request took too long!'))
    },sec*1000)
  })
}

Promise.race([getJson(`https://restcountries.com/v2/name/fiji`),
  timeout(0.5)])
.then(res=>console.log(res[0]))
.catch(err=>console.error(err))

//promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success')
  
]).then(res=>console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success')
  
]).then(res=>console.log(res)).catch(err=>console.error(err));

Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success')
  
]).then(res=>console.log(res)).catch(err=>console.error(err));
*/

// Coding Challenge #3
/*
Your tasks:
PART 1
1. Write an async function 'loadNPause' that recreates Challenge #2, this time 
using async/await (only the part where the promise is consumed, reuse the 
'createImage' function from before)
2. Compare the two versions, think about the big differences, and see which one 
you like more
3. Don't forget to test the error handler, and to set the network speed to “Fast 3G”
in the dev tools Network tab
PART 2
1. Create an async function 'loadAll' that receives an array of image paths 
'imgArr'
2. Use .map to loop over the array, to load all the images with the 
'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array �
5. Add the 'parallel' class to all the images (it has some CSS styles)
Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img3.jpg']. To test, turn off the 'loadNPause' function
*/


const wait = function(seconds){
  return new Promise(function(resolve){
setTimeout(resolve,seconds*1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImg = function(imgpath){
  return new Promise(function(resolve,reject){
    const img = document.createElement('img');
    img.src=imgpath;
    img.addEventListener('load',function(){
      imgContainer.append(img);
      resolve(img);
    })

    img.addEventListener('error',function(){
      reject(new Error('Image not found'));
    })
  })
}


let currentImg;
/*
createImg('img/img-1.jpg').then(img=>{
  currentImg=img;
console.log('image 1 loaded');
return wait(2)

}).then(()=>{
currentImg.style.display='none';
return createImg('img/img-2.jpg')
}).then(img=>{
  currentImg=img;
  console.log('Image 2 loaded');
  return wait(2);
}).then(()=>{
  currentImg.style.display='none';
}).catch(err=>console.error(err));
*/
/*
const loadNPause = async function(){
  try{
    //laod image 1
let img = await createImg('img/img-1.jpg');
console.log('Image 1 loaded');
await wait(2);
img.style.display = 'none';

  //laod image 2
 img = await createImg('img/img-2.jpg');
console.log('Image 2 loaded');
await wait(2);
img.style.display = 'none';
  }catch(err){
    console.error(err);
  }
}
loadNPause();
*/
//part 2
/*
const loadAll = async function(imgArr) {
  try{
const imgs = imgArr.map(async img => await createImg(img));
console.log(imgs);  
const imgsEL= await Promise.all(imgs);
console.log(imgsEL);
imgsEL.forEach(img=>img.classList.add('parallel'));
}catch(err){
    console.log(err);
  }
  
}

loadAll(['img/img-1.jpg','img/img-2.jpg','img/img-3.jpg']);
*/