btns = document.querySelectorAll('.faq-toggle')
btns.forEach((btn, i) => {
    const update = () => {
        btns.forEach((btn, i2) => {
            // console.log(i)
            if (i != i2) btn.parentNode.classList.remove('active')
        })
    }
    btn.addEventListener('click', () => {
        btn.parentNode.classList.toggle('active')
        // console.log(i)
        update()
    })
})