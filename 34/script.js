const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const final = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

replay.addEventListener('click', () => {
    resetDOM()
    runAnimation()
})

function resetDOM() {
    counter.classList.remove('hide')
    final.classList.remove('show')
    nums.forEach(n => n.classList.value = '')
    nums[0].classList.add('in')
}

function runAnimation() {
    const last = nums.length - 1
    nums.forEach((n, i) => {
        n.addEventListener('animationend', e => {
            if (e.animationName === 'goIn' && i !== last) {
                n.classList.remove('in'); n.classList.add('out')
            } else if (e.animationName === 'goOut' && n.nextElementSibling) {
                n.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')
                final.classList.add('show')
            }
        })
    })
}
