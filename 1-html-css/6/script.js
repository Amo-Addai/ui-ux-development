const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

const checkBoxes = function () {
    let trigger = window.innerHeight / 5 * 4
    // console.log(trigger)

    boxes.forEach(box => {
        const top = box.getBoundingClientRect().top
        if (top < trigger) box.classList.add('show')
        else box.classList.remove('show')
    })
}