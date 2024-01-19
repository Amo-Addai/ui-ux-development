const counters = document.querySelectorAll('.counter')

counters.forEach(c => {
    c.innerText = '0'

    const updateCounter = () => {
        const c2 = +c.innerText
        const target = +c.getAttribute('data-target')
        const inc = target / 200
        if (c2 < target) {
            c.innerText = `${Math.ceil(c2 + inc)}`
            setTimeout(updateCounter, 1)
            // todo: pre-calling the function argument being passed to setTimeout, has a different effect
            // setTimeout(updateCounter(), 1)
        } else c.innerText = `${target}`
    }

    updateCounter()
})
