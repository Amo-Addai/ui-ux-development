const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

function changeSlide (dir) {
    const sliderHeight = sliderContainer.clientHeight
    switch (dir) {
        case 'up':
            if (activeSlideIndex >= slidesLength - 1) activeSlideIndex = 0
            else activeSlideIndex++
        break
        case 'down':
            if (activeSlideIndex <= 0) activeSlideIndex = slidesLength - 1
            else activeSlideIndex--
        break
    }
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}
