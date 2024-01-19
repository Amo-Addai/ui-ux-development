const screens = document.querySelectorAll('.screen')
const btns = document.querySelectorAll('.choose-insect-btn')
const start = document.getElementById('start-btn')
const container = document.getElementById('game-container')
const time = document.getElementById('time')
const score = document.getElementById('score')
const message = document.getElementById('message')

let seconds = 0, gameScore = 0, selected = {}

start.addEventListener('click', () => screens[0].classList.add('up'))
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected = { src, alt }
        screens[1].classList.add('up')
        setTimeout(createInsect, 1000)
        startGame()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : `${m}`
    s = s < 10 ? `0${s}` : `${s}`
    time.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
    const { x, y } = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `
        <img src="${selected?.src}" 
        alt="${selected?.alt}" 
        style="transform: rotate(${Math.random() * 360}deg)"/>
    `
    insect.addEventListener('click', catchInsect)
    container.appendChild(insect)
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

function catchInsect() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 1000)
    addInsects()
}

function increaseScore() {
    gameScore++
    if (gameScore % 20 == 0) message.classList.add('visible')
    else message.classList.remove('visible')
    score.innerHTML = `Score: ${gameScore}`
}

function addInsects() { // todo: generically increase array of timeouts
    for (let x of [500, 100]) setTimeout(createInsect, x)
}