const text = document.getElementById('text')
const speed = document.getElementById('speed')
const txt = 'We love coding.'
let i = 1, sp = 300 / speed.value

speed.addEventListener('input', e => sp = 300 / e.target.value)

writeText()

function writeText() {
    text.innerText = txt.slice(0, i)
    i++
    if (i > txt.length) i = 1
    setTimeout(writeText, sp)
}
