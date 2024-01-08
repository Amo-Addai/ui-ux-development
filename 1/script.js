const panels = document.querySelectorAll('.panel')
// console.log(panels)

panels.forEach(p => {
    p.addEventListener('click', () => {
        removeActiveClasses()
        p.classList.add('active')
    })
}) 

function removeActiveClasses() {
    panels.forEach(p => {
        p.classList.remove('active')
    })
}

