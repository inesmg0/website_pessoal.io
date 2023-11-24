
var work_container= document.querySelector('.cont-work');
var work_hover = document.querySelector('.work_hover');

work_container.addEventListener('mouseenter', function() {
  work_hover.classList.remove('work_hover');
})
work_container.addEventListener('mouseleave', function() {
  work_hover.classList.add('work_hover')
})

var contacts_cont = document.querySelector(".contacts-cont");
var contacts = document.querySelector(".contacts2");
var contact_hover = document.querySelector(".contacts");

contacts_cont.addEventListener('mouseenter', function() {
  contacts.classList.add('contacts');
  contact_hover.classList.remove('contacts');
})

contacts_cont.addEventListener('mouseleave', function() {
  contacts.classList.remove('contacts');
  contact_hover.classList.add('contacts');
  
})


//carrosel
let carrossel = document.querySelector(".carrossel");
let carrossel2 = document.querySelector(".carrossel2");
let carrossel3 = document.querySelector(".carrossel3");
let carrossel4 = document.querySelector(".carrossel4");

//carrossel
setInterval(function () {
  let current = carrossel.querySelector(".show");
  current.classList.remove("show");
  let next = current.nextElementSibling;

  if (next === null) {
    next = carrossel.querySelector(".carrossel img:first-of-type");
  }

  next.classList.add("show");
}, 1250);

//carrosel2
setInterval(function () {
  let current2 = carrossel2.querySelector(".show");
  current2.classList.remove("show");
  let next2 = current2.nextElementSibling;

  if (next2 === null) {
    next2 = carrossel2.querySelector(".carrossel2 img:first-of-type");
  }

  next2.classList.add("show");
}, 1250);


//carrosel3
setInterval(function () {
  let current3 = carrossel3.querySelector(".show");
  current3.classList.remove("show");
  let next3 = current3.nextElementSibling;

  if (next3 === null) {
    next3 = carrossel3.querySelector(".carrossel3 img:first-of-type");
  }

  next3.classList.add("show");
}, 1000);


//carrosel3
setInterval(function () {
  let current4 = carrossel4.querySelector(".show");
  current4.classList.remove("show");
  let next4 = current4.nextElementSibling;

  if (next4 === null) {
    next4 = carrossel4.querySelector(".carrossel4 img:first-of-type");
  }

  next4.classList.add("show");
}, 1200);











