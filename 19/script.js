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

// setTime()
setInterval(setTime, 1000) // call it every 1s (1000ms) to keep ticking in real-time

function setTime() {
    const t = new Date()
    // console.log(time)
    const month = t.getMonth(),
    day = t.getDay(),
    dte = t.getDate(),
    hours = t.getHours(),
    minutes = t.getMinutes(),
    seconds = t.getSeconds()
    const hoursForClock = hours % 12,
    ampm = hours >= 12 ? 'PM' : 'AM'

    hour.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    minute.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    second.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

    time.innerHTML = `${hours}:${minutes >= 10 ? minutes : `0${minutes}`}`
    // todo: hoursForClock can be used for 12-hour clock, using ampm as a suffix
    date.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${dte}</span>`
}

function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
