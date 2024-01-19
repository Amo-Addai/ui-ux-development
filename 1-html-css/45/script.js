const open = document.querySelector('.open-btn')
const close = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

open.addEventListener('click', () => nav.forEach(n => n.classList.add('visible')))
close.addEventListener('click', () => nav.forEach(n => n.classList.remove('visible')))
