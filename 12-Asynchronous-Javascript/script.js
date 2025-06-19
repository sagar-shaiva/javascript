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
console.log(request);

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
 