const container = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => container.classList.toggle('big'))

createBoxes()

function createBoxes() {
    let box = null
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            box = document.createElement('div')
            box.classList.add('box')
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            // console.log(box)
            container.appendChild(box)
        }
    } 
}
