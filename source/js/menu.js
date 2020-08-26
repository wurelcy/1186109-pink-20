var navMain = document.querySelector('.main-nav');
var header = document.querySelector('.page-header__upper-panel-wrapper');
var navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navMain.classList.remove('page-header__upper-panel-wrapper--closed');
    navMain.classList.add('page-header__upper-panel-wrapper--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('page-header__upper-panel-wrapper--closed');
    navMain.classList.remove('page-header__upper-panel-wrapper--opened');
  }
});