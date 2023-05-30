'use strict';
// 1.scrolling
// 2. get Navbar's height

//Make navbar appear when scrolled
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar__dark');
    }else {
        navbar.classList.remove('navbar__dark');
    }
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}


// Handle Scrolling when tapping on the navbar 
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const link = event.target.dataset.link;
    if (link == null) {
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
});

// Navbar toggle button- show menu when small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');

})

// Handle scrolling - contact me btn
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', (event) => {
    scrollIntoView('#contact');
});



// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
console.log(homeHeight);
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY/homeHeight;
});

//Show Topbtn when scrolling down
const topbtn = document.querySelector('.topbtn');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight/2) {
      topbtn.classList.add('visible');
  } else {
      topbtn.classList.remove('visible');
  };
});

 // Topbtn click -> Scroll up to Home
topbtn.addEventListener('click', () => {
  scrollIntoView('#home');
});

// Type Animation for home title
var typed = new Typed ('#element', {
  strings: ["Iseul Park","Full stack developer","Iseul Park","Full stack developer","Iseul Park"],
  loop: false,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500
});