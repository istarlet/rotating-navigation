const btnOpen = document.getElementById('btn--open')
const btnClose = document.getElementById('btn--close')
const container = document.querySelector('.container')

btnOpen.addEventListener('click', () => container.classList.add('show-nav'))

btnClose.addEventListener('click', () => container.classList.remove('show-nav'))
