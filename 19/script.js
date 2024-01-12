const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const time = document.querySelector('.time')
const date = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ['Sunday', /* to */ 'Saturday']
const months = ['Jan', /* to */ 'Dec']

toggle.addEventListener('click', e => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light Mode'
    }
})

function setTime() {
    const time = new Date()
    // console.log(time)
    const month = time.getMonth(),
    day = time.getDay(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds()
    const hoursForClock = hours % 12

    hour.style.transform = `
    transform: translate(-50%, -100%) rotate(${scale(
        hoursForClock, 0, 11, 0, 360
    )}deg)
    `
}

function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
