const contents = document.querySelectorAll('.content')
const tabs = document.querySelectorAll('nav ul li')

tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        hideAllContents(); hideAllItems()
        tab.classList.add('active')
        contents[i].classList.add('show')
    })
})

function hideAllContents() {
    contents.forEach(c => c.classList.remove('show'))
}

function hideAllItems() {
    tabs.forEach(t => t.classList.remove('active'))
}
