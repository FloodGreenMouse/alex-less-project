//Переменные для меню
const nav = document.querySelector('.main-nav')
const toggle = document.querySelector('.main-nav__toggle')


//Вызов меню в мобильной версии
nav.classList.remove('main-nav--nojs')

toggle.addEventListener('click', function (e) {
  e.preventDefault()

  if (nav.classList.contains('main-nav--closed')) {
    nav.classList.remove('main-nav--closed')
    nav.classList.add('main-nav--opened')
  } else {
    nav.classList.remove('main-nav--opened')
    nav.classList.add('main-nav--closed')
  }
})

