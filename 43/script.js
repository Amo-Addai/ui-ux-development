const container = document.querySelector('.ratings-container')
const ratings = document.querySelectorAll('.rating')
const send = document.querySelector('#send')
const panel = document.querySelector('#panel')

let rating = 'Satisfied'

ratings.forEach(r => {
    r.addEventListener('click', () => {
        removeActive()
        r.classList.add('active')
        rating = r.querySelector('small').innerHTML
        // console.log(rating)
    })
})

/* // todo: fix this other click option
panel.addEventListener('click', e => {
    if (e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        rating = e.target.nextElementSibling.innerHTML
        console.log(rating)
    }
})
*/

send.addEventListener('click', e => {
    // console.log(rating)
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong><br/>
        <strong>Feedback: ${rating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})

function removeActive() {
    for (let i = 0; i < ratings.length; i++)
        ratings[i].classList.remove('active')
}
