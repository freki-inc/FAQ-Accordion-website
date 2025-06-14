const accordionItem1 = document.getElementById('accordion-item-1');
const accordionItem2 = document.getElementById('accordion-item-2');
const accordionItem3 = document.getElementById('accordion-item-3');
const accordionItem4 = document.getElementById('accordion-item-4');

const plus1 = document.getElementById('plus-1');
const plus2 = document.getElementById('plus-2');
const plus3 = document.getElementById('plus-3');
const plus4 = document.getElementById('plus-4');

const minus1 = document.getElementById('minus-1');
const minus2 = document.getElementById('minus-2');
const minus3 = document.getElementById('minus-3');
const minus4 = document.getElementById('minus-4');

const accordionBody1 = document.getElementById('accordion-body-1');
const accordionBody2 = document.getElementById('accordion-body-2');
const accordionBody3 = document.getElementById('accordion-body-3');
const accordionBody4 = document.getElementById('accordion-body-4');


accordionItem1.addEventListener('click', () => {
    if (accordionBody1.style.display === 'none') {
    accordionBody1.style.display = 'block';
    plus1.style.display = 'none';
    minus1.style.display = 'block';
  } else {
    accordionBody1.style.display = 'none';
    plus1.style.display = 'block';
    minus1.style.display = 'none';
  }
})

accordionItem2.addEventListener('click', () => {
    if (accordionBody2.style.display === 'none') {
    accordionBody2.style.display = 'block';
    plus2.style.display = 'none';
    minus2.style.display = 'block';
  } else {
    accordionBody2.style.display = 'none';
    plus2.style.display = 'block';
    minus2.style.display = 'none';
  }
})

accordionItem3.addEventListener('click', () => {
    if (accordionBody3.style.display === 'none') {
    accordionBody3.style.display = 'block';
    plus3.style.display = 'none';
    minus3.style.display = 'block';
  } else {
    accordionBody3.style.display = 'none';
    plus3.style.display = 'block';
    minus3.style.display = 'none';
  }
})

accordionItem4.addEventListener('click', () => {
    if (accordionBody4.style.display === 'none') {
    accordionBody4.style.display = 'block';
    plus4.style.display = 'none';
    minus4.style.display = 'block';
  } else {
    accordionBody4.style.display = 'none';
    plus4.style.display = 'block';
    minus4.style.display = 'none';
  }
})