const range = document.getElementById('range')
// const label = document.getElementById('label')

range.addEventListener('input', e => {
    const value = +e.target.value
    const label = e.target.nextElementSibling
    label.innerHTML = value
    const range_width = +getComputedStyle(e.target).getPropertyValue('width').replace('px', '')
    const label_width = +getComputedStyle(label).getPropertyValue('width').replace('px', '')
    // console.log(range_width, label_width)
    const max = +e.target.max, min = +e.target.min
    const left = value * (range_width / max) - label_width / 2 + 
    scale(value, min, max, 10, -10) // todo: find out scale()'s purpose for left value
    label.style.left = `${left}px`
})

function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}