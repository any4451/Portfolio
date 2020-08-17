const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const hero = document.querySelector('.hero');

burger.addEventListener('click', function() {
    if (!menu.classList.contains('menu--active')) {
      menu.classList.add('menu--active');
      burger.classList.add('burger--active');
      body.classList.add('overflow');
      hero.classList.add('hero--active');
    } else {
      menu.classList.remove('menu--active');
      burger.classList.remove('burger--active');
      body.classList.remove('overflow');
      hero.classList.remove('hero--active');
    }
  });