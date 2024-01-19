const largeCup = document.querySelector('.cup-large')
const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((c, i) => c.addEventListener('click', () => highlightCups(i)))

function highlightCups(i) {
    if(smallCups[i].classList.contains('full') && 
        !smallCups[i].nextElementSibling.classList.contains('full'))
        i--
    
    smallCups.forEach((c, i2) => {
        if(i2 <= i) c.classList.add('full')
        else c.classList.remove('full')
    })
    updateBigCup()
}

function updateBigCup() {
    const largeCupHeight = +window.getComputedStyle(largeCup).getPropertyValue("height").replace('px', '')
    // console.log(largeCupHeight)
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * largeCupHeight}px`
        percentage.innerText = `${Math.floor(fullCups / totalCups * 100)}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}
