const container = document.getElementById('container')

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const squares = 500

for (let i = 0; i < squares; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(elem) {
    const color = getRandomColor()
    elem.style.backgroundColor = color
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(elem) {
    const color = '#1d1d1d'
    const boxShadow = '#000'
    elem.style.backgroundColor = color
    elem.style.boxShadow = `0 0 2px ${boxShadow}, 0 0 10px ${boxShadow}`

}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
