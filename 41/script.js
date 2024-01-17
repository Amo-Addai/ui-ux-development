const codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((c, i) => {
    c.addEventListener('keydown', e => {
        if (e.key >= 0 && e.key <= 9) {
            c.value = ''
            setTimeout(() => codes[i+1].focus(), 0)
        } else if (e.key === 'Backspace') {
            setTimeout(() => codes[i-1].focus(), 0)
        }
    })
})
