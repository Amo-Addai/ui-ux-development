const toggles = document.querySelectorAll('.toggle')
const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')

toggles.forEach(t => t.addEventListener('change', e => check(e.target)))

function check(t) {
    for (let i of [good, cheap, fast])
        if (!i.checked) return
    switch (t) {
        case good: fast.checked = false; break
        case cheap: good.checked = false; break
        case fast: cheap.checked = false; break
        // todo: optimize permutations (eg. cheap.checked should also uncheck fast ?)
    }
}
