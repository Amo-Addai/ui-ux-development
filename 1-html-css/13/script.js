const tags = document.getElementById('tags')
const input = document.getElementById('textarea')

input.focus()
input.addEventListener('keyup', (e) => {
    createTags(e.target.value)
    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomSelect()
    }
})

function createTags(value) {
    const ts = value.split(',').filter(t => t.trim() !== '').map(t => t.trim())
    tags.innerHTML = ''
    ts.forEach(t => {
        const tg = document.createElement('span')
        tg.classList.add('tag')
        tg.innerText = t
        tags.appendChild(tg)
    })
}

function randomSelect() {
    const pickRandomTag = () => {
        const ts = document.querySelectorAll('.tag')
        return ts[Math.floor(Math.random() * ts.length)]
    }
    const highlightTag = t => {
        t.classList.add('highlight')
    }
    const unhighlightTag = t => {
        t.classList.remove('highlight')
    }

    const times = 30
    const interval = setInterval(() => {
        const randTag = pickRandomTag()
        highlightTag(randTag)
        setTimeout(() => unhighlightTag(randTag), 100)
    }, 100)

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randTag = pickRandomTag()
            highlightTag(randTag)
        }, 100)
    }, times * 100)
}

