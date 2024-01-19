const imgs = document.getElementById('imgs')
const left = document.getElementById('left')
const right = document.getElementById('right')

const is = imgs.querySelectorAll('img')
let i = 0
let int = setInterval(run, 200)

left.addEventListener('click', () => {
    i--; changeImg(); resetInterval()
})

right.addEventListener('click', () => {
    i++; changeImg(); resetInterval()
})

function resetInterval() {
    clearInterval(int)
    int = setInterval(run, 2000)
}

function run() {
    i++; changeImg()
}

function changeImg() {
    if (i > imgs.length - 1) i = 0
    else if (i < 0) i = imgs.length - 1
    imgs.style.transform = `translateX(${-i * 500}px)`
}
