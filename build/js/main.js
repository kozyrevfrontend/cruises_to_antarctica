'use strict';
var navMain = document.querySelector('.page-header__nav');
var navToggle = document.querySelector('.page-header__toggle');
var navWrapper = document.querySelector('.page-header__inner');
var logoImage = document.querySelector('.logo__img').querySelectorAll('path');

navMain.classList.add('page-header__nav--closed');
navWrapper.style.backgroundColor = 'transparent';

for (var i = 0; i < logoImage.length; i++) {
  var path = logoImage[i];
  path.style.fill = '#f9fbfd';
}

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('page-header__nav--closed')) {
    navMain.classList.remove('page-header__nav--closed');
    navMain.classList.add('page-header__nav--opened');
    navWrapper.style.backgroundColor = '#f9fbfd';

    for (var j = 0; j < logoImage.length; j++) {
      path = logoImage[j];
      path.style.fill = '#011c40';
    }
  } else {
    navMain.classList.add('page-header__nav--closed');
    navMain.classList.remove('page-header__nav--opened');
    navWrapper.style.backgroundColor = 'transparent';
    for (var k = 0; k < logoImage.length; k++) {
      path = logoImage[k];
      path.style.fill = '#f9fbfd';
    }
  }
});
