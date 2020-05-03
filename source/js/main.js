'use strict';

var navMain = document.querySelector('.page-header__nav');
var navToggle = document.querySelector('.page-header__toggle');
var navContainer = document.querySelector('.page-header__inner');
var logo = document.querySelector('.logo__img');

navMain.classList.add('page-header__nav--closed');
navContainer.style.backgroundColor = 'transparent';
logo.style.fill = '#f9fbfd';

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('page-header__nav--closed')) {
    navMain.classList.remove('page-header__nav--closed');
    navMain.classList.add('page-header__nav--opened');
    navContainer.style.backgroundColor = '#f9fbfd';
    logo.style.fill = '#011c40';
  } else {
    navMain.classList.add('page-header__nav--closed');
    navMain.classList.remove('page-header__nav--opened');
    navContainer.style.backgroundColor = 'transparent';
    logo.style.fill = '#f9fbfd';
  }
});