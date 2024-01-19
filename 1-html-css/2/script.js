const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 0

next.addEventListener('click', () => {
    if (currentActive < circles.length - 1) currentActive++
    console.log(currentActive)
    update()
})

prev.addEventListener('click', () => {
    if (currentActive > 0) currentActive--
    console.log(currentActive)
    update()
})

function update() {
    circles.forEach((c, i) => {
        if (i <= currentActive) c.classList.add('active')
        else c.classList.remove('active')
    })
    const actives = document.querySelectorAll('.active')
    
    // console.log(actives.length, circles.length)
    // now, find % of actives of circles lengths, for the progress bar
    progress.style.width = (((actives.length - 1) / (circles.length - 1)) * 100) 
    + '%'

    if (currentActive == circles.length - 1) next.disabled = true
    else if (currentActive == 0) prev.disabled = true
    else {
        next.disabled = false
        prev.disabled = false
    }
}
