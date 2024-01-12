const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', _ => {
    if (activeSlide == slides.length - 1) activeSlide = 0
    else activeSlide++
    setBackgroundToBody()
    setActiveSlide() 
})

leftBtn.addEventListener('click', _ => {
    if (activeSlide == 0) activeSlide = slides.length - 1
    else activeSlide--
    setBackgroundToBody()
    setActiveSlide() 
})

setBackgroundToBody()

function setBackgroundToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach(s => s.classList.remove('active'))
    slides[activeSlide].classList.add('active')
}