const heart = document.querySelector('.heart')
const times = document.querySelector('#times')

let clicks = 0

/* // todo: manual double-click implementation
let clickTime = 0
heart.addEventListener('click', e => {
    if (clickTime === 0) clickTime = new Date().getTime()
    else {
        let newTime = new Date().getTime()
        if ((newTime - clickTime) < 800) {
            // console.log('dblclick')
            createHeart(e); clickTime = 0
        } else clickTime = newTime
    }
    times.innerText = `${++clicks}`
})
*/

// default double-click implementation
heart.addEventListener('dblclick', e => {
    createHeart(e)
    times.innerText = `${++clicks}`
})

function createHeart(e) {
    const i = document.createElement('i')
    for (let p of ['fas', 'fa-heart']) i.classList.add(p)

    const x = e.clientX, y = e.clientY
    const l = e.target.offsetLeft, t = e.target.offsetTop
    const xInside = x - l, yInside = y - t
    console.log(xInside, yInside)

    i.style.top = `${yInside}px`
    i.style.left = `${xInside}px`

    heart.innerHTML = ''
    heart.appendChild(i)
    // setTimeout(() => heart.remove(), 1000)
}
