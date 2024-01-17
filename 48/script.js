const container = document.querySelector('.container')

const url = 'https://source.unsplash.com/random150x150'
const rows = 10; let img = null

for (let i = 0; i < rows * 3; i++) {
    img = document.createElement('img')
    img.src = `${url}${getRandomSize()}`
    container.appendChild(img)
}

function getRandom() {
    return Math.floor(Math.random() * 10) + 300 // random 0-9 digit + 300
}

function getRandomSize() {
    return `${getRandom()}x${getRandom()}`
}