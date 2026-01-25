'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////

//button scroll
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click',function(e){

//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);
//   console.log(e.target.getBoundingClientRect());

//   console.log('Current scroll (x/y)',window.pageXOffset,window.pageYOffset);

//   console.log('Height/Width viewport',document.documentElement.clientHeight,document.documentElement.clientWidth);

//   // window.scrollTo(
//   //   s1coords.left+window.pageXOffset,
//   //   s1coords.top+window.pageYOffset
//   // )

//   section1.scrollIntoView({behavior:"smooth"});
// })

////////////////////////////////////////////
//Page navigation

// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click',function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);

//     document.querySelector(id).scrollIntoView({behavior:"smooth"});
//   })
// })

//Event delegation

//1.Add event listerner to common parent element
//2. determine what element originated the event


document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault();
  
  //matching strategy
  if(e.target.classList.contains('nav__link')){
     const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior:"smooth"});
  }
})

// Tabbed Comnponent

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click',function(e){
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  //Gaurd clause

  if(!clicked) return;

//remove active classes
  tabs.forEach(t=> t.classList.remove('operations__tab--active'));
tabsContent.forEach(c=>c.classList.remove('operations__content--active'));

//active tab
  clicked.classList.add('operations__tab--active');


  //Active content area

  // console.log(clicked.dataset.tab);

  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');


})
////////////////////////////////////

//Menu fade animation

const handleHover = function(e){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el!== link) el.style.opacity = this;
    });

    logo.style.opacity= this;
  }
}

//Passing "argument" into handler
nav.addEventListener('mouseover',handleHover.bind(0.5));
nav.addEventListener('mouseout',handleHover.bind(1));


// Sticky navigation

// const section1 = document.querySelector('#section--1');

// const initialCords = section1.getBoundingClientRect();
// window.addEventListener('scroll',function(e){
//   console.log(window.scrollY);
//   if(window.scrollY >  initialCords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// })

// Sticky navigation : Intersection Observer API
// const section1 = document.querySelector('#section--1');

// const obsCallback = function(entries,observer){
//   entries.forEach(entry =>{
//     console.log(entry);
//   })
// }

// const obsOptions = {
//   root:null,
//   threshold:[0,0.2],
// }

// const observer = new IntersectionObserver(obsCallback,obsOptions);
// observer.observe(section1)

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav= function(entries){
  const [entry] = entries;

  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav,{root:null,threshold:0,rootMargin:`-${navHeight}px`,})

headerObserver.observe(header);


// Revealing sections

const allSections = document.querySelectorAll('.section');

const revealSection = function(entries,observer){
  entries.forEach(entry=>{

  if(!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
  })

};

const sectionObserver = new IntersectionObserver(revealSection,{root:null,threshold:0.15});

allSections.forEach(function(section){
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
})

///////////////////////////////////////////////////
//lazy loading img
const imgTargets = document.querySelectorAll('img[data-src]');
const loadImg = function(entries,observer){
  const [entry] = entries;
  if(!entry.isIntersecting) return;

  //replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load',function(){
  entry.target.classList.remove('lazy-img');
  })
  observer.unobserve(entry.target);

}

const imgObserver = new IntersectionObserver(loadImg,{rroot:null,threshold:0,rootMargin:'+200px'});

imgTargets.forEach(img=> imgObserver.observe(img));

// Slider
//////////////////////////////////////
// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      // BUG in v2: This way, we're not keeping track of the current slide when clicking on a slide
      // const { slide } = e.target.dataset;

      curSlide = Number(e.target.dataset.slide);
      goToSlide(curSlide);
      activateDot(curSlide);
    }
  });
};
slider();
/*
//Selecting elements

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);


document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements

const message = document.createElement('div');

message.classList.add('cookie-message');

// message.textContent = 'We use cookied for improved functionality and analytics.';

message.innerHTML = 'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//header.prepend(message);

header.append(message);
// Headers.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

//Delete elements

document.querySelector('.btn--close-cookie').addEventListener('click',function(){

  message.remove();
  // message.parentElement.removeChild(message);


});



//styles 

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height)+30+'px';

document.documentElement.style.setProperty('--color-primary','orangered');

//Attributes

const logo   = document.querySelector('.nav__logo');

console.log(logo.alt);
console.log(logo.src);

logo.alt = "sagar logo";

//non - standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute("company",'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
// const link = document.querySelector('.nav__link_btn');
console.log(link.href);
console.log(link.getAttribute('href'));


//Data attributes

console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add('C','b');
logo.classList.remove('C','b');
logo.classList.toggle('C');
logo.classList.contains('C'); //not includes

//dont use

// logo.className = 'sagar';
*/

/*

const h1 = document.querySelector('h1');

const alertH1 = function(e){
  alert("addEventListener: Great! you are reading the heading :)");
}

// h1.addEventListener('mouseenter',function(e){
//   alert("addEventListener: Great! you are reading the heading :)")
// })

// h1.onmouseenter = function(e){
//   alert("onmouseenter: Great! you are reading the heading :)")

// }

h1.addEventListener('mouseenter',alertH1);
setTimeout(() => h1.removeEventListener('mouseenter',alertH1),3000);

*/

//event propagaton in practice
/*
//rgb(255,255,255)
const randomInt = (min,max)=> Math.floor(Math.random() * (max-min)+1+min);
const randomColor = ()=> `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

document.querySelector('.nav__link').addEventListener('click',function(e){
  this.style.backgroundColor = randomColor();
  console.log('Link',e.target,e.currentTarget);
  console.log(e.currentTarget===this);

  //stop propagation

  // e.stopPropagation();
})
document.querySelector('.nav__links').addEventListener('click',function(e){
  this.style.backgroundColor = randomColor();
  console.log('Container',e.target,e.currentTarget);

})
document.querySelector('.nav').addEventListener('click',function(e){
  this.style.backgroundColor = randomColor();
  console.log('Nav',e.target,e.currentTarget);

})

*/

// DOM Traversing
/*
const h1 = document.querySelector('h1');

//going downwards: child 


console.log(h1.querySelectorAll('.highlight'))
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'black';

//going upwards

console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';


//Going sideways: siblings

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function(el){
  if(el !== h1) el.style.transform = 'scale(0.5)';
});
*/

document.addEventListener('DOMContentLoaded',function(e){
  console.log("HTML parsed and DOM tree built!",e);   
})

window.addEventListener('load',function(e){
  console.log("Page fully loaded",e);
})
// window.addEventListener('beforeunload',function(e){
//   e.preventDefault();
//   console.log(e);
// })
