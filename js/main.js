// $(document).ready(function() {
//    $('.header__burger').click(function(event) {
//       $('.header__burger,.header__navigation').toggleClass('active');
//    });
// });

const burger = document.querySelector('.header__burger'),
   menu = document.querySelector('.header__navigation'),
   upperHeader = document.querySelector('.header__upper-header'),
   body = document.querySelector('body'),
   searchForm = document.querySelector('.search-form__form'),
   searchBtn = document.querySelectorAll('.search-form'),
   footerTitle = document.querySelector('.footer__title');

burger.addEventListener('click', () => {
   menu.classList.toggle('menu--visible'),
      burger.classList.toggle('burger--visible'),
      upperHeader.classList.toggle('upperHeader--visible'),
      body.classList.toggle('lock');
});

document.querySelectorAll('.search-form').forEach(
   item => item.addEventListener('click', () => {
      searchForm.classList.toggle('search-form-active');
   })
 );


